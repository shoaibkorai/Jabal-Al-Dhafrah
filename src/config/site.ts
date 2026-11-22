// ─────────────────────────────────────────────────────────────
//  BRAND DETAILS — the only file you need to edit to go live.
//  Every page, schema tag, button and footer reads from here.
// ─────────────────────────────────────────────────────────────
export const site = {
  url: 'https://www.servixo.org', // main domain; servixo.org and jabalaldhafrah.com 301 to it
  name: { en: 'Servixo', ar: 'سيرفيكسو' }, // brand name
  // Shown under the brand name in the header/footer
  byline: { en: 'Services by Jabal Al Dhafrah', ar: 'خدمات من جبال الظفرة' },
  // Registered name exactly as on the Commercial Registration
  legalName: { en: 'Jabal Al Dhafrah Trading & Contracting', ar: 'جبال الظفرة للتجارة والمقاولات' },
  crNumber: '1029306',
  tagline: {
    en: 'AC, Appliance & Electrical Repair in Oman',
    ar: 'صيانة المكيفات والأجهزة المنزلية والكهرباء في عُمان',
  },
  phone: '+96897854050', // E.164, used for tel: links
  phoneDisplay: '+968 9785 4050',
  whatsapp: '96897854050', // ⚠️ confirm this number has WhatsApp
  phone2: '+96878764050',
  phone2Display: '+968 7876 4050',
  email: '', // ⚠️ add the real business email; leave empty to hide it everywhere
  address: {
    street: { en: 'P.O. Box 119', ar: 'ص.ب 119' },
    poBox: '119',
    locality: { en: 'Muscat', ar: 'مسقط' }, // ⚠️ confirm area (memo only shows PO box)
    region: 'Muscat',
    postalCode: '170',
    country: 'OM',
  },
  geo: { lat: 23.4860442, lng: 58.5012148 }, // shop location (from Google Maps pin)
  // Opens Google Maps navigation to the shop (app on phones, website on desktop)
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=23.4860442,58.5012148',
  hours: { opens: '00:00', closes: '23:59' }, // open 24/7, all 7 days
  foundedYear: 2026,
  // Add profile URLs as they go live (Google Business Profile, Instagram, …)
  sameAs: [] as string[],
  // Only fill these with REAL figures — they appear in schema and on the page.
  rating: null as null | { value: number; count: number },
};

export type Lang = 'en' | 'ar';

type Contact = { phone: string; phoneDisplay: string; whatsapp: string };
// Single country (Oman) for now; kept as a function so per-area numbers can be added later.
export const contactFor = (_country?: 'om'): Contact => ({ phone: site.phone, phoneDisplay: site.phoneDisplay, whatsapp: site.whatsapp });
