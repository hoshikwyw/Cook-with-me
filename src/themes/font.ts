import { colors } from "./color";
import type { CSSProperties } from "react";

type FontStyle = CSSProperties;

export const fonts: Record<string, FontStyle> = {
    // Main Hero Heading - Fredoka Bold (Matches the thick, rounded strokes)
    heroTitle: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 700,
        fontSize: '64px',
        fontStyle: 'normal',
        lineHeight: '1.2',
        color: colors.textAccent,
        textShadow: '2px 4px 8px rgba(255, 155, 112, 0.2)'
    },
    
    // Large Heading (H1) - Fredoka Bold
    h1: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 700,
        fontSize: '48px',
        fontStyle: 'normal',
        lineHeight: '1.3',
        color: colors.textPrimary
    },
    
    // Secondary Heading (H2) - Fredoka Bold
    h2: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 700,
        fontSize: '36px',
        fontStyle: 'normal',
        lineHeight: '1.4',
        color: colors.textPrimary
    },
    
    // Tertiary Heading (H3) - Fredoka SemiBold
    h3: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 600,
        fontSize: '24px',
        fontStyle: 'normal',
        lineHeight: '1.5',
        color: colors.textPrimary
    },
    
    // Small Heading - Nunito SemiBold
    h4: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 600,
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: '1.5',
        color: colors.textPrimary
    },
    
    // Subtitle/Tagline - Nunito Medium
    subtitle: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 500,
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '1.6',
        letterSpacing: '0.03em',
        color: colors.textSecondary
    },
    
    // Body Text - Nunito Regular
    body: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '1.7',
        color: colors.textSecondary
    },
    
    // Body Large - Nunito Regular
    bodyLarge: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 400,
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: '1.7',
        color: colors.textSecondary
    },
    
    // Body Small / Captions - Quicksand Medium
    bodySmall: {
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: 500,
        fontSize: '14px',
        fontStyle: 'normal',
        lineHeight: '1.6',
        color: colors.textMuted
    },
    
    // Button Text - Nunito SemiBold
    button: {
       fontFamily: "'Fredoka', sans-serif",
        fontWeight: 600,
        fontSize: '16px',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '0.02em',
        color: colors.buttonText
    },
    
    // Button Large - Nunito SemiBold
    buttonLarge: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 600,
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '0.03em',
        color: colors.buttonText
    },
    
    // Navigation - Nunito SemiBold
    nav: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 600,
        fontSize: '14px',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '0.03em',
        color: colors.textPrimary
    },
    
    // Brand Logo Text - Fredoka Bold
    logo: {
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 700,
        fontSize: '24px',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '0.02em',
        fontVariationSettings: "'wdth' 100",
        color: colors.textAccent,
        textShadow: '1px 2px 4px rgba(255, 155, 112, 0.15)'
    }
};

export type Fonts = typeof fonts;

