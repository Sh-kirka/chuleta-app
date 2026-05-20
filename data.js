// ─── TENSES ──────────────────────────────────────────────────────────────────
export const tenses = [
  {
    id: 't1',
    title: { ukr: 'Presente de Indicativo', eng: 'Present Indicative', esp: 'Presente de Indicativo' },
    subtitle: { ukr: 'Теперішній час', eng: 'Present tense', esp: 'Tiempo presente' },
    body: {
      ukr: 'Вживається для регулярних дій, фактів і того, що відбувається зараз.\n\n**Закінчення -AR:** -o, -as, -a, -amos, -áis, -an\n**Закінчення -ER:** -o, -es, -e, -emos, -éis, -en\n**Закінчення -IR:** -o, -es, -e, -imos, -ís, -en',
      eng: 'Used for regular actions, facts, and things happening now.\n\n**-AR endings:** -o, -as, -a, -amos, -áis, -an\n**-ER endings:** -o, -es, -e, -emos, -éis, -en\n**-IR endings:** -o, -es, -e, -imos, -ís, -en',
      esp: 'Se usa para acciones habituales, hechos y lo que ocurre ahora.\n\n**Terminaciones -AR:** -o, -as, -a, -amos, -áis, -an\n**Terminaciones -ER:** -o, -es, -e, -emos, -éis, -en\n**Terminaciones -IR:** -o, -es, -e, -imos, -ís, -en',
    },
    examples: [
      { esp: 'Yo hablo español.', ukr: 'Я говорю іспанською.', eng: 'I speak Spanish.' },
      { esp: 'Ella come una manzana.', ukr: 'Вона їсть яблуко.', eng: 'She eats an apple.' },
      { esp: 'Nosotros vivimos en Madrid.', ukr: 'Ми живемо в Мадриді.', eng: 'We live in Madrid.' },
    ],
  },
  {
    id: 't2',
    title: { ukr: 'Pretérito Indefinido', eng: 'Preterite (Simple Past)', esp: 'Pretérito Indefinido' },
    subtitle: { ukr: 'Минулий завершений час', eng: 'Completed past actions', esp: 'Acciones pasadas completadas' },
    body: {
      ukr: 'Завершені дії в минулому в конкретний момент або проміжок часу.\n\n**-AR:** -é, -aste, -ó, -amos, -asteis, -aron\n**-ER/-IR:** -í, -iste, -ió, -imos, -isteis, -ieron\n\n⚠️ Нерегулярні: ser/ir → fui, fuiste, fue; tener → tuve; hacer → hice',
      eng: 'Completed actions in the past at a specific moment or period.\n\n**-AR:** -é, -aste, -ó, -amos, -asteis, -aron\n**-ER/-IR:** -í, -iste, -ió, -imos, -isteis, -ieron\n\n⚠️ Irregulars: ser/ir → fui, fuiste, fue; tener → tuve; hacer → hice',
      esp: 'Acciones completadas en el pasado en un momento o período específico.\n\n**-AR:** -é, -aste, -ó, -amos, -asteis, -aron\n**-ER/-IR:** -í, -iste, -ió, -imos, -isteis, -ieron\n\n⚠️ Irregulares: ser/ir → fui, fuiste, fue; tener → tuve; hacer → hice',
    },
    examples: [
      { esp: 'Ayer comí pizza.', ukr: 'Вчора я їв піцу.', eng: 'Yesterday I ate pizza.' },
      { esp: 'Ellos fueron al cine.', ukr: 'Вони пішли в кіно.', eng: 'They went to the cinema.' },
      { esp: 'Hice mis deberes.', ukr: 'Я зробив домашнє завдання.', eng: 'I did my homework.' },
    ],
  },
  {
    id: 't3',
    title: { ukr: 'Pretérito Imperfecto', eng: 'Imperfect Past', esp: 'Pretérito Imperfecto' },
    subtitle: { ukr: 'Незавершений минулий час', eng: 'Ongoing past actions / descriptions', esp: 'Acciones pasadas habituales o descriptivas' },
    body: {
      ukr: 'Тривалі або повторювані дії в минулому, опис стану чи фону.\n\n**-AR:** -aba, -abas, -aba, -ábamos, -abais, -aban\n**-ER/-IR:** -ía, -ías, -ía, -íamos, -íais, -ían\n\n⚠️ Лише 3 нерегулярних: ser → era; ir → iba; ver → veía',
      eng: 'Ongoing or repeated past actions, descriptions, or background.\n\n**-AR:** -aba, -abas, -aba, -ábamos, -abais, -aban\n**-ER/-IR:** -ía, -ías, -ía, -íamos, -íais, -ían\n\n⚠️ Only 3 irregulars: ser → era; ir → iba; ver → veía',
      esp: 'Acciones pasadas habituales, descriptivas o de fondo.\n\n**-AR:** -aba, -abas, -aba, -ábamos, -abais, -aban\n**-ER/-IR:** -ía, -ías, -ía, -íamos, -íais, -ían\n\n⚠️ Solo 3 irregulares: ser → era; ir → iba; ver → veía',
    },
    examples: [
      { esp: 'De niño jugaba al fútbol.', ukr: 'Дитиною я грав у футбол.', eng: 'As a child I used to play football.' },
      { esp: 'Hacía mucho frío.', ukr: 'Було дуже холодно.', eng: 'It was very cold.' },
      { esp: 'Mientras él leía, yo cocinaba.', ukr: 'Поки він читав, я готував.', eng: 'While he was reading, I was cooking.' },
    ],
  },
  {
    id: 't4',
    title: { ukr: 'Pretérito Perfecto Compuesto', eng: 'Present Perfect', esp: 'Pretérito Perfecto Compuesto' },
    subtitle: { ukr: 'Минуле, пов\'язане з теперішнім', eng: 'Past connected to present', esp: 'Pasado relacionado con el presente' },
    body: {
      ukr: 'Дії в минулому, що пов\'язані з теперішнім або щойно завершені.\n\nФорма: **haber** (present) + **participio**\n\nhe / has / ha / hemos / habéis / han + participio\n\n**Participio:** -AR → -ado, -ER/-IR → -ido\n⚠️ Нерегулярні: hecho, dicho, visto, puesto, vuelto, abierto',
      eng: 'Actions in the past connected to the present or just completed.\n\nForm: **haber** (present) + **participle**\n\nhe / has / ha / hemos / habéis / han + participio\n\n**Participle:** -AR → -ado, -ER/-IR → -ido\n⚠️ Irregulars: hecho, dicho, visto, puesto, vuelto, abierto',
      esp: 'Acciones pasadas relacionadas con el presente o recién terminadas.\n\nForma: **haber** (presente) + **participio**\n\nhe / has / ha / hemos / habéis / han + participio\n\n**Participio:** -AR → -ado, -ER/-IR → -ido\n⚠️ Irregulares: hecho, dicho, visto, puesto, vuelto, abierto',
    },
    examples: [
      { esp: 'He comido paella hoy.', ukr: 'Сьогодні я їв паелью.', eng: 'Today I have eaten paella.' },
      { esp: '¿Has visto esta película?', ukr: 'Ти бачив цей фільм?', eng: 'Have you seen this film?' },
      { esp: 'Nunca he estado en Tokyo.', ukr: 'Я ніколи не був у Токіо.', eng: 'I have never been to Tokyo.' },
    ],
  },
  {
    id: 't5',
    title: { ukr: 'Futuro Simple', eng: 'Simple Future', esp: 'Futuro Simple' },
    subtitle: { ukr: 'Майбутній час', eng: 'Future tense', esp: 'Tiempo futuro' },
    body: {
      ukr: 'Майбутні дії або припущення. Додається до інфінітиву.\n\n**Всі дієслова:** -é, -ás, -á, -emos, -éis, -án\n\n⚠️ Нерегулярні основи: tener→tendr, poder→podr, hacer→har, salir→saldr, venir→vendr, decir→dir, saber→sabr',
      eng: 'Future actions or assumptions. Added to the infinitive.\n\n**All verbs:** -é, -ás, -á, -emos, -éis, -án\n\n⚠️ Irregular stems: tener→tendr, poder→podr, hacer→har, salir→saldr, venir→vendr, decir→dir, saber→sabr',
      esp: 'Acciones futuras o suposiciones. Se añade al infinitivo.\n\n**Todos los verbos:** -é, -ás, -á, -emos, -éis, -án\n\n⚠️ Raíces irregulares: tener→tendr, poder→podr, hacer→har, salir→saldr, venir→vendr, decir→dir, saber→sabr',
    },
    examples: [
      { esp: 'Mañana iré al médico.', ukr: 'Завтра я піду до лікаря.', eng: 'Tomorrow I will go to the doctor.' },
      { esp: '¿Dónde estará María?', ukr: 'Де ж може бути Марія?', eng: 'Where could María be?' },
      { esp: 'Tendremos una reunión.', ukr: 'У нас буде зустріч.', eng: 'We will have a meeting.' },
    ],
  },
  {
    id: 't6',
    title: { ukr: 'Condicional Simple', eng: 'Conditional', esp: 'Condicional Simple' },
    subtitle: { ukr: 'Умовний спосіб', eng: 'Would / conditional mood', esp: 'Condicional / "would"' },
    body: {
      ukr: 'Гіпотетичні ситуації, ввічливі прохання, умови. "Я б зробив".\n\n**Всі дієслова:** -ía, -ías, -ía, -íamos, -íais, -ían\n\n(Ті ж нерегулярні основи, що й у Futuro Simple)',
      eng: 'Hypothetical situations, polite requests, conditions. "I would do".\n\n**All verbs:** -ía, -ías, -ía, -íamos, -íais, -ían\n\n(Same irregular stems as Futuro Simple)',
      esp: 'Situaciones hipotéticas, peticiones corteses, condiciones. "Haría".\n\n**Todos los verbos:** -ía, -ías, -ía, -íamos, -íais, -ían\n\n(Mismas raíces irregulares que el Futuro Simple)',
    },
    examples: [
      { esp: '¿Podría ayudarme?', ukr: 'Ви могли б мені допомогти?', eng: 'Could you help me?' },
      { esp: 'Me gustaría un café.', ukr: 'Я б хотів каву.', eng: 'I would like a coffee.' },
      { esp: 'Con más dinero viajaría más.', ukr: 'З більшими грошима я б більше подорожував.', eng: 'With more money I would travel more.' },
    ],
  },
  {
    id: 't7',
    title: { ukr: 'Subjuntivo Presente', eng: 'Present Subjunctive', esp: 'Subjuntivo Presente' },
    subtitle: { ukr: 'Кон\'юнктив теперішнього часу', eng: 'Wishes, doubts, emotions', esp: 'Deseos, dudas, emociones' },
    body: {
      ukr: 'Вживається після: querer que, esperar que, dudar que, es importante que...\n\n**-AR → пишемо -ER закінчення:** -e, -es, -e, -emos, -éis, -en\n**-ER/-IR → пишемо -AR закінчення:** -a, -as, -a, -amos, -áis, -an\n\n⚠️ Нерегулярні: ser→sea, estar→esté, ir→vaya, haber→haya, saber→sepa',
      eng: 'Used after: querer que, esperar que, dudar que, es importante que...\n\n**-AR verbs → use -ER endings:** -e, -es, -e, -emos, -éis, -en\n**-ER/-IR → use -AR endings:** -a, -as, -a, -amos, -áis, -an\n\n⚠️ Irregulars: ser→sea, estar→esté, ir→vaya, haber→haya, saber→sepa',
      esp: 'Se usa después de: querer que, esperar que, dudar que, es importante que...\n\n**-AR → terminaciones de -ER:** -e, -es, -e, -emos, -éis, -en\n**-ER/-IR → terminaciones de -AR:** -a, -as, -a, -amos, -áis, -an\n\n⚠️ Irregulares: ser→sea, estar→esté, ir→vaya, haber→haya, saber→sepa',
    },
    examples: [
      { esp: 'Quiero que vengas.', ukr: 'Я хочу, щоб ти прийшов.', eng: 'I want you to come.' },
      { esp: 'Es importante que estudies.', ukr: 'Важливо, щоб ти навчався.', eng: 'It is important that you study.' },
      { esp: 'Dudo que sea verdad.', ukr: 'Я сумніваюся, що це правда.', eng: 'I doubt it is true.' },
    ],
  },
];

