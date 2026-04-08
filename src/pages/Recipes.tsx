import { useState } from 'react';
import { featuredRecipes } from '../data/recipes';
import { colors } from '../themes/color';
import { fonts } from '../themes/font';
import { PageHeader, Container, Card, Badge, Button, Input } from '../components/common';

const CATEGORIES = ['All', 'Breakfast', 'Main Course', 'Dessert'];

export default function Recipes() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = featuredRecipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || recipe.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      <PageHeader
        title="Our Recipes"
        subtitle="Discover delicious recipes for every occasion"
      />

      {/* Search & Filter */}
      <section
        style={{
          backgroundColor: colors.white,
          borderBottom: `3px solid ${colors.pixelBorder}`,
        }}
        className="py-6"
      >
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full max-w-sm">
              <Input
                type="text"
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              {CATEGORIES.map((cat) => (
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

      {/* Recipe Grid */}
      <section className="py-16">
        <Container>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p style={{ ...fonts.h3, color: colors.textMuted }}>
                NO RECIPES FOUND
              </p>
              <p style={{ ...fonts.body, color: colors.textMuted, marginTop: '8px' }}>
                Try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((recipe) => (
                <Card key={recipe.id} variant="default" hover>
                  <div className="relative overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="warm">
                        {recipe.category.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      style={{
                        ...fonts.h4,
                        color: colors.textPrimary,
                      }}
                      className="mb-3"
                    >
                      {recipe.title}
                    </h3>
                    <p
                      style={{
                        ...fonts.bodySmall,
                        color: colors.textMuted,
                      }}
                      className="mb-4 line-clamp-2"
                    >
                      {recipe.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span style={{ ...fonts.tag, color: colors.textMuted }}>
                        {recipe.prepTime} PREP
                      </span>
                      <span style={{ ...fonts.tag, color: colors.textMuted }}>
                        {recipe.cookTime} COOK
                      </span>
                      <Button
                        variant="primary"
                        size="sm"
                        className="ml-auto"
                      >
                        VIEW
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
