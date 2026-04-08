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

      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card variant="default">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                alt="Cooking"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </Card>

            <div className="space-y-6">
              <h2 style={{ ...fonts.h2, color: colors.textPrimary }}>
                {t('about.storyTitle')}
              </h2>
              <div style={{ ...fonts.body, color: colors.textSecondary }} className="space-y-4">
                <p>{t('about.story1')}</p>
                <p>{t('about.story2')}</p>
                <p>{t('about.story3')}</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              { icon: '>_', title: t('about.feature1Title'), desc: t('about.feature1Desc'), variant: 'pastel-pink' as const },
              { icon: '[]', title: t('about.feature2Title'), desc: t('about.feature2Desc'), variant: 'pastel-lavender' as const },
              { icon: '<3', title: t('about.feature3Title'), desc: t('about.feature3Desc'), variant: 'pastel-mint' as const },
            ].map((feature, index) => (
              <Card key={index} variant={feature.variant} hover className="p-8 text-center">
                <div style={{ ...fonts.h2, color: colors.textPrimary }} className="mb-4">
                  {feature.icon}
                </div>
                <h3 style={{ ...fonts.h4, color: colors.textPrimary }} className="mb-2">
                  {feature.title}
                </h3>
                <p style={{ ...fonts.body, color: colors.textMuted }}>{feature.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