// ─── VERBS ───────────────────────────────────────────────────────────────────
export const verbs = [
  {
    id: 'v1',
    title: { ukr: 'SER — бути (постійно)', eng: 'SER — to be (permanent)', esp: 'SER — ser (permanente)' },
    subtitle: { ukr: 'Походження, характер, матеріал, час', eng: 'Origin, character, material, time', esp: 'Origen, carácter, material, hora' },
    body: {
      ukr: '**Відмінювання:** soy, eres, es, somos, sois, son\n\n**Коли вживати SER:**\n• Походження: Soy de Ucrania.\n• Характер/зовнішність: Es alto y amable.\n• Матеріал: La mesa es de madera.\n• Час/дата: Son las tres. Es lunes.\n• Професія: Soy estudiante.\n• Належність: Este libro es mío.',
      eng: '**Conjugation:** soy, eres, es, somos, sois, son\n\n**When to use SER:**\n• Origin: Soy de Ucrania.\n• Character/appearance: Es alto y amable.\n• Material: La mesa es de madera.\n• Time/date: Son las tres. Es lunes.\n• Profession: Soy estudiante.\n• Ownership: Este libro es mío.',
      esp: '**Conjugación:** soy, eres, es, somos, sois, son\n\n**Cuándo usar SER:**\n• Origen: Soy de Ucrania.\n• Carácter/aspecto: Es alto y amable.\n• Material: La mesa es de madera.\n• Hora/fecha: Son las tres. Es lunes.\n• Profesión: Soy estudiante.\n• Posesión: Este libro es mío.',
    },
    examples: [
      { esp: 'Soy de Kyiv.', ukr: 'Я з Києва.', eng: 'I am from Kyiv.' },
      { esp: 'La fiesta es mañana.', ukr: 'Вечірка завтра.', eng: 'The party is tomorrow.' },
      { esp: 'Somos amigos.', ukr: 'Ми друзі.', eng: 'We are friends.' },
    ],
  },
  {
    id: 'v2',
    title: { ukr: 'ESTAR — бути (тимчасово)', eng: 'ESTAR — to be (temporary)', esp: 'ESTAR — estar (temporal)' },
    subtitle: { ukr: 'Стан, місцезнаходження, емоції', eng: 'State, location, emotions', esp: 'Estado, ubicación, emociones' },
    body: {
      ukr: '**Відмінювання:** estoy, estás, está, estamos, estáis, están\n\n**Коли вживати ESTAR:**\n• Місцезнаходження: Estoy en casa.\n• Тимчасовий стан: Estoy cansado.\n• Емоції: Está triste.\n• Герундій: Estoy comiendo.\n• Результат дії: La puerta está abierta.',
      eng: '**Conjugation:** estoy, estás, está, estamos, estáis, están\n\n**When to use ESTAR:**\n• Location: Estoy en casa.\n• Temporary state: Estoy cansado.\n• Emotions: Está triste.\n• Gerund: Estoy comiendo.\n• Result of action: La puerta está abierta.',
      esp: '**Conjugación:** estoy, estás, está, estamos, estáis, están\n\n**Cuándo usar ESTAR:**\n• Ubicación: Estoy en casa.\n• Estado temporal: Estoy cansado.\n• Emociones: Está triste.\n• Gerundio: Estoy comiendo.\n• Resultado de acción: La puerta está abierta.',
    },
    examples: [
      { esp: 'Estoy muy bien, gracias.', ukr: 'Я дуже добре, дякую.', eng: 'I am very well, thank you.' },
      { esp: 'Madrid está en España.', ukr: 'Мадрид знаходиться в Іспанії.', eng: 'Madrid is in Spain.' },
      { esp: 'Están comiendo ahora.', ukr: 'Вони зараз їдять.', eng: 'They are eating now.' },
    ],
  },
  {
    id: 'v3',
    title: { ukr: 'TENER — мати', eng: 'TENER — to have', esp: 'TENER — tener' },
    subtitle: { ukr: 'Мати, вік, відчуття, обов\'язок', eng: 'Have, age, feelings, obligation', esp: 'Posesión, edad, sensaciones, obligación' },
    body: {
      ukr: '**Відмінювання:** tengo, tienes, tiene, tenemos, tenéis, tienen\n\n**Вирази з TENER:**\n• tener ... años — мати ... років\n• tener hambre/sed — бути голодним/спраглим\n• tener frío/calor — мерзнути/бути спекотно\n• tener sueño — хотіти спати\n• tener razón — бути правим\n• tener que + inf — треба зробити\n• tener ganas de — хотіти, мати бажання',
      eng: '**Conjugation:** tengo, tienes, tiene, tenemos, tenéis, tienen\n\n**Expressions with TENER:**\n• tener ... años — to be ... years old\n• tener hambre/sed — to be hungry/thirsty\n• tener frío/calor — to be cold/hot\n• tener sueño — to be sleepy\n• tener razón — to be right\n• tener que + inf — to have to do\n• tener ganas de — to feel like',
      esp: '**Conjugación:** tengo, tienes, tiene, tenemos, tenéis, tienen\n\n**Expresiones con TENER:**\n• tener ... años — tener cierta edad\n• tener hambre/sed — estar hambriento/sediento\n• tener frío/calor — tener frío/calor\n• tener sueño — tener sueño\n• tener razón — tener razón\n• tener que + inf — tener que hacer algo\n• tener ganas de — apetecer algo',
    },
    examples: [
      { esp: 'Tengo 25 años.', ukr: 'Мені 25 років.', eng: 'I am 25 years old.' },
      { esp: 'Tengo hambre.', ukr: 'Я голодний.', eng: 'I am hungry.' },
      { esp: 'Tenemos que estudiar.', ukr: 'Нам треба навчатися.', eng: 'We have to study.' },
    ],
  },
  {
    id: 'v4',
    title: { ukr: 'IR — йти / їхати', eng: 'IR — to go', esp: 'IR — ir' },
    subtitle: { ukr: 'Рух + майбутній час (ir a + inf)', eng: 'Movement + near future (ir a + inf)', esp: 'Movimiento + futuro próximo (ir a + inf)' },
    body: {
      ukr: '**Відмінювання:** voy, vas, va, vamos, vais, van\n\n**IR a + інфінітив = найближче майбутнє:**\nVoy a comer. — Я збираюся поїсти.\n\n**Pretérito Indefinido (=SER):** fui, fuiste, fue, fuimos, fuisteis, fueron\n\n**Pretérito Imperfecto:** iba, ibas, iba, íbamos, ibais, iban',
      eng: '**Conjugation:** voy, vas, va, vamos, vais, van\n\n**IR a + infinitive = near future:**\nVoy a comer. — I am going to eat.\n\n**Pretérito Indefinido (=SER):** fui, fuiste, fue, fuimos, fuisteis, fueron\n\n**Pretérito Imperfecto:** iba, ibas, iba, íbamos, ibais, iban',
      esp: '**Conjugación:** voy, vas, va, vamos, vais, van\n\n**IR a + infinitivo = futuro próximo:**\nVoy a comer. — Voy a comer.\n\n**Pretérito Indefinido (=SER):** fui, fuiste, fue, fuimos, fuisteis, fueron\n\n**Pretérito Imperfecto:** iba, ibas, iba, íbamos, ibais, iban',
    },
    examples: [
      { esp: 'Voy al supermercado.', ukr: 'Я йду до супермаркету.', eng: 'I am going to the supermarket.' },
      { esp: 'Vamos a cenar juntos.', ukr: 'Ми збираємося вечеряти разом.', eng: 'We are going to have dinner together.' },
      { esp: 'Fui al médico ayer.', ukr: 'Вчора я ходив до лікаря.', eng: 'I went to the doctor yesterday.' },
    ],
  },
  {
    id: 'v5',
    title: { ukr: 'HACER — робити / виготовляти', eng: 'HACER — to do / to make', esp: 'HACER — hacer' },
    subtitle: { ukr: 'Дія, погода, вирази часу', eng: 'Action, weather, time expressions', esp: 'Acción, tiempo, expresiones de tiempo' },
    body: {
      ukr: '**Відмінювання:** hago, haces, hace, hacemos, hacéis, hacen\n\n**Вирази з HACER:**\n• hacer deporte — займатися спортом\n• hacer una pregunta — ставити запитання\n• hacer daño — завдавати шкоди\n• Hace calor/frío — Спекотно/Холодно\n• Hace dos años — Два роки тому\n• ¿Qué haces? — Що ти робиш?',
      eng: '**Conjugation:** hago, haces, hace, hacemos, hacéis, hacen\n\n**Expressions with HACER:**\n• hacer deporte — to do sport\n• hacer una pregunta — to ask a question\n• hacer daño — to hurt\n• Hace calor/frío — It is hot/cold\n• Hace dos años — Two years ago\n• ¿Qué haces? — What are you doing?',
      esp: '**Conjugación:** hago, haces, hace, hacemos, hacéis, hacen\n\n**Expresiones con HACER:**\n• hacer deporte — practicar deporte\n• hacer una pregunta — hacer una pregunta\n• hacer daño — hacer daño\n• Hace calor/frío — Hace calor/frío\n• Hace dos años — Hace dos años\n• ¿Qué haces? — ¿Qué haces?',
    },
    examples: [
      { esp: 'Hace mucho calor hoy.', ukr: 'Сьогодні дуже жарко.', eng: 'It is very hot today.' },
      { esp: '¿Qué haces el fin de semana?', ukr: 'Що ти робиш на вихідних?', eng: 'What are you doing at the weekend?' },
      { esp: 'Hago ejercicio cada día.', ukr: 'Я займаюся спортом щодня.', eng: 'I exercise every day.' },
    ],
  },
  {
    id: 'v6',
    title: { ukr: 'Дієслова зворотної дії (Reflexivos)', eng: 'Reflexive Verbs', esp: 'Verbos Reflexivos' },
    subtitle: { ukr: 'Дія на самого себе', eng: 'Action done to oneself', esp: 'Acción sobre uno mismo' },
    body: {
      ukr: '**Займенники:** me, te, se, nos, os, se\n\nЗайменник ставиться ПЕРЕД дієсловом або приєднується до інфінітиву/герундія.\n\n**Часті дієслова:**\n• levantarse — вставати\n• lavarse — митися\n• vestirse — одягатися\n• acostarse — лягати спати\n• llamarse — називатися\n• sentirse — почуватися\n• despertarse — прокидатися',
      eng: '**Pronouns:** me, te, se, nos, os, se\n\nPronoun goes BEFORE the verb or attaches to infinitive/gerund.\n\n**Common verbs:**\n• levantarse — to get up\n• lavarse — to wash oneself\n• vestirse — to get dressed\n• acostarse — to go to bed\n• llamarse — to be called\n• sentirse — to feel\n• despertarse — to wake up',
      esp: '**Pronombres:** me, te, se, nos, os, se\n\nEl pronombre va ANTES del verbo o se une al infinitivo/gerundio.\n\n**Verbos comunes:**\n• levantarse — levantarse\n• lavarse — lavarse\n• vestirse — vestirse\n• acostarse — acostarse\n• llamarse — llamarse\n• sentirse — sentirse\n• despertarse — despertarse',
    },
    examples: [
      { esp: 'Me llamo Ana.', ukr: 'Мене звати Ана.', eng: 'My name is Ana.' },
      { esp: 'Me levanto a las siete.', ukr: 'Я встаю о сьомій.', eng: 'I get up at seven.' },
      { esp: '¿Cómo te sientes?', ukr: 'Як ти почуваєшся?', eng: 'How do you feel?' },
    ],
  },
];

