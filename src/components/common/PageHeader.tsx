import type { ReactNode } from 'react';
import { colors } from '../../themes/color';
import { fonts } from '../../themes/font';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section
      style={{ backgroundColor: colors.bgPrimary }}
      className="py-20 pixel-cross relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1
          style={{
            ...fonts.h1,
            color: colors.textPrimary,
          }}
          className="mb-4"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              ...fonts.bodyLarge,
              color: colors.textSecondary,
            }}
            className="max-w-2xl mx-auto"
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* Pixel divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pixel-divider-primary" />
    </section>
  );
}
