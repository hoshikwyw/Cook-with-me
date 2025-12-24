import { Link } from 'react-router-dom';
import { colors } from '../themes/color';
import { fonts } from '../themes/font';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'RECIPES', path: '/recipes' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav 
      style={{ 
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: 'none',
        boxShadow: isScrolled 
          ? '0 4px 20px rgba(0, 0, 0, 0.05)'
          : 'none',
        transition: 'all 0.3s ease',
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-all duration-300"
          >
            {/* Whisk Icon (Brand) */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="w-12 h-12"
            >
              <span className="text-4xl">🥄</span>
            </div>
            
            {/* Logo Text - Fredoka Bold */}
            <span 
              style={{
                ...fonts.logo,
                fontSize: '24px',
                background: `linear-gradient(135deg, #FF8A65 0%, #FFAC97 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                letterSpacing: '-0.5px'
              }}
            >
              Cook With Me
            </span>
          </Link>

          {/* Navigation Items - Nunito SemiBold */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...fonts.nav,
                  fontSize: '15px',
                  fontWeight: '600',
                  color: item.path === '/' ? colors.primary : colors.textPrimary,
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease'
                }}
                className="hover:opacity-70 relative group"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: isMobileMenuOpen 
                ? colors.primary
                : 'rgba(255, 138, 101, 0.1)',
              color: isMobileMenuOpen ? colors.white : colors.primary,
              padding: '10px 16px',
              borderRadius: '12px',
              border: 'none',
              transition: 'all 0.3s ease'
            }}
            className="md:hidden flex items-center justify-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            aria-label="Menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ 
                transition: 'transform 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            animation: 'slideDown 0.3s ease-out'
          }}
          className="md:hidden"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  ...fonts.nav,
                  color: colors.textPrimary,
                  display: 'block',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 138, 101, 0.05)',
                  border: '1px solid rgba(255, 138, 101, 0.1)',
                  fontWeight: '600',
                  fontSize: '15px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease'
                }}
                className="hover:opacity-70 hover:shadow-md transform hover:scale-[1.02] transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </nav>
  );
}

