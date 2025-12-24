import { colors } from '../themes/color';
import { fonts } from '../themes/font';

export default function Recipes() {
  const recipes = [
    {
      id: 1,
      title: 'Classic Pasta Carbonara',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
      time: '30 min',
      difficulty: 'Easy'
    },
    {
      id: 2,
      title: 'Fresh Garden Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      time: '15 min',
      difficulty: 'Easy'
    },
    {
      id: 3,
      title: 'Grilled Salmon',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
      time: '45 min',
      difficulty: 'Medium'
    },
    {
      id: 4,
      title: 'Homemade Pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
      time: '60 min',
      difficulty: 'Medium'
    },
    {
      id: 5,
      title: 'Chocolate Cake',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      time: '90 min',
      difficulty: 'Hard'
    },
    {
      id: 6,
      title: 'Caesar Salad',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
      time: '20 min',
      difficulty: 'Easy'
    }
  ];

  return (
    <div style={{ backgroundColor: colors.cream }} className="min-h-screen">
      {/* Hero Section */}
      <section 
        style={{ 
          background: `linear-gradient(180deg, ${colors.bgGradientStart} 0%, ${colors.bgGradientEnd} 100%)`
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            style={{
              ...fonts.h1,
              color: colors.primary,
              fontSize: '56px'
            }}
            className="mb-6"
          >
            Our Recipes
          </h1>
          <p 
            style={{
              ...fonts.bodyLarge,
              color: colors.textSecondary,
              opacity: 0.9
            }}
            className="max-w-2xl mx-auto"
          >
            Discover delicious recipes for every occasion
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8" style={{ backgroundColor: colors.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <input
              type="text"
              placeholder="Search recipes..."
              style={{
                ...fonts.body,
                backgroundColor: colors.white,
                border: `2px solid ${colors.secondaryLight}`,
                padding: '14px 24px',
                borderRadius: '50px',
                width: '100%',
                maxWidth: '400px',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(184, 230, 240, 0.2)'
              }}
              className="focus:border-primary transition-colors"
            />
            <div className="flex gap-3">
              {['All', 'Easy', 'Medium', 'Hard'].map((filter) => (
                <button
                  key={filter}
                  style={{
                    ...fonts.button,
                    fontSize: '14px',
                    backgroundColor: filter === 'All' ? colors.buttonPrimary : colors.white,
                    color: filter === 'All' ? colors.buttonText : colors.textSecondary,
                    padding: '10px 28px',
                    borderRadius: '50px',
                    border: filter === 'All' ? 'none' : `2px solid ${colors.secondaryLight}`,
                    boxShadow: filter === 'All' ? '0 4px 12px rgba(255, 155, 112, 0.25)' : '0 2px 8px rgba(184, 230, 240, 0.2)'
                  }}
                  className="hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                style={{ 
                  backgroundColor: colors.white,
                  boxShadow: '0 4px 16px rgba(184, 230, 240, 0.3)'
                }}
                className="rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    style={{
                      backgroundColor: colors.bgPrimary,
                      ...fonts.bodySmall,
                      fontWeight: '700',
                      padding: '6px 12px',
                      borderRadius: '6px'
                    }}
                    className="absolute top-4 right-4"
                  >
                    {recipe.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    style={{
                      ...fonts.h3,
                      color: colors.textSecondary,
                      fontSize: '22px'
                    }}
                    className="mb-3"
                  >
                    {recipe.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⏱️</span>
                      <span
                        style={{
                          ...fonts.bodySmall,
                          color: colors.textMuted
                        }}
                      >
                        {recipe.time}
                      </span>
                    </div>
                    <button
                    style={{
                      ...fonts.button,
                      fontSize: '12px',
                      backgroundColor: colors.buttonPrimary,
                      color: colors.buttonText,
                      padding: '10px 24px',
                      borderRadius: '50px',
                      boxShadow: '0 4px 12px rgba(255, 155, 112, 0.25)'
                    }}
                    className="ml-auto hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    View
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

