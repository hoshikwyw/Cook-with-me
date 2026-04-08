import { supabase } from '../lib/supabase';
import type { Recipe, Category } from '../types';

// Fetch all recipes (from the view that joins with categories)
export async function getRecipes(): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from('recipes_with_category')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

// Fetch featured recipes only
export async function getFeaturedRecipes(): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from('recipes_with_category')
    .select('*')
    .eq('is_featured', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

// Fetch a single recipe by ID
export async function getRecipeById(id: string): Promise<Recipe | null> {
  const { data, error } = await supabase
    .from('recipes_with_category')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data;
}

// Search recipes by query string
export async function searchRecipes(query: string): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from('recipes_with_category')
    .select('*')
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

// Fetch recipes by category name
export async function getRecipesByCategory(category: string): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from('recipes_with_category')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

// Fetch all categories
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  if (error) throw error;
  return data ?? [];
}

// ── Write operations (admin) ──

export interface RecipeInput {
  title: string;
  description: string;
  image: string;
  prep_time: string;
  cook_time: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  category_id: string;
  is_featured: boolean;
}

export async function createRecipe(input: RecipeInput): Promise<void> {
  const { error } = await supabase.from('recipes').insert(input);
  if (error) throw error;
}

export async function updateRecipe(id: string, input: Partial<RecipeInput>): Promise<void> {
  const { error } = await supabase.from('recipes').update({ ...input, updated_at: new Date().toISOString() }).eq('id', id);
  if (error) throw error;
}

export async function deleteRecipe(id: string): Promise<void> {
  const { error } = await supabase.from('recipes').delete().eq('id', id);
  if (error) throw error;
}

// Fetch a raw recipe (from recipes table, not the view) for editing
export async function getRawRecipeById(id: string) {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', id)
    .single();
  if (error) return null;
  return data;
}
