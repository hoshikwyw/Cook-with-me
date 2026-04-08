import type { Recipe } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
import { Button, Card, Container } from './common';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  featuredRecipe: Recipe;
}

export default function HeroSection({ featuredRecipe }: HeroSectionProps) {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <section>
      {/* Hero Top */}
      <div
        style={{ backgroundColor: colors.bgPrimary }}
        className="relative overflow-hidden pixel-hearts"
      >
        <Container className="py-16 sm:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center md:min-h-[65vh]">
            {/* Left: Text */}
            <div className="space-y-8 text-center md:text-left">
              <div
                style={{
                  ...fonts.tag,
                  color: colors.secondary,
                  letterSpacing: '2px',
                }}
              >
                {t('hero.tagline')}
              </div>

              <div>
                <h1 style={{ ...fonts.heroTitle, color: colors.textPrimary }}>
                  <span className="text-2xl sm:text-3xl lg:text-[38px] block leading-relaxed">
                    {t('hero.title1')}
                  </span>
                  <span
                    className="text-2xl sm:text-3xl lg:text-[38px] block leading-relaxed"
                    style={{ color: colors.primary }}
                  >
                    {t('hero.title2')}
                  </span>
                </h1>
              </div>

              <p
                style={{
                  ...fonts.body,
                  color: colors.textSecondary,
                  maxWidth: '400px',
                  lineHeight: '1.8',
                }}
                className="mx-auto md:mx-0"
              >
                {t('hero.subtitle')}
              </p>

              <div className="flex gap-4 justify-center md:justify-start">
                <Link to="/recipes">
                  <Button variant="primary" size="lg">
                    {t('hero.cta')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Food images */}
            <div className="relative h-[280px] sm:h-[380px] md:h-[480px] hidden sm:block">
              {/* Main large image */}
              <div
                style={{
                  border: `4px solid ${colors.pixelBorder}`,
                  boxShadow: `6px 6px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.cardBg,
                  overflow: 'hidden',
                }}
                className="absolute top-4 right-4 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px]"
              >
                <img src="/stew.png" alt="Stew" className="w-full h-full object-cover" />
              </div>

              {/* Secondary image */}
              <div
                style={{
                  border: `4px solid ${colors.pixelBorder}`,
                  boxShadow: `6px 6px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.cardBg,
                  overflow: 'hidden',
                }}
                className="absolute bottom-4 right-12 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px]"
              >
                <img src="/fish.png" alt="Fish" className="w-full h-full object-cover" />
              </div>

              {/* Small accent image */}
              <div
                style={{
                  border: `3px solid ${colors.pixelBorder}`,
                  boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.cardBg,
                  overflow: 'hidden',
                  zIndex: 10,
                }}
                className="absolute top-1/2 left-4 -translate-y-1/2 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px]"
              >
                <img src="/noodle.png" alt="Noodle" className="w-full h-full object-cover" />
              </div>

              {/* Floating decorations */}
              <div className="absolute top-8 right-[55%] animate-float hidden md:block" style={{ animationDelay: '0s' }}>
                <img src="/bread.png" alt="" className="w-12 h-12 object-cover" />
              </div>
              <div className="absolute top-0 right-[50%] animate-float hidden md:block" style={{ animationDelay: '1.5s' }}>
                <img src="/pancake.png" alt="" className="w-12 h-12 object-cover" />
              </div>
            </div>
          </div>
        </Container>

        <div className="pixel-divider" />
      </div>

      {/* Featured Recipe — cleaner layout */}
      <div style={{ backgroundColor: colors.bgLight }} className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card variant="default">
              <img
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="w-full h-56 sm:h-72 object-cover"
              />
            </Card>

            <div className="space-y-6">
              <h2 style={{ ...fonts.h2, color: colors.textPrimary }} className="mb-2">
                {featuredRecipe.title}
              </h2>
              <p style={{ ...fonts.body, color: colors.textSecondary, lineHeight: '1.8' }}>
                {featuredRecipe.description}
              </p>
              <Link to="/recipes">
                <Button variant="primary" size="md">
                  {t('common.browseRecipes')}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
