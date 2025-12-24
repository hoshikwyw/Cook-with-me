import type { Recipe } from "../data/recipes";
import { colors } from "../themes/color";
import { fonts } from "../themes/font";

interface HeroSectionProps {
  featuredRecipe: Recipe;
}

export default function HeroSection({ featuredRecipe }: HeroSectionProps) {
  return (
    <section 
      style={{ 
        background: `linear-gradient(180deg, ${colors.bgGradientStart} 0%, ${colors.bgGradientEnd} 100%)`,
        position: 'relative'
      }}
      className="relative overflow-hidden min-h-screen"
    >
      {/* Decorative Food Icons - Floating around */}
      <div className="absolute top-16 right-16 text-5xl opacity-80 animate-float" style={{ animationDelay: '0s' }}><img src="/bread.png" alt="" className=" w-20 h-20 object-cover" /></div>
      <div className="absolute top-12 right-36 text-4xl opacity-80 animate-float" style={{ animationDelay: '1s' }}><img src="/pancake.png" alt="" className=" w-20 h-20 object-cover" /></div>
      <div className="absolute top-1/3 right-8 text-6xl opacity-80 animate-float" style={{ animationDelay: '0.5s' }}><img src="/fried-chick.png" alt="" className=" w-20 h-20 object-cover" /></div>
      <div className="absolute bottom-1/4 right-12 text-5xl opacity-80 animate-float" style={{ animationDelay: '1.5s' }}><img src="/chicken.png" alt="" className=" w-20 h-20 object-cover" /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side: Text Content */}
          <div className="space-y-8 pt-12">
            {/* Tagline */}
            <div 
              style={{
                ...fonts.subtitle,
                color: colors.textSecondary,
                fontSize: '20px',
                fontWeight: 600
              }}
            >
              Cook at Home
            </div>

            {/* Main Hero Title - Fredoka Bold */}
            <div>
              <h1 
                style={{
                  ...fonts.heroTitle,
                  fontSize: '80px',
                  lineHeight: '1.1',
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${colors.primary} 0%, #FF8A65 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(2px 4px 6px rgba(255, 138, 101, 0.2))'
                }}
                className="mb-6"
              >
                Good Food
                <br />
                Good Mood
              </h1>
            </div>

            {/* CTA Button - Nunito SemiBold */}
            <button 
              style={{
                ...fonts.buttonLarge,
                backgroundColor: colors.buttonPrimary,
                color: colors.buttonText,
                padding: '20px 50px',
                borderRadius: '50px',
                fontSize: '20px',
                boxShadow: '0 8px 20px rgba(255, 155, 112, 0.4)'
              }}
              className="hover:opacity-90 transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
            >
              Get Started
            </button>
            
          </div>

          {/* Right Side: Food Illustrations */}
          <div className="relative h-[600px]">
            {/* Large Circular Image - Top Right (Toast with Avocado & Egg) */}
            <div 
              className="absolute top-0 right-0 w-[340px] h-[340px] rounded-full overflow-hidden"
              style={{ 
                backgroundColor: colors.white,
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                border: `8px solid ${colors.white}`
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-white">
                <img src="/stew.png" alt="" className=" w-full h-full" />
              </div>
            </div>

            {/* Medium Circular Image - Bottom Right (Breaded Cutlet) */}
            <div 
              className="absolute bottom-8 right-4 w-[320px] h-80 rounded-full overflow-hidden"
              style={{ 
                backgroundColor: colors.white,
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                border: `8px solid ${colors.white}`
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-white">
                <img src="/fish.png" alt="" className=" w-full h-full" />
              </div>
            </div>

            {/* Small Circular Image - Middle Left (Ramen Bowl) */}
            <div 
              className="absolute top-1/2 left-8 transform -translate-y-1/2 w-[140px] h-[140px] rounded-full overflow-hidden"
              style={{ 
                backgroundColor: colors.white,
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                border: `6px solid ${colors.white}`,
                zIndex: 10
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-white">
                <img src="/noodle.png" alt="" className=" w-full h-full" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Featured Recipe Section */}
      <div 
        style={{ backgroundColor: colors.bgLight }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Recipe Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Recipe Info */}
            <div className="space-y-6">
              <div>
                <h2 
                  style={{
                    ...fonts.h2,
                    color: colors.primary
                  }}
                  className="mb-4"
                >
                  {featuredRecipe.title}
                </h2>
                <button 
                  style={{
                    ...fonts.button,
                    backgroundColor: colors.buttonPrimary,
                    color: colors.buttonText,
                    padding: '14px 36px',
                    borderRadius: '50px',
                    boxShadow: '0 4px 12px rgba(255, 155, 112, 0.3)'
                  }}
                  className="hover:opacity-90 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Browse Recipes
                </button>
              </div>

              {/* Ingredients Box */}
              <div 
                style={{ 
                  backgroundColor: colors.white,
                  boxShadow: '0 4px 20px rgba(184, 230, 240, 0.2)'
                }}
                className="rounded-3xl p-6"
              >
                <h3 
                  style={{
                    ...fonts.h3,
                    color: colors.textSecondary
                  }}
                  className="mb-4"
                >
                  Ingredients
                </h3>
                <ul className="space-y-3">
                  {featuredRecipe.ingredients.slice(0, 4).map((ingredient, index) => (
                    <li 
                      key={index} 
                      className="flex items-center"
                      style={{
                        ...fonts.body,
                        color: colors.textSecondary
                      }}
                    >
                      <span className="mr-3">🥄</span>
                      <span className="flex-1">{ingredient}</span>
                      <span>❤️</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center pt-4">
                <h3 
                  style={{
                    ...fonts.h2,
                    fontSize: '28px',
                    color: colors.primary
                  }}
                >
                  Unlock Your Inner Chef!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

