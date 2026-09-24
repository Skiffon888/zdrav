const routes = {
  planning: {
    title: 'Планирую семью',
    description: 'Начните с разговора о здоровье и доступных возможностях. Решение о родительстве всегда остаётся за вами.',
    filter: 'health',
    steps: [
      ['Обсудите вопросы', 'Запишите, что важно вам и партнёру: здоровье, сроки, обследования и поддержка.'],
      ['Обратитесь к врачу', 'Начните с поликлиники по месту прикрепления; узнайте о профилактическом осмотре и обследованиях.'],
      ['Уточните возможности', 'Спросите о маршруте к профильному специалисту и проверьте доступные меры поддержки.']
    ]
  },
  pregnancy: {
    title: 'Жду ребёнка',
    description: 'Необязательно держать в голове всё сразу: медицинские вопросы и оформление поддержки можно решать по шагам.',
    filter: 'health',
    steps: [
      ['Свяжитесь с консультацией', 'Уточните, где можно встать на учёт и как записаться по месту проживания или прикрепления.'],
      ['Составьте список вопросов', 'Обсудите наблюдение, обследования, самочувствие и подготовку к родам с врачом.'],
      ['Проверьте выплаты', 'Посмотрите действующие условия пособий на Госуслугах или в Социальном фонде.']
    ]
  },
  parenting: {
    title: 'Растим детей',
    description: 'Помощь может касаться не только ребёнка, но и вашего времени, самочувствия и работы.',
    filter: 'benefits',
    steps: [
      ['Проверьте свои права', 'Уточните федеральные и местные меры для вашей семьи в официальных источниках.'],
      ['Найдите контакт', 'По медицинским вопросам начните с детской поликлиники; по выплатам — с СФР или Госуслуг.'],
      ['Попросите поддержки', 'Разделите заботы с близкими и спросите о доступных сообществах и консультациях.']
    ]
  },
  support: {
    title: 'Ищу поддержку',
    description: 'Тревога, усталость и неопределённость — достаточный повод обратиться за помощью. Не нужно справляться в одиночку.',
    filter: 'wellbeing',
    steps: [
      ['Назовите свой запрос', 'Можно начать с простого: «мне тяжело», «хочу поговорить», «не знаю, куда обратиться».'],
      ['Выберите формат', 'Поговорите с близким человеком, врачом или психологом — так, как вам комфортно.'],
      ['Уточните контакты', 'Узнайте о действующих службах поддержки по месту жительства до обращения.']
    ]
  },
  adoption: {
    title: 'Хочу принять ребёнка в семью',
    description: 'Начните с официальной консультации: требования и порядок оформления зависят от выбранной формы устройства ребёнка.',
    filter: 'family',
    steps: [
      ['Уточните форму устройства', 'Опека, приёмная семья и усыновление имеют разные требования и порядок оформления.'],
      ['Обратитесь за консультацией', 'Найдите орган опеки и попечительства по месту жительства и уточните актуальный перечень документов.'],
      ['Проверьте информацию', 'Используйте официальные источники и не передавайте персональные данные непроверенным посредникам.']
    ]
  }
};

