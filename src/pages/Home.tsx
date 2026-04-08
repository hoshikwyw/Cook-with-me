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
      {mainRecipe && <HeroSection featuredRecipe={mainRecipe} />}

      {/* Quick Picks */}
      <section style={{ backgroundColor: colors.bgPrimary }} className="py-10 sm:py-14 md:py-16 pixel-sparkles">
        <Container>
          <div className="text-center mb-6 sm:mb-10">
            <h2
              style={{ ...fonts.h2, color: colors.textPrimary, fontSize: undefined }}
              className="mb-2 sm:mb-3 text-sm sm:text-base md:text-lg"
            >
              {t('home.quickPicksTitle')}
            </h2>
            <p style={{ ...fonts.body, color: colors.textSecondary }} className="text-sm sm:text-base">
              {t('home.quickPicksSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {quickPicks.map((pick) => (
              <Link key={pick.title} to={`/recipes?category=${encodeURIComponent(pick.category)}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    backgroundColor: pick.color,
                    border: `2px solid ${pick.border}`,
                    boxShadow: `3px 3px 0px ${pick.border}`,
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                    height: '100%',
                  }}
                  className="p-3 sm:p-5 text-center pixel-hover"
                >
                  <div style={{ ...fonts.h4, color: colors.textPrimary, fontSize: undefined }}
                    className="mb-1 sm:mb-2 text-[9px] sm:text-[11px]"
                  >
                    {pick.title}
                  </div>
                  <p style={{ ...fonts.bodySmall, color: colors.textSecondary }} className="mb-2 sm:mb-3 text-[11px] sm:text-xs leading-relaxed hidden sm:block">
                    {pick.desc}
                  </p>
                  <div style={{ ...fonts.tag, color: pick.border }} className="text-[7px] sm:text-[8px]">
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
      <section style={{ backgroundColor: colors.bgPrimary }} className="py-10 sm:py-14 md:py-16 pixel-cross">
        <Container>
          <div className="text-center mb-6 sm:mb-10">
            <h2
              style={{ ...fonts.h2, color: colors.textPrimary, fontSize: undefined }}
              className="mb-2 sm:mb-3 text-sm sm:text-base md:text-lg"
            >
              {t('home.featuredRecipes')}
            </h2>
          </div>
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <RecipeCardSkeleton key={i} />
              ))}
            </div>
          ) : recipes.length === 0 ? (
            <div className="text-center py-10 sm:py-16 space-y-4">
              <div className="text-4xl sm:text-5xl">🍳</div>
              <p style={{ color: colors.textPrimary, fontFamily: "'Nunito', sans-serif", fontWeight: 700 }} className="text-sm sm:text-base">
                No recipes yet!
              </p>
              <p style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif" }} className="text-xs sm:text-sm max-w-xs mx-auto">
                Recipes will show up here once they're added. Check back soon!
              </p>
              <Link to="/recipes">
                <Button variant="outline" size="md">BROWSE RECIPES</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 stagger-children">
              {(featured.length > 0 ? featured : recipes).map((recipe) => (
                <div key={recipe.id} className="animate-fade-in-up" style={{ opacity: 0 }}>
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <div className="pixel-divider-primary" />

      {/* CTA */}
      <section style={{ backgroundColor: colors.bgPrimary }} className="py-12 sm:py-16 md:py-20 pixel-hearts">
        <Container>
          <div className="text-center max-w-lg mx-auto space-y-4 sm:space-y-6 px-4">
            <div
              style={{ ...fonts.h2, color: colors.primary, fontSize: undefined }}
              className="animate-heartbeat inline-block text-base sm:text-lg"
            >
              {'<3'}
            </div>
            <h2
              style={{ ...fonts.h2, color: colors.textPrimary, fontSize: undefined }}
              className="text-sm sm:text-base md:text-lg"
            >
              {t('common.unlockChef')}
            </h2>
            <p style={{ ...fonts.body, color: colors.textSecondary, lineHeight: '1.8' }} className="text-sm sm:text-base">
              {t('home.soloSubtitle')}
            </p>
            <Link to="/recipes">
              <Button variant="primary" size="lg">{t('common.browseRecipes')}</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
