import { Link, useLocation } from 'react-router-dom';
import { colors } from '../themes/color';
import { fonts } from '../themes/font';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'RECIPES', path: '/recipes' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

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
            <span
              style={{
                ...fonts.logo,
                color: colors.primary,
              }}
            >
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
                  color: isActive(item.path)
                    ? colors.primary
                    : colors.textPrimary,
                  textDecoration: 'none',
                  padding: '6px 0',
                  borderBottom: isActive(item.path)
                    ? `3px solid ${colors.primary}`
                    : '3px solid transparent',
                  transition: 'all 0.15s ease',
                }}
                className="hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              ...fonts.tag,
              backgroundColor: isMobileMenuOpen ? colors.primary : colors.white,
              color: isMobileMenuOpen ? colors.white : colors.textPrimary,
              border: `3px solid ${colors.pixelBorder}`,
              boxShadow: isMobileMenuOpen
                ? 'none'
                : `2px 2px 0px ${colors.pixelBorder}`,
              padding: '8px 12px',
              cursor: 'pointer',
              transition: 'all 0.1s ease',
            }}
            className="md:hidden"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
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
                  color: isActive(item.path)
                    ? colors.primary
                    : colors.textPrimary,
                  display: 'block',
                  padding: '12px 16px',
                  backgroundColor: isActive(item.path)
                    ? colors.primaryPastel
                    : 'transparent',
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