const topics = [
  { id:'checkup', category:'health', label:'Здоровье', title:'Обследование перед планированием', description:'Как начать разговор о репродуктивном здоровье и узнать, какие обследования доступны.', status:'Уточнить на месте', icon:'✳', steps:['Обратитесь в поликлинику по месту прикрепления.','Спросите о профилактическом осмотре и диспансеризации для оценки репродуктивного здоровья.','Уточните порядок записи, перечень обследований и необходимость направления.'], source:'В материалах проекта упоминается репродуктивная диспансеризация по ОМС. Конкретные адреса и порядок записи в ЛНР требуют проверки.', url:'https://www.gosuslugi.ru/' },
  { id:'consultation', category:'health', label:'Здоровье', title:'Женская консультация', description:'Куда начать обращаться по вопросам женского здоровья, планирования и наблюдения беременности.', status:'Уточнить на месте', icon:'◒', steps:['Свяжитесь с поликлиникой или женской консультацией по месту проживания или прикрепления.','Уточните график приёма, запись и необходимые документы.','Если нужного специалиста нет, спросите о направлении и доступном маршруте в другое учреждение.'], source:'Интервью жителей ЛНР показывают, что доступность специалистов различается по населённым пунктам. Адреса и контакты в исходных материалах не верифицированы.', url:'https://www.gosuslugi.ru/' },
  { id:'pregnancy', category:'health', label:'Здоровье', title:'Наблюдение беременности', description:'Первые шаги после подтверждения беременности и вопросы, которые стоит обсудить с врачом.', status:'Уточнить на месте', icon:'♡', steps:['Уточните в женской консультации, как встать на учёт.','Спросите о плане наблюдения, анализах и маршруте при необходимости дополнительной помощи.','Запишите вопросы о самочувствии, родах и доступной поддержке.'], source:'Маршрут составлен как общий ориентир на основе интервью. Порядок оказания помощи и запись нужно уточнять в медицинской организации.', url:'https://www.gosuslugi.ru/' },
  { id:'fertility', category:'health', label:'Здоровье', title:'Если есть трудности с зачатием', description:'С чего начать обследование пары и как получить направление к профильному специалисту.', status:'Уточнить на месте', icon:'⌁', steps:['Обсудите ситуацию с врачом по месту прикрепления; обследование может касаться обоих партнёров.','Уточните доступность консультации профильного специалиста и порядок направления.','Отдельно спросите о действующих условиях обследования и вспомогательных репродуктивных технологий по ОМС.'], source:'В интервью отмечен запрос на понятный маршрут по вопросам бесплодия и ЭКО. Наличие услуги и маршрутизация в ЛНР здесь не подтверждены.', url:'https://www.gosuslugi.ru/' },
  { id:'benefits', category:'benefits', label:'Выплаты и льготы', title:'Пособия для семей с детьми', description:'Где проверить право на федеральные пособия и узнать актуальные условия подачи заявления.', status:'Официальный источник', icon:'₽', steps:['Откройте раздел о семьях с детьми на Госуслугах или сайте СФР.','Проверьте условия конкретной выплаты с учётом состава семьи и места проживания.','Уточните необходимые документы и способ подачи заявления.'], source:'Официальные условия и суммы публикуются Социальным фондом России и на Госуслугах. Прототип не рассчитывает выплаты.', url:'https://sfr.gov.ru/grazhdanam/semyam_s_detmi/' },
  { id:'maternity', category:'benefits', label:'Выплаты и льготы', title:'Материнский капитал', description:'Ориентир по федеральной программе и способам проверки права на сертификат.', status:'Официальный источник', icon:'✦', steps:['Проверьте условия получения и использования материнского капитала на сайте СФР.','Уточните, сформирован ли сертификат и какие направления использования доступны вам.','Перед подачей заявления проверьте актуальные требования к документам.'], source:'Федеральная мера поддержки. Право, размер и порядок оформления определяются действующими правилами и проверяются через СФР.', url:'https://sfr.gov.ru/grazhdanam/msk/' },
  { id:'work', category:'family', label:'Для семьи', title:'Работа и родительство', description:'Какие вопросы можно обсудить с работодателем до и после рождения ребёнка.', status:'Уточнить условия', icon:'☼', steps:['Уточните в отделе кадров ваши права на отпуск и действующие выплаты.','Спросите о гибком графике, дистанционной работе или других внутренних программах поддержки.','Проверяйте условия конкретной организации: корпоративные меры не универсальны.'], source:'Кабинетное исследование проекта описывает практики работодателей в других регионах. Наличие таких программ у вашего работодателя не предполагается.', url:'https://www.gosuslugi.ru/' },
  { id:'psychology', category:'wellbeing', label:'Поддержка и общение', title:'Когда тревожно или трудно', description:'Как искать поддержку без необходимости объяснять себе или другим, почему вам тяжело.', status:'Уточнить на месте', icon:'♡', steps:['Если вам комфортно, расскажите близкому человеку или своему врачу о том, что происходит.','Уточните, какие консультации доступны в поликлинике или местных социальных службах.','Если есть непосредственная угроза жизни или здоровью, обратитесь за экстренной помощью по номеру 112.'], source:'Интервью жителей показывают запрос на бережную и доступную поддержку. Контакты конкретных служб требуют проверки перед публикацией.', url:'https://www.gosuslugi.ru/' },
  { id:'community', category:'wellbeing', label:'Поддержка и общение', title:'Общение с другими родителями', description:'Группы, школы для родителей и сообщества могут помочь обменяться опытом и найти опору.', status:'Уточнить на месте', icon:'❋', steps:['Спросите в женской консультации или поликлинике о действующих занятиях для родителей.','Уточните расписание, формат и условия участия у организаторов.','Выбирайте встречи и сообщества, где вам спокойно и удобно.'], source:'В проектных материалах упоминаются школа материнства «Семья истоки» и группы поддержки. Актуальные контакты и расписание не подтверждены.', url:'https://www.gosuslugi.ru/' },
  { id:'partner', category:'family', label:'Для семьи', title:'Партнёру и будущему папе', description:'Вопросы обследований, поддержки партнёрши и распределения забот — общая задача семьи.', status:'Общий маршрут', icon:'↗', steps:['Обсудите с партнёршей, какая поддержка сейчас нужна и что можно разделить.','По вопросам собственного здоровья обратитесь к врачу по месту прикрепления.','Уточните право на отпуск и другие возможности поддержки семьи в официальных источниках.'], source:'Интервью с мужчинами в материалах проекта подтвердили запрос на навигацию по медицинским, финансовым и бытовым вопросам.', url:'https://www.gosuslugi.ru/' },
  { id:'childcare', category:'family', label:'Для семьи', title:'Помощь с уходом за ребёнком', description:'Как узнать о доступных вариантах присмотра и не путать идеи других регионов с местными услугами.', status:'Нужна проверка', icon:'⌂', steps:['Спросите в местном органе социальной защиты о действующих услугах для семей с детьми.','Уточните, есть ли в вашем населённом пункте кратковременный присмотр или другие формы помощи.','Не рассчитывайте на услугу «социальная няня» без подтверждения её доступности в ЛНР.'], source:'«Социальная няня» приведена в исследовании как практика других регионов и запрос респондентов, а не подтверждённая услуга в ЛНР.', url:'https://www.gosuslugi.ru/' },
  { id:'takzdorovo-planning', category:'health', label:'Здоровье', title:'Подготовка к беременности: материалы Минздрава России', description:'Подборка статей о репродуктивном здоровье и планировании беременности для обоих партнёров.', status:'Официальный источник', icon:'✳', steps:['Откройте раздел «Родителям» на портале «Так здорово».','Выберите тему планирования беременности или репродуктивного здоровья.','Обсудите вопросы об обследованиях со специалистом по месту прикрепления в ЛНР.'], source:'Общероссийские просветительские материалы Минздрава России; порядок получения помощи в ЛНР уточняйте в местной медицинской организации.', url:'https://www.takzdorovo.ru/roditelyam/' },
  { id:'takzdorovo-parents', category:'family', label:'Для семьи', title:'Здоровье детей: материалы для родителей', description:'Раздел портала «Так здорово» о беременности, уходе за ребёнком и вопросах воспитания.', status:'Официальный источник', icon:'♡', steps:['Откройте раздел для родителей и выберите возраст или ситуацию.','Читайте статьи как общую справку, а не индивидуальное назначение.','Если вопрос касается здоровья ребёнка, обратитесь к педиатру по месту прикрепления.'], source:'Официальный информационный портал Минздрава России; конкретные услуги и специалисты в ЛНР проверяются отдельно.', url:'https://www.takzdorovo.ru/roditelyam/' },
  { id:'takzdorovo-checkup', category:'health', label:'Здоровье', title:'Что такое диспансеризация', description:'Информация о профилактических осмотрах и оценке репродуктивного здоровья на портале Минздрава России.', status:'Официальный источник', icon:'◒', steps:['Прочитайте раздел о диспансеризации и перечне профилактических осмотров.','Уточните в поликлинике по месту прикрепления доступность и порядок записи в ЛНР.','Проверьте актуальные условия непосредственно перед посещением.'], source:'Общероссийский раздел портала «Так здорово». Адреса, расписание и наличие отдельных обследований в ЛНР здесь не подтверждаются.', url:'https://www.takzdorovo.ru/profilaktika/dispanserizatsiya/' },
  { id:'prodoctorov', category:'health', label:'Здоровье', title:'Поиск врача и клиники через ПроДокторов', description:'Сторонний справочник специалистов, клиник и отзывов пациентов: можно дополнить поиск по официальным спискам медорганизаций.', status:'Сторонний ресурс', icon:'⌕', steps:['Откройте справочник и проверьте, представлен ли ваш город в ЛНР.','Сверьте специальность, адрес, график и стоимость напрямую с клиникой.','Для поиска помощи по ОМС дополнительно используйте перечень организаций Минздрава ЛНР.'], source:'ПроДокторов — независимый сервис. Наличие врача, запись, цены и актуальность отзывов на территории ЛНР платформой не подтверждены.', url:'https://prodoctorov.ru/' },
  { id:'n101', category:'family', label:'Для семьи', title:'Экосистема проектов о семье и здоровье', description:'n101.ru собирает ссылки на тематические площадки о родительстве, родах, здоровье и психологической поддержке.', status:'Сторонний ресурс', icon:'↗', steps:['Откройте каталог площадок и выберите интересующую тему.','Проверьте, кто публикует материал и есть ли услуга в ЛНР.','Медицинские утверждения и меры поддержки сверяйте с Минздравом ЛНР, СФР или другим профильным ведомством.'], source:'n101.ru — независимая экосистема, содержащая в том числе коммерческие предложения. Ссылки на проекты не подтверждают их доступность или официальное одобрение в ЛНР.', url:'https://n101.ru/' }
];

