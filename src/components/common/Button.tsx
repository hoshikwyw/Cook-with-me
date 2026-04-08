import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { fonts } from '../../themes/font';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const sizeConfig: Record<ButtonSize, { padding: string; font: React.CSSProperties }> = {
  sm: { padding: '8px 16px', font: { ...fonts.tag, fontSize: '9px' } },
  md: { padding: '12px 24px', font: fonts.button },
  lg: { padding: '16px 36px', font: fonts.buttonLarge },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  style,
  ...props
}: ButtonProps) {
  const { colors } = useTheme();

  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.textLight,
      border: `3px solid ${colors.pixelBorder}`,
      boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.textLight,
      border: `3px solid ${colors.pixelBorder}`,
      boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
    },
    accent: {
      backgroundColor: colors.accent,
      color: colors.textLight,
      border: `3px solid ${colors.pixelBorder}`,
      boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.textPrimary,
      border: '3px solid transparent',
      boxShadow: 'none',
    },
    outline: {
      backgroundColor: colors.cardBg,
      color: colors.textPrimary,
      border: `3px solid ${colors.pixelBorder}`,
      boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
    },
  };

  const vStyle = variantStyles[variant];
  const sStyle = sizeConfig[size];

  return (
    <button
      style={{
        ...vStyle,
        ...sStyle.font,
        padding: sStyle.padding,
        cursor: 'pointer',
        transition: 'transform 0.1s ease, box-shadow 0.1s ease',
        ...style,
      }}
      className={`pixel-hover ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
