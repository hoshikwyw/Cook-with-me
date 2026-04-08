import { Link } from 'react-router-dom';
import { colors } from '../../themes/color';
import { fonts } from '../../themes/font';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: colors.black,
        color: colors.textLight,
      }}
    >
      {/* Pixel divider top */}
      <div className="pixel-divider-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span
              style={{
                ...fonts.logo,
                color: colors.primary,
              }}
            >
              Cook With Me
            </span>
            <p
              style={{
                ...fonts.body,
                color: colors.gray400,
                marginTop: '12px',
              }}
            >
              Good Food, Good Mood.
              <br />
              Your pixel-perfect cooking companion.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                ...fonts.h4,
                color: colors.primary,
                marginBottom: '16px',
              }}
            >
              NAVIGATE
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Recipes', path: '/recipes' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    ...fonts.bodySmall,
                    color: colors.gray400,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  className="hover:text-white"
                >
                  &gt; {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4
              style={{
                ...fonts.h4,
                color: colors.primary,
                marginBottom: '16px',
              }}
            >
              FOLLOW US
            </h4>
            <div className="flex gap-3">
              {['X', 'IG', 'YT', 'TT'].map((label) => (
                <div
                  key={label}
                  style={{
                    ...fonts.tag,
                    backgroundColor: colors.gray700,
                    color: colors.primary,
                    border: `2px solid ${colors.gray600}`,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  className="hover:border-primary"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `2px solid ${colors.gray700}`,
            marginTop: '40px',
            paddingTop: '20px',
          }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p style={{ ...fonts.bodySmall, color: colors.gray500 }}>
            &copy; 2026 Cook With Me. All rights reserved.
          </p>
          <p style={{ ...fonts.tag, color: colors.gray600 }}>
            MADE WITH &lt;3 AND PIXELS
          </p>
        </div>
      </div>
    </footer>
  );
}
