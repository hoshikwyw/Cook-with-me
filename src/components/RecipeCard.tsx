import type { Recipe } from "../data/recipes";
import { colors } from "../themes/color";
import { fonts } from "../themes/font";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div 
      style={{ 
        backgroundColor: colors.white,
        boxShadow: '0 4px 16px rgba(184, 230, 240, 0.3)'
      }}
      className="rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 
          style={{
            ...fonts.h3,
            fontSize: '20px',
            color: colors.textSecondary
          }}
          className="mb-2"
        >
          {recipe.title}
        </h3>
        <p 
          style={{
            ...fonts.bodySmall,
            color: colors.textMuted
          }}
          className="mb-4 line-clamp-2"
        >
          {recipe.description}
        </p>
        <div className="flex items-center justify-between">
          <button 
            style={{
              ...fonts.button,
              fontSize: '12px',
              backgroundColor: colors.buttonPrimary,
              color: colors.buttonText,
              padding: '10px 24px',
              borderRadius: '50px',
              boxShadow: '0 4px 12px rgba(255, 155, 112, 0.25)'
            }}
            className="hover:opacity-90 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Let's Cook
          </button>
        </div>
      </div>
    </div>
  );
}

