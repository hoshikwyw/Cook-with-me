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
        <Container className="py-12 sm:py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center md:min-h-[70vh]">
            {/* Left: Text */}
            <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-8 text-center md:text-left">
              <div style={{ ...fonts.caption, color: colors.secondary }}>
                {t('hero.tagline')}
              </div>

              <h1 style={{ ...fonts.heroTitle, color: colors.textPrimary }}>
                <span className="text-2xl sm:text-4xl lg:text-[42px] block leading-relaxed">
                  {t('hero.title1')}
                </span>
                <span
                  className="text-2xl sm:text-4xl lg:text-[42px] block leading-relaxed"
                  style={{ color: colors.primary }}
                >
                  {t('hero.title2')}
                </span>
              </h1>

              <p
                style={{
                  ...fonts.bodyLarge,
                  color: colors.textSecondary,
                  maxWidth: '420px',
                }}
                className="mx-auto md:mx-0"
              >
                {t('hero.subtitle')}
              </p>

              <Link to="/recipes">
                <Button variant="primary" size="lg">
                  {t('hero.cta')}
                </Button>
              </Link>
            </div>

            {/* Right: Food images — hidden on small screens */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] hidden sm:block">
              <div
                style={{
                  border: `4px solid ${colors.pixelBorder}`,
                  boxShadow: `6px 6px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.cardBg,
                  overflow: 'hidden',
                }}
                className="absolute top-4 right-4 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px]"
              >
                <img src="/stew.png" alt="Stew" className="w-full h-full object-cover" />
              </div>

              <div
                style={{
                  border: `4px solid ${colors.pixelBorder}`,
                  boxShadow: `6px 6px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.cardBg,
                  overflow: 'hidden',
                }}
                className="absolute bottom-4 right-8 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px]"
              >
                <img src="/fish.png" alt="Fish" className="w-full h-full object-cover" />
              </div>

              <div
                style={{
                  border: `3px solid ${colors.pixelBorder}`,
                  boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.cardBg,
                  overflow: 'hidden',
                  zIndex: 10,
                }}
                className="absolute top-1/2 left-4 -translate-y-1/2 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
              >
                <img src="/noodle.png" alt="Noodle" className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-8 right-[60%] animate-float hidden md:block" style={{ animationDelay: '0s' }}>
                <img src="/bread.png" alt="" className="w-14 h-14 object-cover" />
              </div>
              <div className="absolute top-2 right-[55%] animate-float hidden md:block" style={{ animationDelay: '1s' }}>
                <img src="/pancake.png" alt="" className="w-14 h-14 object-cover" />
              </div>
            </div>
          </div>
        </Container>

        <div className="pixel-divider" />
      </div>

      {/* Featured Recipe */}
      <div style={{ backgroundColor: colors.bgLight }} className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card variant="default">
              <img
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </Card>

            <div className="space-y-6">
              <div>
                <h2 style={{ ...fonts.h2, color: colors.textPrimary }} className="mb-4">
                  {featuredRecipe.title}
                </h2>
                <Link to="/recipes">
                  <Button variant="primary" size="md">
                    {t('common.browseRecipes')}
                  </Button>
                </Link>
              </div>

              <Card variant="pastel-pink" className="p-6">
                <h3 style={{ ...fonts.h3, color: colors.textPrimary }} className="mb-4">
                  {t('recipeDetail.ingredients')}
                </h3>
                <ul className="space-y-3">
                  {featuredRecipe.ingredients.slice(0, 4).map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      style={{ ...fonts.body, color: colors.textSecondary }}
                    >
                      <span className="mr-3">*</span>
                      <span className="flex-1">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="text-center pt-2">
                <h3 style={{ ...fonts.h3, color: colors.primary }}>
                  {t('common.unlockChef')}
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
