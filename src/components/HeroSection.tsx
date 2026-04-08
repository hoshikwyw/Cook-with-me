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
        <Container className="py-10 sm:py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center md:min-h-[60vh]">
            {/* Left: Text */}
            <div className="space-y-5 sm:space-y-8 text-center md:text-left">
              <div
                style={{ ...fonts.tag, color: colors.secondary, letterSpacing: '2px' }}
              >
                {t('hero.tagline')}
              </div>

              <div>
                <h1 style={{ ...fonts.heroTitle, color: colors.textPrimary, fontSize: undefined }}>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] block leading-relaxed">
                    {t('hero.title1')}
                  </span>
                  <span
                    className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] block leading-relaxed"
                    style={{ color: colors.primary }}
                  >
                    {t('hero.title2')}
                  </span>
                </h1>
              </div>

              <p
                style={{ ...fonts.body, color: colors.textSecondary, lineHeight: '1.8' }}
                className="mx-auto md:mx-0 max-w-[400px] text-sm sm:text-base"
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

            {/* Right: Food images — hidden on small mobile */}
            <div className="relative h-[220px] sm:h-[320px] md:h-[420px] hidden sm:block">
              <div
                style={{
                  border: `3px solid ${colors.pixelBorder}`,
                  boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.cardBg,
                  overflow: 'hidden',
                }}
                className="absolute top-2 right-2 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]"
              >
                <img src="/stew.png" alt="Stew" className="w-full h-full object-cover" />
              </div>

              <div
                style={{
                  border: `3px solid ${colors.pixelBorder}`,
                  boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.cardBg,
                  overflow: 'hidden',
                }}
                className="absolute bottom-2 right-8 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px]"
              >
                <img src="/fish.png" alt="Fish" className="w-full h-full object-cover" />
              </div>

              <div
                style={{
                  border: `2px solid ${colors.pixelBorder}`,
                  boxShadow: `3px 3px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.cardBg,
                  overflow: 'hidden',
                  zIndex: 10,
                }}
                className="absolute top-1/2 left-2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
              >
                <img src="/noodle.png" alt="Noodle" className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-4 right-[50%] animate-float hidden md:block">
                <img src="/bread.png" alt="" className="w-10 h-10 md:w-12 md:h-12 object-cover" />
              </div>
            </div>
          </div>
        </Container>

        <div className="pixel-divider" />
      </div>

      {/* Featured Recipe */}
      <div style={{ backgroundColor: colors.bgLight }} className="py-10 sm:py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <Card variant="default">
              <img
                src={featuredRecipe.images?.[0] ?? featuredRecipe.image}
                alt={featuredRecipe.title}
                className="w-full h-48 sm:h-56 md:h-72 object-cover"
              />
            </Card>

            <div className="space-y-4 sm:space-y-6">
              <h2
                style={{ ...fonts.h2, color: colors.textPrimary, fontSize: undefined }}
                className="text-sm sm:text-base md:text-lg mb-2"
              >
                {featuredRecipe.title}
              </h2>
              <p style={{ ...fonts.body, color: colors.textSecondary, lineHeight: '1.8' }}
                className="text-sm sm:text-base"
              >
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
