'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLang = languages.find(lang => lang.code === selectedLanguage);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
        style={{ fontFamily: "'Switzer', sans-serif" }}
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span>{selectedLang?.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setSelectedLanguage(language.code);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              style={{ fontFamily: "'Switzer', sans-serif" }}
            >
              <span>{language.label}</span>
              {selectedLanguage === language.code && (
                <Check className="w-4 h-4 text-foreground" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
