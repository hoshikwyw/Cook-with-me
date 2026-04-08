import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecipes, getCategories } from '../services/recipeService';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
import { PageHeader, Container, Card, Badge, Button, Input } from '../components/common';

export default function Recipes() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { colors } = useTheme();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useTranslation();
  const categories = getCategories();

  const filtered = getRecipes().filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || recipe.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      <PageHeader title={t('recipes.title')} subtitle={t('recipes.subtitle')} />

      {/* Search & Filter */}
      <section
        style={{
          backgroundColor: colors.bgLight,
          borderBottom: `3px solid ${colors.pixelBorder}`,
        }}
        className="py-6"
      >
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full max-w-sm">
              <Input
                type="text"
                placeholder={t('recipes.search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-16">
        <Container>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p style={{ ...fonts.h3, color: colors.textMuted }}>{t('recipes.noResults')}</p>
              <p style={{ ...fonts.body, color: colors.textMuted, marginTop: '8px' }}>
                {t('recipes.noResultsHint')}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((recipe) => {
                const fav = isFavorite(recipe.id);
                return (
                  <Card key={recipe.id} variant="default" hover>
                    <div className="relative overflow-hidden">
                      <img src={recipe.image} alt={recipe.title} className="w-full h-56 object-cover" />
                      <div className="absolute top-3 right-3">
                        <Badge variant="warm">{recipe.category.toUpperCase()}</Badge>
                      </div>
                      <button
                        onClick={() => toggleFavorite(recipe.id)}
                        style={{
                          ...fonts.tag,
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          backgroundColor: fav ? colors.primaryPastel : colors.white,
                          color: fav ? colors.primary : colors.textMuted,
                          border: `2px solid ${fav ? colors.primary : colors.pixelBorder}`,
                          boxShadow: `2px 2px 0px ${fav ? colors.primary : colors.pixelBorder}`,
                          padding: '4px 8px',
                          cursor: 'pointer',
                        }}
                      >
                        {fav ? '<3' : '..'}
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 style={{ ...fonts.h4, color: colors.textPrimary }} className="mb-3">
                        {recipe.title}
                      </h3>
                      <p style={{ ...fonts.bodySmall, color: colors.textMuted }} className="mb-4 line-clamp-2">
                        {recipe.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <span style={{ ...fonts.tag, color: colors.textMuted }}>
                          {recipe.prepTime} {t('recipes.prep')}
                        </span>
                        <span style={{ ...fonts.tag, color: colors.textMuted }}>
                          {recipe.cookTime} {t('recipes.cook')}
                        </span>
                        <Link to={`/recipes/${recipe.id}`} className="ml-auto">
                          <Button variant="primary" size="sm">
                            {t('recipes.view')}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
