import { useState, useEffect } from 'react';
import type { Recipe, Category } from '../types';
import * as recipeService from '../services/recipeService';

interface UseRecipesResult {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

export function useRecipes(): UseRecipesResult {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    recipeService.getRecipes()
      .then(setRecipes)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { recipes, loading, error };
}

export function useFeaturedRecipes(): UseRecipesResult {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    recipeService.getFeaturedRecipes()
      .then(setRecipes)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { recipes, loading, error };
}

export function useRecipeById(id: string) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) { setLoading(false); return; }
    setLoading(true);
    recipeService.getRecipeById(id)
      .then(setRecipe)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { recipe, loading, error };
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recipeService.getCategories()
      .then(setCategories)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}
