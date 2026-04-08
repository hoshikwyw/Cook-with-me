import type { ReactNode, CSSProperties } from 'react';
import { colors } from '../../themes/color';

type CardVariant = 'default' | 'pixel' | 'pastel-pink' | 'pastel-lavender' | 'pastel-mint' | 'pastel-yellow';

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
}

const variantStyles: Record<CardVariant, CSSProperties> = {
  default: {
    backgroundColor: colors.white,
    border: `3px solid ${colors.pixelBorder}`,
    boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
  },
  pixel: {
    backgroundColor: colors.white,
    border: `3px solid ${colors.pixelBorder}`,
    boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
  },
  'pastel-pink': {
    backgroundColor: colors.pastelPink,
    border: `3px solid ${colors.primary}`,
    boxShadow: `4px 4px 0px ${colors.primary}`,
  },
  'pastel-lavender': {
    backgroundColor: colors.pastelLavender,
    border: `3px solid ${colors.secondary}`,
    boxShadow: `4px 4px 0px ${colors.secondary}`,
  },
  'pastel-mint': {
    backgroundColor: colors.accentPastel,
    border: `3px solid ${colors.accent}`,
    boxShadow: `4px 4px 0px ${colors.accent}`,
  },
  'pastel-yellow': {
    backgroundColor: colors.pastelYellow,
    border: `3px solid ${colors.warm}`,
    boxShadow: `4px 4px 0px ${colors.warm}`,
  },
};

export default function Card({
  variant = 'default',
  children,
  className = '',
  style,
  hover = false,
}: CardProps) {
  return (
    <div
      style={{
        ...variantStyles[variant],
        overflow: 'hidden',
        ...style,
      }}
      className={`${hover ? 'pixel-hover' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
