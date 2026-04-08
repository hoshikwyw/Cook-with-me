# Yumli

Your cozy kitchen companion. A cute, pixel-art themed recipe app built for people who love cooking for themselves.

## Features

- Recipe collection with search, category filtering, and favorites
- Recipe detail pages with image gallery, ingredients, step-by-step instructions, and YouTube video tutorials
- Admin dashboard to add, edit, and delete recipes and categories
- Image upload to Supabase Storage (up to 3 per recipe)
- Dark mode toggle
- i18n support (English + Myanmar)
- Mobile-first responsive design
- Cute pixel-art UI with pastel colors

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS v4, custom pixel-art theme
- **Backend:** Supabase (PostgreSQL, Storage, Row Level Security)
- **Routing:** React Router v7
- **i18n:** react-i18next

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project

### Setup

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Run the SQL files in your Supabase SQL Editor (in order):

```
supabase/schema.sql
supabase/migration_images.sql
supabase/seed.sql          # optional - sample recipes
```

4. Start the dev server:

```bash
npm run dev
```

### Deployment

Deployed on Vercel. Make sure to add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables in Vercel project settings.

## Project Structure

```
src/
  components/
    common/       # Button, Card, Badge, Input, Select, etc.
    Navbar.tsx
    HeroSection.tsx
    RecipeCard.tsx
    ErrorBoundary.tsx
    PageTransition.tsx
  context/        # Theme, Favorites, Auth providers
  hooks/          # useRecipes, useCategories, etc.
  lib/            # Supabase client
  locales/        # en + mm translations
  pages/
    Home.tsx
    Recipes.tsx
    RecipeDetail.tsx
    About.tsx
    NotFound.tsx
    admin/        # Login, Dashboard, RecipeForm
  services/       # recipeService (Supabase queries)
  themes/         # Color palette, font system
  types/          # Recipe, Category, User, Review
supabase/
  schema.sql      # Tables, views, RLS policies
  migration_images.sql  # Storage bucket + image columns
  seed.sql        # Sample recipe data
```

## Admin Access

Navigate to `/admin` (hidden `+` button in footer). Login required.
