import type { Recipe } from '../data/recipes';
import { colors } from '../themes/color';
import { fonts } from '../themes/font';
import { Button, Card, Container } from './common';

interface HeroSectionProps {
  featuredRecipe: Recipe;
}

export default function HeroSection({ featuredRecipe }: HeroSectionProps) {
  return (
    <section>
      {/* Hero Top */}
      <div
        style={{ backgroundColor: colors.bgPrimary }}
        className="relative overflow-hidden pixel-hearts"
      >
        <Container className="py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left: Text */}
            <div className="space-y-8 pt-8">
              <div
                style={{
                  ...fonts.caption,
                  color: colors.secondary,
                }}
              >
                COOK AT HOME
              </div>

              <h1
                style={{
                  ...fonts.heroTitle,
                  color: colors.textPrimary,
                  fontSize: '42px',
                }}
              >
                Good Food
                <br />
                <span style={{ color: colors.primary }}>Good Mood</span>
              </h1>

              <p
                style={{
                  ...fonts.bodyLarge,
                  color: colors.textSecondary,
                  maxWidth: '420px',
                }}
              >
                Discover pixel-perfect recipes that bring joy to your kitchen.
                Simple, cute, and delicious.
              </p>

              <Button variant="primary" size="lg">
                GET STARTED
              </Button>
            </div>

            {/* Right: Pixel food images */}
            <div className="relative h-[500px] hidden md:block">
              {/* Large circle */}
              <div
                style={{
                  border: `4px solid ${colors.pixelBorder}`,
                  boxShadow: `6px 6px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.white,
                  overflow: 'hidden',
                }}
                className="absolute top-4 right-4 w-[280px] h-[280px]"
              >
                <img
                  src="/stew.png"
                  alt="Stew"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Medium circle */}
              <div
                style={{
                  border: `4px solid ${colors.pixelBorder}`,
                  boxShadow: `6px 6px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.white,
                  overflow: 'hidden',
                }}
                className="absolute bottom-8 right-8 w-[240px] h-[240px]"
              >
                <img
                  src="/fish.png"
                  alt="Fish"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small circle */}
              <div
                style={{
                  border: `3px solid ${colors.pixelBorder}`,
                  boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
                  backgroundColor: colors.white,
                  overflow: 'hidden',
                  zIndex: 10,
                }}
                className="absolute top-1/2 left-4 -translate-y-1/2 w-[120px] h-[120px]"
              >
                <img
                  src="/noodle.png"
                  alt="Noodle"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating decorations */}
              <div className="absolute top-16 right-72 animate-float" style={{ animationDelay: '0s' }}>
                <img src="/bread.png" alt="" className="w-14 h-14 object-cover" />
              </div>
              <div className="absolute top-8 right-72 animate-float" style={{ animationDelay: '1s' }}>
                <img src="/pancake.png" alt="" className="w-14 h-14 object-cover" />
              </div>
            </div>
          </div>
        </Container>

        {/* Pixel divider */}
        <div className="pixel-divider" />
      </div>

      {/* Featured Recipe Section */}
      <div
        style={{ backgroundColor: colors.white }}
        className="py-16"
      >
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Recipe Image */}
            <Card variant="default">
              <img
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                className="w-full h-80 object-cover"
              />
            </Card>

            {/* Recipe Info */}
            <div className="space-y-6">
              <div>
                <h2
                  style={{
                    ...fonts.h2,
                    color: colors.textPrimary,
                  }}
                  className="mb-4"
                >
                  {featuredRecipe.title}
                </h2>
                <Button variant="primary" size="md">
                  BROWSE RECIPES
                </Button>
              </div>

              {/* Ingredients Box */}
              <Card variant="pastel-pink" className="p-6">
                <h3
                  style={{
                    ...fonts.h3,
                    color: colors.textPrimary,
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
                        color: colors.textSecondary,
                      }}
                    >
                      <span className="mr-3">*</span>
                      <span className="flex-1">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="text-center pt-2">
                <h3
                  style={{
                    ...fonts.h3,
                    color: colors.primary,
                  }}
                >
                  Unlock Your Inner Chef!
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
