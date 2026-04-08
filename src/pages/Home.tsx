import HeroSection from '../components/HeroSection';
import RecipeCard from '../components/RecipeCard';
import { featuredRecipes } from '../data/recipes';
import { colors } from '../themes/color';
import { fonts } from '../themes/font';
import { Card, Container } from '../components/common';

export default function Home() {
  const mainRecipe = featuredRecipes[0];

  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      {/* Hero Section */}
      <HeroSection featuredRecipe={mainRecipe} />

      {/* Featured Recipes Section */}
      <section style={{ backgroundColor: colors.bgPrimary }} className="py-16 pixel-cross">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Recipe Grid */}
            <div>
              <h2
                style={{
                  ...fonts.h2,
                  color: colors.textPrimary,
                }}
                className="mb-8"
              >
                Featured Recipes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </div>

            {/* Right: Info Panels */}
            <div className="space-y-6">
              <Card variant="pastel-lavender" className="p-8">
                <h2
                  style={{
                    ...fonts.h3,
                    color: colors.textPrimary,
                  }}
                  className="mb-6"
                >
                  Quick Info
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: '*', text: '1 cup flour' },
                    { icon: '*', text: '1/2 cup milk' },
                    { icon: '>', text: `${mainRecipe.prepTime} prep` },
                    { icon: '#', text: `${mainRecipe.servings} servings` },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center"
                      style={{
                        ...fonts.body,
                        color: colors.textSecondary,
                      }}
                    >
                      <span
                        style={{
                          ...fonts.tag,
                          color: colors.secondary,
                          width: '24px',
                        }}
                        className="mr-3"
                      >
                        {item.icon}
                      </span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card variant="pastel-mint" className="p-8">
                <h2
                  style={{
                    ...fonts.h3,
                    color: colors.textPrimary,
                  }}
                  className="mb-6"
                >
                  Instructions
                </h2>
                <ol
                  className="space-y-4"
                  style={{
                    ...fonts.body,
                    color: colors.textSecondary,
                  }}
                >
                  {mainRecipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span
                        style={{
                          ...fonts.tag,
                          color: colors.accent,
                          minWidth: '28px',
                          paddingTop: '4px',
                        }}
                        className="mr-3"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
