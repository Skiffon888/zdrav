import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = resolve(root, 'data/generated-content.json');
const apiKey = process.env.DEEPSEEK_API_KEY;
const model = process.env.DEEPSEEK_MODEL || 'deepseek-flash';
const region = 'Луганская Народная Республика, Российская Федерация';
const now = new Date();
const today = new Intl.DateTimeFormat('ru-RU', {
  timeZone: 'Europe/Moscow', year: 'numeric', month: '2-digit', day: '2-digit'
}).format(now);

if (!apiKey) throw new Error('DEEPSEEK_API_KEY is required');

const sources = [
  {
    id: 'minzdrav-lnr-posts',
    name: 'Минздрав ЛНР: последние публикации',
    url: 'https://minzdrav.lpr-reg.ru/wp-json/wp/v2/posts?per_page=12&_fields=date,link,title,excerpt'
  },
  {
    id: 'minzdrav-lnr-organizations',
    name: 'Минздрав ЛНР: медицинские организации',
    url: 'https://minzdrav.lpr-reg.ru/subordinated-organizations-details/'
  },
  {
    id: 'sfr-families',
    name: 'СФР: информация для семей с детьми',
    url: 'https://sfr.gov.ru/grazhdanam/semyam_s_detmi/'
  },
  {
    id: 'sfr-lugansk',
    name: 'Отделение СФР по ЛНР',
    url: 'https://sfr.gov.ru/branches/lugansk/'
  },
  {
    id: 'mintrud-families',
    name: 'Минтруд России: семьям с детьми',
    url: 'https://mintrud.gov.ru/vozmozhnosti/semyam-s-detmi'
  },
  {
    id: 'takzdorovo-parents',
    name: 'Так здорово (Минздрав России): материалы для родителей',
    url: 'https://www.takzdorovo.ru/roditelyam/'
  },
  {
    id: 'takzdorovo-prevention',
    name: 'Так здорово (Минздрав России): диспансеризация (на странице могут быть сведения за 2025 год)',
    url: 'https://www.takzdorovo.ru/profilaktika/dispanserizatsiya/'
  }
];

function plainText(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function collectSource(source) {
  const response = await fetch(source.url, { headers: { 'User-Agent': 'ZdravySmyslContentBot/1.0' } });
  if (!response.ok) throw new Error(`${source.id}: HTTP ${response.status}`);
  const body = (await response.text()).replace(/\\\//g, '/');
  return { ...source, content: plainText(body).slice(0, 18000) };
}

const collected = (await Promise.allSettled(sources.map(collectSource)))
  .filter(result => result.status === 'fulfilled')
  .map(result => result.value);

if (collected.length < 2) throw new Error('Not enough official sources are available');

const sourcePacket = collected.map(({ id, name, url, content }) =>
  `SOURCE ${id}\nNAME: ${name}\nURL: ${url}\nCONTENT: ${content}`
).join('\n\n');

const systemPrompt = `Ты редакционный агент информационно-навигационной платформы для жителей ЛНР.
Сегодня ${today} по московскому времени. Территориальный контекст: ${region}.
Работай исключительно с переданными выдержками из официальных открытых источников. Не используй память модели для фактов, сумм, адресов, сроков или условий. Сайты Минздрава России, СФР, Минтруда и «Так здорово» описывают общероссийские правила и материалы, а не наличие конкретных услуг в ЛНР. Не заявляй о доступности в ЛНР, адресах, стоимости, записи, сроках и условиях без прямого подтверждения источником именно для ЛНР. Страница «Так здорово» о диспансеризации может содержать сведения за 2025 год: не представляй старые сроки, возрастные условия или суммы как актуальные на ${today}. Не ставь диагнозы и не давай медицинских назначений. Не используй агитацию или давление по вопросам семьи и репродуктивного выбора. Если данных недостаточно, не публикуй утверждение.
Верни только JSON. Каждый материал обязан ссылаться на URL источника, из которого следует его содержание. Не приписывай ссылке утверждений, которых в ней нет. Пиши понятным русским языком. Не используй Markdown или HTML.`;

const userPrompt = `Подготовь актуальное наполнение для платформы по пяти темам: planning (планирование семьи и здоровье), pregnancy (беременность), parenting (семьи с детьми), support (психологическая и социальная поддержка), adoption (приёмная семья).

JSON-схема:
{
  "schemaVersion": 1,
  "effectiveDate": "ДД.ММ.ГГГГ",
  "region": "точное название региона из системной инструкции",
  "announcement": {"title":"до 80 знаков","body":"до 300 знаков","sourceUrl":"URL"},
  "themes": [{"id":"одно из пяти значений","summary":"до 260 знаков","action":"до 140 знаков","sourceUrl":"URL"}],
  "materials": [{"title":"до 90 знаков","summary":"до 240 знаков","category":"health|benefits|wellbeing|family","sourceUrl":"URL"}]
}
Верни ровно 5 themes, по одному на каждый id, и от 3 до 6 materials. Анонс выбирай только если источник содержит актуальную по дате публикацию или устойчивую услугу.

${sourcePacket}`;

const response = await fetch('https://api.deepseek.com/chat/completions', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model,
    messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
    response_format: { type: 'json_object' },
    thinking: { type: 'disabled' },
    temperature: 0.1,
    max_tokens: 2500,
    stream: false
  })
});