// ─── GRAMMAR ─────────────────────────────────────────────────────────────────
export const grammar = [
  {
    id: 'g1',
    title: { ukr: 'Артиклі (Artículos)', eng: 'Articles', esp: 'Artículos' },
    subtitle: { ukr: 'Означений і неозначений', eng: 'Definite and indefinite', esp: 'Determinados e indeterminados' },
    body: {
      ukr: '**Означений (конкретний):**\nel (ч.р. одн.) · la (ж.р. одн.) · los (ч.р. мн.) · las (ж.р. мн.)\n\n**Неозначений (будь-який):**\nun (ч.р. одн.) · una (ж.р. одн.) · unos (ч.р. мн.) · unas (ж.р. мн.)\n\n⚠️ el + de = del · el + a = al\n⚠️ Перед іменниками ж.р. на -a з наголосом: el agua (але las aguas)',
      eng: '**Definite (specific):**\nel (m. sg.) · la (f. sg.) · los (m. pl.) · las (f. pl.)\n\n**Indefinite (any):**\nun (m. sg.) · una (f. sg.) · unos (m. pl.) · unas (f. pl.)\n\n⚠️ el + de = del · el + a = al\n⚠️ Before stressed -a nouns: el agua (but las aguas)',
      esp: '**Determinado (específico):**\nel (m. sg.) · la (f. sg.) · los (m. pl.) · las (f. pl.)\n\n**Indeterminado (cualquiera):**\nun (m. sg.) · una (f. sg.) · unos (m. pl.) · unas (f. pl.)\n\n⚠️ el + de = del · el + a = al\n⚠️ Antes de sustantivos fem. con -a tónica: el agua (pero las aguas)',
    },
    examples: [
      { esp: 'El libro es interesante.', ukr: 'Книга цікава.', eng: 'The book is interesting.' },
      { esp: 'Quiero un café, por favor.', ukr: 'Хочу каву, будь ласка.', eng: 'I want a coffee, please.' },
      { esp: 'Voy al mercado.', ukr: 'Я йду на ринок.', eng: 'I go to the market.' },
    ],
  },
  {
    id: 'g2',
    title: { ukr: 'Особові займенники', eng: 'Personal Pronouns', esp: 'Pronombres Personales' },
    subtitle: { ukr: 'Підмет, прямий і непрямий додаток', eng: 'Subject, direct and indirect object', esp: 'Sujeto, objeto directo e indirecto' },
    body: {
      ukr: '**Підмет:** yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes\n\n**Прямий додаток (що? кого?):**\nme, te, lo/la, nos, os, los/las\n\n**Непрямий додаток (кому? для кого?):**\nme, te, le (→ se), nos, os, les (→ se)\n\n⚠️ При поєднанні le/les + lo/la/los/las → se: *Se lo doy.*\n\n**Порядок:** Непрямий + Прямий + Дієслово',
      eng: '**Subject:** yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes\n\n**Direct object (what? whom?):**\nme, te, lo/la, nos, os, los/las\n\n**Indirect object (to whom? for whom?):**\nme, te, le (→ se), nos, os, les (→ se)\n\n⚠️ When le/les + lo/la/los/las combine → se: *Se lo doy.*\n\n**Order:** Indirect + Direct + Verb',
      esp: '**Sujeto:** yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes\n\n**Objeto directo (¿qué? ¿a quién?):**\nme, te, lo/la, nos, os, los/las\n\n**Objeto indirecto (¿a quién? ¿para quién?):**\nme, te, le (→ se), nos, os, les (→ se)\n\n⚠️ Cuando le/les + lo/la/los/las → se: *Se lo doy.*\n\n**Orden:** Indirecto + Directo + Verbo',
    },
    examples: [
      { esp: 'Te lo digo.', ukr: 'Я тобі це кажу.', eng: 'I am telling you (it).' },
      { esp: 'Se lo envié ayer.', ukr: 'Я відправив це йому вчора.', eng: 'I sent it to him yesterday.' },
      { esp: 'Nos la dio.', ukr: 'Він дав нам це.', eng: 'He gave it to us.' },
    ],
  },
  {
    id: 'g3',
    title: { ukr: 'Por vs Para', eng: 'Por vs Para', esp: 'Por vs Para' },
    subtitle: { ukr: 'Різниця між "за/через" і "для/щоб"', eng: 'Cause/exchange vs purpose/destination', esp: 'Causa/intercambio vs propósito/destino' },
    body: {
      ukr: '**POR — причина, засіб, обмін, тривалість, агент:**\n• Причина: Lo hizo por amor.\n• Засіб: Hablamos por teléfono.\n• Обмін: Te cambio esto por aquello.\n• Тривалість: Estudié por dos horas.\n• Агент: Fue escrito por Cervantes.\n\n**PARA — мета, отримувач, дедлайн, думка:**\n• Мета: Estudio para aprender.\n• Отримувач: Esto es para ti.\n• Дедлайн: Lo necesito para el lunes.\n• Думка: Para mí, es fácil.',
      eng: '**POR — cause, means, exchange, duration, agent:**\n• Cause: Lo hizo por amor. (He did it out of love.)\n• Means: Hablamos por teléfono. (We spoke by phone.)\n• Exchange: Te cambio esto por aquello.\n• Duration: Estudié por dos horas.\n• Agent: Fue escrito por Cervantes.\n\n**PARA — purpose, recipient, deadline, opinion:**\n• Purpose: Estudio para aprender.\n• Recipient: Esto es para ti.\n• Deadline: Lo necesito para el lunes.\n• Opinion: Para mí, es fácil.',
      esp: '**POR — causa, medio, intercambio, duración, agente:**\n• Causa: Lo hizo por amor.\n• Medio: Hablamos por teléfono.\n• Intercambio: Te cambio esto por aquello.\n• Duración: Estudié por dos horas.\n• Agente: Fue escrito por Cervantes.\n\n**PARA — propósito, destinatario, fecha límite, opinión:**\n• Propósito: Estudio para aprender.\n• Destinatario: Esto es para ti.\n• Fecha límite: Lo necesito para el lunes.\n• Opinión: Para mí, es fácil.',
    },
    examples: [
      { esp: 'Gracias por todo.', ukr: 'Дякую за все.', eng: 'Thank you for everything.' },
      { esp: 'Este regalo es para ti.', ukr: 'Цей подарунок для тебе.', eng: 'This gift is for you.' },
      { esp: 'Salimos para Barcelona.', ukr: 'Ми їдемо до Барселони.', eng: 'We are leaving for Barcelona.' },
    ],
  },
  {
    id: 'g4',
    title: { ukr: 'Узгодження прикметників', eng: 'Adjective Agreement', esp: 'Concordancia de Adjetivos' },
    subtitle: { ukr: 'Рід і число', eng: 'Gender and number', esp: 'Género y número' },
    body: {
      ukr: 'Прикметники узгоджуються з іменником в роді та числі.\n\n**-o/-a/-os/-as:** bueno, buena, buenos, buenas\n**-e/-es (без зміни роду):** inteligente, inteligentes\n**приголосний/-es:** fácil, fáciles\n\n⚠️ Деякі прикметники скорочуються перед іменником ч.р. одн.:\nbuen(o), mal(o), gran(de), primer(o), tercer(o)\n\n**Місце:** прикметник зазвичай після іменника, але оцінювальні — перед.',
      eng: 'Adjectives agree with the noun in gender and number.\n\n**-o/-a/-os/-as:** bueno, buena, buenos, buenas\n**-e/-es (no gender change):** inteligente, inteligentes\n**consonant/-es:** fácil, fáciles\n\n⚠️ Some adjectives shorten before m. sg. nouns:\nbuen(o), mal(o), gran(de), primer(o), tercer(o)\n\n**Position:** adjective usually after noun, but evaluative ones go before.',
      esp: 'Los adjetivos concuerdan con el sustantivo en género y número.\n\n**-o/-a/-os/-as:** bueno, buena, buenos, buenas\n**-e/-es (sin cambio de género):** inteligente, inteligentes\n**consonante/-es:** fácil, fáciles\n\n⚠️ Algunos adjetivos se acortan antes de sust. m. sg.:\nbuen(o), mal(o), gran(de), primer(o), tercer(o)\n\n**Posición:** el adjetivo generalmente va después del sustantivo, pero los valorativos van antes.',
    },
    examples: [
      { esp: 'Una chica inteligente.', ukr: 'Розумна дівчина.', eng: 'An intelligent girl.' },
      { esp: 'Los coches rojos.', ukr: 'Червоні машини.', eng: 'The red cars.' },
      { esp: 'Un buen amigo.', ukr: 'Хороший друг.', eng: 'A good friend.' },
    ],
  },
  {
    id: 'g5',
    title: { ukr: 'Заперечення', eng: 'Negation', esp: 'Negación' },
    subtitle: { ukr: 'Як будувати заперечні речення', eng: 'How to form negative sentences', esp: 'Cómo formar oraciones negativas' },
    body: {
      ukr: '**Просте заперечення:** no + дієслово\nNo hablo inglés.\n\n**Подвійне заперечення (обов\'язкове!):**\nno ... nada, no ... nadie, no ... nunca, no ... ningún\n\nNo hay nadie. (Нікого немає.)\nNo tengo nada. (У мене нічого немає.)\nNunca/Jamás como carne. (Я ніколи не їм м\'ясо.)\n\n⚠️ Якщо заперечне слово стоїть перед дієсловом, "no" не потрібне:\nNadie habla. / Nunca como.',
      eng: '**Simple negation:** no + verb\nNo hablo inglés.\n\n**Double negation (mandatory!):**\nno ... nada, no ... nadie, no ... nunca, no ... ningún\n\nNo hay nadie. (There is nobody.)\nNo tengo nada. (I have nothing.)\nNunca/Jamás como carne. (I never eat meat.)\n\n⚠️ When negative word comes before the verb, "no" is omitted:\nNadie habla. / Nunca como.',
      esp: '**Negación simple:** no + verbo\nNo hablo inglés.\n\n**Doble negación (¡obligatoria!):**\nno ... nada, no ... nadie, no ... nunca, no ... ningún\n\nNo hay nadie.\nNo tengo nada.\nNunca/Jamás como carne.\n\n⚠️ Si la palabra negativa va antes del verbo, se omite "no":\nNadie habla. / Nunca como.',
    },
    examples: [
      { esp: 'No tengo dinero.', ukr: 'У мене немає грошей.', eng: 'I have no money.' },
      { esp: 'No viene nunca.', ukr: 'Він ніколи не приходить.', eng: 'He never comes.' },
      { esp: 'Nadie lo sabe.', ukr: 'Ніхто цього не знає.', eng: 'Nobody knows it.' },
    ],
  },
  {
    id: 'g6',
    title: { ukr: 'Питальні слова', eng: 'Question Words', esp: 'Palabras Interrogativas' },
    subtitle: { ukr: 'Як ставити запитання', eng: 'How to ask questions', esp: 'Cómo hacer preguntas' },
    body: {
      ukr: '**¿Qué?** — Що? Який?\n**¿Quién? / ¿Quiénes?** — Хто?\n**¿Dónde?** — Де?\n**¿Adónde?** — Куди?\n**¿De dónde?** — Звідки?\n**¿Cuándo?** — Коли?\n**¿Por qué?** — Чому? (причина)\n**¿Para qué?** — Навіщо? (мета)\n**¿Cómo?** — Як?\n**¿Cuánto/a/os/as?** — Скільки?\n**¿Cuál? / ¿Cuáles?** — Який із... / Котрий?\n\n⚠️ Всі питальні слова пишуться з наголосом.',
      eng: '**¿Qué?** — What? Which?\n**¿Quién? / ¿Quiénes?** — Who?\n**¿Dónde?** — Where?\n**¿Adónde?** — Where to?\n**¿De dónde?** — Where from?\n**¿Cuándo?** — When?\n**¿Por qué?** — Why? (reason)\n**¿Para qué?** — What for? (purpose)\n**¿Cómo?** — How?\n**¿Cuánto/a/os/as?** — How much/many?\n**¿Cuál? / ¿Cuáles?** — Which one(s)?\n\n⚠️ All question words carry a written accent.',
      esp: '**¿Qué?** — ¿Qué? ¿Cuál?\n**¿Quién? / ¿Quiénes?** — ¿Quién?\n**¿Dónde?** — ¿Dónde?\n**¿Adónde?** — ¿Adónde?\n**¿De dónde?** — ¿De dónde?\n**¿Cuándo?** — ¿Cuándo?\n**¿Por qué?** — ¿Por qué? (causa)\n**¿Para qué?** — ¿Para qué? (propósito)\n**¿Cómo?** — ¿Cómo?\n**¿Cuánto/a/os/as?** — ¿Cuánto/a/os/as?\n**¿Cuál? / ¿Cuáles?** — ¿Cuál/Cuáles?\n\n⚠️ Todas las palabras interrogativas llevan tilde.',
    },
    examples: [
      { esp: '¿Dónde vives?', ukr: 'Де ти живеш?', eng: 'Where do you live?' },
      { esp: '¿Cuántos años tienes?', ukr: 'Скільки тобі років?', eng: 'How old are you?' },
      { esp: '¿Por qué estudias español?', ukr: 'Чому ти вивчаєш іспанську?', eng: 'Why are you studying Spanish?' },
    ],
  },
];

