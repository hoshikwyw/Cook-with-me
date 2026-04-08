import type { InputHTMLAttributes, TextareaHTMLAttributes, CSSProperties } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { fonts } from '../../themes/font';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

function useInputStyles() {
  const { colors } = useTheme();

  const base: CSSProperties = {
    ...fonts.body,
    backgroundColor: colors.cardBg,
    border: `3px solid ${colors.pixelBorder}`,
    boxShadow: `3px 3px 0px ${colors.pixelBorder}`,
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    color: colors.textPrimary,
    transition: 'box-shadow 0.1s ease, border-color 0.1s ease',
  };

  const label: CSSProperties = {
    ...fonts.h4,
    color: colors.textPrimary,
    display: 'block',
    marginBottom: '8px',
  };

  return { base, label };
}

export function Input({ label, className = '', style, ...props }: InputProps) {
  const styles = useInputStyles();

  return (
    <div>
      {label && <label style={styles.label}>{label}</label>}
      <input
        style={{ ...styles.base, ...style }}
        className={`focus:border-primary ${className}`}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, className = '', style, ...props }: TextareaProps) {
  const styles = useInputStyles();

  return (
    <div>
      {label && <label style={styles.label}>{label}</label>}
      <textarea
        style={{ ...styles.base, minHeight: '140px', resize: 'vertical', ...style }}
        className={`focus:border-primary ${className}`}
        {...props}
      />
    </div>
  );
}
