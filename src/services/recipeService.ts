import { featuredRecipes } from '../data/recipes';
import type { Recipe } from '../types';

export function getRecipes(): Recipe[] {
  return featuredRecipes;
}

export function getRecipeById(id: string): Recipe | undefined {
  return featuredRecipes.find((r) => r.id === id);
}

export function searchRecipes(query: string): Recipe[] {
  const q = query.toLowerCase();
  return featuredRecipes.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q),
  );
}

export function getRecipesByCategory(category: string): Recipe[] {
  if (category === 'All') return featuredRecipes;
  return featuredRecipes.filter((r) => r.category === category);
}

export function getCategories(): string[] {
  const cats = new Set(featuredRecipes.map((r) => r.category));
  return ['All', ...Array.from(cats)];
}
