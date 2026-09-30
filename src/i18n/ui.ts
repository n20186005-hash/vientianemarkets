export const languages = {
  lo: 'ພາສາລາວ',
  en: 'English',
  zh: '中文',
};

export const defaultLang = 'lo';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = ui[lang] || ui[defaultLang];
    
    for (const k of keys) {
      if (value[k] === undefined) {
        return key;
      }
      value = value[k];
    }
    return value as string;
  }
}

import lo from './lo.json';
import en from './en.json';
import zh from './zh.json';

export const ui = {
  lo,
  en,
  zh
} as const;

export const DOMAIN = 'https://www.vientianemarkets.com';

// Build hreflang alternates for a page. `slug` is empty for the homepage,
// or 'talat-sao' / 'vientiane-night-market' for the entity pages.
export function pageAlternates(slug: string): { hreflang: string; href: string }[] {
  const path = slug ? `/${slug}/` : '/';
  const enPath = slug ? `/en/${slug}/` : '/en/';
  const zhPath = slug ? `/zh/${slug}/` : '/zh/';
  return [
    { hreflang: 'lo', href: DOMAIN + path },
    { hreflang: 'en', href: DOMAIN + enPath },
    { hreflang: 'zh-CN', href: DOMAIN + zhPath },
    { hreflang: 'x-default', href: DOMAIN + path },
  ];
}
