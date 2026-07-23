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
