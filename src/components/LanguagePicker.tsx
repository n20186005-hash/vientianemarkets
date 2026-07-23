import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { languages } from '../i18n/ui';

export default function LanguagePicker({ currentLang }: { currentLang: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const getPath = (lang: string) => {
    if (lang === 'lo') return '/';
    return `/${lang}/`;
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center gap-2 bg-white/80 border border-gray-200 shadow-sm rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mekong-blue"
      >
        <Globe className="w-4 h-4" />
        {languages[currentLang as keyof typeof languages]}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {Object.entries(languages).map(([lang, label]) => (
              <a
                key={lang}
                href={getPath(lang)}
                className={`block px-4 py-2 text-sm ${
                  currentLang === lang ? 'bg-zinc-100 text-mekong-blue font-semibold' : 'text-zinc-700 hover:bg-zinc-50'
                }`}
                role="menuitem"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
