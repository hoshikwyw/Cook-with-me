import type { Recipe } from '../data/recipes';
import { colors } from '../themes/color';
import { fonts } from '../themes/font';
import { Card, Badge, Button } from './common';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card variant="default" hover>
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="warm">{recipe.category.toUpperCase()}</Badge>
        </div>
      </div>
      <div className="p-5">
        <h3
          style={{
            ...fonts.h4,
            color: colors.textPrimary,
          }}
          className="mb-2"
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
        <div className="flex items-center justify-between">
          <span
            style={{
              ...fonts.tag,
              color: colors.textMuted,
            }}
          >
            {recipe.prepTime}
          </span>
          <Button variant="primary" size="sm">
            LET'S COOK
          </Button>
        </div>
      </div>
    </Card>
  );
}
