import { colors } from '../themes/color';
import { fonts } from '../themes/font';
import { PageHeader, Container, Card } from '../components/common';

export default function About() {
  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      <PageHeader
        title="About Us"
        subtitle="Your culinary journey starts here"
      />

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <Card variant="default">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                alt="Cooking"
                className="w-full h-80 object-cover"
              />
            </Card>

            {/* Text */}
            <div className="space-y-6">
              <h2 style={{ ...fonts.h2, color: colors.textPrimary }}>
                Our Story
              </h2>
              <div
                style={{ ...fonts.body, color: colors.textSecondary }}
                className="space-y-4"
              >
                <p>
                  Welcome to Cook With Me, where we believe that good food brings
                  good mood! Our mission is to inspire home cooks of all levels to
                  create delicious meals that bring joy to their tables.
                </p>
                <p>
                  From traditional family recipes to modern culinary creations,
                  we're here to guide you through every step of your cooking
                  journey. Whether you're a beginner or an experienced chef,
                  you'll find recipes, tips, and inspiration to unlock your inner
                  chef.
                </p>
                <p>
                  Join our community of food lovers and discover the magic of
                  cooking at home. Let's create good food and good mood together!
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '>_',
                title: 'Expert Recipes',
                desc: 'Curated by professional chefs',
                variant: 'pastel-pink' as const,
              },
              {
                icon: '[]',
                title: 'Easy to Follow',
                desc: 'Step-by-step instructions',
                variant: 'pastel-lavender' as const,
              },
              {
                icon: '<3',
                title: 'Community Love',
                desc: 'Join thousands of food lovers',
                variant: 'pastel-mint' as const,
              },
            ].map((feature, index) => (
              <Card key={index} variant={feature.variant} hover className="p-8 text-center">
                <div
                  style={{
                    ...fonts.h2,
                    color: colors.textPrimary,
                  }}
                  className="mb-4"
                >
                  {feature.icon}
                </div>
                <h3
                  style={{ ...fonts.h4, color: colors.textPrimary }}
                  className="mb-2"
                >
                  {feature.title}
                </h3>
                <p style={{ ...fonts.body, color: colors.textMuted }}>
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
