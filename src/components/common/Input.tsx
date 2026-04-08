import type { InputHTMLAttributes, TextareaHTMLAttributes, CSSProperties } from 'react';
import { colors } from '../../themes/color';
import { fonts } from '../../themes/font';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const baseInputStyle: CSSProperties = {
  ...fonts.body,
  backgroundColor: colors.white,
  border: `3px solid ${colors.pixelBorder}`,
  boxShadow: `3px 3px 0px ${colors.pixelBorder}`,
  padding: '12px 16px',
  width: '100%',
  outline: 'none',
  color: colors.textPrimary,
  transition: 'box-shadow 0.1s ease, border-color 0.1s ease',
};

const labelStyle: CSSProperties = {
  ...fonts.h4,
  color: colors.textPrimary,
  display: 'block',
  marginBottom: '8px',
};

export function Input({ label, className = '', style, ...props }: InputProps) {
  return (
    <div>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        style={{ ...baseInputStyle, ...style }}
        className={`focus:border-primary ${className}`}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, className = '', style, ...props }: TextareaProps) {
  return (
    <div>
      {label && <label style={labelStyle}>{label}</label>}
      <textarea
        style={{
          ...baseInputStyle,
          minHeight: '140px',
          resize: 'vertical',
          ...style,
        }}
        className={`focus:border-primary ${className}`}
        {...props}
      />
    </div>
  );
}
