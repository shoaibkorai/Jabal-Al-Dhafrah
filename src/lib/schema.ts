import { site, type Lang } from '../config/site';
import { cities } from '../data/cities';
import type { Service } from '../data/services';
import { href } from '../i18n/ui';

const abs = (p: string) => new URL(p, site.url).href;
export const BUSINESS_ID = `${site.url}/#business`;

export function business(lang: Lang) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // 24/7
  return {
    '@context': 'https://schema.org',
    '@type': ['HVACBusiness', 'Electrician', 'Plumber', 'HomeAndConstructionBusiness'],
    '@id': BUSINESS_ID,
    name: site.name[lang],
    alternateName: [site.name[lang === 'en' ? 'ar' : 'en'], 'Jabal Al Dhafirah', 'Jabal Al Dhafrah', 'جبال الظفرة', site.legalName[lang === 'en' ? 'ar' : 'en']],
    legalName: site.legalName[lang],
    identifier: { '@type': 'PropertyValue', name: 'Commercial Registration (Oman)', value: site.crNumber },
    contactPoint: [site.phone, site.phone2].map((tel) => ({ '@type': 'ContactPoint', telephone: tel, contactType: 'customer service', areaServed: 'OM', availableLanguage: ['en', 'ar'] })),
    description: site.tagline[lang],
    url: abs(href(lang, '/')),
    telephone: site.phone,
    ...(site.email && { email: site.email }),
    image: abs('/og.png'),
    logo: abs('/favicon-512.png'),
    priceRange: '$$',
    foundingDate: String(site.foundedYear),
    address: {
      '@type': 'PostalAddress',
      postOfficeBoxNumber: site.address.poBox,
      addressLocality: site.address.locality[lang],
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}`,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens: site.hours.opens, closes: site.hours.closes },
    ],
    areaServed: cities.map((c) => ({ '@type': 'City', name: c.name[lang] })),
    sameAs: site.sameAs,
    ...(site.rating && {
      aggregateRating: { '@type': 'AggregateRating', ratingValue: site.rating.value, reviewCount: site.rating.count },
    }),
  };
}

export function serviceSchema(s: Service, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name[lang],
    description: s.short[lang],
    serviceType: s.name.en,
    url: abs(href(lang, `/services/${s.slug}/`)),
    provider: { '@id': BUSINESS_ID },
    areaServed: cities.map((c) => ({ '@type': 'City', name: c.name[lang] })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}
