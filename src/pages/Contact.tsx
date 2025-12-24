import { colors } from '../themes/color';
import { fonts } from '../themes/font';

export default function Contact() {
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
            Get in Touch
          </h1>
          <p 
            style={{
              ...fonts.bodyLarge,
              color: colors.textSecondary,
              opacity: 0.9
            }}
            className="max-w-2xl mx-auto"
          >
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 
                  style={{
                    ...fonts.h2,
                    color: colors.primary,
                    fontSize: '32px'
                  }}
                  className="mb-6"
                >
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📧</span>
                    <div>
                      <h3 
                        style={{
                          ...fonts.h4,
                          color: colors.textSecondary
                        }}
                        className="mb-1"
                      >
                        Email
                      </h3>
                      <p 
                        style={{
                          ...fonts.body,
                          color: colors.textMuted
                        }}
                      >
                        hello@foodblog.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📱</span>
                    <div>
                      <h3 
                        style={{
                          ...fonts.h4,
                          color: colors.textSecondary
                        }}
                        className="mb-1"
                      >
                        Phone
                      </h3>
                      <p 
                        style={{
                          ...fonts.body,
                          color: colors.textMuted
                        }}
                      >
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📍</span>
                    <div>
                      <h3 
                        style={{
                          ...fonts.h4,
                          color: colors.textSecondary
                        }}
                        className="mb-1"
                      >
                        Location
                      </h3>
                      <p 
                        style={{
                          ...fonts.body,
                          color: colors.textMuted
                        }}
                      >
                        123 Culinary Street<br />
                        Food City, FC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 
                  style={{
                    ...fonts.h3,
                    color: colors.textSecondary,
                    fontSize: '20px'
                  }}
                  className="mb-4"
                >
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {['📘', '🐦', '📷', '▶️'].map((icon, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: colors.white,
                        width: '48px',
                        height: '48px',
                        border: `2px solid ${colors.secondaryLight}`
                      }}
                      className="rounded-full flex items-center justify-center text-xl cursor-pointer hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              style={{ 
                backgroundColor: colors.white,
                boxShadow: '0 4px 20px rgba(184, 230, 240, 0.3)'
              }}
              className="rounded-3xl p-8"
            >
              <form className="space-y-6">
                <div>
                  <label 
                    style={{
                      ...fonts.h4,
                      color: colors.textSecondary,
                      fontSize: '16px'
                    }}
                    className="block mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    style={{
                      ...fonts.body,
                      backgroundColor: colors.cream,
                      border: `2px solid ${colors.secondaryLight}`,
                      padding: '14px 20px',
                      borderRadius: '12px',
                      width: '100%',
                      outline: 'none'
                    }}
                    className="focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label 
                    style={{
                      ...fonts.h4,
                      color: colors.textSecondary,
                      fontSize: '16px'
                    }}
                    className="block mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    style={{
                      ...fonts.body,
                      backgroundColor: colors.cream,
                      border: `2px solid ${colors.secondaryLight}`,
                      padding: '14px 20px',
                      borderRadius: '12px',
                      width: '100%',
                      outline: 'none'
                    }}
                    className="focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label 
                    style={{
                      ...fonts.h4,
                      color: colors.textSecondary,
                      fontSize: '16px'
                    }}
                    className="block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    style={{
                      ...fonts.body,
                      backgroundColor: colors.cream,
                      border: `2px solid ${colors.secondaryLight}`,
                      padding: '14px 20px',
                      borderRadius: '12px',
                      width: '100%',
                      outline: 'none',
                      minHeight: '150px'
                    }}
                    className="focus:border-primary transition-colors"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    ...fonts.button,
                    backgroundColor: colors.buttonPrimary,
                    color: colors.buttonText,
                    padding: '16px 32px',
                    width: '100%',
                    borderRadius: '50px',
                    boxShadow: '0 4px 12px rgba(255, 155, 112, 0.3)'
                  }}
                  className="hover:opacity-90 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

