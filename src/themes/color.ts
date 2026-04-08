export const colors = {
    // ── Primary: Warm Coral/Peach ──
    primary: "#FF7B7B",
    primaryDark: "#E85D5D",
    primaryLight: "#FFA8A8",
    primaryPastel: "#FFD4D4",

    // ── Secondary: Soft Lavender ──
    secondary: "#B8A9E8",
    secondaryDark: "#9580D6",
    secondaryLight: "#D4C8F5",
    secondaryPastel: "#EDE7FF",

    // ── Accent: Mint Green ──
    accent: "#7ECFB3",
    accentDark: "#5BB89A",
    accentLight: "#B0E8D5",
    accentPastel: "#DDFAF0",

    // ── Warm: Soft Yellow ──
    warm: "#FFD98E",
    warmDark: "#FFC35C",
    warmLight: "#FFECC4",
    warmPastel: "#FFF7E6",

    // ── Sky: Pastel Blue ──
    sky: "#8ECAE6",
    skyDark: "#62B3D9",
    skyLight: "#BDE0F0",
    skyPastel: "#E6F4FA",

    // ── Neutrals ──
    black: "#2B2B3D",
    white: "#FFFFFF",
    cream: "#FFF9F5",
    gray50: "#FAFAF9",
    gray100: "#F5F3F0",
    gray200: "#E8E5E0",
    gray300: "#D1CCC4",
    gray400: "#A8A29E",
    gray500: "#78716C",
    gray600: "#57534E",
    gray700: "#3D3935",

    // ── Text ──
    textPrimary: "#2B2B3D",
    textSecondary: "#57534E",
    textMuted: "#A8A29E",
    textAccent: "#FF7B7B",
    textLight: "#FFFFFF",

    // ── Backgrounds ──
    bgPrimary: "#FFF9F5",
    bgCard: "#FFFFFF",
    bgGradientStart: "#FFF9F5",
    bgGradientEnd: "#FFF0EB",
    bgLight: "#FFFFFF",
    bgCream: "#FFF9F5",
    bgOverlay: "rgba(43, 43, 61, 0.4)",

    // ── Pixel shadow colors ──
    pixelShadow: "#2B2B3D",
    pixelBorder: "#2B2B3D",
    pixelBorderLight: "#D1CCC4",

    // ── Buttons ──
    buttonPrimary: "#FF7B7B",
    buttonHover: "#E85D5D",
    buttonText: "#FFFFFF",
    buttonSecondary: "#B8A9E8",
    buttonSecondaryText: "#FFFFFF",
    buttonGhost: "transparent",

    // ── Card & Surface ──
    cardBg: "#FFFFFF",
    cardBgAlt: "#FFF9F5",
    surfaceLight: "#FAFAF9",

    // ── Decorative Pastels ──
    pastelPink: "#FFD4D4",
    pastelLavender: "#EDE7FF",
    pastelMint: "#DDFAF0",
    pastelYellow: "#FFF7E6",
    pastelBlue: "#E6F4FA",
    pastelPeach: "#FFE8D6",

    // ── Status ──
    success: "#7ECFB3",
    warning: "#FFD98E",
    error: "#FF7B7B",
    info: "#8ECAE6",
} as const;

export type Colors = typeof colors;
