import type { Recipe } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';
import { useTranslation } from 'react-i18next';
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
    <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          backgroundColor: colors.cardBg,
          borderRadius: '14px',
          overflow: 'hidden',
          border: `1.5px solid ${colors.gray200}`,
          transition: 'all 0.25s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="group hover:shadow-lg hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative overflow-hidden h-28 sm:h-40 md:h-48">
          <img
            src={recipe.images?.[0] ?? recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category — small pill */}
          <div
            style={{
              position: 'absolute', top: '6px', right: '6px',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              backgroundColor: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(6px)',
              color: colors.textSecondary,
              borderRadius: '10px',
            }}
            className="text-[8px] sm:text-[9px] px-1.5 py-0.5 sm:px-2 sm:py-1"
          >
            {recipe.category}
          </div>

          {/* Favorite */}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(recipe.id); }}
            style={{
              position: 'absolute', top: '6px', left: '6px',
              borderRadius: '50%',
              backgroundColor: fav ? colors.primaryPastel : 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(6px)',
              border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            className={`w-7 h-7 sm:w-8 sm:h-8 heart-pop ${fav ? 'animate-heartbeat' : ''}`}
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              viewBox="0 0 24 24"
              fill={fav ? colors.primary : 'none'}
              stroke={fav ? colors.primary : colors.textMuted}
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-2.5 sm:p-3.5 md:p-4 flex flex-col flex-1">
          {/* Title — use Nunito on mobile for readability, pixel font on larger */}
          <h3
            style={{ color: colors.textPrimary, fontWeight: 700 }}
            className="mb-0.5 sm:mb-1 font-body text-[11px] leading-tight sm:text-sm sm:font-pixel sm:text-[11px] sm:leading-snug line-clamp-2"
          >
            {recipe.title}
          </h3>

          {/* Description — hidden on tiny mobile, visible from sm */}
          <p
            style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif" }}
            className="hidden sm:block mb-3 line-clamp-2 flex-1 text-xs leading-relaxed"
          >
            {recipe.description}
          </p>

          {/* Spacer on mobile where description is hidden */}
          <div className="flex-1 sm:hidden" />

          {/* Footer */}
          <div className="flex items-center justify-between mt-1.5 sm:mt-0">
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <span
                className="flex items-center gap-0.5 text-[9px] sm:text-[11px]"
                style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="none" stroke={colors.textMuted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                {recipe.prep_time}
              </span>
              <span
                className="flex items-center gap-0.5 text-[9px] sm:text-[11px]"
                style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="none" stroke={colors.textMuted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                </svg>
                {recipe.servings}
              </span>
            </div>

            <div
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                color: colors.primary,
                borderRadius: '10px',
                backgroundColor: colors.primaryPastel,
              }}
              className="px-2 py-1 sm:px-3 sm:py-1.5 text-[8px] sm:text-[9px]"
            >
              {t('recipes.letsCook')}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