if (!response.ok) throw new Error(`DeepSeek API: HTTP ${response.status} ${await response.text()}`);
const completion = await response.json();
const content = completion.choices?.[0]?.message?.content;
if (!content) throw new Error('DeepSeek returned no content');

const generated = JSON.parse(content);
const allowedThemeIds = new Set(['planning', 'pregnancy', 'parenting', 'support', 'adoption']);
const allowedCategories = new Set(['health', 'benefits', 'wellbeing', 'family']);
const allowedUrls = new Set(collected.map(source => source.url));
for (const source of collected) {
  // Links in the ministry news feed can cite individual articles; HTML pages
  // can contain unrelated navigation links, so only their own URL is citable.
  if (source.id !== 'minzdrav-lnr-posts') continue;
  for (const match of source.content.matchAll(/https:\/\/[^\s"'<>]+/g)) {
    try {
      const url = new URL(match[0].replace(/[),.;]+$/, ''));
      if (url.hostname === 'minzdrav.lpr-reg.ru') allowedUrls.add(url.href);
    } catch {}
  }
}
const isText = (value, max) => typeof value === 'string' && value.trim().length > 0 && value.length <= max;
const hasAllowedUrl = value => typeof value === 'string' && allowedUrls.has(value);

if (generated.schemaVersion !== 1 || generated.region !== region || generated.effectiveDate !== today) throw new Error('Invalid metadata');
if (!generated.announcement || !isText(generated.announcement.title, 80) || !isText(generated.announcement.body, 300) || !hasAllowedUrl(generated.announcement.sourceUrl)) throw new Error('Invalid announcement');
if (!Array.isArray(generated.themes) || generated.themes.length !== 5 || new Set(generated.themes.map(item => item.id)).size !== 5) throw new Error('Invalid themes');
for (const item of generated.themes) {
  if (!allowedThemeIds.has(item.id) || !isText(item.summary, 260) || !isText(item.action, 140) || !hasAllowedUrl(item.sourceUrl)) throw new Error(`Invalid theme: ${item.id}`);
}
if (!Array.isArray(generated.materials) || generated.materials.length < 3 || generated.materials.length > 6) throw new Error('Invalid materials');
for (const item of generated.materials) {
  if (!isText(item.title, 90) || !isText(item.summary, 240) || !allowedCategories.has(item.category) || !hasAllowedUrl(item.sourceUrl)) throw new Error('Invalid material');
}

const result = { ...generated, generatedAt: now.toISOString() };
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
JSON.parse(await readFile(outputPath, 'utf8'));
console.log(`Generated ${result.materials.length} materials for ${result.effectiveDate}`);
