
import { useState, useEffect } from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      if (systemTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } else if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    // Escuchar cambios en las preferencias del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 gap-1">
      <button
        onClick={() => handleThemeChange('system')}
        className={`p-2 rounded-md transition-all ${
          theme === 'system'
            ? 'bg-white text-foreground shadow-sm'
            : 'text-gray-600 hover:text-foreground'
        }`}
        aria-label="System theme"
        title="System"
      >
        <Monitor className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded-md transition-all ${
          theme === 'light'
            ? 'bg-white text-foreground shadow-sm'
            : 'text-gray-600 hover:text-foreground'
        }`}
        aria-label="Light theme"
        title="Light"
      >
        <Sun className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded-md transition-all ${
          theme === 'dark'
            ? 'bg-white text-foreground shadow-sm'
            : 'text-gray-600 hover:text-foreground'
        }`}
        aria-label="Dark theme"
        title="Dark"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
