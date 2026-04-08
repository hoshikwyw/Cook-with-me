import type { CSSProperties } from "react";

type FontStyle = CSSProperties;

export const fonts: Record<string, FontStyle> = {
    // ── Pixel headings — "Press Start 2P" for that retro pixel vibe ──

    heroTitle: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '36px',
        lineHeight: '1.6',
        letterSpacing: '1px',
    },

    h1: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '1.6',
        letterSpacing: '0.5px',
    },

    h2: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '1.6',
        letterSpacing: '0.5px',
    },

    h3: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '1.8',
        letterSpacing: '0.5px',
    },

    h4: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '11px',
        lineHeight: '1.8',
        letterSpacing: '0.5px',
    },

    // ── Body text — Nunito for readability with cute rounded feel ──

    subtitle: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '1.6',
        letterSpacing: '0.02em',
    },

    body: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '1.7',
    },

    bodyLarge: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '1.7',
    },

    bodySmall: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '1.6',
    },

    // ── UI text ──

    button: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '11px',
        lineHeight: '1',
        letterSpacing: '0.5px',
    },

    buttonLarge: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '13px',
        lineHeight: '1',
        letterSpacing: '0.5px',
    },

    nav: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '10px',
        lineHeight: '1',
        letterSpacing: '0.5px',
    },

    logo: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '1',
        letterSpacing: '1px',
    },

    caption: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '1.5',
        letterSpacing: '0.04em',
        textTransform: 'uppercase' as const,
    },

    tag: {
        fontFamily: "'Press Start 2P', monospace",
        fontWeight: 400,
        fontSize: '8px',
        lineHeight: '1',
        letterSpacing: '0.5px',
    },
};

export type Fonts = typeof fonts;
