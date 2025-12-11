export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  category: string;
}

export const featuredRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Fluffy Pancakes',
    description: 'Perfect breakfast pancakes that are light, fluffy, and delicious',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    ingredients: [
      '1 cup all-purpose flour',
      '2 tablespoons sugar',
      '2 teaspoons baking powder',
      '1/2 teaspoon salt',
      '1 cup milk',
      '1 large egg',
      '2 tablespoons melted butter',
      '1 teaspoon vanilla extract'
    ],
    instructions: [
      'Mix dry ingredients in a large bowl',
      'Whisk wet ingredients in a separate bowl',
      'Combine wet and dry ingredients until just mixed',
      'Cook on a griddle over medium heat',
      'Flip when bubbles form on the surface',
      'Serve with syrup and fresh berries'
    ],
    category: 'Breakfast'
  },
  {
    id: '2',
    title: 'Veggie Stir-Fry',
    description: 'Quick and healthy vegetable stir-fry with a savory sauce',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
    prepTime: '15 min',
    cookTime: '10 min',
    servings: 3,
    ingredients: [
      '2 cups mixed vegetables',
      '1 tablespoon vegetable oil',
      '2 cloves garlic, minced',
      '1 tablespoon soy sauce',
      '1 teaspoon ginger, grated',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat oil in a large pan',
      'Add garlic and ginger, cook for 1 minute',
      'Add vegetables and stir-fry for 5-7 minutes',
      'Season with soy sauce, salt, and pepper',
      'Serve hot over rice'
    ],
    category: 'Main Course'
  },
  {
    id: '3',
    title: 'Chocolate Chip Cookies',
    description: 'Classic homemade cookies that are crispy on the outside and chewy inside',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: 24,
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 teaspoon baking soda',
      '1 cup butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F',
      'Mix flour and baking soda in a bowl',
      'Cream butter and sugars until fluffy',
      'Beat in eggs and vanilla',
      'Gradually blend in flour mixture',
      'Stir in chocolate chips',
      'Bake for 9-11 minutes'
    ],
    category: 'Dessert'
  },
  {
    id: '4',
    title: 'Grilled Salmon',
    description: 'Perfectly grilled salmon with herbs and lemon',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    ingredients: [
      '4 salmon fillets',
      '2 tablespoons olive oil',
      '1 lemon, juiced',
      'Fresh dill',
      'Salt and pepper',
      'Garlic powder'
    ],
    instructions: [
      'Preheat grill to medium-high',
      'Season salmon with salt, pepper, and garlic',
      'Brush with olive oil and lemon juice',
      'Grill for 6-7 minutes per side',
      'Garnish with fresh dill and lemon slices'
    ],
    category: 'Main Course'
  },
  {
    id: '5',
    title: 'Berry Smoothie Bowl',
    description: 'Refreshing smoothie bowl topped with fresh fruits and granola',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: 2,
    ingredients: [
      '1 cup frozen berries',
      '1 banana',
      '1/2 cup yogurt',
      '1/4 cup milk',
      'Granola for topping',
      'Fresh berries for garnish'
    ],
    instructions: [
      'Blend frozen berries, banana, yogurt, and milk',
      'Pour into bowls',
      'Top with granola and fresh berries',
      'Serve immediately'
    ],
    category: 'Breakfast'
  },
  {
    id: '6',
    title: 'Pasta Carbonara',
    description: 'Creamy Italian pasta with bacon and parmesan cheese',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 4,
    ingredients: [
      '1 lb spaghetti',
      '4 eggs',
      '1 cup parmesan cheese',
      '6 slices bacon',
      'Black pepper',
      'Salt'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Cook bacon until crispy',
      'Whisk eggs and parmesan together',
      'Combine hot pasta with egg mixture',
      'Add bacon and toss',
      'Season with black pepper'
    ],
    category: 'Main Course'
  }
];

