import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecipes, useCategories } from '../hooks/useRecipes';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
import { PageHeader, Container, Button, Input, RecipeCardSkeleton } from '../components/common';
import RecipeCard from '../components/RecipeCard';

export default function Recipes() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') ?? 'All';
  const isQuickFilter = initialCategory === 'quick';

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(isQuickFilter ? 'All' : initialCategory);
  const [quickOnly, setQuickOnly] = useState(isQuickFilter);

  const { recipes, loading } = useRecipes();
  const { categories } = useCategories();
  const { colors } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const cat = searchParams.get('category') ?? 'All';
    if (cat === 'quick') {
      setActiveCategory('All');
      setQuickOnly(true);
    } else {
      setActiveCategory(cat);
      setQuickOnly(false);
    }
  }, [searchParams]);

  const categoryNames = ['All', ...categories.map((c) => c.name)];

  const filtered = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || recipe.category === activeCategory;
    const matchesQuick = !quickOnly || parseInt(recipe.prep_time) <= 10;
    return matchesSearch && matchesCategory && matchesQuick;
  });

  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      <PageHeader title={t('recipes.title')} subtitle={t('recipes.subtitle')} />

      {/* Search & Filter */}
      <section
        style={{ backgroundColor: colors.bgLight, borderBottom: `3px solid ${colors.pixelBorder}` }}
        className="py-4 sm:py-6"
      >
        <Container>
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full sm:max-w-sm">
              <Input
                type="text"
                placeholder={t('recipes.search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categoryNames.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat && !quickOnly ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => { setActiveCategory(cat); setQuickOnly(false); }}
                >
                  {cat.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <Container>
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <RecipeCardSkeleton key={i} />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <p style={{ ...fonts.h3, color: colors.textMuted }}>{t('recipes.noResults')}</p>
              <p style={{ ...fonts.body, color: colors.textMuted }} className="mt-2 text-sm sm:text-base">
                {t('recipes.noResultsHint')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
              {filtered.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
