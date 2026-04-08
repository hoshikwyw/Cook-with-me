import { colors } from '../themes/color';
import { fonts } from '../themes/font';
import { PageHeader, Container, Card, Button, Input, Textarea } from '../components/common';

export default function Contact() {
  return (
    <div style={{ backgroundColor: colors.bgPrimary }}>
      <PageHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you!"
      />

      {/* Contact Section */}
      <section className="py-16">
        <Container size="md">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2
                  style={{ ...fonts.h2, color: colors.textPrimary }}
                  className="mb-6"
                >
                  Contact Info
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      label: 'EMAIL',
                      value: 'hello@cookwithme.com',
                      variant: 'pastel-pink' as const,
                    },
                    {
                      label: 'PHONE',
                      value: '+1 (555) 123-4567',
                      variant: 'pastel-lavender' as const,
                    },
                    {
                      label: 'LOCATION',
                      value: '123 Culinary Street\nFood City, FC 12345',
                      variant: 'pastel-mint' as const,
                    },
                  ].map((item) => (
                    <Card
                      key={item.label}
                      variant={item.variant}
                      className="p-4"
                    >
                      <h3
                        style={{
                          ...fonts.h4,
                          color: colors.textPrimary,
                        }}
                        className="mb-1"
                      >
                        {item.label}
                      </h3>
                      <p
                        style={{
                          ...fonts.body,
                          color: colors.textSecondary,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {item.value}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3
                  style={{ ...fonts.h4, color: colors.textPrimary }}
                  className="mb-4"
                >
                  FOLLOW US
                </h3>
                <div className="flex gap-3">
                  {['X', 'IG', 'YT', 'TT'].map((label) => (
                    <div
                      key={label}
                      style={{
                        ...fonts.tag,
                        backgroundColor: colors.white,
                        color: colors.textPrimary,
                        border: `3px solid ${colors.pixelBorder}`,
                        boxShadow: `2px 2px 0px ${colors.pixelBorder}`,
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      className="pixel-hover"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card variant="default" className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <Input
                  label="YOUR NAME"
                  type="text"
                  placeholder="John Doe"
                />
                <Input
                  label="EMAIL ADDRESS"
                  type="email"
                  placeholder="john@example.com"
                />
                <Textarea
                  label="MESSAGE"
                  placeholder="Tell us what's on your mind..."
                />
                <Button variant="primary" size="md" type="submit" style={{ width: '100%' }}>
                  SEND MESSAGE
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
