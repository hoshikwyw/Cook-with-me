import type { Recipe } from "../data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden shadow-elevate hover:shadow-playful transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold text-lg text-text-dark mb-1">
          {recipe.title}
        </h3>
        <p className="text-text-light text-sm mb-3 line-clamp-2">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between text-xs text-text-light">
          <span>⏱️ {recipe.prepTime}</span>
          <span>👥 {recipe.servings} servings</span>
        </div>
      </div>
    </div>
  );
}

