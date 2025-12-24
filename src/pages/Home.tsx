import HeroSection from '../components/HeroSection';
import RecipeCard from '../components/RecipeCard';
import { featuredRecipes } from '../data/recipes';
import { colors } from '../themes/color';
import { fonts } from '../themes/font';

export default function Home() {
  const mainRecipe = featuredRecipes[0];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      {/* Hero Section */}
      <HeroSection featuredRecipe={mainRecipe} />

      {/* Featured Recipes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Recipe Grid */}
          <div>
            <h2 
              style={{
                ...fonts.h2,
                color: colors.textAccent,
                fontSize: '36px'
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

          {/* Right: Instructions */}
          <div className="space-y-6">
            <div 
              style={{ 
                backgroundColor: colors.white,
                boxShadow: '0 4px 20px rgba(184, 230, 240, 0.2)'
              }}
              className="rounded-3xl p-8"
            >
              <h2 
                style={{
                  ...fonts.h3,
                  color: colors.textSecondary,
                  fontSize: '24px'
                }}
                className="mb-6"
              >
                Quick Info
              </h2>
              <div className="space-y-4 mb-4">
                <div 
                  className="flex items-center"
                  style={{
                    ...fonts.body,
                    color: colors.textSecondary
                  }}
                >
                  <span className="mr-3 text-2xl">🥚</span>
                  <span>1 cup flour</span>
                </div>
                <div 
                  className="flex items-center"
                  style={{
                    ...fonts.body,
                    color: colors.textSecondary
                  }}
                >
                  <span className="mr-3 text-2xl">🥛</span>
                  <span>1/2 cup milk</span>
                </div>
                <div 
                  className="flex items-center"
                  style={{
                    ...fonts.body,
                    color: colors.textSecondary
                  }}
                >
                  <span className="mr-3 text-2xl">⏱️</span>
                  <span>{mainRecipe.prepTime} prep</span>
                </div>
                <div 
                  className="flex items-center"
                  style={{
                    ...fonts.body,
                    color: colors.textSecondary
                  }}
                >
                  <span className="mr-3 text-2xl">👥</span>
                  <span>{mainRecipe.servings} servings</span>
                </div>
              </div>
            </div>

            <div 
              style={{ backgroundColor: colors.grayLight }}
              className="rounded-2xl p-8 shadow-lg"
            >
              <h2 
                style={{
                  ...fonts.h3,
                  color: colors.textSecondary,
                  fontSize: '24px'
                }}
                className="mb-6"
              >
                Instructions
              </h2>
              <ol 
                className="space-y-4"
                style={{
                  ...fonts.body,
                  color: colors.textSecondary
                }}
              >
                {mainRecipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span 
                      style={{
                        fontWeight: '700',
                        color: colors.textAccent,
                        minWidth: '32px'
                      }}
                      className="mr-3"
                    >
                      {index + 1}.
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

