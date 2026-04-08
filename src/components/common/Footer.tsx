import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../../themes/font';

export default function Footer() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <footer style={{ backgroundColor: colors.black, color: colors.textLight }}>
      <div className="pixel-divider-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <span style={{ ...fonts.logo, color: colors.primary, fontSize: undefined }}
              className="text-[12px] sm:text-[16px]"
            >
              Cook With Me
            </span>
            <p
              style={{ ...fonts.body, color: colors.gray400, lineHeight: '1.8', whiteSpace: 'pre-line' }}
              className="mt-3 text-sm"
            >
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ ...fonts.h4, color: colors.primary, fontSize: undefined }}
              className="mb-3 sm:mb-4 text-[10px] sm:text-[11px]"
            >
              {t('footer.navigate')}
            </h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              {[
                { label: t('nav.home'), path: '/' },
                { label: t('nav.recipes'), path: '/recipes' },
                { label: t('nav.about'), path: '/about' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ ...fonts.bodySmall, color: colors.gray400, textDecoration: 'none' }}
                  className="hover:text-white"
                >
                  &gt; {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 style={{ ...fonts.h4, color: colors.primary, fontSize: undefined }}
              className="mb-3 sm:mb-4 text-[10px] sm:text-[11px]"
            >
              {t('footer.followUs')}
            </h4>
            <div className="flex gap-2 sm:gap-3">
              {[
                { label: 'X', href: 'https://x.com' },
                { label: 'IG', href: 'https://instagram.com' },
                { label: 'YT', href: 'https://youtube.com' },
                { label: 'TT', href: 'https://tiktok.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...fonts.tag,
                    backgroundColor: colors.gray700,
                    color: colors.primary,
                    border: `2px solid ${colors.gray600}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                  className="w-10 h-10 sm:w-10 sm:h-10 hover:border-primary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{ borderTop: `2px solid ${colors.gray700}` }}
          className="mt-8 sm:mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3"
        >
          <p style={{ ...fonts.bodySmall, color: colors.gray500 }} className="text-xs sm:text-sm">
            &copy; 2026 {t('footer.rights')}
          </p>
          <p style={{ ...fonts.tag, color: colors.gray600 }}>
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
