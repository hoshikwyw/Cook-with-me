export { colors } from './color';
export type { Colors } from './color';
export { fonts } from './font';
export type { Fonts } from './font';

import { colors } from './color';
import { fonts } from './font';

export const theme = {
  colors,
  fonts,
} as const;
