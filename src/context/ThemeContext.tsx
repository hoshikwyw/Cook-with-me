import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { colors as lightColors, darkColors, type ColorScheme } from '../themes/color';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  isDark: boolean;
  colors: ColorScheme;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const STORAGE_KEY = 'cookwithme_theme';

function loadTheme(): ThemeMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch { /* ignore */ }
  return 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(loadTheme);
  const isDark = mode === 'dark';

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const themeColors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, isDark, colors: themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
