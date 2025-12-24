// Central export for all theme-related items
export { colors } from './color';
export type { Colors } from './color';
export { fonts } from './font';
export type { Fonts } from './font';

import { colors } from './color';
import { fonts } from './font';

// Re-export everything as a theme object for convenience
export const theme = {
  colors,
  fonts
};

