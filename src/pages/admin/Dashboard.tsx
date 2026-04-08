import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { fonts } from '../../themes/font';
import { Container, Card, Button, Badge } from '../../components/common';
import * as recipeService from '../../services/recipeService';
import type { Recipe } from '../../types';

export default function Dashboard() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const { colors } = useTheme();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoggedIn) { navigate('/admin/login'); return; }
    loadRecipes();
  }, [isLoggedIn, navigate]);

  const loadRecipes = async () => {
    setLoading(true);
    try {
      const data = await recipeService.getRecipes();
      setRecipes(data);
    } catch { /* ignore */ }
    setLoading(false);
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(id);
    try {
      await recipeService.deleteRecipe(id);
      setRecipes((prev) => prev.filter((r) => r.id !== id));
    } catch { /* ignore */ }
    setDeleting(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ backgroundColor: colors.bgPrimary }} className="min-h-screen">
      {/* Header */}
      <div
        style={{ backgroundColor: colors.cardBg, borderBottom: `3px solid ${colors.pixelBorder}` }}
        className="py-3 sm:py-4"
      >
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">🍳</span>
              <h1 style={{ ...fonts.h3, color: colors.textPrimary, fontSize: undefined }}
                className="text-[10px] sm:text-sm"
              >
                Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/admin/new">
                <Button variant="primary" size="sm">+ NEW</Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>LOGOUT</Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-6 sm:py-10">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Card variant="pastel-pink" className="p-3 sm:p-5 text-center">
            <div style={{ ...fonts.h2, color: colors.primary, fontSize: undefined }} className="text-base sm:text-xl">
              {recipes.length}
            </div>
            <div style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif", fontWeight: 600 }} className="text-[10px] sm:text-xs mt-1">
              Recipes
            </div>
          </Card>
          <Card variant="pastel-mint" className="p-3 sm:p-5 text-center">
            <div style={{ ...fonts.h2, color: colors.accent, fontSize: undefined }} className="text-base sm:text-xl">
              {recipes.filter((r) => r.is_featured).length}
            </div>
            <div style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif", fontWeight: 600 }} className="text-[10px] sm:text-xs mt-1">
              Featured
            </div>
          </Card>
          <Card variant="pastel-lavender" className="p-3 sm:p-5 text-center">
            <div style={{ ...fonts.h2, color: colors.secondary, fontSize: undefined }} className="text-base sm:text-xl">
              {new Set(recipes.map((r) => r.category)).size}
            </div>
            <div style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif", fontWeight: 600 }} className="text-[10px] sm:text-xs mt-1">
              Categories
            </div>
          </Card>
        </div>

        {/* Recipe List */}
        {loading ? (
          <div className="text-center py-16">
            <p style={{ ...fonts.body, color: colors.textMuted }}>Loading recipes...</p>
          </div>
        ) : recipes.length === 0 ? (
          <Card variant="default" className="p-8 sm:p-12 text-center">
            <p style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif" }} className="text-sm sm:text-base mb-4">
              No recipes yet. Add your first one!
            </p>
            <Link to="/admin/new">
              <Button variant="primary" size="md">+ ADD RECIPE</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-3">
            {recipes.map((recipe) => (
              <Card key={recipe.id} variant="default" className="p-0 overflow-hidden">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
                  {/* Thumbnail */}
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3
                      style={{ color: colors.textPrimary, fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                      className="text-sm sm:text-base truncate"
                    >
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <Badge variant={recipe.is_featured ? 'primary' : 'outline'}>
                        {recipe.is_featured ? 'FEATURED' : 'NORMAL'}
                      </Badge>
                      <span style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif" }} className="text-[10px] sm:text-xs">
                        {recipe.category}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <Link to={`/admin/edit/${recipe.id}`}>
                      <Button variant="outline" size="sm">EDIT</Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(recipe.id, recipe.title)}
                      disabled={deleting === recipe.id}
                      style={{ color: colors.error }}
                    >
                      {deleting === recipe.id ? '...' : 'DEL'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
