import type { Recipe } from "../data/recipes";

interface HeroSectionProps {
  featuredRecipe: Recipe;
}

export default function HeroSection({ featuredRecipe }: HeroSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Left: Cartoon Character Area */}
        <div className="hidden md:block relative">
          <div className="relative z-10">
            <div className="bg-surface rounded-3xl p-8 shadow-elevate text-center relative overflow-hidden">
              <div className="text-6xl mb-4 animate-float">👨‍🍳</div>
              <div className="absolute top-4 right-4 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>🥚</div>
              <div className="absolute top-8 left-4 text-2xl animate-float" style={{ animationDelay: '1s' }}>🍞</div>
              <div className="absolute bottom-8 right-8 text-2xl animate-float" style={{ animationDelay: '1.5s' }}>🥕</div>
              <div className="text-4xl mb-2">🥄</div>
              <div className="text-3xl">📖</div>
            </div>
          </div>
        </div>

        {/* Center: Featured Recipe Image */}
        <div className="md:col-span-1">
          <div className="rounded-3xl overflow-hidden shadow-elevate">
            <img 
              src={featuredRecipe.image} 
              alt={featuredRecipe.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Right: Recipe Info */}
        <div className="md:col-span-1 space-y-6">
          <div>
            <h1 className="font-display font-bold text-5xl text-primary mb-4">
              {featuredRecipe.title}
            </h1>
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-display font-semibold text-lg hover:bg-primary-600 transition-colors shadow-playful">
              Browse Recipes
            </button>
          </div>

          {/* Ingredients Box */}
          <div className="bg-surface rounded-2xl p-6 shadow-soft">
            <h2 className="font-display font-bold text-xl text-text-dark mb-4">
              Ingredients
            </h2>
            <ul className="space-y-2">
              {featuredRecipe.ingredients.slice(0, 4).map((ingredient, index) => (
                <li key={index} className="flex items-center text-text-dark">
                  <span className="mr-3">🥄</span>
                  <span className="flex-1">{ingredient}</span>
                  <span className="text-primary">❤️</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h2 className="font-display font-bold text-3xl text-primary">
              Unlock Your Inner Chef!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