// ─── VOCABULARY ───────────────────────────────────────────────────────────────
export const vocabulary = [
  {
    id: 'vocab1',
    title: { ukr: 'Числа (0–100)', eng: 'Numbers (0–100)', esp: 'Números (0–100)' },
    subtitle: { ukr: 'Кількісні числівники', eng: 'Cardinal numbers', esp: 'Números cardinales' },
    body: {
      ukr: '0 cero · 1 uno · 2 dos · 3 tres · 4 cuatro · 5 cinco · 6 seis · 7 siete · 8 ocho · 9 nueve · 10 diez\n\n11 once · 12 doce · 13 trece · 14 catorce · 15 quince · 16 dieciséis · 17 diecisiete · 18 dieciocho · 19 diecinueve · 20 veinte\n\n21 veintiuno · 30 treinta · 40 cuarenta · 50 cincuenta · 60 sesenta · 70 setenta · 80 ochenta · 90 noventa · 100 cien\n\n⚠️ 21–29 пишуться разом: veintiuno, veintidós...\n⚠️ 31+ пишуться окремо: treinta y uno',
      eng: '0 cero · 1 uno · 2 dos · 3 tres · 4 cuatro · 5 cinco · 6 seis · 7 siete · 8 ocho · 9 nueve · 10 diez\n\n11 once · 12 doce · 13 trece · 14 catorce · 15 quince · 16 dieciséis · 17 diecisiete · 18 dieciocho · 19 diecinueve · 20 veinte\n\n21 veintiuno · 30 treinta · 40 cuarenta · 50 cincuenta · 60 sesenta · 70 setenta · 80 ochenta · 90 noventa · 100 cien\n\n⚠️ 21–29 written together: veintiuno, veintidós...\n⚠️ 31+ written separately: treinta y uno',
      esp: '0 cero · 1 uno · 2 dos · 3 tres · 4 cuatro · 5 cinco · 6 seis · 7 siete · 8 ocho · 9 nueve · 10 diez\n\n11 once · 12 doce · 13 trece · 14 catorce · 15 quince · 16 dieciséis · 17 diecisiete · 18 dieciocho · 19 diecinueve · 20 veinte\n\n21 veintiuno · 30 treinta · 40 cuarenta · 50 cincuenta · 60 sesenta · 70 setenta · 80 ochenta · 90 noventa · 100 cien\n\n⚠️ 21–29 se escriben juntos: veintiuno, veintidós...\n⚠️ 31+ se escriben separados: treinta y uno',
    },
    examples: [
      { esp: 'Tengo veintidós años.', ukr: 'Мені двадцять два роки.', eng: 'I am twenty-two years old.' },
      { esp: 'Son cincuenta euros.', ukr: 'Це п\'ятдесят євро.', eng: 'That is fifty euros.' },
    ],
  },
  {
    id: 'vocab2',
    title: { ukr: 'Дні тижня і місяці', eng: 'Days and Months', esp: 'Días y Meses' },
    subtitle: { ukr: 'Календар', eng: 'Calendar', esp: 'Calendario' },
    body: {
      ukr: '**Дні:** lunes (пн) · martes (вт) · miércoles (ср) · jueves (чт) · viernes (пт) · sábado (сб) · domingo (нд)\n\n**Місяці:** enero · febrero · marzo · abril · mayo · junio · julio · agosto · septiembre · octubre · noviembre · diciembre\n\n⚠️ Дні і місяці пишуться з малої літери!\n⚠️ el lunes = цього понеділка; los lunes = щопонеділка',
      eng: '**Days:** lunes (Mon) · martes (Tue) · miércoles (Wed) · jueves (Thu) · viernes (Fri) · sábado (Sat) · domingo (Sun)\n\n**Months:** enero · febrero · marzo · abril · mayo · junio · julio · agosto · septiembre · octubre · noviembre · diciembre\n\n⚠️ Days and months are lowercase!\n⚠️ el lunes = this Monday; los lunes = every Monday',
      esp: '**Días:** lunes · martes · miércoles · jueves · viernes · sábado · domingo\n\n**Meses:** enero · febrero · marzo · abril · mayo · junio · julio · agosto · septiembre · octubre · noviembre · diciembre\n\n⚠️ Los días y meses se escriben en minúscula.\n⚠️ el lunes = este lunes; los lunes = cada lunes',
    },
    examples: [
      { esp: 'Hoy es miércoles.', ukr: 'Сьогодні середа.', eng: 'Today is Wednesday.' },
      { esp: 'Mi cumpleaños es en mayo.', ukr: 'Мій день народження в травні.', eng: 'My birthday is in May.' },
    ],
  },
  {
    id: 'vocab3',
    title: { ukr: 'Кольори', eng: 'Colors', esp: 'Colores' },
    subtitle: { ukr: 'Основні кольори', eng: 'Basic colors', esp: 'Colores básicos' },
    body: {
      ukr: 'rojo/a — червоний · azul — синій · verde — зелений · amarillo/a — жовтий · naranja — помаранчевий · morado/a — фіолетовий · rosa — рожевий · blanco/a — білий · negro/a — чорний · gris — сірий · marrón — коричневий · beige — бежевий\n\n⚠️ Кольори — прикметники, тому узгоджуються!\nnegro/a/os/as, rojo/a/os/as\n⚠️ naranja і rosa не змінюються: camisas rosa',
      eng: 'rojo/a — red · azul — blue · verde — green · amarillo/a — yellow · naranja — orange · morado/a — purple · rosa — pink · blanco/a — white · negro/a — black · gris — gray · marrón — brown · beige — beige\n\n⚠️ Colors are adjectives and must agree!\nnegro/a/os/as, rojo/a/os/as\n⚠️ naranja and rosa do not change: camisas rosa',
      esp: 'rojo/a — rojo · azul — azul · verde — verde · amarillo/a — amarillo · naranja — naranja · morado/a — morado · rosa — rosa · blanco/a — blanco · negro/a — negro · gris — gris · marrón — marrón · beige — beige\n\n⚠️ Los colores son adjetivos y deben concordar.\nnegro/a/os/as, rojo/a/os/as\n⚠️ naranja y rosa son invariables: camisas rosa',
    },
    examples: [
      { esp: 'El cielo es azul.', ukr: 'Небо синє.', eng: 'The sky is blue.' },
      { esp: 'Me gustan las flores rojas.', ukr: 'Мені подобаються червоні квіти.', eng: 'I like red flowers.' },
    ],
  },
  {
    id: 'vocab4',
    title: { ukr: 'Сім\'я', eng: 'Family', esp: 'Familia' },
    subtitle: { ukr: 'Члени родини', eng: 'Family members', esp: 'Miembros de la familia' },
    body: {
      ukr: 'padre — тато · madre — мама · hijo/a — син/дочка · hermano/a — брат/сестра · abuelo/a — дід/баба · nieto/a — внук/внучка · tío/a — дядько/тітка · primo/a — двоюрідний брат/сестра · marido/esposo — чоловік · mujer/esposa — дружина · suegro/a — свекор/свекруха · yerno — зять · nuera — невістка · padrino/madrina — хрещений батько/мати\n\n⚠️ los padres = батьки (обоє)\n⚠️ los hermanos = брати і сестри',
      eng: 'padre — father · madre — mother · hijo/a — son/daughter · hermano/a — brother/sister · abuelo/a — grandfather/grandmother · nieto/a — grandson/granddaughter · tío/a — uncle/aunt · primo/a — cousin · marido/esposo — husband · mujer/esposa — wife · suegro/a — father/mother-in-law · yerno — son-in-law · nuera — daughter-in-law · padrino/madrina — godfather/godmother\n\n⚠️ los padres = parents (both)\n⚠️ los hermanos = siblings',
      esp: 'padre — padre · madre — madre · hijo/a — hijo/hija · hermano/a — hermano/hermana · abuelo/a — abuelo/abuela · nieto/a — nieto/nieta · tío/a — tío/tía · primo/a — primo/prima · marido/esposo — marido · mujer/esposa — mujer · suegro/a — suegro/suegra · yerno — yerno · nuera — nuera · padrino/madrina — padrino/madrina\n\n⚠️ los padres = los dos progenitores\n⚠️ los hermanos = hermanos y hermanas',
    },
    examples: [
      { esp: 'Mi hermana se llama Laura.', ukr: 'Мою сестру звати Лаура.', eng: 'My sister is called Laura.' },
      { esp: 'Mis abuelos viven en el campo.', ukr: 'Мої бабуся і дідусь живуть у селі.', eng: 'My grandparents live in the countryside.' },
    ],
  },
  {
    id: 'vocab5',
    title: { ukr: 'Їжа і напої', eng: 'Food and Drinks', esp: 'Comida y Bebidas' },
    subtitle: { ukr: 'Основна лексика', eng: 'Basic vocabulary', esp: 'Vocabulario básico' },
    body: {
      ukr: '**Їжа:** pan (хліб) · arroz (рис) · pasta · carne (м\'ясо) · pescado (риба) · pollo (курка) · huevo (яйце) · queso (сир) · fruta (фрукти) · verdura (овочі) · ensalada (салат) · sopa (суп)\n\n**Напої:** agua (вода) · leche (молоко) · café (кава) · té (чай) · zumo/jugo (сік) · cerveza (пиво) · vino (вино)\n\n**Фрази в ресторані:**\n¿Me trae la carta? — Принесіть меню.\nLa cuenta, por favor. — Рахунок, будь ласка.\nEstá delicioso. — Дуже смачно.',
      eng: '**Food:** pan (bread) · arroz (rice) · pasta · carne (meat) · pescado (fish) · pollo (chicken) · huevo (egg) · queso (cheese) · fruta (fruit) · verdura (vegetables) · ensalada (salad) · sopa (soup)\n\n**Drinks:** agua (water) · leche (milk) · café (coffee) · té (tea) · zumo/jugo (juice) · cerveza (beer) · vino (wine)\n\n**Restaurant phrases:**\n¿Me trae la carta? — Could you bring the menu?\nLa cuenta, por favor. — The bill, please.\nEstá delicioso. — It is delicious.',
      esp: '**Comida:** pan · arroz · pasta · carne · pescado · pollo · huevo · queso · fruta · verdura · ensalada · sopa\n\n**Bebidas:** agua · leche · café · té · zumo/jugo · cerveza · vino\n\n**Frases en el restaurante:**\n¿Me trae la carta? — ¿Me puede traer la carta?\nLa cuenta, por favor.\nEstá delicioso.',
    },
    examples: [
      { esp: '¿Me trae la carta, por favor?', ukr: 'Принесіть меню, будь ласка?', eng: 'Could you bring me the menu, please?' },
      { esp: 'Quiero un vino tinto.', ukr: 'Я хочу червоне вино.', eng: 'I would like a red wine.' },
    ],
  },
  {
    id: 'vocab6',
    title: { ukr: 'Корисні фрази', eng: 'Useful Phrases', esp: 'Frases Útiles' },
    subtitle: { ukr: 'Повсякденне спілкування', eng: 'Everyday communication', esp: 'Comunicación cotidiana' },
    body: {
      ukr: '**Привітання:**\nHola — Привіт · Buenos días — Доброго ранку · Buenas tardes — Доброго дня · Buenas noches — Добрий вечір / На добраніч · Adiós / Hasta luego — До побачення\n\n**Ввічливість:**\nPor favor — Будь ласка · Gracias — Дякую · De nada — Будь ласка (у відповідь) · Perdón / Disculpe — Вибачте · Lo siento — Мені шкода\n\n**Розуміння:**\n¿Puede repetir? — Ви можете повторити? · No entiendo — Я не розумію · ¿Cómo se dice...? — Як сказати...? · Más despacio, por favor — Повільніше, будь ласка\n\n**Знайомство:**\n¿Cómo te llamas? — Як тебе звати? · Mucho gusto — Приємно познайомитися · ¿De dónde eres? — Звідки ти?',
      eng: '**Greetings:**\nHola — Hi · Buenos días — Good morning · Buenas tardes — Good afternoon · Buenas noches — Good evening / Good night · Adiós / Hasta luego — Goodbye\n\n**Politeness:**\nPor favor — Please · Gracias — Thank you · De nada — You\'re welcome · Perdón / Disculpe — Excuse me · Lo siento — I\'m sorry\n\n**Understanding:**\n¿Puede repetir? — Can you repeat? · No entiendo — I don\'t understand · ¿Cómo se dice...? — How do you say...? · Más despacio, por favor — Slower, please\n\n**Introduction:**\n¿Cómo te llamas? — What\'s your name? · Mucho gusto — Nice to meet you · ¿De dónde eres? — Where are you from?',
      esp: '**Saludos:**\nHola · Buenos días · Buenas tardes · Buenas noches · Adiós / Hasta luego\n\n**Cortesía:**\nPor favor · Gracias · De nada · Perdón / Disculpe · Lo siento\n\n**Comprensión:**\n¿Puede repetir? · No entiendo · ¿Cómo se dice...? · Más despacio, por favor\n\n**Presentación:**\n¿Cómo te llamas? · Mucho gusto · ¿De dónde eres?',
    },
    examples: [
      { esp: 'Mucho gusto en conocerte.', ukr: 'Дуже приємно познайомитися.', eng: 'Very nice to meet you.' },
      { esp: '¿Puede hablar más despacio?', ukr: 'Ви можете говорити повільніше?', eng: 'Can you speak more slowly?' },
    ],
  },
  {
    id: 'vocab7',
    title: { ukr: 'Частини тіла', eng: 'Body Parts', esp: 'Partes del Cuerpo' },
    subtitle: { ukr: 'Для лікаря і не тільки', eng: 'For the doctor and beyond', esp: 'Para el médico y más' },
    body: {
      ukr: 'cabeza — голова · pelo — волосся · cara — обличчя · ojo — око · nariz — ніс · boca — рот · oreja/oído — вухо (зовнішнє/внутрішнє) · cuello — шия · hombro — плече · brazo — рука (від плеча) · mano — кисть · dedo — палець · pecho — груди · espalda — спина · estómago/barriga — живіт · pierna — нога (від стегна) · rodilla — коліно · pie — стопа\n\n**Болить = me duele/n:**\nMe duele la cabeza. — У мене болить голова.\nMe duelen los pies. — У мене болять ноги.',
      eng: 'cabeza — head · pelo — hair · cara — face · ojo — eye · nariz — nose · boca — mouth · oreja/oído — ear (outer/inner) · cuello — neck · hombro — shoulder · brazo — arm · mano — hand · dedo — finger · pecho — chest · espalda — back · estómago/barriga — belly · pierna — leg · rodilla — knee · pie — foot\n\n**It hurts = me duele/n:**\nMe duele la cabeza. — My head hurts.\nMe duelen los pies. — My feet hurt.',
      esp: 'cabeza · pelo · cara · ojo · nariz · boca · oreja/oído · cuello · hombro · brazo · mano · dedo · pecho · espalda · estómago/barriga · pierna · rodilla · pie\n\n**Dolor = me duele/n:**\nMe duele la cabeza.\nMe duelen los pies.',
    },
    examples: [
      { esp: 'Me duele la cabeza.', ukr: 'У мене болить голова.', eng: 'I have a headache.' },
      { esp: 'Tengo dolor de estómago.', ukr: 'У мене болить живіт.', eng: 'I have a stomachache.' },
    ],
  },
];
