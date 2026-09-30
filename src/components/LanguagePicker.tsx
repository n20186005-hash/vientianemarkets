import { languages } from '../i18n/ui';
import { useState } from 'react';

interface Props {
  lang?: string;
  path?: string;
}

export default function LanguagePicker({ lang = 'lo', path = '/' }: Props) {
  const [open, setOpen] = useState(false);

  const getPath = (targetLang: string) => {
    const base = path.replace(/^\/(en|zh|lo|th)(\/|$)/, '/');
    return targetLang === 'lo' ? base : `/${targetLang}${base}`;
  };

  const items = Object.entries(languages);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-full border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:border-mekong-blue"
        aria-label="Select language"
      >
        <span>{languages[lang as keyof typeof languages] ?? languages.lo}</span>
        <span className="text-xs">▾</span>
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg">
          {items.map(([code, label]) => (
            <li key={code}>
              <a
                href={getPath(code)}
                className="block px-4 py-2 text-sm text-zinc-700 hover:bg-mekong-blue hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
