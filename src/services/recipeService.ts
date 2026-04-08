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
