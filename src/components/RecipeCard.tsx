import type { Recipe } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
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
    <Link
      to={`/recipes/${recipe.id}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          backgroundColor: colors.cardBg,
          borderRadius: '20px',
          overflow: 'hidden',
          border: `2px solid ${colors.gray200}`,
          transition: 'all 0.25s ease',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="group hover:shadow-lg hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: '180px' }}>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Soft gradient overlay at bottom of image */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: `linear-gradient(transparent, ${colors.cardBg})`,
            }}
          />

          {/* Category badge — soft pill */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              ...fonts.tag,
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              color: colors.textSecondary,
              padding: '5px 10px',
              borderRadius: '20px',
              letterSpacing: '0.5px',
            }}
          >
            {recipe.category.toUpperCase()}
          </div>

          {/* Favorite button — soft circle */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(recipe.id);
            }}
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: fav ? colors.primaryPastel : 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '16px',
            }}
            className={`heart-pop ${fav ? 'animate-heartbeat' : ''}`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={fav ? colors.primary : 'none'}
              stroke={fav ? colors.primary : colors.textMuted}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-5 pb-5 pt-2 flex flex-col flex-1">
          <h3
            style={{
              ...fonts.h4,
              color: colors.textPrimary,
              marginBottom: '6px',
            }}
          >
            {recipe.title}
          </h3>
          <p
            style={{
              ...fonts.bodySmall,
              color: colors.textMuted,
              lineHeight: '1.5',
            }}
            className="mb-4 line-clamp-2 flex-1"
          >
            {recipe.description}
          </p>

          {/* Footer — time + button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                style={{
                  ...fonts.bodySmall,
                  color: colors.textMuted,
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.textMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {recipe.prepTime}
              </span>
              <span
                style={{
                  ...fonts.bodySmall,
                  color: colors.textMuted,
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.textMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                {recipe.servings}
              </span>
            </div>

            <div
              style={{
                ...fonts.tag,
                color: colors.primary,
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: colors.primaryPastel,
                transition: 'all 0.2s ease',
                fontSize: '8px',
              }}
              className="group-hover:shadow-md"
            >
              {t('recipes.letsCook')}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
