import type { Lang } from '../config/site';

type T = Record<Lang, string>;
export type CountryCode = 'om' | 'ae' | 'sa';

export const countries: Record<CountryCode, { name: T; short: T }> = {
  om: { name: { en: 'Oman', ar: 'سلطنة عُمان' }, short: { en: 'Oman', ar: 'عُمان' } },
  ae: { name: { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' }, short: { en: 'UAE', ar: 'الإمارات' } },
  sa: { name: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' }, short: { en: 'Saudi Arabia', ar: 'السعودية' } },
};
export const countryOrder: CountryCode[] = ['om', 'ae', 'sa'];

export interface City {
  slug: string;
  country: CountryCode;
  parent?: string; // slug of the parent location (main area pages inside a city)
  name: T;
  governorate: T; // governorate / emirate / province
  response: T; // ⚠️ confirm these match your real coverage before launch
  areas: { en: string[]; ar: string[] }; // smaller neighbourhoods listed on this page
  blurb: T;
  geo: { lat: number; lng: number };
}

const MUSCAT_GOV = { en: 'Muscat Governorate', ar: 'محافظة مسقط' };
const SAME_DAY = { en: 'Same day, usually within 2–4 hours', ar: 'في نفس اليوم، عادة خلال 2 إلى 4 ساعات' };
const NEXT_DAY = { en: 'Next day or scheduled', ar: 'في اليوم التالي أو حسب الموعد' };
const DUBAI_EM = { en: 'Emirate of Dubai', ar: 'إمارة دبي' };

export const cities: City[] = [
  // ───────────── OMAN ─────────────
  {
    slug: 'muscat', country: 'om',
    name: { en: 'Muscat', ar: 'مسقط' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: {
      en: ['Al Wattayah', 'Old Muscat', 'Al Bustan', 'Sidab', 'Wadi Hatat', 'Qantab', 'Yiti', 'Bandar Al Jissah', 'Al Sifah'],
      ar: ['الوطية', 'مسقط القديمة', 'البستان', 'سداب', 'وادي حطاط', 'قنتب', 'يتي', 'بندر الجصة', 'السيفة'],
    },
    blurb: {
      en: 'Our main service base. We cover central Muscat daily, from the apartment towers of Ruwi and Qurum to the coastal homes of Al Bustan, Qantab and Yiti.',
      ar: 'قاعدة خدمتنا الرئيسية. نغطي وسط مسقط يوميًا، من الأبراج السكنية في روي والقرم إلى المنازل الساحلية في البستان وقنتب ويتي.',
    },
    geo: { lat: 23.588, lng: 58.3829 },
  },
  {
    slug: 'qurum', country: 'om', parent: 'muscat',
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
    areas: { en: ['Ruwi High Street', 'Hamriyah', 'Al Falaj', 'Mumtaz Area', 'CBD'], ar: ['شارع روي التجاري', 'الحمرية', 'الفلج', 'منطقة الممتاز', 'الحي التجاري'] },
    blurb: {
      en: 'Ruwi is dense with apartment buildings, shops and offices. We regularly service window and split ACs in older blocks, plus fridges and chillers for local shops.',
      ar: 'روي منطقة مكتظة بالمباني السكنية والمحلات والمكاتب، ونخدم فيها باستمرار مكيفات الشباك والسبليت في المباني القديمة إضافة إلى ثلاجات المحلات.',
    },
    geo: { lat: 23.598, lng: 58.545 },
  },
  {
    slug: 'mutrah', country: 'om', parent: 'muscat',
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
    slug: 'bawshar', country: 'om',
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
    areas: { en: ['Al Khuwair 33', 'Al Khuwair South', 'Ministries District'], ar: ['الخوير 33', 'الخوير الجنوبية', 'منطقة الوزارات'] },
    blurb: {
      en: 'Al Khuwair’s mid-rise apartments and offices run their ACs almost all year. We handle quick repairs for tenants and planned maintenance for building managers.',
      ar: 'تشغّل الشقق والمكاتب في الخوير مكيفاتها طوال العام تقريبًا، ونقدم إصلاحات سريعة للمستأجرين وصيانة مجدولة لمديري المباني.',
    },
    geo: { lat: 23.594, lng: 58.427 },
  },
  {
    slug: 'al-ghubrah', country: 'om', parent: 'bawshar',
    name: { en: 'Al Ghubrah', ar: 'الغبرة' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Ghubrah North', 'Ghubrah South', 'Bowshar Road'], ar: ['الغبرة الشمالية', 'الغبرة الجنوبية', 'طريق بوشر'] },
    blurb: {
      en: 'From villas near the beach in Ghubrah North to apartments in the south, we fix ACs, washing machines and fridges across Al Ghubrah, usually the same day.',
      ar: 'من الفلل القريبة من البحر في الغبرة الشمالية إلى الشقق في الجنوب، نصلح المكيفات والغسالات والثلاجات في جميع أنحاء الغبرة، غالبًا في نفس اليوم.',
    },
    geo: { lat: 23.592, lng: 58.392 },
  },
  {
    slug: 'azaiba', country: 'om', parent: 'bawshar',
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
    slug: 'seeb', country: 'om',
    name: { en: 'Seeb', ar: 'السيب' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Al Rusayl', 'Seeb Souq', 'Airport Heights', 'Sultan Haitham City', 'Al Jifnain'], ar: ['الرسيل', 'سوق السيب', 'مرتفعات المطار', 'مدينة السلطان هيثم', 'الجفنين'] },
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
    areas: { en: ['Al Hail North', 'Al Hail South', 'Al Hail Street'], ar: ['الحيل الشمالية', 'الحيل الجنوبية', 'شارع الحيل'] },
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
    slug: 'al-khoud', country: 'om', parent: 'seeb',
    name: { en: 'Al Khoud', ar: 'الخوض' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Al Khoud Street', 'Al Khoud 6', 'University area', 'Old Al Khoud'], ar: ['شارع الخوض', 'الخوض 6', 'منطقة الجامعة', 'الخوض القديمة'] },
    blurb: {
      en: 'With Sultan Qaboos University nearby, Al Khoud has many shared flats and student homes. We offer fast, budget-friendly fixes for ACs, fridges and washers.',
      ar: 'بوجود جامعة السلطان قابوس بالقرب، تضم الخوض الكثير من الشقق المشتركة وسكن الطلاب، ونقدم إصلاحات سريعة واقتصادية للمكيفات والثلاجات والغسالات.',
    },
    geo: { lat: 23.6, lng: 58.17 },
  },
  {
    slug: 'al-maabilah', country: 'om', parent: 'seeb',
    name: { en: 'Al Maabilah', ar: 'المعبيلة' }, governorate: MUSCAT_GOV, response: SAME_DAY,
    areas: { en: ['Maabilah North', 'Maabilah South', 'Maabilah Industrial'], ar: ['المعبيلة الشمالية', 'المعبيلة الجنوبية', 'المعبيلة الصناعية'] },
    blurb: {
      en: 'Al Maabilah is one of Seeb’s fastest-growing districts, with many new homes. New AC installations and first-year servicing are a big part of our work here.',
      ar: 'المعبيلة من أسرع أحياء السيب نموًا وتضم الكثير من المنازل الجديدة، ويشكل تركيب المكيفات الجديدة وصيانتها في السنة الأولى جزءًا كبيرًا من عملنا هنا.',
    },
    geo: { lat: 23.66, lng: 58.13 },
  },
  {
    slug: 'al-amerat', country: 'om',
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
    slug: 'sohar', country: 'om',
    name: { en: 'Sohar', ar: 'صحار' }, governorate: { en: 'North Al Batinah', ar: 'محافظة شمال الباطنة' }, response: { en: 'Same or next day', ar: 'في نفس اليوم أو اليوم التالي' },
    areas: { en: ['Sohar city', 'Falaj Al Qabail', 'Al Tareef', 'Sohar Industrial Area'], ar: ['مدينة صحار', 'فلج القبائل', 'الطريف', 'منطقة صحار الصناعية'] },
    blurb: {
      en: 'We cover Sohar homes as well as offices and staff accommodation near the port and industrial area.',
      ar: 'نغطي المنازل في صحار إضافة إلى المكاتب وسكن الموظفين قرب الميناء والمنطقة الصناعية.',
    },
    geo: { lat: 24.3474, lng: 56.7299 },
  },
  {
    slug: 'nizwa', country: 'om',
    name: { en: 'Nizwa', ar: 'نزوى' }, governorate: { en: 'Ad Dakhiliyah', ar: 'محافظة الداخلية' }, response: NEXT_DAY,
    areas: { en: ['Nizwa city', 'Firq', 'Birkat Al Mouz', 'Karsha'], ar: ['مدينة نزوى', 'فرق', 'بركة الموز', 'كرشا'] },
    blurb: {
      en: 'Nizwa’s hot inland summers make AC maintenance essential. We run regular service days for homes and businesses in the city and nearby villages.',
      ar: 'صيف نزوى الحار في الداخل يجعل صيانة المكيفات ضرورية، ونخصص أيام خدمة منتظمة للمنازل والشركات في المدينة والقرى القريبة.',
    },
    geo: { lat: 22.9333, lng: 57.5333 },
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
  {
    slug: 'salalah', country: 'om',
    name: { en: 'Salalah', ar: 'صلالة' }, governorate: { en: 'Dhofar', ar: 'محافظة ظفار' }, response: { en: 'Scheduled visits', ar: 'زيارات حسب الموعد' },
    areas: { en: ['Salalah city', 'Al Saada', 'Al Dahariz', 'Awqad', 'Al Haffa'], ar: ['مدينة صلالة', 'السعادة', 'الدهاريز', 'عوقد', 'الحافة'] },
    blurb: {
      en: 'High humidity during the Khareef season means more mould and drainage problems in ACs and fridges. Book ahead for scheduled service in Salalah.',
      ar: 'الرطوبة العالية خلال موسم الخريف تعني مشاكل أكثر في العفن والتصريف في المكيفات والثلاجات، لذا احجز مسبقًا للخدمة المجدولة في صلالة.',
    },
    geo: { lat: 17.0151, lng: 54.0924 },
  },

  // ───────────── UAE ─────────────
  {
    slug: 'dubai', country: 'ae',
    name: { en: 'Dubai', ar: 'دبي' }, governorate: DUBAI_EM, response: NEXT_DAY,
    areas: {
      en: ['Al Karama', 'Al Satwa', 'Al Nahda', 'Muhaisnah', 'Al Quoz', 'Jebel Ali', 'Dubai Silicon Oasis', 'Arabian Ranches', 'Al Warqa', 'International City'],
      ar: ['الكرامة', 'السطوة', 'النهدة', 'محيصنة', 'القوز', 'جبل علي', 'واحة دبي للسيليكون', 'المرابع العربية', 'الورقاء', 'المدينة العالمية'],
    },
    blurb: {
      en: 'From high-rise towers to townhouse communities, Dubai homes depend on AC almost all year. We repair split and ducted systems and all major home appliances across the city.',
      ar: 'من الأبراج الشاهقة إلى مجمعات التاون هاوس، تعتمد منازل دبي على المكيفات طوال العام تقريبًا. نصلح أنظمة السبليت والدكت وجميع الأجهزة المنزلية الرئيسية في أنحاء المدينة.',
    },
    geo: { lat: 25.2048, lng: 55.2708 },
  },
  {
    slug: 'deira', country: 'ae', parent: 'dubai',
    name: { en: 'Deira', ar: 'ديرة' }, governorate: DUBAI_EM, response: NEXT_DAY,
    areas: { en: ['Al Rigga', 'Al Muraqqabat', 'Port Saeed', 'Al Garhoud', 'Hor Al Anz', 'Abu Hail'], ar: ['الرقة', 'المرقبات', 'بورسعيد', 'القرهود', 'هور العنز', 'أبو هيل'] },
    blurb: {
      en: 'Deira’s older apartment blocks and busy shops keep window ACs, split units and commercial fridges working hard. We handle both home and shop repairs here.',
      ar: 'تُرهق المباني السكنية القديمة والمحلات المزدحمة في ديرة مكيفات الشباك والسبليت والثلاجات التجارية، ونتولى إصلاحات المنازل والمحلات معًا.',
    },
    geo: { lat: 25.27, lng: 55.32 },
  },
  {
    slug: 'bur-dubai', country: 'ae', parent: 'dubai',
    name: { en: 'Bur Dubai', ar: 'بر دبي' }, governorate: DUBAI_EM, response: NEXT_DAY,
    areas: { en: ['Al Mankhool', 'Al Raffa', 'Al Fahidi', 'Oud Metha', 'Al Jafiliya'], ar: ['المنخول', 'الرفاعة', 'الفهيدي', 'عود ميثاء', 'الجافلية'] },
    blurb: {
      en: 'Bur Dubai has many family apartments in mid-rise buildings. AC cleaning, washing machine repairs and fridge gas recharges are the jobs we do most here.',
      ar: 'يضم بر دبي الكثير من الشقق العائلية في مبانٍ متوسطة الارتفاع، وتنظيف المكيفات وإصلاح الغسالات وشحن غاز الثلاجات هي أكثر الأعمال التي ننفذها هنا.',
    },
    geo: { lat: 25.255, lng: 55.297 },
  },
  {
    slug: 'jumeirah', country: 'ae', parent: 'dubai',
    name: { en: 'Jumeirah', ar: 'جميرا' }, governorate: DUBAI_EM, response: NEXT_DAY,
    areas: { en: ['Jumeirah 1', 'Jumeirah 2', 'Jumeirah 3', 'Umm Suqeim', 'Al Safa', 'Al Wasl', 'La Mer'], ar: ['جميرا 1', 'جميرا 2', 'جميرا 3', 'أم سقيم', 'الصفا', 'الوصل', 'لامير'] },
    blurb: {
      en: 'Jumeirah’s beachside villas often combine ducted central AC with split units and built-in kitchens. Our technicians handle every system type in one visit.',
      ar: 'تجمع فلل جميرا الشاطئية غالبًا بين التكييف المركزي بالدكت ووحدات السبليت والمطابخ المدمجة، ويتعامل فنيونا مع جميع الأنظمة في زيارة واحدة.',
    },
    geo: { lat: 25.2, lng: 55.24 },
  },
  {
    slug: 'al-barsha', country: 'ae', parent: 'dubai',
    name: { en: 'Al Barsha', ar: 'البرشاء' }, governorate: DUBAI_EM, response: NEXT_DAY,
    areas: { en: ['Al Barsha 1', 'Al Barsha 2', 'Al Barsha 3', 'Al Barsha South', 'Al Sufouh'], ar: ['البرشاء 1', 'البرشاء 2', 'البرشاء 3', 'البرشاء جنوب', 'الصفوح'] },
    blurb: {
      en: 'Al Barsha mixes villas and apartment buildings close to Mall of the Emirates. We repair ACs and appliances for families, landlords and property managers here.',
      ar: 'يجمع البرشاء بين الفلل والمباني السكنية بالقرب من مول الإمارات، ونصلح المكيفات والأجهزة للعائلات والملاك ومديري العقارات هنا.',
    },
    geo: { lat: 25.11, lng: 55.2 },
  },
  {
    slug: 'dubai-marina', country: 'ae', parent: 'dubai',
    name: { en: 'Dubai Marina', ar: 'دبي مارينا' }, governorate: DUBAI_EM, response: NEXT_DAY,
    areas: { en: ['JBR', 'Jumeirah Lakes Towers', 'Bluewaters', 'Dubai Media City'], ar: ['جي بي آر', 'أبراج بحيرات جميرا', 'بلوواترز', 'مدينة دبي للإعلام'] },
    blurb: {
      en: 'Marina and JLT towers mostly use fan-coil units on chilled water. We service fan coils, thermostats and drain lines, plus all apartment appliances.',
      ar: 'تعتمد أبراج المارينا وأبراج بحيرات جميرا غالبًا على وحدات الفان كويل بالمياه المبردة، ونصون الفان كويل والثرموستات وخطوط التصريف إضافة إلى أجهزة الشقق.',
    },
    geo: { lat: 25.08, lng: 55.14 },
  },
  {
    slug: 'business-bay', country: 'ae', parent: 'dubai',
    name: { en: 'Business Bay', ar: 'الخليج التجاري' }, governorate: DUBAI_EM, response: NEXT_DAY,
    areas: { en: ['Downtown Dubai', 'DIFC', 'Al Jaddaf', 'Meydan', 'City Walk'], ar: ['وسط مدينة دبي', 'مركز دبي المالي العالمي', 'الجداف', 'ميدان', 'سيتي ووك'] },
    blurb: {
      en: 'Business Bay and Downtown are full of new towers with modern appliances. We repair fan coils, dishwashers, washer-dryers and built-in ovens in apartments and offices.',
      ar: 'يمتلئ الخليج التجاري ووسط المدينة بالأبراج الحديثة وأجهزتها العصرية، ونصلح الفان كويل وغسالات الصحون والغسالات المجففة والأفران المدمجة في الشقق والمكاتب.',
    },
    geo: { lat: 25.185, lng: 55.27 },
  },
  {
    slug: 'al-qusais', country: 'ae', parent: 'dubai',
    name: { en: 'Al Qusais', ar: 'القصيص' }, governorate: DUBAI_EM, response: NEXT_DAY,
    areas: { en: ['Al Qusais 1', 'Al Qusais 2', 'Al Qusais Industrial', 'Al Twar', 'Al Nahda 1'], ar: ['القصيص 1', 'القصيص 2', 'القصيص الصناعية', 'الطوار', 'النهدة 1'] },
    blurb: {
      en: 'Al Qusais has a mix of family flats, villas in Al Twar and an industrial zone. We cover home repairs and AC servicing for warehouses and staff housing.',
      ar: 'يضم القصيص مزيجًا من الشقق العائلية والفلل في الطوار ومنطقة صناعية، ونغطي إصلاحات المنازل وصيانة مكيفات المستودعات وسكن الموظفين.',
    },
    geo: { lat: 25.28, lng: 55.38 },
  },
  {
    slug: 'mirdif', country: 'ae', parent: 'dubai',
    name: { en: 'Mirdif', ar: 'مردف' }, governorate: DUBAI_EM, response: NEXT_DAY,
    areas: { en: ['Uptown Mirdif', 'Al Mizhar', 'Al Khawaneej', 'Mushrif', 'Al Warqa'], ar: ['أبتاون مردف', 'المزهر', 'الخوانيج', 'مشرف', 'الورقاء'] },
    blurb: {
      en: 'Mirdif and nearby Al Mizhar and Al Khawaneej are villa neighbourhoods with large families, so washing machines, fridges and multiple ACs get heavy daily use.',
      ar: 'مردف والمزهر والخوانيج القريبة أحياء فلل لعائلات كبيرة، لذا تُستخدم الغسالات والثلاجات والمكيفات المتعددة بكثافة يوميًا.',
    },
    geo: { lat: 25.22, lng: 55.42 },
  },
  {
    slug: 'sharjah', country: 'ae',
    name: { en: 'Sharjah', ar: 'الشارقة' }, governorate: { en: 'Emirate of Sharjah', ar: 'إمارة الشارقة' }, response: NEXT_DAY,
    areas: {
      en: ['Al Majaz', 'Al Nahda', 'Al Taawun', 'Al Khan', 'Al Qasimia', 'Muwaileh', 'Al Butina', 'Abu Shagara'],
      ar: ['المجاز', 'النهدة', 'التعاون', 'الخان', 'القاسمية', 'مويلح', 'البطينة', 'أبو شغارة'],
    },
    blurb: {
      en: 'Sharjah’s large family apartments and villa suburbs need dependable AC and appliance repair. We cover the city centre, the lagoon districts and Muwaileh.',
      ar: 'تحتاج الشقق العائلية الكبيرة وضواحي الفلل في الشارقة إلى صيانة موثوقة للمكيفات والأجهزة، ونغطي وسط المدينة ومناطق البحيرات ومويلح.',
    },
    geo: { lat: 25.3463, lng: 55.4209 },
  },
  {
    slug: 'ajman', country: 'ae',
    name: { en: 'Ajman', ar: 'عجمان' }, governorate: { en: 'Emirate of Ajman', ar: 'إمارة عجمان' }, response: NEXT_DAY,
    areas: { en: ['Al Nuaimia', 'Al Rashidiya', 'Al Jurf', 'Al Rawda', 'Al Mowaihat', 'Umm Al Quwain (nearby)'], ar: ['النعيمية', 'الراشدية', 'الجرف', 'الروضة', 'المويهات', 'أم القيوين (قريبًا منها)'] },
    blurb: {
      en: 'We serve apartments in Al Nuaimia and Al Rashidiya, villas in Al Rawda and Al Mowaihat, and visit Umm Al Quwain by appointment.',
      ar: 'نخدم الشقق في النعيمية والراشدية والفلل في الروضة والمويهات، ونزور أم القيوين حسب الموعد.',
    },
    geo: { lat: 25.4052, lng: 55.5136 },
  },
  {
    slug: 'al-ain', country: 'ae',
    name: { en: 'Al Ain', ar: 'العين' }, governorate: { en: 'Emirate of Abu Dhabi', ar: 'إمارة أبوظبي' }, response: { en: 'Scheduled visits', ar: 'زيارات حسب الموعد' },
    areas: { en: ['Al Jimi', 'Al Muwaiji', 'Al Towayya', 'Al Mutawaa', 'Hili'], ar: ['الجيمي', 'المويجعي', 'الطوية', 'المطوع', 'هيلي'] },
    blurb: {
      en: 'Al Ain’s dry inland heat puts heavy load on ACs. We run scheduled service days for villas and homes across the city.',
      ar: 'تفرض حرارة العين الجافة حملًا كبيرًا على المكيفات، ونخصص أيام خدمة مجدولة للفلل والمنازل في أنحاء المدينة.',
    },
    geo: { lat: 24.2075, lng: 55.7447 },
  },

  // ───────────── SAUDI ARABIA ─────────────
  {
    slug: 'riyadh', country: 'sa',
    name: { en: 'Riyadh', ar: 'الرياض' }, governorate: { en: 'Riyadh Province', ar: 'منطقة الرياض' }, response: NEXT_DAY,
    areas: {
      en: ['Al Olaya', 'Al Malaz', 'Al Sulimaniyah', 'Al Yasmin', 'Al Nakheel', 'Al Naseem', 'Al Rawdah', 'Al Sahafa'],
      ar: ['العليا', 'الملز', 'السليمانية', 'الياسمين', 'النخيل', 'النسيم', 'الروضة', 'الصحافة'],
    },
    blurb: {
      en: 'Riyadh summers regularly pass 45°C, so a broken AC is an emergency. We repair split, window and central systems plus home appliances across the city.',
      ar: 'تتجاوز حرارة صيف الرياض 45 درجة مئوية بانتظام، لذلك يعد تعطل المكيف حالة طارئة. نصلح أنظمة السبليت والشباك والمركزي والأجهزة المنزلية في أنحاء المدينة.',
    },
    geo: { lat: 24.7136, lng: 46.6753 },
  },
  {
    slug: 'jeddah', country: 'sa',
    name: { en: 'Jeddah', ar: 'جدة' }, governorate: { en: 'Makkah Province', ar: 'منطقة مكة المكرمة' }, response: NEXT_DAY,
    areas: {
      en: ['Al Rawdah', 'Al Safa', 'Al Hamra', 'Al Salamah', 'Al Naeem', 'Obhur', 'Al Zahra', 'Al Shati'],
      ar: ['الروضة', 'الصفا', 'الحمراء', 'السلامة', 'النعيم', 'أبحر', 'الزهراء', 'الشاطئ'],
    },
    blurb: {
      en: 'Jeddah’s coastal humidity causes AC drainage leaks, mould and corrosion. Our visits include drain flushing and coil treatment along with the repair.',
      ar: 'تسبب رطوبة جدة الساحلية تسريبات تصريف المكيفات والعفن والتآكل، وتشمل زياراتنا تسليك التصريف ومعالجة الملفات مع الإصلاح.',
    },
    geo: { lat: 21.4858, lng: 39.1925 },
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug)!;
export const topLevel = (country?: CountryCode) => cities.filter((c) => !c.parent && (!country || c.country === country));
export const childrenOf = (slug: string) => cities.filter((c) => c.parent === slug);