const sourceMetadata = {
  checkup: { sourceName:'Минздрав ЛНР', checked:'24.09.2026', verified:true, url:'https://minzdrav.lpr-reg.ru/dispanserizaciya/' },
  consultation: { sourceName:'Минздрав ЛНР', checked:'24.09.2026', verified:true, url:'https://minzdrav.lpr-reg.ru/subordinated-organizations-details/' },
  benefits: { sourceName:'Социальный фонд России', checked:'24.09.2026', verified:true },
  maternity: { sourceName:'Социальный фонд России', checked:'24.09.2026', verified:true },
  pregnancy: { sourceName:'Материалы проекта', checked:'Требуется уточнение', verified:false },
  fertility: { sourceName:'Материалы проекта', checked:'Требуется уточнение', verified:false },
  work: { sourceName:'Кабинетное исследование', checked:'Требуется уточнение', verified:false },
  psychology: { sourceName:'Интервью жителей', checked:'Требуется уточнение', verified:false },
  community: { sourceName:'Материалы проекта', checked:'Требуется уточнение', verified:false },
  partner: { sourceName:'Интервью жителей', checked:'Общий ориентир', verified:false },
  childcare: { sourceName:'Обзор региональных практик', checked:'Не подтверждено для ЛНР', verified:false },
  'takzdorovo-planning': { sourceName:'Так здорово · Минздрав России', checked:'24.09.2026', verified:true },
  'takzdorovo-parents': { sourceName:'Так здорово · Минздрав России', checked:'24.09.2026', verified:true },
  'takzdorovo-checkup': { sourceName:'Так здорово · Минздрав России', checked:'24.09.2026', verified:true },
  prodoctorov: { sourceName:'ПроДокторов', checked:'Данные о ЛНР не проверены', verified:false },
  n101: { sourceName:'n101.ru', checked:'Услуги в ЛНР не проверены', verified:false }
};

