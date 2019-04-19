import { Colors, Sizes, ZIndex, Shorthands, Shape } from './index';
import { Transitions } from '../transitions.d';
export interface ThemeInterface {
  mode: 'light' | 'dark';
  colors: Colors;
  sizes: Sizes;
  shape: Shape;
  shadows: any;
  zIndex: ZIndex;
  shorthands: Shorthands;
  transitions: Transitions;
}
