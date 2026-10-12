import { DOMAIN } from '../i18n/ui';

export type MarketKey = 'talatSao' | 'nightMarket';

export interface MarketFacts {
  /** Primary English name used for structured data. */
  name: string;
  /** Local-language and translated names of the same place. */
  alternateName: string[];
  /** Short description in English (language-neutral for crawlers). */
  description: string;
  /** Street-level address. */
  streetAddress: string;
  addressLocality: string;
  addressCountry: string;
  plusCode: string;
  latitude: number;
  longitude: number;
  ratingValue: number;
  reviewCount: number;
  /** Google Maps place link. */
  hasMap: string;
  openingHours: string;
  openingDays: string[];
  /** Google Maps rating snapshot date. */
  ratingAsOf: string;
}

/**
 * Language-neutral facts for the two attractions covered by this site.
 * These values mirror the `markets` namespace in src/i18n/*.json — when the
 * rating or address changes there, change it here as well.
 */
export const MARKETS: Record<MarketKey, MarketFacts> = {
  talatSao: {
    name: 'Talat Sao (Vientiane Morning Market)',
    alternateName: [
      'ຕະຫຼາດເຊົ້າ',
      'Talat Sao Morning Market',
      'ตลาดเช้าเวียงจันทน์',
      '万象塔銮绍早市',
      '永珍早市',
    ],
    description:
      'Talat Sao is Vientiane’s best-known daily market, combining a modern air-conditioned shopping mall with streets of traditional stalls selling Lao textiles, gold jewellery, electronics and souvenirs.',
    streetAddress: 'Ave Lane Xang',
    addressLocality: 'Vientiane',
    addressCountry: 'LA',
    plusCode: 'XJ87+4PC',
    latitude: 17.9656,
    longitude: 102.6143,
    ratingValue: 3.9,
    reviewCount: 6963,
    hasMap: 'https://maps.app.goo.gl/2zP3kvc4hLKQ7q8V6',
    openingHours: '07:00-17:00',
    openingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ratingAsOf: '2026-10',
  },
  nightMarket: {
    name: 'Vientiane Night Market',
    alternateName: ['ຕະຫຼາດກາງຄືນ', 'Vientiane Night Bazaar', 'ตลาดกลางคืนเวียงจันทน์', '万象夜市'],
    description:
      'The Vientiane Night Market is an open-air riverside market beside Chao Anouvong Park on the Mekong, selling printed clothing, handicrafts and souvenirs, with street food and Mekong sunset views.',
    streetAddress: 'Chao Anouvong Park riverfront',
    addressLocality: 'Vientiane',
    addressCountry: 'LA',
    plusCode: 'XJ74+4F',
    latitude: 17.9622,
    longitude: 102.6074,
    ratingValue: 4.0,
    reviewCount: 3039,
    hasMap: 'https://maps.app.goo.gl/4opj9mpJvT2TJudD7',
    openingHours: '18:00-22:00',
    openingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ratingAsOf: '2026-10',
  },
};

export interface FaqItem {
  q: string;
  a: string;
}

export function attractionSchema(market: MarketKey, pageUrl: string) {
  const f = MARKETS[market];
  return {
    '@type': 'TouristAttraction',
    '@id': `${pageUrl}#attraction`,
    name: f.name,
    alternateName: f.alternateName,
    description: f.description,
    url: pageUrl,
    image: `${DOMAIN}/gallery/talat-sao-1.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: f.streetAddress,
      addressLocality: f.addressLocality,
      addressCountry: f.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: f.latitude,
      longitude: f.longitude,
    },
    hasMap: f.hasMap,
    isAccessibleForFree: true,
    publicAccess: true,
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Plus Code',
      value: f.plusCode,
    },
    openingHoursSpecification: f.openingDays.map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: f.openingHours.split('-')[0],
      closes: f.openingHours.split('-')[1],
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: f.ratingValue,
      reviewCount: f.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[], id: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${DOMAIN}/#website`,
    url: `${DOMAIN}/`,
    name: 'Vientiane Markets Guide',
    description:
      'Independent visitor guide to Talat Sao (Vientiane Morning Market) and the Vientiane Night Market — hours, maps, shopping tips and transport.',
    inLanguage: ['lo', 'en', 'th', 'zh'],
    publisher: {
      '@type': 'Organization',
      name: 'Vientiane Markets Guide',
      url: `${DOMAIN}/`,
    },
  };
}

export function webPageSchema(pageUrl: string, name: string, description: string, inLanguage = 'lo') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage,
    isPartOf: { '@id': `${DOMAIN}/#website` },
  };
}