topics.forEach(item => Object.assign(item, {
  sourceName:'Материалы проекта',
  checked:'Требуется уточнение',
  verified:false
}, sourceMetadata[item.id]));

const stageButtons = document.querySelectorAll('button.situation-card');
const routeTitle = document.querySelector('#route-title');
const routeDescription = document.querySelector('#route-description');
const routeSteps = document.querySelector('#route-steps');
const grid = document.querySelector('#catalog-grid');
const search = document.querySelector('#search');
const count = document.querySelector('#result-count');
const filters = document.querySelectorAll('.filter');
const dialog = document.querySelector('#detail-dialog');
const verifiedOnly = document.querySelector('#verified-only');
let activeFilter = 'all';
let generatedThemes = new Map();

function renderRoute(key) {
  const route = routes[key];
  stageButtons.forEach(button => {
    const selected = button.dataset.stage === key;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  routeTitle.textContent = route.title;
  routeDescription.textContent = route.description;
  const current = document.querySelector('#route-current');
  const generatedTheme = generatedThemes.get(key);
  if (generatedTheme) {
    const label = document.createElement('strong'); label.textContent = 'Подготовлено сегодня';
    const summary = document.createElement('p'); summary.textContent = generatedTheme.summary;
    const action = document.createElement('p'); action.textContent = generatedTheme.action;
    const link = document.createElement('a'); link.href = generatedTheme.sourceUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Проверить источник ↗';
    current.replaceChildren(label, summary, action, link);
    current.hidden = false;
  } else {
    current.hidden = true;
    current.replaceChildren();
  }
  routeSteps.replaceChildren(...route.steps.map(([title, text], index) => {
    const li = document.createElement('li');
    const number = document.createElement('span'); number.textContent = String(index + 1).padStart(2, '0');
    const strong = document.createElement('strong'); strong.textContent = title;
    const p = document.createElement('p'); p.textContent = text;
    li.append(number, strong, p);
    return li;
  }));
  document.querySelector('#route-catalog-link').dataset.filter = route.filter;
}

function setFilter(filter) {
  activeFilter = filter;
  filters.forEach(button => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  renderCatalog();
}

function renderCatalog() {
  const query = search.value.trim().toLocaleLowerCase('ru');
  const matching = topics.filter(item => (activeFilter === 'all' || item.category === activeFilter) && (!verifiedOnly.checked || item.verified) && `${item.title} ${item.description} ${item.label} ${item.source} ${item.sourceName}`.toLocaleLowerCase('ru').includes(query));
  grid.replaceChildren(...matching.map(item => {
    const article = document.createElement('article'); article.className = 'catalog-card';
    const top = document.createElement('div'); top.className = 'catalog-card-top';
    const icon = document.createElement('span'); icon.className = 'catalog-icon'; icon.setAttribute('aria-hidden', 'true'); icon.textContent = item.icon;
    const status = document.createElement('span'); status.className = `catalog-status ${item.verified ? '' : 'check'}`; status.textContent = item.verified ? 'Проверено' : item.status;
    top.append(icon, status);
    const title = document.createElement('h3'); title.textContent = item.title;
    const description = document.createElement('p'); description.textContent = item.description;
    const provenance = document.createElement('div'); provenance.className = 'card-provenance'; provenance.innerHTML = `<span>${item.sourceName}</span><span>${item.checked}</span>`;
    const button = document.createElement('button'); button.type = 'button'; button.dataset.id = item.id; button.setAttribute('aria-label', `Подробнее: ${item.title}`); button.innerHTML = 'Подробнее <span aria-hidden="true">→</span>';
    article.append(top, title, description, provenance, button);
    return article;
  }));
  count.textContent = `Найдено: ${matching.length}`;
  document.querySelector('#empty-state').hidden = matching.length !== 0;
}

stageButtons.forEach(button => button.addEventListener('click', () => {
  renderRoute(button.dataset.stage);
  const panel = document.querySelector('#route-panel');
  panel.hidden = false;
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}));
filters.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
search.addEventListener('input', renderCatalog);
verifiedOnly.addEventListener('change', renderCatalog);
document.querySelector('#hero-search-form').addEventListener('submit', event => {
  event.preventDefault();
  search.value = document.querySelector('#hero-search-input').value;
  setFilter('all');
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('#reset-search').addEventListener('click', () => { search.value = ''; verifiedOnly.checked = false; setFilter('all'); search.focus(); });
document.querySelector('#route-catalog-link').addEventListener('click', event => { setFilter(event.currentTarget.dataset.filter); search.value = ''; renderCatalog(); });
grid.addEventListener('click', event => {
  const button = event.target.closest('button[data-id]');
  if (!button) return;
  const item = topics.find(topic => topic.id === button.dataset.id);
  document.querySelector('#detail-category').textContent = item.label.toUpperCase();
  document.querySelector('#detail-title').textContent = item.title;
  document.querySelector('#detail-description').textContent = item.description;
  document.querySelector('#detail-source-name').textContent = `Источник: ${item.sourceName}`;
  document.querySelector('#detail-checked').textContent = item.verified ? `Проверено ${item.checked}` : item.checked;
  document.querySelector('#detail-steps').replaceChildren(...item.steps.map(step => { const li = document.createElement('li'); li.textContent = step; return li; }));
  document.querySelector('#detail-source').textContent = `Важно: ${item.source}`;
  document.querySelector('#detail-link').href = item.url;
  dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelector('#print-detail').addEventListener('click', () => window.print());
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.hidden = !mobileMenu.hidden;
  menuToggle.setAttribute('aria-expanded', String(!mobileMenu.hidden));
  menuToggle.setAttribute('aria-label', mobileMenu.hidden ? 'Открыть меню' : 'Закрыть меню');
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileMenu.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Открыть меню'); }));

function textFromHtml(value) {
  const template = document.createElement('template');
  template.innerHTML = value;
  return template.content.textContent.trim();
}

async function loadOfficialUpdates() {
  const status = document.querySelector('#feed-status');
  const updatesGrid = document.querySelector('#updates-grid');
  try {
    const response = await fetch('https://minzdrav.lpr-reg.ru/wp-json/wp/v2/posts?per_page=3&_fields=date,link,title,excerpt');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const posts = await response.json();
    const cards = posts.map(post => {
      const article = document.createElement('article'); article.className = 'update-card';
      const time = document.createElement('time'); time.dateTime = post.date; time.textContent = new Intl.DateTimeFormat('ru-RU', { day:'numeric', month:'long', year:'numeric' }).format(new Date(post.date));
      const title = document.createElement('h3'); title.textContent = textFromHtml(post.title.rendered);
      const excerpt = document.createElement('p'); excerpt.textContent = textFromHtml(post.excerpt.rendered).replace(/…|\.\.\.$/, '').trim();
      const link = document.createElement('a'); link.href = post.link; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Читать в источнике ↗';
      article.append(time, title, excerpt, link);
      return article;
    });
    updatesGrid.replaceChildren(...cards);
    status.innerHTML = '<span class="feed-online" aria-hidden="true"></span>Источник доступен · данные загружены с minzdrav.lpr-reg.ru';
  } catch (error) {
    status.classList.add('feed-error');
    status.textContent = 'Сейчас источник недоступен. Откройте официальный сайт по ссылке ниже.';
  }
}

async function loadGeneratedContent() {
  try {
    const response = await fetch('data/generated-content.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!data.generatedAt || !data.announcement || !Array.isArray(data.themes) || !Array.isArray(data.materials)) return;
    const generatedAt = new Date(data.generatedAt);
    const moscowDay = date => new Intl.DateTimeFormat('ru-RU', { day:'2-digit', month:'2-digit', year:'numeric', timeZone:'Europe/Moscow' }).format(date);
    if (Number.isNaN(generatedAt.getTime()) || data.effectiveDate !== moscowDay(new Date()) || data.effectiveDate !== moscowDay(generatedAt)) return;
    generatedThemes = new Map(data.themes.map(item => [item.id, item]));
    renderRoute(document.querySelector('.situation-card.selected')?.dataset.stage || 'planning');

    document.querySelector('#agent-announcement-title').textContent = data.announcement.title;
    document.querySelector('#agent-announcement-body').textContent = data.announcement.body;
    document.querySelector('#agent-announcement-link').href = data.announcement.sourceUrl;
    document.querySelector('#agent-generated-at').textContent = `Обновлено ${new Intl.DateTimeFormat('ru-RU', { day:'numeric', month:'long', hour:'2-digit', minute:'2-digit', timeZone:'Europe/Moscow' }).format(generatedAt)} МСК`;
    const materialCards = data.materials.map(item => {
      const link = document.createElement('a'); link.className = `agent-material agent-material-${item.category}`; link.href = item.sourceUrl; link.target = '_blank'; link.rel = 'noopener noreferrer';
      const tag = document.createElement('span'); tag.textContent = item.category === 'health' ? 'Здоровье' : item.category === 'benefits' ? 'Меры поддержки' : item.category === 'wellbeing' ? 'Поддержка' : 'Семья';
      const title = document.createElement('strong'); title.textContent = item.title;
      const summary = document.createElement('p'); summary.textContent = item.summary;
      const more = document.createElement('b'); more.textContent = 'Официальный источник ↗';
      link.append(tag, title, summary, more);
      return link;
    });
    document.querySelector('#agent-materials').replaceChildren(...materialCards);
    document.querySelector('#agent-digest').hidden = false;
  } catch (error) {
    console.info('Generated digest is not available:', error.message);
  }
}

renderRoute('planning');
renderCatalog();
loadOfficialUpdates();
loadGeneratedContent();
