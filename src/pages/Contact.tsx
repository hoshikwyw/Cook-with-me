import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { fonts } from '../themes/font';
import { PageHeader, Container, Card, Button, Input, Textarea } from '../components/common';

export default function Contact() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      <PageHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <section className="py-16">
        <Container size="md">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 style={{ ...fonts.h2, color: colors.textPrimary }} className="mb-6">
                  {t('contact.infoTitle')}
                </h2>
                <div className="space-y-6">
                  {[
                    { label: t('contact.email'), value: 'hello@cookwithme.com', variant: 'pastel-pink' as const },
                    { label: t('contact.phone'), value: '+1 (555) 123-4567', variant: 'pastel-lavender' as const },
                    { label: t('contact.location'), value: '123 Culinary Street\nFood City, FC 12345', variant: 'pastel-mint' as const },
                  ].map((item) => (
                    <Card key={item.label} variant={item.variant} className="p-4">
                      <h3 style={{ ...fonts.h4, color: colors.textPrimary }} className="mb-1">
                        {item.label}
                      </h3>
                      <p style={{ ...fonts.body, color: colors.textSecondary, whiteSpace: 'pre-line' }}>
                        {item.value}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ ...fonts.h4, color: colors.textPrimary }} className="mb-4">
                  {t('contact.followUs')}
                </h3>
                <div className="flex gap-3">
                  {[
                    { label: 'X', href: 'https://x.com' },
                    { label: 'IG', href: 'https://instagram.com' },
                    { label: 'YT', href: 'https://youtube.com' },
                    { label: 'TT', href: 'https://tiktok.com' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...fonts.tag,
                        backgroundColor: colors.cardBg,
                        color: colors.textPrimary,
                        border: `3px solid ${colors.pixelBorder}`,
                        boxShadow: `2px 2px 0px ${colors.pixelBorder}`,
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'all 0.1s ease',
                      }}
                      className="pixel-hover"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <Card variant="default" className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <Input label={t('contact.nameLabel')} type="text" placeholder={t('contact.namePlaceholder')} />
                <Input label={t('contact.emailLabel')} type="email" placeholder={t('contact.emailPlaceholder')} />
                <Textarea label={t('contact.messageLabel')} placeholder={t('contact.messagePlaceholder')} />
                <Button variant="primary" size="md" type="submit" style={{ width: '100%' }}>
                  {t('contact.send')}
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
