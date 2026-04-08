import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useCategories } from '../../hooks/useRecipes';
import { fonts } from '../../themes/font';
import { Container, Card, Button, Input, Textarea } from '../../components/common';
import * as recipeService from '../../services/recipeService';
import type { RecipeInput } from '../../services/recipeService';

export default function RecipeForm() {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { colors } = useTheme();
  const { categories } = useCategories();

  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState('');

  const [form, setForm] = useState<RecipeInput>({
    title: '',
    description: '',
    image: '',
    prep_time: '',
    cook_time: '',
    servings: 1,
    difficulty: 'Easy',
    ingredients: [''],
    instructions: [''],
    category_id: '',
    is_featured: false,
  });

  useEffect(() => {
    if (!isLoggedIn) { navigate('/admin/login'); return; }
    if (isEdit && id) {
      recipeService.getRawRecipeById(id).then((data) => {
        if (data) {
          setForm({
            title: data.title,
            description: data.description,
            image: data.image,
            prep_time: data.prep_time,
            cook_time: data.cook_time,
            servings: data.servings,
            difficulty: data.difficulty,
            ingredients: data.ingredients?.length ? data.ingredients : [''],
            instructions: data.instructions?.length ? data.instructions : [''],
            category_id: data.category_id ?? '',
            is_featured: data.is_featured ?? false,
          });
        }
        setLoading(false);
      });
    }
  }, [isLoggedIn, isEdit, id, navigate]);

  const updateField = <K extends keyof RecipeInput>(key: K, value: RecipeInput[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateListItem = (key: 'ingredients' | 'instructions', index: number, value: string) => {
    setForm((prev) => {
      const list = [...prev[key]];
      list[index] = value;
      return { ...prev, [key]: list };
    });
  };

  const addListItem = (key: 'ingredients' | 'instructions') => {
    setForm((prev) => ({ ...prev, [key]: [...prev[key], ''] }));
  };

  const removeListItem = (key: 'ingredients' | 'instructions', index: number) => {
    setForm((prev) => {
      const list = prev[key].filter((_, i) => i !== index);
      return { ...prev, [key]: list.length ? list : [''] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.title || !form.description || !form.category_id) {
      setError('Please fill in title, description, and category');
      return;
    }

    const clean: RecipeInput = {
      ...form,
      ingredients: form.ingredients.filter((s) => s.trim()),
      instructions: form.instructions.filter((s) => s.trim()),
    };

    setSaving(true);
    try {
      if (isEdit && id) {
        await recipeService.updateRecipe(id, clean);
      } else {
        await recipeService.createRecipe(clean);
      }
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div style={{ backgroundColor: colors.bgPrimary }} className="min-h-screen flex items-center justify-center">
        <p style={{ ...fonts.body, color: colors.textMuted }}>Loading...</p>
      </div>
    );
  }

  const inputStyle = {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '14px',
    backgroundColor: colors.cardBg,
    border: `2px solid ${colors.pixelBorder}`,
    boxShadow: `2px 2px 0px ${colors.pixelBorder}`,
    padding: '10px 14px',
    width: '100%',
    outline: 'none',
    color: colors.textPrimary,
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
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => navigate('/admin')}>
                &lt; BACK
              </Button>
              <h1 style={{ ...fonts.h3, color: colors.textPrimary, fontSize: undefined }}
                className="text-[10px] sm:text-sm"
              >
                {isEdit ? 'Edit Recipe' : 'New Recipe'}
              </h1>
            </div>
          </div>
        </Container>
      </div>

      <Container size="md" className="py-6 sm:py-10">
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Basic Info */}
          <Card variant="default" className="p-4 sm:p-6 space-y-4">
            <Input label="TITLE" value={form.title} onChange={(e) => updateField('title', e.target.value)} placeholder="Recipe name" />
            <Textarea label="DESCRIPTION" value={form.description} onChange={(e) => updateField('description', e.target.value)} placeholder="Short description" />
            <Input label="IMAGE URL" value={form.image} onChange={(e) => updateField('image', e.target.value)} placeholder="https://images.unsplash.com/..." />

            {form.image && (
              <img src={form.image} alt="Preview" className="w-full h-32 sm:h-40 object-cover rounded-lg" />
            )}
          </Card>

          {/* Details */}
          <Card variant="default" className="p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Input label="PREP TIME" value={form.prep_time} onChange={(e) => updateField('prep_time', e.target.value)} placeholder="10 min" />
              <Input label="COOK TIME" value={form.cook_time} onChange={(e) => updateField('cook_time', e.target.value)} placeholder="20 min" />
              <Input label="SERVINGS" type="number" value={String(form.servings)} onChange={(e) => updateField('servings', parseInt(e.target.value) || 1)} />
              <div>
                <label style={{ ...fonts.h4, color: colors.textPrimary, display: 'block', marginBottom: '8px', fontSize: undefined }} className="text-[9px] sm:text-[11px]">
                  DIFFICULTY
                </label>
                <select
                  value={form.difficulty}
                  onChange={(e) => updateField('difficulty', e.target.value as RecipeInput['difficulty'])}
                  style={inputStyle}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ ...fonts.h4, color: colors.textPrimary, display: 'block', marginBottom: '8px', fontSize: undefined }} className="text-[9px] sm:text-[11px]">
                CATEGORY
              </label>
              <select
                value={form.category_id}
                onChange={(e) => updateField('category_id', e.target.value)}
                style={inputStyle}
              >
                <option value="">Select category...</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_featured}
                onChange={(e) => updateField('is_featured', e.target.checked)}
                className="w-5 h-5 accent-primary"
              />
              <span style={{ color: colors.textPrimary, fontFamily: "'Nunito', sans-serif", fontWeight: 600 }} className="text-sm">
                Featured recipe (shows on homepage)
              </span>
            </label>
          </Card>

          {/* Ingredients */}
          <Card variant="pastel-pink" className="p-4 sm:p-6">
            <h3 style={{ ...fonts.h3, color: colors.textPrimary, fontSize: undefined }} className="mb-4 text-[11px] sm:text-sm">
              Ingredients
            </h3>
            <div className="space-y-2">
              {form.ingredients.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ ...fonts.tag, color: colors.primary }} className="shrink-0 text-[7px] sm:text-[8px] w-6 text-center">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <input
                    value={item}
                    onChange={(e) => updateListItem('ingredients', i, e.target.value)}
                    placeholder="e.g. 1 cup flour"
                    style={{ ...inputStyle, boxShadow: 'none', border: `1.5px solid ${colors.primary}` }}
                    className="flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeListItem('ingredients', i)}
                    style={{ color: colors.error, fontFamily: "'Nunito', sans-serif", fontWeight: 700, border: 'none', background: 'none', cursor: 'pointer' }}
                    className="text-sm px-1"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => addListItem('ingredients')}
              style={{ color: colors.primary, fontFamily: "'Nunito', sans-serif", fontWeight: 700, border: 'none', background: 'none', cursor: 'pointer' }}
              className="mt-3 text-sm"
            >
              + Add ingredient
            </button>
          </Card>

          {/* Instructions */}
          <Card variant="pastel-mint" className="p-4 sm:p-6">
            <h3 style={{ ...fonts.h3, color: colors.textPrimary, fontSize: undefined }} className="mb-4 text-[11px] sm:text-sm">
              Instructions
            </h3>
            <div className="space-y-2">
              {form.instructions.map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    style={{
                      ...fonts.tag, color: colors.textLight, backgroundColor: colors.accent,
                      border: `2px solid ${colors.pixelBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}
                    className="w-6 h-6 sm:w-7 sm:h-7 text-[7px] sm:text-[8px] mt-2"
                  >
                    {i + 1}
                  </span>
                  <textarea
                    value={step}
                    onChange={(e) => updateListItem('instructions', i, e.target.value)}
                    placeholder={`Step ${i + 1}...`}
                    style={{ ...inputStyle, boxShadow: 'none', border: `1.5px solid ${colors.accent}`, minHeight: '60px', resize: 'vertical' }}
                    className="flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeListItem('instructions', i)}
                    style={{ color: colors.error, fontFamily: "'Nunito', sans-serif", fontWeight: 700, border: 'none', background: 'none', cursor: 'pointer' }}
                    className="text-sm px-1 mt-2"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => addListItem('instructions')}
              style={{ color: colors.accent, fontFamily: "'Nunito', sans-serif", fontWeight: 700, border: 'none', background: 'none', cursor: 'pointer' }}
              className="mt-3 text-sm"
            >
              + Add step
            </button>
          </Card>

          {/* Error & Submit */}
          {error && (
            <p style={{ color: colors.error, fontFamily: "'Nunito', sans-serif" }} className="text-sm text-center">
              {error}
            </p>
          )}

          <div className="flex gap-3 justify-end">
            <Button variant="outline" size="md" type="button" onClick={() => navigate('/admin')}>
              CANCEL
            </Button>
            <Button variant="primary" size="md" type="submit" disabled={saving}>
              {saving ? 'SAVING...' : isEdit ? 'UPDATE' : 'CREATE'}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
