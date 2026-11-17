import type { Lang } from '../config/site';

type T = Record<Lang, string>;
type L = Record<Lang, string[]>;

export interface Service {
  slug: string;
  icon: string; // key in components/Icon.astro
  category: 'ac' | 'appliance' | 'electrical' | 'commercial' | 'plumbing';
  name: T;
  title: T; // <title> / H1
  short: T; // card + meta description
  intro: L; // paragraphs
  problems: L; // "common problems we fix"
  includes: L; // "what the visit includes"
  faqs: { q: T; a: T }[];
}

export const services: Service[] = [
  {
    slug: 'ac-repair',
    icon: 'snow',
    category: 'ac',
    name: { en: 'AC Repair', ar: 'تصليح المكيفات' },
    title: {
      en: 'AC Repair in Oman — Same-Day Visits',
      ar: 'تصليح المكيفات في عُمان — زيارة في نفس اليوم',
    },
    short: {
      en: 'Split, window, cassette and central AC repair. Fault found and fixed on the first visit in most cases.',
      ar: 'تصليح المكيفات السبليت والشباك والكاسيت والمركزية، مع تشخيص العطل وإصلاحه غالبًا من الزيارة الأولى.',
    },
    intro: {
      en: [
        'When an AC stops cooling in an Omani summer, waiting days for a technician is not an option. We send a trained technician with the common spare parts already in the van, so most faults are diagnosed and fixed in a single visit.',
        'We work on all major brands and every common system type — split, window, cassette, ducted and central units — in homes, offices, shops and villas.',
      ],
      ar: [
        'عندما يتوقف المكيف عن التبريد في صيف عُمان، لا يمكن الانتظار أيامًا حتى يصل الفني. نرسل فنيًا مدرّبًا ومعه قطع الغيار الأكثر استخدامًا، لذلك يتم تشخيص معظم الأعطال وإصلاحها في زيارة واحدة.',
        'نعمل على جميع العلامات التجارية الرئيسية وكل أنواع الأنظمة الشائعة — السبليت والشباك والكاسيت والدكت والمركزي — في المنازل والمكاتب والمحلات والفلل.',
      ],
    },
    problems: {
      en: [
        'AC running but not cooling',
        'Water leaking from the indoor unit',
        'Gas (refrigerant) leaks and low pressure',
        'Compressor or outdoor fan not starting',
        'Strange noises, vibration or bad smell',
        'Remote, thermostat or PCB board faults',
      ],
      ar: [
        'المكيف يعمل لكنه لا يبرّد',
        'تسريب الماء من الوحدة الداخلية',
        'تسريب الغاز وانخفاض الضغط',
        'الكمبروسر أو مروحة الوحدة الخارجية لا تعمل',
        'أصوات غريبة أو اهتزاز أو رائحة كريهة',
        'أعطال الريموت أو الثرموستات أو اللوحة الإلكترونية',
      ],
    },
    includes: {
      en: [
        'Full diagnosis before any work starts',
        'Clear price agreed with you up front',
        'Genuine or high-quality compatible parts',
        'Written warranty on parts and labour',
      ],
      ar: [
        'فحص كامل قبل بدء أي عمل',
        'سعر واضح يُتفق عليه معك مسبقًا',
        'قطع غيار أصلية أو بديلة عالية الجودة',
        'ضمان مكتوب على القطع والعمل',
      ],
    },
    faqs: [
      {
        q: { en: 'How fast can a technician arrive?', ar: 'متى يمكن أن يصل الفني؟' },
        a: {
          en: 'In Muscat we usually arrive the same day, often within a few hours of your call. Response times for other cities are listed on each city page.',
          ar: 'في مسقط نصل عادةً في نفس اليوم، وغالبًا خلال ساعات قليلة من اتصالك. أوقات الوصول للمدن الأخرى موضحة في صفحة كل مدينة.',
        },
      },
      {
        q: { en: 'Do you charge for checking the AC?', ar: 'هل تتقاضون رسومًا على فحص المكيف؟' },
        a: {
          en: 'A small visit fee covers the diagnosis. If you go ahead with the repair, it is deducted from the final bill.',
          ar: 'تغطي رسوم زيارة بسيطة عملية الفحص، وإذا وافقت على الإصلاح تُخصم من الفاتورة النهائية.',
        },
      },
      {
        q: { en: 'Is my repair guaranteed?', ar: 'هل يوجد ضمان على الإصلاح؟' },
        a: {
          en: 'Yes. Every repair comes with a written warranty on the parts we fit and the work we do.',
          ar: 'نعم، كل إصلاح يأتي بضمان مكتوب على القطع التي نركّبها وعلى العمل الذي ننفذه.',
        },
      },
    ],
  },
  {
    slug: 'ac-cleaning-maintenance',
    icon: 'spray',
    category: 'ac',
    name: { en: 'AC Cleaning & Maintenance', ar: 'تنظيف وصيانة المكيفات' },
    title: {
      en: 'AC Cleaning & Maintenance in Oman',
      ar: 'تنظيف وصيانة المكيفات الدورية في عُمان',
    },
    short: {
      en: 'Deep coil cleaning, filter wash, drain flush and gas check. Lower bills, cleaner air, fewer breakdowns.',
      ar: 'تنظيف عميق للملفات وغسل الفلاتر وتسليك التصريف وفحص الغاز، لفواتير أقل وهواء أنظف وأعطال أقل.',
    },
    intro: {
      en: [
        'Dust and humidity build up fast in Oman. A dirty AC works harder, cools less and costs more to run. Regular deep cleaning keeps cooling strong and can noticeably reduce your electricity bill.',
        'We clean indoor and outdoor units properly — not just the filters — and check gas pressure, drainage and electrical connections on every visit. Annual maintenance contracts are available for homes and businesses.',
      ],
      ar: [
        'يتراكم الغبار والرطوبة بسرعة في عُمان، والمكيف المتّسخ يعمل بجهد أكبر ويبرّد أقل ويستهلك كهرباء أكثر. التنظيف العميق المنتظم يحافظ على قوة التبريد ويمكن أن يخفض فاتورة الكهرباء بشكل ملحوظ.',
        'ننظف الوحدات الداخلية والخارجية تنظيفًا حقيقيًا — وليس الفلاتر فقط — ونفحص ضغط الغاز والتصريف والتوصيلات الكهربائية في كل زيارة. تتوفر عقود صيانة سنوية للمنازل والشركات.',
      ],
    },
    problems: {
      en: [
        'Weak airflow or uneven cooling',
        'Musty smell when the AC starts',
        'High electricity bills',
        'Dripping or blocked drain pipe',
        'Allergies or dust in the room',
        'Outdoor unit clogged with sand',
      ],
      ar: [
        'ضعف تدفق الهواء أو تبريد غير متساوٍ',
        'رائحة رطوبة عند تشغيل المكيف',
        'ارتفاع فواتير الكهرباء',
        'تنقيط الماء أو انسداد أنبوب التصريف',
        'حساسية أو غبار في الغرفة',
        'انسداد الوحدة الخارجية بالرمل',
      ],
    },
    includes: {
      en: [
        'Indoor coil and blower deep clean',
        'Filter wash and drain line flush',
        'Outdoor unit coil wash',
        'Gas pressure and electrical safety check',
      ],
      ar: [
        'تنظيف عميق لملف ومروحة الوحدة الداخلية',
        'غسل الفلاتر وتسليك خط التصريف',
        'غسل ملف الوحدة الخارجية',
        'فحص ضغط الغاز والسلامة الكهربائية',
      ],
    },
    faqs: [
      {
        q: { en: 'How often should an AC be cleaned in Oman?', ar: 'كم مرة يجب تنظيف المكيف في عُمان؟' },
        a: {
          en: 'We recommend a deep clean every 3–4 months for units used daily, and at least before and after the summer peak.',
          ar: 'ننصح بتنظيف عميق كل 3 إلى 4 أشهر للمكيفات المستخدمة يوميًا، وعلى الأقل قبل ذروة الصيف وبعدها.',
        },
      },
      {
        q: { en: 'How long does cleaning take?', ar: 'كم تستغرق عملية التنظيف؟' },
        a: {
          en: 'About 45–60 minutes per split unit, including the outdoor unit.',
          ar: 'حوالي 45 إلى 60 دقيقة لكل وحدة سبليت، شاملة الوحدة الخارجية.',
        },
      },
      {
        q: { en: 'Do you offer maintenance contracts?', ar: 'هل تقدمون عقود صيانة؟' },
        a: {
          en: 'Yes. Annual contracts include scheduled cleanings and priority call-outs for homes, villas, offices and buildings.',
          ar: 'نعم، تشمل العقود السنوية زيارات تنظيف مجدولة وأولوية في الاستجابة للمنازل والفلل والمكاتب والمباني.',
        },
      },
    ],
  },
  {
    slug: 'ac-installation',
    icon: 'tools',
    category: 'ac',
    name: { en: 'AC Installation', ar: 'تركيب المكيفات' },
    title: {
      en: 'AC Installation & Relocation in Oman',
      ar: 'تركيب ونقل المكيفات في عُمان',
    },
    short: {
      en: 'New AC installation, removal and relocation with correct sizing, neat piping and a proper vacuum and gas charge.',
      ar: 'تركيب مكيفات جديدة وفكّها ونقلها، مع اختيار القدرة المناسبة وتمديد مرتب وتفريغ وشحن غاز صحيح.',
    },
    intro: {
      en: [
        'Most AC problems start with a poor installation. We size the unit to the room, mount it level, run neat insulated piping and vacuum the system before charging gas — the steps that decide how well and how long your AC will run.',
        'Moving home? We remove, transport and reinstall your units, and can supply new units if you need them.',
      ],
      ar: [
        'تبدأ معظم مشاكل المكيفات بتركيب سيئ. نختار القدرة المناسبة لحجم الغرفة، ونثبت الوحدة بشكل مستوٍ، ونمدد أنابيب معزولة ومرتبة، ونفرّغ النظام قبل شحن الغاز — وهي الخطوات التي تحدد كفاءة المكيف وعمره.',
        'هل تنتقل إلى منزل جديد؟ نفك مكيفاتك وننقلها ونعيد تركيبها، ويمكننا توفير وحدات جديدة عند الحاجة.',
      ],
    },
    problems: {
      en: [
        'New split or window AC installation',
        'AC removal and reinstallation when moving',
        'Wrong-size unit for the room',
        'Noisy or badly mounted outdoor unit',
        'Messy or exposed piping',
        'Adding a unit to a new room',
      ],
      ar: [
        'تركيب مكيف سبليت أو شباك جديد',
        'فك وإعادة تركيب المكيف عند الانتقال',
        'مكيف بقدرة غير مناسبة للغرفة',
        'وحدة خارجية مزعجة أو مثبتة بشكل سيئ',
        'تمديدات أنابيب مكشوفة أو غير مرتبة',
        'إضافة مكيف لغرفة جديدة',
      ],
    },
    includes: {
      en: [
        'Room assessment and correct sizing',
        'Brackets, insulated copper piping and drain',
        'Vacuum, leak test and gas charge',
        'Test run and clean-up after the job',
      ],
      ar: [
        'معاينة الغرفة واختيار القدرة المناسبة',
        'حوامل وأنابيب نحاس معزولة وتصريف',
        'تفريغ واختبار تسريب وشحن غاز',
        'تشغيل تجريبي وتنظيف المكان بعد العمل',
      ],
    },
    faqs: [
      {
        q: { en: 'What size AC do I need?', ar: 'ما قدرة المكيف المناسبة لي؟' },
        a: {
          en: 'It depends on room size, sun exposure and ceiling height. As a rough guide, a 12–15 m² bedroom needs about 1.5 ton in Oman. We confirm on site.',
          ar: 'يعتمد ذلك على مساحة الغرفة وتعرضها للشمس وارتفاع السقف. كتقدير تقريبي، تحتاج غرفة نوم بمساحة 12 إلى 15 م² إلى حوالي 1.5 طن في عُمان، ونؤكد ذلك عند المعاينة.',
        },
      },
      {
        q: { en: 'Can you install an AC I bought elsewhere?', ar: 'هل يمكنكم تركيب مكيف اشتريته من مكان آخر؟' },
        a: {
          en: 'Yes, we install units from any shop or brand.',
          ar: 'نعم، نركّب المكيفات من أي محل وأي علامة تجارية.',
        },
      },
      {
        q: { en: 'How long does installation take?', ar: 'كم يستغرق التركيب؟' },
        a: {
          en: 'A standard split unit takes 2–3 hours. Longer pipe runs or core drilling can add time.',
          ar: 'يستغرق تركيب وحدة سبليت عادية من ساعتين إلى ثلاث ساعات، وقد تزيد المدة مع الأنابيب الطويلة أو ثقب الجدران.',
        },
      },
    ],
  },
  {
    slug: 'washing-machine-repair',
    icon: 'washer',
    category: 'appliance',
    name: { en: 'Washing Machine Repair', ar: 'تصليح الغسالات' },
    title: {
      en: 'Washing Machine Repair in Oman — Front & Top Load',
      ar: 'تصليح الغسالات في عُمان — تحميل أمامي وعلوي',
    },
    short: {
      en: 'Front-load, top-load and washer-dryer repair at your home. Drain, spin, door, motor and error-code faults.',
      ar: 'تصليح الغسالات ذات التحميل الأمامي والعلوي والغسالات المجففة في منزلك: أعطال التصريف والعصر والباب والموتور ورموز الأخطاء.',
    },
    intro: {
      en: [
        'A broken washing machine piles up laundry fast. Our technicians repair automatic and semi-automatic machines at your home, with common parts such as pumps, belts, door locks and valves carried on the van.',
        'We read error codes, test the motor and control board, and tell you honestly if a repair is worth it compared with replacing the machine.',
      ],
      ar: [
        'الغسالة المعطلة تعني تراكم الغسيل بسرعة. يصلح فنيونا الغسالات الأوتوماتيكية ونصف الأوتوماتيكية في منزلك، ويحملون معهم القطع الشائعة مثل المضخات والسيور وأقفال الأبواب والصمامات.',
        'نقرأ رموز الأخطاء ونفحص الموتور واللوحة الإلكترونية، ونخبرك بصراحة إذا كان الإصلاح مجديًا مقارنة باستبدال الغسالة.',
      ],
    },
    problems: {
      en: [
        'Not draining or water left in the drum',
        'Drum not spinning',
        'Loud banging or shaking during spin',
        'Door will not open or lock',
        'Leaking water',
        'Error code on display',
      ],
      ar: [
        'لا تصرّف الماء أو يبقى الماء في الحوض',
        'الحوض لا يدور',
        'صوت طرق عالٍ أو اهتزاز أثناء العصر',
        'الباب لا يفتح أو لا يُقفل',
        'تسريب الماء',
        'ظهور رمز خطأ على الشاشة',
      ],
    },
    includes: {
      en: [
        'Error-code and component diagnosis',
        'On-site repair with common parts in stock',
        'Leak and full-cycle test after repair',
        'Written warranty on the repair',
      ],
      ar: [
        'تشخيص رموز الأخطاء والمكونات',
        'إصلاح في الموقع مع توفر القطع الشائعة',
        'اختبار التسريب ودورة كاملة بعد الإصلاح',
        'ضمان مكتوب على الإصلاح',
      ],
    },
    faqs: [
      {
        q: { en: 'Do you repair all brands?', ar: 'هل تصلحون جميع الماركات؟' },
        a: {
          en: 'Yes — we repair all common washing machine brands sold in Oman. We are an independent service, not an authorised brand agent.',
          ar: 'نعم، نصلح جميع ماركات الغسالات الشائعة في عُمان. نحن خدمة مستقلة ولسنا وكيلًا معتمدًا لأي علامة تجارية.',
        },
      },
      {
        q: { en: 'Can it be fixed at home?', ar: 'هل يمكن إصلاحها في المنزل؟' },
        a: {
          en: 'Most repairs are done at your home. Major jobs like drum bearings may need a workshop visit — we will tell you first.',
          ar: 'معظم الإصلاحات تتم في منزلك. قد تحتاج الأعمال الكبيرة مثل تغيير رولمان الحوض إلى الورشة، وسنخبرك بذلك مسبقًا.',
        },
      },
      {
        q: { en: 'Is it worth repairing an old machine?', ar: 'هل يستحق إصلاح غسالة قديمة؟' },
        a: {
          en: 'If the repair costs more than about half the price of a new machine, we will say so and let you decide.',
          ar: 'إذا تجاوزت تكلفة الإصلاح نصف سعر غسالة جديدة تقريبًا، سنوضح لك ذلك ونترك لك القرار.',
        },
      },
    ],
  },
  {
    slug: 'refrigerator-repair',
    icon: 'fridge',
    category: 'appliance',
    name: { en: 'Refrigerator Repair', ar: 'تصليح الثلاجات' },
    title: {
      en: 'Refrigerator & Freezer Repair in Oman',
      ar: 'تصليح الثلاجات والفريزرات في عُمان',
    },
    short: {
      en: 'Fridge not cooling, freezer icing up or leaking? Same-day fridge and freezer repair for all types.',
      ar: 'الثلاجة لا تبرّد أو الفريزر يتجمد أو يسرّب الماء؟ تصليح الثلاجات والفريزرات بجميع أنواعها في نفس اليوم.',
    },
    intro: {
      en: [
        'A fridge that stops cooling puts your food at risk, so we treat it as urgent. We repair single-door, double-door, side-by-side and French-door fridges as well as chest and upright freezers.',
        'Common fixes — thermostats, defrost heaters, fans, door seals and gas recharges — are usually done on the first visit.',
      ],
      ar: [
        'توقف الثلاجة عن التبريد يعرّض طعامك للتلف، لذلك نتعامل معه كحالة عاجلة. نصلح الثلاجات ذات الباب الواحد والبابين والجنب إلى جنب والأبواب الفرنسية، إضافة إلى الفريزرات الأفقية والعمودية.',
        'الإصلاحات الشائعة — الثرموستات وسخانات إذابة الثلج والمراوح وجلدات الأبواب وشحن الغاز — تتم عادة من الزيارة الأولى.',
      ],
    },
    problems: {
      en: [
        'Fridge not cooling or freezer too warm',
        'Ice build-up in the freezer',
        'Water leaking under the fridge',
        'Fridge running constantly or very noisy',
        'Door seal not closing properly',
        'Ice maker or water dispenser not working',
      ],
      ar: [
        'الثلاجة لا تبرّد أو الفريزر غير بارد بما يكفي',
        'تراكم الثلج في الفريزر',
        'تسريب الماء أسفل الثلاجة',
        'الثلاجة تعمل باستمرار أو تصدر صوتًا عاليًا',
        'جلدة الباب لا تُغلق جيدًا',
        'صانع الثلج أو موزع الماء لا يعمل',
      ],
    },
    includes: {
      en: [
        'Temperature and gas pressure check',
        'Thermostat, fan and defrost system test',
        'Repair with tested parts',
        'Written warranty on the repair',
      ],
      ar: [
        'فحص الحرارة وضغط الغاز',
        'اختبار الثرموستات والمروحة ونظام إذابة الثلج',
        'إصلاح بقطع مُختبرة',
        'ضمان مكتوب على الإصلاح',
      ],
    },
    faqs: [
      {
        q: { en: 'My fridge is not cooling but the light is on — why?', ar: 'الثلاجة لا تبرّد لكن الإضاءة تعمل، ما السبب؟' },
        a: {
          en: 'Usually a faulty thermostat, fan, defrost system or a gas leak. Our technician will find the exact cause on site.',
          ar: 'غالبًا يكون السبب عطلًا في الثرموستات أو المروحة أو نظام إذابة الثلج أو تسريبًا في الغاز، وسيحدد الفني السبب بدقة في الموقع.',
        },
      },
      {
        q: { en: 'Should I unplug the fridge while I wait?', ar: 'هل أفصل الثلاجة عن الكهرباء أثناء الانتظار؟' },
        a: {
          en: 'If it is icing up, unplugging it for a few hours can help. If it is not cooling at all, keep the doors closed and call us.',
          ar: 'إذا كان الثلج يتراكم فقد يفيد فصلها لبضع ساعات. أما إذا كانت لا تبرّد إطلاقًا فأبقِ الأبواب مغلقة واتصل بنا.',
        },
      },
      {
        q: { en: 'Do you repair commercial fridges?', ar: 'هل تصلحون الثلاجات التجارية؟' },
        a: {
          en: 'Yes, including display chillers and freezers for shops and restaurants.',
          ar: 'نعم، بما في ذلك ثلاجات العرض والفريزرات الخاصة بالمحلات والمطاعم.',
        },
      },
    ],
  },
  {
    slug: 'oven-cooker-repair',
    icon: 'oven',
    category: 'appliance',
    name: { en: 'Oven & Cooker Repair', ar: 'تصليح الأفران والطباخات' },
    title: {
      en: 'Oven, Cooker & Hob Repair in Oman',
      ar: 'تصليح الأفران والطباخات والمواقد في عُمان',
    },
    short: {
      en: 'Gas and electric oven, cooker and hob repair: ignition, burners, heating elements, thermostats and doors.',
      ar: 'تصليح الأفران والطباخات والمواقد بالغاز والكهرباء: الإشعال والشعلات وعناصر التسخين والثرموستات والأبواب.',
    },
    intro: {
      en: [
        'We repair freestanding cookers, built-in ovens and gas or electric hobs. Gas work is done with safety first — every repair finishes with a leak test.',
        'From a burner that will not light to an oven that will not heat, our technicians fix the fault at your home in most cases.',
      ],
      ar: [
        'نصلح الطباخات المستقلة والأفران المدمجة والمواقد بالغاز أو الكهرباء. نعمل على أجهزة الغاز مع إعطاء الأولوية للسلامة، وينتهي كل إصلاح باختبار للتسريب.',
        'من شعلة لا تشتعل إلى فرن لا يسخن، يصلح فنيونا العطل في منزلك في معظم الحالات.',
      ],
    },
    problems: {
      en: [
        'Burner or oven will not ignite',
        'Oven not heating or heating unevenly',
        'Gas smell near the cooker',
        'Faulty knobs, timer or thermostat',
        'Oven door or hinge broken',
        'Electric hob not turning on',
      ],
      ar: [
        'الشعلة أو الفرن لا يشتعل',
        'الفرن لا يسخن أو يسخن بشكل غير متساوٍ',
        'رائحة غاز قرب الطباخ',
        'أعطال المفاتيح أو المؤقت أو الثرموستات',
        'كسر في باب الفرن أو مفصّلاته',
        'الموقد الكهربائي لا يعمل',
      ],
    },
    includes: {
      en: [
        'Ignition, burner and element testing',
        'Gas leak test on every gas appliance',
        'Thermostat and control repair',
        'Written warranty on the repair',
      ],
      ar: [
        'اختبار الإشعال والشعلات وعناصر التسخين',
        'اختبار تسريب الغاز لكل جهاز يعمل بالغاز',
        'إصلاح الثرموستات ووحدة التحكم',
        'ضمان مكتوب على الإصلاح',
      ],
    },
    faqs: [
      {
        q: { en: 'I can smell gas — what should I do?', ar: 'أشم رائحة غاز، ماذا أفعل؟' },
        a: {
          en: 'Turn off the gas supply, open windows, do not use switches or flames, leave the area and call for help immediately.',
          ar: 'أغلق مصدر الغاز وافتح النوافذ، ولا تستخدم مفاتيح الكهرباء أو أي لهب، واخرج من المكان واطلب المساعدة فورًا.',
        },
      },
      {
        q: { en: 'Do you repair built-in ovens?', ar: 'هل تصلحون الأفران المدمجة؟' },
        a: {
          en: 'Yes, built-in and freestanding ovens, gas and electric.',
          ar: 'نعم، الأفران المدمجة والمستقلة بالغاز والكهرباء.',
        },
      },
      {
        q: { en: 'Can you convert a cooker between gas types?', ar: 'هل يمكنكم تحويل الطباخ بين أنواع الغاز؟' },
        a: {
          en: 'Where the manufacturer supports it, yes. We will check your model first.',
          ar: 'نعم، إذا كان الطراز يدعم ذلك من المصنّع، وسنتحقق من طرازك أولًا.',
        },
      },
    ],
  },
  {
    slug: 'dishwasher-repair',
    icon: 'dish',
    category: 'appliance',
    name: { en: 'Dishwasher Repair', ar: 'تصليح غسالات الصحون' },
    title: { en: 'Dishwasher Repair in Oman', ar: 'تصليح غسالات الصحون في عُمان' },
    short: {
      en: 'Dishwasher not draining, not cleaning or leaking? Freestanding and built-in dishwasher repair at home.',
      ar: 'غسالة الصحون لا تصرّف أو لا تنظف أو تسرّب الماء؟ تصليح غسالات الصحون المستقلة والمدمجة في المنزل.',
    },
    intro: {
      en: [
        'We repair freestanding and integrated dishwashers, covering drainage, heating, spray arms, door seals and electronic faults.',
        'Hard water is a common cause of trouble in Oman. Along with the repair, we can advise on salt, rinse aid and cleaning to keep your machine working longer.',
      ],
      ar: [
        'نصلح غسالات الصحون المستقلة والمدمجة، بما يشمل التصريف والتسخين وأذرع الرش وجلدات الأبواب والأعطال الإلكترونية.',
        'الماء العسر سبب شائع للمشاكل في عُمان، ومع الإصلاح نقدم نصائح حول الملح ومادة الشطف والتنظيف لإطالة عمر الجهاز.',
      ],
    },
    problems: {
      en: [
        'Water left in the bottom after a cycle',
        'Dishes not clean or still greasy',
        'Not heating or not drying',
        'Leaking from the door',
        'Will not start or stops mid-cycle',
        'Error lights flashing',
      ],
      ar: [
        'بقاء الماء في القاع بعد الدورة',
        'الصحون غير نظيفة أو ما زالت دهنية',
        'لا تسخن أو لا تجفف',
        'تسريب من الباب',
        'لا تعمل أو تتوقف أثناء الدورة',
        'وميض أضواء الأخطاء',
      ],
    },
    includes: {
      en: [
        'Pump, filter and spray arm check',
        'Heater and thermostat test',
        'Seal and leak inspection',
        'Written warranty on the repair',
      ],
      ar: [
        'فحص المضخة والفلتر وأذرع الرش',
        'اختبار السخان والثرموستات',
        'فحص الجلدات والتسريب',
        'ضمان مكتوب على الإصلاح',
      ],
    },
    faqs: [
      {
        q: { en: 'Why is there water in my dishwasher?', ar: 'لماذا يبقى الماء في غسالة الصحون؟' },
        a: {
          en: 'Usually a blocked filter, drain hose or a failed drain pump. Cleaning the filter sometimes solves it; otherwise call us.',
          ar: 'غالبًا بسبب انسداد الفلتر أو خرطوم التصريف أو تعطل مضخة التصريف. أحيانًا يكفي تنظيف الفلتر، وإلا فاتصل بنا.',
        },
      },
      {
        q: { en: 'Do you repair built-in models?', ar: 'هل تصلحون الطرازات المدمجة؟' },
        a: {
          en: 'Yes, including fully integrated units behind kitchen panels.',
          ar: 'نعم، بما في ذلك الوحدات المدمجة بالكامل خلف ألواح المطبخ.',
        },
      },
      {
        q: { en: 'How long does a repair take?', ar: 'كم يستغرق الإصلاح؟' },
        a: {
          en: 'Most dishwasher repairs take 1–2 hours.',
          ar: 'تستغرق معظم إصلاحات غسالات الصحون من ساعة إلى ساعتين.',
        },
      },
    ],
  },
  {
    slug: 'water-heater-repair',
    icon: 'heater',
    category: 'appliance',
    name: { en: 'Water Heater Repair', ar: 'تصليح سخانات الماء' },
    title: {
      en: 'Water Heater Repair & Installation in Oman',
      ar: 'تصليح وتركيب سخانات الماء في عُمان',
    },
    short: {
      en: 'Electric water heater repair and replacement: no hot water, tripping, leaks and thermostat faults.',
      ar: 'تصليح واستبدال سخانات الماء الكهربائية: انقطاع الماء الساخن وفصل الكهرباء والتسريب وأعطال الثرموستات.',
    },
    intro: {
      en: [
        'No hot water, a heater that keeps tripping the power, or a tank that leaks — we repair and replace electric water heaters of all common sizes.',
        'We test the element, thermostat and safety valve, and can descale the tank to restore performance in hard-water areas.',
      ],
      ar: [
        'انقطاع الماء الساخن، أو سخان يفصل الكهرباء باستمرار، أو خزان يسرّب الماء — نصلح ونستبدل سخانات الماء الكهربائية بجميع الأحجام الشائعة.',
        'نفحص عنصر التسخين والثرموستات وصمام الأمان، ويمكننا إزالة الترسبات من الخزان لاستعادة الأداء في المناطق ذات الماء العسر.',
      ],
    },
    problems: {
      en: [
        'No hot water or lukewarm water',
        'Heater trips the circuit breaker',
        'Leaking tank or pipes',
        'Water too hot or temperature unstable',
        'Rusty or smelly hot water',
        'Old heater needing replacement',
      ],
      ar: [
        'لا يوجد ماء ساخن أو الماء فاتر',
        'السخان يفصل قاطع الكهرباء',
        'تسريب من الخزان أو الأنابيب',
        'الماء ساخن جدًا أو الحرارة غير مستقرة',
        'ماء ساخن بلون الصدأ أو برائحة',
        'سخان قديم يحتاج إلى استبدال',
      ],
    },
    includes: {
      en: [
        'Element and thermostat test',
        'Safety valve check',
        'Descaling when needed',
        'Written warranty on the repair',
      ],
      ar: [
        'اختبار عنصر التسخين والثرموستات',
        'فحص صمام الأمان',
        'إزالة الترسبات عند الحاجة',
        'ضمان مكتوب على الإصلاح',
      ],
    },
    faqs: [
      {
        q: { en: 'Why does my water heater trip the breaker?', ar: 'لماذا يفصل السخان قاطع الكهرباء؟' },
        a: {
          en: 'Most often a burnt-out heating element or a wiring fault. Switch it off and have it checked — it is a safety issue.',
          ar: 'غالبًا بسبب احتراق عنصر التسخين أو عطل في التوصيلات. أطفئه واطلب فحصه، فهذه مسألة تتعلق بالسلامة.',
        },
      },
      {
        q: { en: 'Do you supply new heaters?', ar: 'هل توفرون سخانات جديدة؟' },
        a: {
          en: 'Yes, we can supply and install a new heater if repair is not worth it.',
          ar: 'نعم، يمكننا توفير سخان جديد وتركيبه إذا لم يكن الإصلاح مجديًا.',
        },
      },
      {
        q: { en: 'How long do water heaters last?', ar: 'كم يدوم سخان الماء؟' },
        a: {
          en: 'Typically 8–12 years. Hard water can shorten that without regular descaling.',
          ar: 'عادة من 8 إلى 12 سنة، وقد يقصر عمره بسبب الماء العسر إذا لم تتم إزالة الترسبات بانتظام.',
        },
      },
    ],
  },
  {
    slug: 'electrical-works',
    icon: 'plug',
    category: 'electrical',
    name: { en: 'Electrical Works', ar: 'الأعمال الكهربائية' },
    title: {
      en: 'Electrician & Electrical Works in Oman',
      ar: 'كهربائي وأعمال كهربائية في عُمان',
    },
    short: {
      en: 'Electrician for homes, shops and offices: tripping breakers, wiring, sockets, lights, fans and DB boards.',
      ar: 'كهربائي للمنازل والمحلات والمكاتب: فصل القواطع والتمديدات والأفياش والإنارة والمراوح ولوحات التوزيع.',
    },
    intro: {
      en: [
        'From a breaker that keeps tripping to a full rewiring job, our electricians find the fault safely and fix it properly. We work in villas, apartments, shops, offices and workshops.',
        'Electrical faults are a safety risk, so every job ends with testing: correct breaker sizes, proper earthing and no loose connections. We also install the dedicated circuits that ACs, water heaters and ovens need.',
      ],
      ar: [
        'من قاطع يفصل باستمرار إلى إعادة تمديد كاملة، يحدد كهربائيونا العطل بأمان ويصلحونه بشكل صحيح. نعمل في الفلل والشقق والمحلات والمكاتب والورش.',
        'الأعطال الكهربائية خطر على السلامة، لذلك ينتهي كل عمل بالاختبار: قواطع بالقدرة الصحيحة وتأريض سليم ولا توصيلات مرتخية. كما نمدد الخطوط المخصصة التي تحتاجها المكيفات وسخانات الماء والأفران.',
      ],
    },
    problems: {
      en: [
        'Breaker or RCD keeps tripping',
        'Power cut in part of the house',
        'Burning smell, sparking or hot sockets',
        'New sockets, switches and light points',
        'Ceiling fan, light and chandelier installation',
        'DB board upgrade and dedicated AC lines',
      ],
      ar: [
        'القاطع أو قاطع التسريب يفصل باستمرار',
        'انقطاع الكهرباء عن جزء من المنزل',
        'رائحة احتراق أو شرر أو أفياش ساخنة',
        'تركيب أفياش ومفاتيح ونقاط إنارة جديدة',
        'تركيب المراوح السقفية والإنارة والثريات',
        'تحديث لوحة التوزيع وتمديد خطوط مخصصة للمكيفات',
      ],
    },
    includes: {
      en: [
        'Safe fault finding with proper test equipment',
        'Price agreed before work starts',
        'Quality cables, breakers and fittings',
        'Testing and written warranty on the work',
      ],
      ar: [
        'تحديد آمن للأعطال بأجهزة قياس مناسبة',
        'سعر متفق عليه قبل بدء العمل',
        'كابلات وقواطع وتجهيزات عالية الجودة',
        'اختبار بعد العمل وضمان مكتوب',
      ],
    },
    faqs: [
      {
        q: { en: 'Why does my breaker keep tripping?', ar: 'لماذا يفصل القاطع باستمرار؟' },
        a: {
          en: 'Usually an overloaded circuit, a faulty appliance or a wiring fault such as a short or earth leakage. Unplug appliances on that circuit and call us — don’t keep resetting it.',
          ar: 'غالبًا بسبب حمل زائد على الخط أو جهاز معطل أو عطل في التمديدات مثل تماس أو تسريب أرضي. افصل الأجهزة على ذلك الخط واتصل بنا، ولا تكرر إعادة تشغيله.',
        },
      },
      {
        q: { en: 'I smell burning from a socket — what should I do?', ar: 'أشم رائحة احتراق من فيش، ماذا أفعل؟' },
        a: {
          en: 'Switch off that circuit at the breaker, stop using the socket and call an electrician straight away. Overheating sockets can start fires.',
          ar: 'افصل ذلك الخط من القاطع، وتوقف عن استخدام الفيش، واتصل بكهربائي فورًا، فالأفياش التي ترتفع حرارتها قد تسبب حريقًا.',
        },
      },
      {
        q: { en: 'Do you do electrical work for shops and offices?', ar: 'هل تنفذون أعمالًا كهربائية للمحلات والمكاتب؟' },
        a: {
          en: 'Yes — lighting, sockets, DB boards and maintenance for shops, offices, restaurants and workshops.',
          ar: 'نعم، الإنارة والأفياش ولوحات التوزيع والصيانة للمحلات والمكاتب والمطاعم والورش.',
        },
      },
    ],
  },
  {
    slug: 'bakery-machine-repair',
    icon: 'bread',
    category: 'commercial',
    name: { en: 'Bakery Machine Repair', ar: 'صيانة معدات المخابز' },
    title: {
      en: 'Bakery Machine & Oven Repair in Oman',
      ar: 'صيانة أفران ومعدات المخابز في عُمان',
    },
    short: {
      en: 'Repair and maintenance of bakery ovens, dough mixers, proofers, sheeters and bread slicers for bakeries and restaurants.',
      ar: 'إصلاح وصيانة أفران المخابز وعجانات العجين وغرف التخمير وفرادات العجين وقطاعات الخبز للمخابز والمطاعم.',
    },
    intro: {
      en: [
        'When a bakery oven or mixer stops, production stops. We repair and maintain commercial bakery equipment for bakeries, sweet shops, restaurants, hotels and central kitchens across Oman, with fast call-outs to keep downtime short.',
        'Our technicians handle the electrical, heating, motor and control faults behind most breakdowns, and planned maintenance helps prevent them before the morning rush.',
      ],
      ar: [
        'عندما يتوقف فرن أو عجّانة المخبز يتوقف الإنتاج. نصلح ونصون معدات المخابز التجارية للمخابز ومحلات الحلويات والمطاعم والفنادق والمطابخ المركزية في عُمان، مع استجابة سريعة لتقليل فترة التوقف.',
        'يتعامل فنيونا مع الأعطال الكهربائية وأعطال التسخين والمحركات ووحدات التحكم التي تقف وراء معظم الأعطال، وتساعد الصيانة الدورية على تجنبها قبل ذروة الصباح.',
      ],
    },
    problems: {
      en: [
        'Deck, rotary or convection oven not heating',
        'Uneven baking or temperature problems',
        'Spiral or planetary mixer motor and belt faults',
        'Proofer not holding heat or humidity',
        'Dough sheeter, divider or bread slicer faults',
        'Control panel, timer and thermostat failures',
      ],
      ar: [
        'فرن الطوابق أو الدوار أو الحراري لا يسخن',
        'خبز غير متساوٍ أو مشاكل في الحرارة',
        'أعطال محرك أو سير العجانة الحلزونية أو الكوكبية',
        'غرفة التخمير لا تحافظ على الحرارة أو الرطوبة',
        'أعطال فرادة العجين أو مقسمة العجين أو قطاعة الخبز',
        'أعطال لوحة التحكم والمؤقت والثرموستات',
      ],
    },
    includes: {
      en: [
        'On-site diagnosis at your bakery',
        'Clear quote before repair',
        'Heating elements, motors, belts and controls replaced',
        'Planned maintenance contracts available',
      ],
      ar: [
        'تشخيص في موقع المخبز',
        'عرض سعر واضح قبل الإصلاح',
        'استبدال عناصر التسخين والمحركات والسيور ووحدات التحكم',
        'تتوفر عقود صيانة دورية',
      ],
    },
    faqs: [
      {
        q: { en: 'Which bakery machines do you repair?', ar: 'ما معدات المخابز التي تصلحونها؟' },
        a: {
          en: 'Deck, rotary and convection ovens, spiral and planetary mixers, proofers, dough sheeters, dividers and bread slicers.',
          ar: 'أفران الطوابق والدوارة والحرارية، والعجانات الحلزونية والكوكبية، وغرف التخمير، وفرادات ومقسمات العجين، وقطاعات الخبز.',
        },
      },
      {
        q: { en: 'Can you come early before the bakery opens?', ar: 'هل يمكنكم الحضور مبكرًا قبل فتح المخبز؟' },
        a: {
          en: 'Yes. Tell us your production hours and we will schedule urgent repairs and maintenance around them.',
          ar: 'نعم، أخبرنا بساعات الإنتاج لديك وسنجدول الإصلاحات العاجلة والصيانة بما يناسبها.',
        },
      },
      {
        q: { en: 'Do you offer maintenance contracts for bakeries?', ar: 'هل تقدمون عقود صيانة للمخابز؟' },
        a: {
          en: 'Yes. Regular servicing of ovens and mixers reduces breakdowns and keeps baking consistent.',
          ar: 'نعم، الصيانة المنتظمة للأفران والعجانات تقلل الأعطال وتحافظ على جودة الخبز.',
        },
      },
    ],
  },
  {
    slug: 'plumbing',
    icon: 'pipe',
    category: 'plumbing',
    name: { en: 'Plumbing', ar: 'السباكة' },
    title: {
      en: 'Plumber & Plumbing Services in Muscat, Oman',
      ar: 'سباك وخدمات السباكة في مسقط، عُمان',
    },
    short: {
      en: 'Plumber for leaks, blocked drains, taps, toilets, water tanks, pumps and pipe repairs in homes and businesses.',
      ar: 'سباك لإصلاح التسريبات وانسداد المجاري والحنفيات والمراحيض وخزانات المياه والمضخات وتمديدات الأنابيب في المنازل والشركات.',
    },
    intro: {
      en: [
        'A leaking pipe or blocked drain can damage walls and floors fast. Our plumbers find the source of the problem and fix it properly, in villas, apartments, shops and offices.',
        'We also handle water tanks, booster pumps and water heater connections — common trouble spots in Omani homes where water pressure and hard water take their toll.',
      ],
      ar: [
        'تسريب الأنابيب أو انسداد المجاري قد يتلف الجدران والأرضيات بسرعة. يحدد سباكونا مصدر المشكلة ويصلحونها بشكل صحيح في الفلل والشقق والمحلات والمكاتب.',
        'كما نتعامل مع خزانات المياه ومضخات رفع الضغط وتوصيلات سخانات الماء، وهي من أكثر نقاط الأعطال شيوعًا في منازل عُمان بسبب ضغط المياه والماء العسر.',
      ],
    },
    problems: {
      en: [
        'Leaking pipes, taps and mixers',
        'Blocked sinks, drains and toilets',
        'Low water pressure or pump not working',
        'Water tank overflow, float valve and cleaning',
        'Toilet flush, cistern and bidet spray repairs',
        'New bathroom and kitchen fittings',
      ],
      ar: [
        'تسريب الأنابيب والحنفيات والخلاطات',
        'انسداد المغاسل والمجاري والمراحيض',
        'ضعف ضغط المياه أو تعطل المضخة',
        'فيضان خزان المياه وعوامة الخزان وتنظيفه',
        'إصلاح سيفون المرحاض والخزان والشطاف',
        'تركيب تجهيزات جديدة للحمامات والمطابخ',
      ],
    },
    includes: {
      en: [
        'Leak and pressure check to find the real cause',
        'Price agreed before work starts',
        'Quality pipes, fittings and sealants',
        'Clean-up and written warranty on the work',
      ],
      ar: [
        'فحص التسريب والضغط لتحديد السبب الحقيقي',
        'سعر متفق عليه قبل بدء العمل',
        'أنابيب وتجهيزات ومواد عزل عالية الجودة',
        'تنظيف المكان وضمان مكتوب على العمل',
      ],
    },
    faqs: [
      {
        q: { en: 'Do you come for emergency leaks?', ar: 'هل تأتون في حالات التسريب الطارئة؟' },
        a: {
          en: 'Yes, we’re available 24/7. Turn off the main water valve to limit damage, then call or WhatsApp us.',
          ar: 'نعم، نعمل على مدار الساعة طوال أيام الأسبوع. أغلق محبس المياه الرئيسي لتقليل الضرر ثم اتصل بنا أو راسلنا على واتساب.',
        },
      },
      {
        q: { en: 'Why is my water pressure low?', ar: 'لماذا ضغط المياه ضعيف؟' },
        a: {
          en: 'Common causes are a faulty booster pump, a blocked filter or scale build-up in pipes and taps. We test the pump and pipework to find it.',
          ar: 'من الأسباب الشائعة تعطل مضخة رفع الضغط أو انسداد الفلتر أو تراكم الترسبات في الأنابيب والحنفيات، ونفحص المضخة والتمديدات لتحديد السبب.',
        },
      },
      {
        q: { en: 'Do you clean water tanks?', ar: 'هل تنظفون خزانات المياه؟' },
        a: {
          en: 'Yes — tank cleaning, float valve replacement and overflow fixes for rooftop and ground tanks.',
          ar: 'نعم، تنظيف الخزانات واستبدال العوامة وإصلاح الفيضان للخزانات العلوية والأرضية.',
        },
      },
    ],
  },
  {
    slug: 'kitchen-hood-repair',
    icon: 'hood',
    category: 'appliance',
    name: { en: 'Kitchen Chimney & Hood Repair', ar: 'صيانة شفاطات المطبخ' },
    title: {
      en: 'Kitchen Chimney & Hood Repair in Muscat, Oman',
      ar: 'صيانة وتنظيف شفاطات ومداخن المطبخ في مسقط، عُمان',
    },
    short: {
      en: 'Kitchen chimney and range hood repair, cleaning and installation: weak suction, noise, lights, motors and filters.',
      ar: 'إصلاح وتنظيف وتركيب شفاطات ومداخن المطبخ: ضعف الشفط والإزعاج والإنارة والمحركات والفلاتر.',
    },
    intro: {
      en: [
        'Oman kitchens cook with a lot of heat and oil, so chimneys and hoods clog quickly. When suction drops, smoke and grease spread through the house. We repair, deep-clean and install wall, island and built-in hoods.',
        'Our technicians fix motors, fans, switches and lights, replace grease and charcoal filters, and check the duct so the hood pulls air properly again.',
      ],
      ar: [
        'تعتمد مطابخ عُمان على الطهي بحرارة وزيت كثيرين، لذلك تنسد الشفاطات والمداخن بسرعة، وعندما يضعف الشفط ينتشر الدخان والدهون في المنزل. نصلح وننظف تنظيفًا عميقًا ونركّب الشفاطات الجدارية والمركزية والمدمجة.',
        'يصلح فنيونا المحركات والمراوح والمفاتيح والإنارة، ويستبدلون فلاتر الدهون والكربون، ويفحصون مجرى الهواء ليعود الشفاط إلى سحب الهواء بشكل صحيح.',
      ],
    },
    problems: {
      en: [
        'Weak suction or smoke not clearing',
        'Loud noise or vibration',
        'Motor or fan not working',
        'Lights or buttons not responding',
        'Grease dripping or blocked filters',
        'New hood or chimney installation',
      ],
      ar: [
        'ضعف الشفط أو عدم خروج الدخان',
        'صوت عالٍ أو اهتزاز',
        'المحرك أو المروحة لا يعمل',
        'الإنارة أو الأزرار لا تستجيب',
        'تنقيط الدهون أو انسداد الفلاتر',
        'تركيب شفاط أو مدخنة جديدة',
      ],
    },
    includes: {
      en: [
        'Motor, fan and switch testing',
        'Filter cleaning or replacement',
        'Duct and airflow check',
        'Written warranty on the repair',
      ],
      ar: [
        'اختبار المحرك والمروحة والمفاتيح',
        'تنظيف الفلاتر أو استبدالها',
        'فحص مجرى الهواء وقوة السحب',
        'ضمان مكتوب على الإصلاح',
      ],
    },
    faqs: [
      {
        q: { en: 'How often should a kitchen hood be cleaned?', ar: 'كم مرة يجب تنظيف شفاط المطبخ؟' },
        a: {
          en: 'Wash grease filters every month and have a deep clean every 6 months, more often if you fry a lot.',
          ar: 'اغسل فلاتر الدهون كل شهر واطلب تنظيفًا عميقًا كل 6 أشهر، وأكثر من ذلك إذا كنت تقلي كثيرًا.',
        },
      },
      {
        q: { en: 'Why is my hood not pulling smoke?', ar: 'لماذا لا يسحب الشفاط الدخان؟' },
        a: {
          en: 'Usually clogged filters, a weak motor or a blocked duct. We find and fix the cause on site.',
          ar: 'غالبًا بسبب انسداد الفلاتر أو ضعف المحرك أو انسداد مجرى الهواء، ونحدد السبب ونصلحه في الموقع.',
        },
      },
      {
        q: { en: 'Do you install new hoods?', ar: 'هل تركّبون شفاطات جديدة؟' },
        a: {
          en: 'Yes — wall, island and built-in hoods, including ducting and electrical connection.',
          ar: 'نعم، الشفاطات الجدارية والمركزية والمدمجة، بما في ذلك تمديد مجرى الهواء والتوصيل الكهربائي.',
        },
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
