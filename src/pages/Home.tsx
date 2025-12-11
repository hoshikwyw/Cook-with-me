import HeroSection from '../components/HeroSection';
import RecipeCard from '../components/RecipeCard';
import { featuredRecipes } from '../data/recipes';

export default function Home() {
  const mainRecipe = featuredRecipes[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection featuredRecipe={mainRecipe} />

      {/* Featured Recipes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Recipe Grid */}
          <div>
            <h2 className="font-display font-bold text-3xl text-text-dark mb-6">
              Featured Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>

          {/* Right: Instructions */}
          <div className="space-y-6">
            <div className="bg-surface rounded-2xl p-6 shadow-soft">
              <h2 className="font-display font-bold text-xl text-text-dark mb-4">
                Quick Info
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-text-dark">
                  <span className="mr-3 text-2xl">🥚</span>
                  <span>1 cup flour</span>
                </div>
                <div className="flex items-center text-text-dark">
                  <span className="mr-3 text-2xl">🥛</span>
                  <span>1/2 cup milk</span>
                </div>
                <div className="flex items-center text-text-dark">
                  <span className="mr-3 text-2xl">⏱️</span>
                  <span>{mainRecipe.prepTime} prep</span>
                </div>
                <div className="flex items-center text-text-dark">
                  <span className="mr-3 text-2xl">👥</span>
                  <span>{mainRecipe.servings} servings</span>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-soft">
              <h2 className="font-display font-bold text-xl text-text-dark mb-4">
                Instructions
              </h2>
              <ol className="space-y-3 text-text-dark">
                {mainRecipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-bold text-primary mr-3 min-w-[24px]">{index + 1}.</span>
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

