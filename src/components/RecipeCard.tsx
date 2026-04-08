import type { Recipe } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
import { Card, Badge, Button } from './common';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { colors } = useTheme();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useTranslation();
  const fav = isFavorite(recipe.id);

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
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(recipe.id);
          }}
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
            transition: 'all 0.1s ease',
          }}
        >
          {fav ? '<3' : '..'}
        </button>
      </div>
      <div className="p-5">
        <h3
          style={{ ...fonts.h4, color: colors.textPrimary }}
          className="mb-2"
        >
          {recipe.title}
        </h3>
        <p
          style={{ ...fonts.bodySmall, color: colors.textMuted }}
          className="mb-4 line-clamp-2"
        >
          {recipe.description}
        </p>
        <div className="flex items-center justify-between">
          <span style={{ ...fonts.tag, color: colors.textMuted }}>
            {recipe.prepTime}
          </span>
          <Link to={`/recipes/${recipe.id}`}>
            <Button variant="primary" size="sm">
              {t('recipes.letsCook')}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
