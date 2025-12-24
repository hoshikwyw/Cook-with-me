# Theme System Usage Guide

## Overview
This theme system provides centralized colors and fonts for consistent styling across your application.

## Import Methods

### Method 1: Import Individual Items (Recommended)
```typescript
import { colors, fonts } from '../themes/color';
import { fonts } from '../themes/font';
```

### Method 2: Import from Index (Easier)
```typescript
import { colors, fonts } from '../themes';
```

### Method 3: Import Entire Theme Object
```typescript
import { theme } from '../themes';
// Use as: theme.colors.primary, theme.fonts.h1
```

## Usage Examples

### Using Colors
```typescript
<div style={{ backgroundColor: colors.bgPrimary }}>
  <h1 style={{ color: colors.textPrimary }}>Hello World</h1>
</div>
```

### Using Fonts
```typescript
<h1 style={{ ...fonts.h1 }}>Main Title</h1>
<p style={{ ...fonts.body }}>Body text here</p>
```

### Combining Colors and Fonts
```typescript
<button 
  style={{
    ...fonts.button,
    backgroundColor: colors.buttonPrimary,
    color: colors.buttonText,
    padding: '12px 24px'
  }}
>
  Click Me
</button>
```

### Overriding Specific Properties
```typescript
<h2 
  style={{
    ...fonts.h2,
    fontSize: '32px',  // Override font size
    color: colors.textAccent  // Override color
  }}
>
  Custom Heading
</h2>
```

## Available Colors

### Primary Colors
- `primary` - Main yellow/gold (#FFB800)
- `primaryDark` - Darker yellow (#E6A600)
- `primaryLight` - Lighter yellow (#FFC933)

### Neutral Colors
- `black` - Pure black (#000000)
- `white` - Pure white (#FFFFFF)
- `gray` - Medium gray (#6B7280)
- `grayLight` - Light gray background (#F3F4F6)
- `grayDark` - Dark gray text (#374151)

### Text Colors
- `textPrimary` - White text (#FFFFFF)
- `textSecondary` - Black text (#000000)
- `textMuted` - Gray text (#6B7280)
- `textAccent` - Yellow accent (#FFB800)

### Background Colors
- `bgPrimary` - Yellow background (#FFB800)
- `bgSecondary` - Black background (#000000)
- `bgLight` - White background (#FFFFFF)
- `bgOverlay` - Dark overlay (rgba(0, 0, 0, 0.5))

### UI Elements
- `buttonPrimary` - Black button (#000000)
- `buttonHover` - Dark gray hover (#1F2937)
- `buttonText` - White button text (#FFFFFF)

## Available Fonts

### Headings
- `heroTitle` - Large hero heading (72px, 800 weight)
- `h1` - Main heading (48px, 800 weight)
- `h2` - Secondary heading (36px, 700 weight)
- `h3` - Tertiary heading (24px, 600 weight)
- `h4` - Small heading (18px, 600 weight)

### Body Text
- `body` - Standard body text (16px, 400 weight)
- `bodyLarge` - Large body text (18px, 400 weight)
- `bodySmall` - Small body text (14px, 400 weight)

### Special Text
- `subtitle` - Subtitle/tagline (16px, 400 weight, uppercase)
- `button` - Button text (16px, 700 weight, uppercase)
- `buttonLarge` - Large button text (18px, 700 weight, uppercase)
- `nav` - Navigation text (14px, 600 weight, uppercase)

## TypeScript Support
Both color and font objects are fully typed for TypeScript autocomplete and type checking.

```typescript
import type { Colors, Fonts } from '../themes';
```

## Best Practices

1. **Always use theme colors** instead of hardcoded values
2. **Spread font objects** and override specific properties when needed
3. **Import from index** for cleaner imports
4. **Use type imports** for better TypeScript support
5. **Combine with Tailwind** classes for responsive design

## Example Component

```typescript
import { colors, fonts } from '../themes';

export default function MyComponent() {
  return (
    <div style={{ backgroundColor: colors.bgLight }} className="p-8">
      <h1 style={{ ...fonts.h1, color: colors.textAccent }}>
        Welcome
      </h1>
      <p style={{ ...fonts.body, color: colors.textSecondary }}>
        This is a sample component using the theme system.
      </p>
      <button 
        style={{
          ...fonts.button,
          backgroundColor: colors.buttonPrimary,
          color: colors.buttonText,
          padding: '12px 24px',
          borderRadius: '8px'
        }}
        className="hover:opacity-90 transition-opacity"
      >
        Click Me
      </button>
    </div>
  );
}
```

