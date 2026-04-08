import HeroSection from '../components/HeroSection';
import RecipeCard from '../components/RecipeCard';
import { useRecipes } from '../hooks/useRecipes';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
import { Container, Button, RecipeCardSkeleton } from '../components/common';
import { Link } from 'react-router-dom';

export default function Home() {
  const { recipes, loading } = useRecipes();
  const { colors } = useTheme();
  const { t } = useTranslation();

  const featured = recipes.filter((r) => r.is_featured);
  const mainRecipe = featured[0] ?? recipes[0];

  const categoryCount = (cat: string) => recipes.filter((r) => r.category === cat).length;
  const quickCount = recipes.filter((r) => parseInt(r.prep_time) <= 10).length;

  const quickPicks = [
    { title: t('home.pickBreakfast'), desc: t('home.pickBreakfastDesc'), category: 'Breakfast', color: colors.pastelLavender, border: colors.secondary, count: categoryCount('Breakfast') },
    { title: t('home.pickMainCourse'), desc: t('home.pickMainCourseDesc'), category: 'Main Course', color: colors.pastelMint, border: colors.accent, count: categoryCount('Main Course') },
    { title: t('home.pickDessert'), desc: t('home.pickDessertDesc'), category: 'Dessert', color: colors.pastelPink, border: colors.primary, count: categoryCount('Dessert') },
    { title: t('home.pickQuick'), desc: t('home.pickQuickDesc'), category: 'quick', color: colors.pastelYellow, border: colors.warm, count: quickCount },
  ];

  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      {/* Hero — show only when we have data */}
      {mainRecipe && <HeroSection featuredRecipe={mainRecipe} />}

      {/* Quick Picks */}
      <section style={{ backgroundColor: colors.bgPrimary }} className="py-16 pixel-sparkles">
        <Container>
          <div className="text-center mb-10">
            <h2 style={{ ...fonts.h2, color: colors.textPrimary }} className="mb-3">
              {t('home.quickPicksTitle')}
            </h2>
            <p style={{ ...fonts.body, color: colors.textSecondary }}>
              {t('home.quickPicksSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickPicks.map((pick) => (
              <Link key={pick.title} to={`/recipes?category=${encodeURIComponent(pick.category)}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    backgroundColor: pick.color,
                    border: `3px solid ${pick.border}`,
                    boxShadow: `4px 4px 0px ${pick.border}`,
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                    height: '100%',
                  }}
                  className="p-5 text-center pixel-hover"
                >
                  <div style={{ ...fonts.h4, color: colors.textPrimary }} className="mb-2">{pick.title}</div>
                  <p style={{ ...fonts.bodySmall, color: colors.textSecondary, lineHeight: '1.6' }} className="mb-3">{pick.desc}</p>
                  <div style={{ ...fonts.tag, color: pick.border }}>
                    {pick.count} {pick.count === 1 ? 'RECIPE' : 'RECIPES'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <div className="pixel-divider-primary" />

      {/* Recipes Grid */}
      <section style={{ backgroundColor: colors.bgPrimary }} className="py-16 pixel-cross">
        <Container>
          <div className="text-center mb-10">
            <h2 style={{ ...fonts.h2, color: colors.textPrimary }} className="mb-3">
              {t('home.featuredRecipes')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-fade-in-up" style={{ opacity: 0 }}>
                    <RecipeCardSkeleton />
                  </div>
                ))
              : (featured.length > 0 ? featured : recipes).map((recipe) => (
                  <div key={recipe.id} className="animate-fade-in-up" style={{ opacity: 0 }}>
                    <RecipeCard recipe={recipe} />
                  </div>
                ))
            }
          </div>
        </Container>
      </section>

      <div className="pixel-divider-primary" />

      {/* CTA */}
      <section style={{ backgroundColor: colors.bgPrimary }} className="py-20 pixel-hearts">
        <Container>
          <div className="text-center max-w-lg mx-auto space-y-6">
            <div style={{ ...fonts.h2, color: colors.primary }} className="animate-heartbeat inline-block">{'<3'}</div>
            <h2 style={{ ...fonts.h2, color: colors.textPrimary }}>{t('common.unlockChef')}</h2>
            <p style={{ ...fonts.body, color: colors.textSecondary, lineHeight: '1.8' }}>{t('home.soloSubtitle')}</p>
            <Link to="/recipes">
              <Button variant="primary" size="lg">{t('common.browseRecipes')}</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
