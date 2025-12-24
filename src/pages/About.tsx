import { colors } from '../themes/color';
import { fonts } from '../themes/font';

export default function About() {
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
            About Us
          </h1>
          <p 
            style={{
              ...fonts.bodyLarge,
              color: colors.textSecondary,
              opacity: 0.9
            }}
            className="max-w-2xl mx-auto"
          >
            Your culinary journey starts here
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                alt="Cooking"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 
                style={{
                  ...fonts.h2,
                  color: colors.primary
                }}
              >
                Our Story
              </h2>
              <div 
                style={{
                  ...fonts.body,
                  color: colors.textSecondary
                }}
                className="space-y-4"
              >
                <p>
                  Welcome to Food Blog, where we believe that good food brings good mood! 
                  Our mission is to inspire home cooks of all levels to create delicious 
                  meals that bring joy to their tables.
                </p>
                <p>
                  From traditional family recipes to modern culinary creations, we're 
                  here to guide you through every step of your cooking journey. Whether 
                  you're a beginner or an experienced chef, you'll find recipes, tips, 
                  and inspiration to unlock your inner chef.
                </p>
                <p>
                  Join our community of food lovers and discover the magic of cooking 
                  at home. Let's create good food and good mood together!
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              { icon: '👨‍🍳', title: 'Expert Recipes', desc: 'Curated by professional chefs' },
              { icon: '📖', title: 'Easy to Follow', desc: 'Step-by-step instructions' },
              { icon: '❤️', title: 'Community Love', desc: 'Join thousands of food lovers' }
            ].map((feature, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: colors.white,
                  boxShadow: '0 4px 16px rgba(184, 230, 240, 0.3)'
                }}
                className="rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 
                  style={{
                    ...fonts.h3,
                    color: colors.textSecondary
                  }}
                  className="mb-2"
                >
                  {feature.title}
                </h3>
                <p 
                  style={{
                    ...fonts.body,
                    color: colors.textMuted
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

