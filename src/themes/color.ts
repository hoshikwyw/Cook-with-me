export const colors = {
    // Primary Brand Colors - Warm Orange/Coral
    primary: "#FF9B70",        // Main coral/orange from brand
    primaryDark: "#FF7A47",    // Darker coral for hover states
    primaryLight: "#FFB899",   // Lighter peachy tone
    
    // Secondary Brand Colors - Soft Blue
    secondary: "#B8E6F0",      // Soft cyan/blue from background
    secondaryDark: "#8DD4E6",  // Darker blue
    secondaryLight: "#D4F1F9", // Very light blue
    
    // Neutral Colors
    black: "#2D3436",          // Soft black (not pure black)
    white: "#FFFFFF",          // Pure white
    gray: "#95A5A6",           // Soft gray
    grayLight: "#F8F9FA",      // Very light gray background
    grayDark: "#636E72",       // Dark gray text
    cream: "#FFF8F0",          // Cream/off-white
    
    // Text Colors
    textPrimary: "#2D3436",    // Dark text for light backgrounds
    textSecondary: "#636E72",  // Medium gray text
    textMuted: "#95A5A6",      // Muted gray text
    textAccent: "#FF9B70",     // Orange accent text
    textLight: "#FFFFFF",      // White text for dark backgrounds
    
    // Background Colors
    bgPrimary: "#B8E6F0",      // Soft blue background (brand color)
    bgGradientStart: "#D4F1F9", // Light blue for gradients
    bgGradientEnd: "#B8E6F0",   // Darker blue for gradients
    bgLight: "#FFFFFF",         // White background
    bgCream: "#FFF8F0",         // Cream background
    bgOverlay: "rgba(45, 52, 54, 0.3)", // Soft dark overlay
    
    // UI Elements - Buttons
    buttonPrimary: "#FF9B70",  // Orange button (brand color)
    buttonHover: "#FF7A47",    // Darker orange hover
    buttonText: "#FFFFFF",     // White button text
    buttonSecondary: "#B8E6F0", // Soft blue button
    buttonSecondaryText: "#2D3436", // Dark text on light button
    
    // Card & Surface Colors
    cardBg: "#FFFFFF",         // White card background
    cardBgAlt: "#FFF8F0",      // Cream card background
    surfaceLight: "#F8F9FA",   // Light surface
    
    // Social Media & Icons
    iconBg: "#FF9B70",         // Orange icon background
    iconHover: "#FF7A47",      // Darker orange on hover
    iconAlt: "#B8E6F0",        // Blue icon alternative
    
    // Decorative Food Colors (Soft/Pastel)
    vegetableGreen: "#7FD8BE", // Soft mint green
    carrotOrange: "#FFB088",   // Soft orange
    tomatoRed: "#FF8B94",      // Soft coral red
    eggYellow: "#FFE5A0",      // Soft yellow
    breadBeige: "#F5DEB3",     // Wheat/beige
    
    // Status Colors (Soft tones)
    success: "#7FD8BE",        // Soft green
    warning: "#FFD57E",        // Soft yellow
    error: "#FF8B94",          // Soft red
    info: "#8DD4E6",           // Soft blue
} as const;

export type Colors = typeof colors;

