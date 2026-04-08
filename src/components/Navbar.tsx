import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { colors, toggleMode, isDark } = useTheme();
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.recipes'), path: '/recipes' },
    { label: t('nav.about'), path: '/about' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'mm' : 'en');
  };

  return (
    <nav
      style={{
        backgroundColor: colors.white,
        borderBottom: `3px solid ${colors.pixelBorder}`,
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🍳</span>
            <span style={{ ...fonts.logo, color: colors.primary }}>
              Cook With Me
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...fonts.nav,
                  color: isActive(item.path) ? colors.primary : colors.textPrimary,
                  textDecoration: 'none',
                  padding: '6px 0',
                  borderBottom: isActive(item.path)
                    ? `3px solid ${colors.primary}`
                    : '3px solid transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              style={{
                ...fonts.tag,
                backgroundColor: colors.secondaryPastel,
                color: colors.secondaryDark,
                border: `2px solid ${colors.secondary}`,
                boxShadow: `2px 2px 0px ${colors.secondary}`,
                padding: '6px 10px',
                cursor: 'pointer',
                transition: 'all 0.1s ease',
              }}
              className="pixel-hover"
            >
              {i18n.language === 'en' ? 'EN' : 'MM'}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleMode}
              style={{
                ...fonts.tag,
                backgroundColor: isDark ? colors.warmPastel : colors.bgPrimary,
                color: colors.textPrimary,
                border: `2px solid ${colors.pixelBorder}`,
                boxShadow: `2px 2px 0px ${colors.pixelBorder}`,
                padding: '6px 10px',
                cursor: 'pointer',
                transition: 'all 0.1s ease',
              }}
              className="pixel-hover"
            >
              {isDark ? 'LIT' : 'DIM'}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              style={{
                ...fonts.tag,
                backgroundColor: colors.secondaryPastel,
                color: colors.secondaryDark,
                border: `2px solid ${colors.secondary}`,
                padding: '6px 8px',
                cursor: 'pointer',
              }}
            >
              {i18n.language === 'en' ? 'EN' : 'MM'}
            </button>
            <button
              onClick={toggleMode}
              style={{
                ...fonts.tag,
                backgroundColor: isDark ? colors.warmPastel : colors.bgPrimary,
                color: colors.textPrimary,
                border: `2px solid ${colors.pixelBorder}`,
                padding: '6px 8px',
                cursor: 'pointer',
              }}
            >
              {isDark ? 'LIT' : 'DIM'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                ...fonts.tag,
                backgroundColor: isMobileMenuOpen ? colors.primary : colors.white,
                color: isMobileMenuOpen ? colors.textLight : colors.textPrimary,
                border: `3px solid ${colors.pixelBorder}`,
                boxShadow: isMobileMenuOpen ? 'none' : `2px 2px 0px ${colors.pixelBorder}`,
                padding: '8px 12px',
                cursor: 'pointer',
                transition: 'all 0.1s ease',
              }}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? t('nav.close') : t('nav.menu')}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: colors.white,
            borderTop: `3px solid ${colors.pixelBorder}`,
          }}
          className="md:hidden animate-slide-down"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  ...fonts.nav,
                  color: isActive(item.path) ? colors.primary : colors.textPrimary,
                  display: 'block',
                  padding: '12px 16px',
                  backgroundColor: isActive(item.path) ? colors.primaryPastel : 'transparent',
                  border: `2px solid ${isActive(item.path) ? colors.primary : colors.gray200}`,
                  textDecoration: 'none',
                  transition: 'all 0.1s ease',
                }}
              >
                &gt; {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
