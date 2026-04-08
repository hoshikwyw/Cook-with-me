import type { ReactNode, CSSProperties } from 'react';
import { colors } from '../../themes/color';
import { fonts } from '../../themes/font';

type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'warm' | 'sky' | 'outline';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const variantStyles: Record<BadgeVariant, CSSProperties> = {
  primary: {
    backgroundColor: colors.primaryPastel,
    color: colors.primaryDark,
    border: `2px solid ${colors.primary}`,
  },
  secondary: {
    backgroundColor: colors.secondaryPastel,
    color: colors.secondaryDark,
    border: `2px solid ${colors.secondary}`,
  },
  accent: {
    backgroundColor: colors.accentPastel,
    color: colors.accentDark,
    border: `2px solid ${colors.accent}`,
  },
  warm: {
    backgroundColor: colors.warmPastel,
    color: colors.warmDark,
    border: `2px solid ${colors.warm}`,
  },
  sky: {
    backgroundColor: colors.skyPastel,
    color: colors.skyDark,
    border: `2px solid ${colors.sky}`,
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.textPrimary,
    border: `2px solid ${colors.pixelBorder}`,
  },
};

export default function Badge({
  variant = 'primary',
  children,
  className = '',
  style,
}: BadgeProps) {
  return (
    <span
      style={{
        ...fonts.tag,
        ...variantStyles[variant],
        padding: '6px 12px',
        display: 'inline-block',
        boxShadow: `2px 2px 0px ${variantStyles[variant].border?.toString().replace('2px solid ', '') ?? colors.pixelBorder}`,
        ...style,
      }}
      className={className}
    >
      {children}
    </span>
  );
}
