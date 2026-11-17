import type { Lang } from '../config/site';

type T = Record<Lang, string>;
export type CountryCode = 'om';

export const countries: Record<CountryCode, { name: T; short: T }> = {
  om: { name: { en: 'Oman', ar: 'سلطنة عُمان' }, short: { en: 'Oman', ar: 'عُمان' } },
};
export const countryOrder: CountryCode[] = ['om'];

export interface City {
  slug: string;
  country: CountryCode;
  parent?: string; // slug of the parent location (main area pages inside a city)
  name: T;
  governorate: T; // governorate / emirate / province
  response: T; // ⚠️ confirm these match your real coverage before launch
  areas: { en: string[]; ar: string[] }; // smaller neighbourhoods listed on this page
  aka?: string[]; // other English spellings people search for (shown on the page)
  blurb: T;
  geo: { lat: number; lng: number };
}

const MUSCAT_GOV = { en: 'Muscat Governorate', ar: 'محافظة مسقط' };
const SAME_DAY = { en: 'Same day, usually within 2–4 hours', ar: 'في نفس اليوم، عادة خلال 2 إلى 4 ساعات' };
const NEXT_DAY = { en: 'Next day or scheduled', ar: 'في اليوم التالي أو حسب الموعد' };

export const cities: City[] = [
  // ───────────── OMAN ─────────────
  {
    slug: 'muscat', country: 'om',
    name: { en: 'Muscat', ar: 'مسقط' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: {
      en: ['Old Muscat', 'Al Bustan', 'Sidab', 'Wadi Hatat', 'Qantab', 'Yiti', 'Bandar Al Jissah', 'Al Sifah'],
      ar: ['مسقط القديمة', 'البستان', 'سداب', 'وادي حطاط', 'قنتب', 'يتي', 'بندر الجصة', 'السيفة'],
    },
    blurb: {
      en: 'Our main service base. We cover central Muscat daily, from the apartment towers of Ruwi and Qurum to the coastal homes of Al Bustan, Qantab and Yiti.',
      ar: 'قاعدة خدمتنا الرئيسية. نغطي وسط مسقط يوميًا، من الأبراج السكنية في روي والقرم إلى المنازل الساحلية في البستان وقنتب ويتي.',
    },
    geo: { lat: 23.588, lng: 58.3829 },
  },
  {
    slug: 'qurum', country: 'om', aka: ['Al Qurum'], parent: 'muscat',
    name: { en: 'Qurum', ar: 'القرم' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Qurum Heights', 'Shatti Al Qurum', 'PDO area', 'Qurum Commercial'], ar: ['مرتفعات القرم', 'شاطئ القرم', 'منطقة PDO', 'القرم التجارية'] },
    blurb: {
      en: 'Qurum mixes beachfront villas, older family houses and busy commercial streets. Sea air and sand mean outdoor AC units here benefit from regular coil cleaning.',
      ar: 'تجمع القرم بين الفلل المطلة على البحر والمنازل العائلية القديمة والشوارع التجارية المزدحمة، ويستفيد المكيف الخارجي هنا من تنظيف الملفات المنتظم بسبب هواء البحر والرمل.',
    },
    geo: { lat: 23.614, lng: 58.48 },
  },
  {
    slug: 'ruwi', country: 'om', parent: 'muscat',
    name: { en: 'Ruwi', ar: 'روي' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Ruwi High Street', 'Al Falaj', 'Mumtaz Area', 'CBD'], ar: ['شارع روي التجاري', 'الفلج', 'منطقة الممتاز', 'الحي التجاري'] },
    blurb: {
      en: 'Ruwi is dense with apartment buildings, shops and offices. We regularly service window and split ACs in older blocks, plus fridges and chillers for local shops.',
      ar: 'روي منطقة مكتظة بالمباني السكنية والمحلات والمكاتب، ونخدم فيها باستمرار مكيفات الشباك والسبليت في المباني القديمة إضافة إلى ثلاجات المحلات.',
    },
    geo: { lat: 23.598, lng: 58.545 },
  },
  {
    slug: 'mutrah', country: 'om', aka: ['Muttrah', 'Matrah'], parent: 'muscat',
    name: { en: 'Mutrah', ar: 'مطرح' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Mutrah Corniche', 'Mutrah Souq', 'Riyam', 'Al Bustan Road'], ar: ['كورنيش مطرح', 'سوق مطرح', 'ريام', 'طريق البستان'] },
    blurb: {
      en: 'Around the Corniche and the souq, homes are close together and parking is tight. Our technicians know the lanes and come prepared so repairs are quick and tidy.',
      ar: 'حول الكورنيش والسوق تتقارب المنازل ويصعب إيجاد موقف، ويعرف فنيونا الطرق جيدًا ويأتون مستعدين لإنجاز الإصلاح بسرعة ونظافة.',
    },
    geo: { lat: 23.618, lng: 58.567 },
  },
  {
    slug: 'darsait', country: 'om', parent: 'muscat',
    name: { en: 'Darsait', ar: 'دارسيت' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Darsait Heights', 'Darsait Market', 'Wadi Adai'], ar: ['مرتفعات دارسيت', 'سوق دارسيت', 'وادي عدي'] },
    blurb: {
      en: 'Darsait’s hillside houses and flats get strong afternoon sun, which pushes ACs hard in summer. Pre-summer cleaning and gas checks are our most booked jobs here.',
      ar: 'تتعرض منازل وشقق دارسيت على التلال لشمس قوية بعد الظهر، مما يرهق المكيفات صيفًا، لذلك يعد التنظيف وفحص الغاز قبل الصيف أكثر الخدمات طلبًا هنا.',
    },
    geo: { lat: 23.611, lng: 58.553 },
  },
  {
    slug: 'wadi-al-kabir', country: 'om', parent: 'muscat',
    name: { en: 'Wadi Al Kabir', ar: 'وادي الكبير' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Wadi Al Kabir Industrial', 'Wadi Al Kabir Residential'], ar: ['وادي الكبير الصناعية', 'وادي الكبير السكنية'] },
    blurb: {
      en: 'With its industrial area right next to family housing, Wadi Al Kabir needs both home appliance repair and service for workshops and staff accommodation.',
      ar: 'بوجود المنطقة الصناعية بجوار المساكن العائلية، يحتاج وادي الكبير إلى صيانة الأجهزة المنزلية وخدمة الورش وسكن العمال معًا.',
    },
    geo: { lat: 23.585, lng: 58.565 },
  },
  {
    slug: 'al-wutayyah', country: 'om', parent: 'muscat', aka: ['Al Wattayah', 'Wattayah', 'Al Wattaya'],
    name: { en: 'Al Wutayyah', ar: 'الوطية' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Wutayyah car showrooms', 'Wutayyah Heights', 'Al Wutayyah residential'], ar: ['معارض السيارات بالوطية', 'مرتفعات الوطية', 'الوطية السكنية'] },
    blurb: {
      en: 'Between Qurum and Ruwi, Al Wutayyah mixes car showrooms and offices with apartment blocks and family homes. We repair ACs and appliances for both residents and businesses here.',
      ar: 'تقع الوطية بين القرم وروي، وتجمع بين معارض السيارات والمكاتب والمباني السكنية والمنازل العائلية، ونصلح المكيفات والأجهزة للسكان والشركات على حد سواء.',
    },
    geo: { lat: 23.594, lng: 58.512 },
  },
  {
    slug: 'al-hamriya', country: 'om', parent: 'muscat', aka: ['Hamriyah', 'Al Hamriyah', 'Hamriya'],
    name: { en: 'Al Hamriya', ar: 'الحمرية' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Hamriya roundabout', 'Hamriya souq area', 'Wadi Kabir road'], ar: ['دوار الحمرية', 'منطقة سوق الحمرية', 'طريق وادي الكبير'] },
    blurb: {
      en: 'One of Muscat’s older neighbourhoods, Al Hamriya has many low-rise flats and small shops. Window ACs, split units and shop fridges here often need quick, affordable repairs.',
      ar: 'الحمرية من أقدم أحياء مسقط، وتضم الكثير من الشقق المنخفضة والمحلات الصغيرة، وغالبًا ما تحتاج مكيفات الشباك والسبليت وثلاجات المحلات فيها إلى إصلاحات سريعة واقتصادية.',
    },
    geo: { lat: 23.611, lng: 58.556 },
  },
  {
    slug: 'bawshar', country: 'om', aka: ['Bosher', 'Bowsher', 'Bausher'],
    name: { en: 'Bawshar', ar: 'بوشر' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Bawshar town', 'Al Misfah', 'Muscat Hills', 'Al Sarooj'], ar: ['بوشر', 'المسفاة', 'مسقط هيلز', 'الصاروج'] },
    blurb: {
      en: 'Bawshar is home to busy residential and office districts such as Al Khuwair, Ghubrah and Azaiba. Many of our AC maintenance contracts are for buildings and villas here.',
      ar: 'تضم بوشر أحياء سكنية ومكتبية مزدحمة مثل الخوير والغبرة والعذيبة، والكثير من عقود صيانة المكيفات لدينا لمبانٍ وفلل في هذه المنطقة.',
    },
    geo: { lat: 23.5545, lng: 58.399 },
  },
  {
    slug: 'al-khuwair', country: 'om', parent: 'bawshar',
    name: { en: 'Al Khuwair', ar: 'الخوير' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Al Khuwair 33', 'Al Khuwair South', 'Ministries District', 'Sultan Qaboos Street area'], ar: ['الخوير 33', 'الخوير الجنوبية', 'منطقة الوزارات', 'منطقة شارع السلطان قابوس'] },
    blurb: {
      en: 'Al Khuwair’s mid-rise apartments and offices run their ACs almost all year. We handle quick repairs for tenants and planned maintenance for building managers.',
      ar: 'تشغّل الشقق والمكاتب في الخوير مكيفاتها طوال العام تقريبًا، ونقدم إصلاحات سريعة للمستأجرين وصيانة مجدولة لمديري المباني.',
    },
    geo: { lat: 23.594, lng: 58.427 },
  },
  {
    slug: 'al-ghubrah', country: 'om', aka: ['Ghubra', 'Al Ghubra'], parent: 'bawshar',
    name: { en: 'Al Ghubrah', ar: 'الغبرة' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Ghubrah North', 'Ghubrah South', 'Bowshar Road'], ar: ['الغبرة الشمالية', 'الغبرة الجنوبية', 'طريق بوشر'] },
    blurb: {
      en: 'From villas near the beach in Ghubrah North to apartments in the south, we fix ACs, washing machines and fridges across Al Ghubrah, usually the same day.',
      ar: 'من الفلل القريبة من البحر في الغبرة الشمالية إلى الشقق في الجنوب، نصلح المكيفات والغسالات والثلاجات في جميع أنحاء الغبرة، غالبًا في نفس اليوم.',
    },
    geo: { lat: 23.592, lng: 58.392 },
  },
  {
    slug: 'azaiba', country: 'om', aka: ['Al Azaiba', 'Al Azaibah', 'Al Udhaybah'], parent: 'bawshar',
    name: { en: 'Azaiba', ar: 'العذيبة' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Azaiba North', 'Azaiba South', 'Al Ehsan Street', 'Al Mazoon Street'], ar: ['العذيبة الشمالية', 'العذيبة الجنوبية', 'شارع الإحسان', 'شارع المزون'] },
    blurb: {
      en: 'Azaiba North and South are popular with families, so washing machine and fridge repairs are as common as AC work. We also cover the shops along Al Mazoon Street.',
      ar: 'تحظى العذيبة الشمالية والجنوبية بإقبال العائلات، لذلك يتساوى طلب إصلاح الغسالات والثلاجات مع أعمال المكيفات، كما نخدم المحلات على شارع المزون.',
    },
    geo: { lat: 23.589, lng: 58.362 },
  },
  {
    slug: 'al-ansab', country: 'om', parent: 'bawshar',
    name: { en: 'Al Ansab', ar: 'الأنصب' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Al Ansab Heights', 'Wadi Al Ansab'], ar: ['مرتفعات الأنصب', 'وادي الأنصب'] },
    blurb: {
      en: 'Newer villas in Al Ansab often have multiple split units per house. Annual maintenance plans keep every unit cooling well through the summer.',
      ar: 'تحتوي الفلل الحديثة في الأنصب غالبًا على عدة وحدات سبليت في المنزل الواحد، وخطط الصيانة السنوية تحافظ على كفاءة كل وحدة طوال الصيف.',
    },
    geo: { lat: 23.553, lng: 58.37 },
  },
  {
    slug: 'madinat-sultan-qaboos', country: 'om', parent: 'bawshar',
    name: { en: 'Madinat Sultan Qaboos', ar: 'مدينة السلطان قابوس' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['MSQ Villas', 'MSQ Shopping Area', 'Al Sarooj'], ar: ['فلل المدينة', 'منطقة التسوق', 'الصاروج'] },
    blurb: {
      en: 'MSQ’s large villas usually run central or ducted systems along with split units. Our technicians are equipped for both, as well as built-in kitchen appliances.',
      ar: 'تعمل الفلل الكبيرة في مدينة السلطان قابوس عادة بأنظمة مركزية أو دكت إلى جانب وحدات السبليت، وفنيونا مجهزون لكليهما وللأجهزة المدمجة في المطابخ.',
    },
    geo: { lat: 23.598, lng: 58.413 },
  },
  {
    slug: 'ghala', country: 'om', parent: 'bawshar',
    name: { en: 'Ghala', ar: 'غلا' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Ghala Industrial Estate', 'Ghala Heights', 'Ghala Residential'], ar: ['منطقة غلا الصناعية', 'مرتفعات غلا', 'غلا السكنية'] },
    blurb: {
      en: 'We serve homes in Ghala as well as offices, warehouses and staff housing in Ghala Industrial Estate, including AC contracts for businesses.',
      ar: 'نخدم المنازل في غلا إضافة إلى المكاتب والمستودعات وسكن الموظفين في منطقة غلا الصناعية، بما في ذلك عقود صيانة المكيفات للشركات.',
    },
    geo: { lat: 23.57, lng: 58.385 },
  },
  {
    slug: 'madinat-al-irfan', country: 'om', parent: 'bawshar', aka: ['Irfan City', 'Madinat Al Irfan'],
    name: { en: 'Madinat Al Irfan', ar: 'مدينة العرفان' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Convention Centre area', 'Al Irfan residential', 'Al Irfan offices'], ar: ['منطقة مركز المعارض', 'العرفان السكنية', 'مكاتب العرفان'] },
    blurb: {
      en: 'Madinat Al Irfan is a new district near the airport and the convention centre, with modern homes, offices and hotels. We handle installation and servicing for new AC systems and appliances.',
      ar: 'مدينة العرفان حي جديد قرب المطار ومركز عُمان للمؤتمرات والمعارض، ويضم منازل ومكاتب وفنادق حديثة، ونتولى تركيب وصيانة أنظمة التكييف والأجهزة الجديدة.',
    },
    geo: { lat: 23.583, lng: 58.316 },
  },
  {
    slug: 'seeb', country: 'om', aka: ['Al Seeb', 'As Seeb'],
    name: { en: 'Seeb', ar: 'السيب' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Seeb Souq', 'Airport Heights', 'Sultan Haitham City', 'Al Jifnain', 'Al Maardih', 'Al Naseem'], ar: ['سوق السيب', 'مرتفعات المطار', 'مدينة السلطان هيثم', 'الجفنين', 'المعارض', 'النسيم'] },
    blurb: {
      en: 'Seeb is the largest wilayat by population, with fast-growing neighbourhoods like Al Mabela, Al Khoud and Mawaleh. We keep technicians stationed nearby for quick visits.',
      ar: 'السيب هي أكبر ولاية من حيث عدد السكان، وتضم أحياء سريعة النمو مثل المعبيلة والخوض والموالح، ولدينا فنيون متمركزون بالقرب منها للزيارات السريعة.',
    },
    geo: { lat: 23.6703, lng: 58.1891 },
  },
  {
    slug: 'al-mouj', country: 'om', parent: 'seeb',
    name: { en: 'Al Mouj', ar: 'الموج' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['The Wave villas', 'Al Mouj apartments', 'Marina area'], ar: ['فلل الموج', 'شقق الموج', 'منطقة المرسى'] },
    blurb: {
      en: 'Al Mouj’s seafront villas and apartments face salty, humid air that wears down AC coils and fittings. We use corrosion checks and careful cleaning on every visit.',
      ar: 'تواجه فلل وشقق الموج المطلة على البحر هواءً مالحًا ورطبًا يُتلف ملفات المكيفات وتوصيلاتها، لذا نجري فحص التآكل وتنظيفًا دقيقًا في كل زيارة.',
    },
    geo: { lat: 23.63, lng: 58.28 },
  },
  {
    slug: 'al-hail', country: 'om', parent: 'seeb',
    name: { en: 'Al Hail', ar: 'الحيل' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Al Hail North', 'Al Hail South', 'Al Hail Street', 'Al Hail Industrial Area'], ar: ['الحيل الشمالية', 'الحيل الجنوبية', 'شارع الحيل', 'منطقة الحيل الصناعية'] },
    blurb: {
      en: 'Al Hail North and South are mostly family villas. Washing machines, fridges and AC units all see heavy use here, and we cover every block of both areas.',
      ar: 'الحيل الشمالية والجنوبية مناطق تغلب عليها الفلل العائلية، وتُستخدم فيها الغسالات والثلاجات والمكيفات بكثافة، ونغطي جميع أحيائها.',
    },
    geo: { lat: 23.66, lng: 58.26 },
  },
  {
    slug: 'al-mawaleh', country: 'om', parent: 'seeb',
    name: { en: 'Al Mawaleh', ar: 'الموالح' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Mawaleh North', 'Mawaleh South', 'Mawaleh Market'], ar: ['الموالح الشمالية', 'الموالح الجنوبية', 'سوق الموالح'] },
    blurb: {
      en: 'Close to the main malls and the expressway, Al Mawaleh is easy for our team to reach quickly. We service homes, shops and restaurants across the area.',
      ar: 'بقربها من المراكز التجارية الرئيسية والطريق السريع، يسهل على فريقنا الوصول إلى الموالح بسرعة، ونخدم المنازل والمحلات والمطاعم في أنحائها.',
    },
    geo: { lat: 23.616, lng: 58.243 },
  },
  {
    slug: 'al-khoud', country: 'om', aka: ['Al Khoudh', 'Al Khod'], parent: 'seeb',
    name: { en: 'Al Khoud', ar: 'الخوض' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Al Khoud Street', 'Al Khoud 6', 'Al Khoud 7', 'Al Khoud 8', 'University area', 'Old Al Khoud'], ar: ['شارع الخوض', 'الخوض 6', 'الخوض 7', 'الخوض 8', 'منطقة الجامعة', 'الخوض القديمة'] },
    blurb: {
      en: 'With Sultan Qaboos University nearby, Al Khoud has many shared flats and student homes. We offer fast, budget-friendly fixes for ACs, fridges and washers.',
      ar: 'بوجود جامعة السلطان قابوس بالقرب، تضم الخوض الكثير من الشقق المشتركة وسكن الطلاب، ونقدم إصلاحات سريعة واقتصادية للمكيفات والثلاجات والغسالات.',
    },
    geo: { lat: 23.6, lng: 58.17 },
  },
  {
    slug: 'al-maabilah', country: 'om', aka: ['Al Mabela', 'Maabela', 'Al Mabelah'], parent: 'seeb',
    name: { en: 'Al Maabilah', ar: 'المعبيلة' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Maabilah North', 'Maabilah South', 'Maabilah Industrial'], ar: ['المعبيلة الشمالية', 'المعبيلة الجنوبية', 'المعبيلة الصناعية'] },
    blurb: {
      en: 'Al Maabilah is one of Seeb’s fastest-growing districts, with many new homes. New AC installations and first-year servicing are a big part of our work here.',
      ar: 'المعبيلة من أسرع أحياء السيب نموًا وتضم الكثير من المنازل الجديدة، ويشكل تركيب المكيفات الجديدة وصيانتها في السنة الأولى جزءًا كبيرًا من عملنا هنا.',
    },
    geo: { lat: 23.66, lng: 58.13 },
  },
  {
    slug: 'al-rusayl', country: 'om', parent: 'seeb', aka: ['Rusayl', 'Al Rusail'],
    name: { en: 'Al Rusayl', ar: 'الرسيل' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Rusayl Industrial Estate', 'Rusayl residential', 'Rusayl staff housing'], ar: ['منطقة الرسيل الصناعية', 'الرسيل السكنية', 'سكن موظفي الرسيل'] },
    blurb: {
      en: 'Al Rusayl combines a large industrial estate with residential streets. We service ACs in factories, offices and staff housing, as well as appliances in family homes.',
      ar: 'تجمع الرسيل بين منطقة صناعية كبيرة وأحياء سكنية، ونصون المكيفات في المصانع والمكاتب وسكن الموظفين، إضافة إلى الأجهزة في المنازل العائلية.',
    },
    geo: { lat: 23.555, lng: 58.19 },
  },
  {
    slug: 'al-amerat', country: 'om', aka: ['Al Amarat', 'Amerat'],
    name: { en: 'Al Amerat', ar: 'العامرات' }, governorate: MUSCAT_GOV, response: { en: 'Same day', ar: 'في نفس اليوم' },
    areas: { en: ['Al Amerat town', 'Al Nahdha', 'Al Amerat Heights'], ar: ['مدينة العامرات', 'النهضة', 'مرتفعات العامرات'] },
    blurb: {
      en: 'Al Amerat has many new villas and family homes. AC installation for new builds and seasonal AC cleaning are our most requested services here.',
      ar: 'تضم العامرات العديد من الفلل والمنازل العائلية الجديدة، وتركيب المكيفات للمنازل الجديدة والتنظيف الموسمي هما أكثر خدماتنا طلبًا هنا.',
    },
    geo: { lat: 23.5228, lng: 58.4968 },
  },
  {
    slug: 'qurayyat', country: 'om',
    name: { en: 'Qurayyat', ar: 'قريات' }, governorate: MUSCAT_GOV, response: { en: 'Same or next day', ar: 'في نفس اليوم أو اليوم التالي' },
    areas: { en: ['Qurayyat town', 'Dagmar', 'Hayl Al Ghaf'], ar: ['مدينة قريات', 'ضغمر', 'حيل الغاف'] },
    blurb: {
      en: 'We serve homes and farms around Qurayyat on scheduled visit days, with urgent call-outs available for AC and fridge breakdowns.',
      ar: 'نخدم المنازل والمزارع في قريات وما حولها في أيام زيارات مجدولة، مع إمكانية الزيارات العاجلة لأعطال المكيفات والثلاجات.',
    },
    geo: { lat: 23.2619, lng: 58.9161 },
  },
  {
    slug: 'barka', country: 'om',
    name: { en: 'Barka', ar: 'بركاء' }, governorate: { en: 'South Al Batinah', ar: 'محافظة جنوب الباطنة' }, response: { en: 'Same day', ar: 'في نفس اليوم' },
    areas: { en: ['Barka town', 'Al Sawadi', 'Al Rumais', 'Hay Asim'], ar: ['مدينة بركاء', 'السوادي', 'الرميس', 'حي عاصم'] },
    blurb: {
      en: 'Just west of Seeb, Barka is within easy reach of our Muscat team, so most visits happen the same day.',
      ar: 'تقع بركاء غرب السيب مباشرة وعلى مسافة قريبة من فريقنا في مسقط، لذلك تتم معظم الزيارات في نفس اليوم.',
    },
    geo: { lat: 23.6787, lng: 57.8858 },
  },
  {
    slug: 'al-khaboura', country: 'om', aka: ['Khaboura', 'Al Khabourah'],
    name: { en: 'Al Khaboura', ar: 'الخابورة' }, governorate: { en: 'North Al Batinah', ar: 'محافظة شمال الباطنة' }, response: { en: 'Scheduled visits', ar: 'زيارات حسب الموعد' },
    areas: { en: ['Al Khaboura town', 'Al Khaboura coast', 'Al Khaboura villages'], ar: ['مدينة الخابورة', 'ساحل الخابورة', 'قرى الخابورة'] },
    blurb: {
      en: 'We visit Al Khaboura on scheduled service days for AC repair, cleaning and appliance work in homes, farms and shops along the Batinah coast.',
      ar: 'نزور الخابورة في أيام خدمة مجدولة لإصلاح وتنظيف المكيفات وصيانة الأجهزة في المنازل والمزارع والمحلات على ساحل الباطنة.',
    },
    geo: { lat: 23.971, lng: 57.094 },
  },
  {
    slug: 'sur', country: 'om',
    name: { en: 'Sur', ar: 'صور' }, governorate: { en: 'South Ash Sharqiyah', ar: 'محافظة جنوب الشرقية' }, response: NEXT_DAY,
    areas: { en: ['Sur city', 'Al Ayjah', 'Ras Al Hadd'], ar: ['مدينة صور', 'العيجة', 'رأس الحد'] },
    blurb: {
      en: 'Salty coastal air corrodes outdoor AC units faster in Sur. Our service visits include coil cleaning and anti-corrosion checks.',
      ar: 'الهواء الساحلي المالح يسرّع تآكل الوحدات الخارجية للمكيفات في صور، لذلك تشمل زياراتنا تنظيف الملفات وفحص التآكل.',
    },
    geo: { lat: 22.5667, lng: 59.5289 },
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug)!;
export const topLevel = (country?: CountryCode) => cities.filter((c) => !c.parent && (!country || c.country === country));
export const childrenOf = (slug: string) => cities.filter((c) => c.parent === slug);
