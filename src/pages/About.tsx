import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
import { PageHeader, Container, Card } from '../components/common';

export default function About() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      <PageHeader title={t('about.title')} subtitle={t('about.subtitle')} />

      <section className="py-10 sm:py-14 md:py-16">
        <Container size="md">
          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <Card variant="default">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                alt="Cooking"
                className="w-full h-48 sm:h-64 md:h-72 object-cover"
              />
            </Card>

            <div className="space-y-4 sm:space-y-5">
              <h2 style={{ ...fonts.h2, color: colors.textPrimary, fontSize: undefined }}
                className="text-sm sm:text-base md:text-lg"
              >
                {t('about.storyTitle')}
              </h2>
              <div style={{ ...fonts.body, color: colors.textSecondary, lineHeight: '1.9' }} className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>{t('about.story1')}</p>
                <p>{t('about.story2')}</p>
                <p>{t('about.story3')}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 stagger-children">
            {[
              { icon: '<3', title: t('about.feature1Title'), desc: t('about.feature1Desc'), variant: 'pastel-pink' as const },
              { icon: '^^', title: t('about.feature2Title'), desc: t('about.feature2Desc'), variant: 'pastel-lavender' as const },
              { icon: '~*', title: t('about.feature3Title'), desc: t('about.feature3Desc'), variant: 'pastel-mint' as const },
            ].map((feature, index) => (
              <div key={index} className="animate-fade-in-up" style={{ opacity: 0 }}>
                <Card variant={feature.variant} hover className="p-5 sm:p-8 text-center">
                  <div style={{ ...fonts.h2, color: colors.textPrimary, fontSize: undefined }}
                    className="mb-3 sm:mb-4 text-sm sm:text-lg"
                  >
                    {feature.icon}
                  </div>
                  <h3 style={{ ...fonts.h4, color: colors.textPrimary, fontSize: undefined }}
                    className="mb-1.5 sm:mb-2 text-[10px] sm:text-[11px]"
                  >
                    {feature.title}
                  </h3>
                  <p style={{ ...fonts.body, color: colors.textMuted, lineHeight: '1.8' }} className="text-xs sm:text-sm">
                    {feature.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
