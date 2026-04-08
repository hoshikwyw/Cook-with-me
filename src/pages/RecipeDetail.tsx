import { useParams, Link } from 'react-router-dom';
import { useRecipeById, useRecipes } from '../hooks/useRecipes';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
import { Container, Card, Badge, Button, Skeleton } from '../components/common';
import RecipeCard from '../components/RecipeCard';

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const { recipe, loading } = useRecipeById(id ?? '');
  const { recipes } = useRecipes();
  const { colors } = useTheme();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useTranslation();

  if (loading) {
    return (
      <div style={{ backgroundColor: colors.bgPrimary }} className="min-h-screen py-10 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
            <Skeleton height="240px" />
            <div className="space-y-4">
              <Skeleton height="24px" width="60%" />
              <Skeleton height="16px" width="40%" />
              <Skeleton height="160px" />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div style={{ backgroundColor: colors.bgPrimary }} className="min-h-screen flex items-center justify-center p-4">
        <Card variant="default" className="p-8 sm:p-12 text-center max-w-md">
          <h1 style={{ ...fonts.h2, color: colors.textPrimary, fontSize: undefined }} className="mb-3 sm:mb-4 text-sm sm:text-lg">
            {t('recipeDetail.notFound')}
          </h1>
          <p style={{ ...fonts.body, color: colors.textMuted }} className="mb-4 sm:mb-6 text-sm sm:text-base">
            {t('recipeDetail.notFoundHint')}
          </p>
          <Link to="/recipes">
            <Button variant="primary" size="md">{t('recipeDetail.backToRecipes')}</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const fav = isFavorite(recipe.id);
  const related = recipes.filter((r) => r.category === recipe.category && r.id !== recipe.id).slice(0, 3);

  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: colors.bgLight, borderBottom: `3px solid ${colors.pixelBorder}` }} className="py-2 sm:py-3">
        <Container>
          <div style={{ ...fonts.tag, color: colors.textMuted }} className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-[7px] sm:text-[8px]">
            <Link to="/" style={{ color: colors.textMuted, textDecoration: 'none' }}>{t('nav.home')}</Link>
            <span>&gt;</span>
            <Link to="/recipes" style={{ color: colors.textMuted, textDecoration: 'none' }}>{t('nav.recipes')}</Link>
            <span>&gt;</span>
            <span style={{ color: colors.primary }} className="truncate max-w-[120px] sm:max-w-none">{recipe.title.toUpperCase()}</span>
          </div>
        </Container>
      </div>

      {/* Main */}
      <section className="py-6 sm:py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Left */}
            <div className="space-y-4 sm:space-y-6">
              <Card variant="default">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 sm:h-64 md:h-80 object-cover" />
              </Card>

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { label: t('recipeDetail.prep'), value: recipe.prep_time, variant: 'pastel-pink' as const },
                  { label: t('recipeDetail.cook'), value: recipe.cook_time, variant: 'pastel-lavender' as const },
                  { label: t('recipeDetail.serves'), value: `${recipe.servings}`, variant: 'pastel-mint' as const },
                ].map((stat) => (
                  <Card key={stat.label} variant={stat.variant} className="p-2.5 sm:p-4 text-center">
                    <div style={{ ...fonts.tag, color: colors.textMuted }} className="mb-1 sm:mb-2 text-[6px] sm:text-[8px]">
                      {stat.label}
                    </div>
                    <div style={{ ...fonts.h4, color: colors.textPrimary, fontSize: undefined }} className="text-[9px] sm:text-[11px]">
                      {stat.value}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <Badge variant={recipe.difficulty === 'Easy' ? 'accent' : recipe.difficulty === 'Medium' ? 'warm' : 'primary'}>
                  {recipe.difficulty.toUpperCase()}
                </Badge>
                <Badge variant="outline">{recipe.category.toUpperCase()}</Badge>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <h1 style={{ ...fonts.h1, color: colors.textPrimary, fontSize: undefined }}
                    className="text-base sm:text-lg md:text-xl"
                  >
                    {recipe.title}
                  </h1>
                  <button
                    onClick={() => toggleFavorite(recipe.id)}
                    style={{
                      borderRadius: '50%',
                      backgroundColor: fav ? colors.primaryPastel : colors.cardBg,
                      border: `2px solid ${fav ? colors.primary : colors.gray200}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', transition: 'all 0.2s ease', flexShrink: 0,
                    }}
                    className={`w-10 h-10 sm:w-11 sm:h-11 heart-pop ${fav ? 'animate-heartbeat' : ''}`}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill={fav ? colors.primary : 'none'} stroke={fav ? colors.primary : colors.textMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <p style={{ ...fonts.body, color: colors.textSecondary, lineHeight: '1.8' }} className="text-sm sm:text-base">
                  {recipe.description}
                </p>
              </div>

              {/* Ingredients */}
              <Card variant="pastel-pink" className="p-4 sm:p-6">
                <h2 style={{ ...fonts.h3, color: colors.textPrimary, fontSize: undefined }} className="mb-3 sm:mb-4 text-[11px] sm:text-sm">
                  {t('recipeDetail.ingredients')}
                </h2>
                <ul className="space-y-2 sm:space-y-3">
                  {recipe.ingredients.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base" style={{ ...fonts.body, color: colors.textSecondary }}>
                      <span style={{ ...fonts.tag, color: colors.primary }} className="pt-0.5 sm:pt-1 text-[7px] sm:text-[8px]">
                        [{String(i + 1).padStart(2, '0')}]
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Instructions */}
              <Card variant="pastel-mint" className="p-4 sm:p-6">
                <h2 style={{ ...fonts.h3, color: colors.textPrimary, fontSize: undefined }} className="mb-3 sm:mb-4 text-[11px] sm:text-sm">
                  {t('recipeDetail.instructions')}
                </h2>
                <ol className="space-y-3 sm:space-y-4">
                  {recipe.instructions.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base" style={{ ...fonts.body, color: colors.textSecondary }}>
                      <span
                        style={{
                          ...fonts.h4, color: colors.textLight, backgroundColor: colors.accent,
                          border: `2px solid ${colors.pixelBorder}`, boxShadow: `2px 2px 0px ${colors.pixelBorder}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                          fontSize: undefined,
                        }}
                        className="w-6 h-6 sm:w-8 sm:h-8 text-[8px] sm:text-[11px]"
                      >
                        {i + 1}
                      </span>
                      <span className="pt-0.5 sm:pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-10 sm:mt-16">
              <div className="pixel-divider-primary mb-6 sm:mb-10" />
              <h2 style={{ ...fonts.h2, color: colors.textPrimary, fontSize: undefined }} className="mb-4 sm:mb-8 text-sm sm:text-base md:text-lg">
                {t('recipeDetail.moreIn', { category: recipe.category })}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {related.map((r) => (
                  <RecipeCard key={r.id} recipe={r} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
