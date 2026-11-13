// ─────────────────────────────────────────────────────────────
//  BRAND DETAILS — the only file you need to edit to go live.
//  Every page, schema tag, button and footer reads from here.
// ─────────────────────────────────────────────────────────────
export const site = {
  url: 'https://www.example.om', // ⚠️ final domain, no trailing slash
  name: { en: 'Jabal Al Dhafrah', ar: 'جبال الظفرة' },
  // Registered name exactly as on the Commercial Registration
  legalName: { en: 'Jabal Al Dhafrah Trading & Contracting', ar: 'جبال الظفرة للتجارة والمقاولات' },
  crNumber: '1029306',
  tagline: {
    en: 'AC & Appliance Repair in Oman',
    ar: 'صيانة المكيفات والأجهزة المنزلية في عُمان',
  },
  phone: '+96897854050', // E.164, used for tel: links
  phoneDisplay: '+968 9785 4050',
  whatsapp: '96897854050', // ⚠️ confirm this number has WhatsApp
  phone2: '+96878764050',
  phone2Display: '+968 7876 4050',
  email: 'info@example.om', // ⚠️ real email
  address: {
    street: { en: 'P.O. Box 119', ar: 'ص.ب 119' },
    poBox: '119',
    locality: { en: 'Muscat', ar: 'مسقط' }, // ⚠️ confirm area (memo only shows PO box)
    region: 'Muscat',
    postalCode: '170',
    country: 'OM',
  },
  geo: { lat: 23.588, lng: 58.3829 }, // business location
  hours: { opens: '07:00', closes: '23:00', days: 'Sa-Th' as const },
  foundedYear: 2026,
  // Add profile URLs as they go live (Google Business Profile, Instagram, …)
  sameAs: [] as string[],
  // Only fill these with REAL figures — they appear in schema and on the page.
  rating: null as null | { value: number; count: number },
};

export type Lang = 'en' | 'ar';

type Contact = { phone: string; phoneDisplay: string; whatsapp: string };
// Local numbers per country. Leave a country as null to fall back to the main
// number above. A local UAE/Saudi number converts far better on those pages.
export const countryContacts: Record<'om' | 'ae' | 'sa', Contact | null> = {
  om: null,
  ae: null, // e.g. { phone: '+971500000000', phoneDisplay: '+971 50 000 0000', whatsapp: '971500000000' }
  sa: null, // e.g. { phone: '+966500000000', phoneDisplay: '+966 50 000 0000', whatsapp: '966500000000' }
};

export const contactFor = (country?: 'om' | 'ae' | 'sa'): Contact =>
  (country && countryContacts[country]) || { phone: site.phone, phoneDisplay: site.phoneDisplay, whatsapp: site.whatsapp };
