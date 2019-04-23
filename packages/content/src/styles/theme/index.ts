import shadows from '../shadows';
import { ThemeInterface } from './ThemeInterface';

// Guide
// [C] means `Component`
// --> Comments marked with //// are top level categories
// --> No tag comments (//) are sub categories
// --> Inline comments are for description

// Q: What to not put here?
// A: Don't put a variable here, if it is only valid to be with
//    a specific component, like `buttonHeight` should be stored beside
//    the `Button` component since it's not useful if that button is not
//    present.

export interface Shape {
  borderRadius: number;
}

const shape: Shape = {
  borderRadius: 4,
};

export interface ZIndex {
  mobileStepper: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
}

const zIndex: ZIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

export interface Colors {
  primary: string;
  primaryDark1: string;
  primaryLight1: string;
  primaryLight2: string;
  primaryLight3: string;
  primaryLight4: string;
  primaryLight5: string;
  primaryLight6: string;
  primaryLight7: string;
  orange: string;
  orangeLight1: string;
  violet: string;
  violetLight1: string;
  green: string;
  greenLight1: string;
  blue: string;
  blueLight1: string;
  lightBlue: string;
  lightBlueLight1: string;
  red: string;
  redLight1: string;
  yellow: string;
  yellowLight1: string;
  white: string;
}

export const darkColors: Colors = {
  //// Colors
  primary: '#0C344B',
  primaryDark1: '#082333',
  primaryLight1: '#3D5866',
  primaryLight2: '#8FA6B2',
  primaryLight3: '#CCD9DF',
  primaryLight4: '#EFF3F5',
  primaryLight5: '#F0F0F0',
  primaryLight6: '#F7F9FA',
  primaryLight7: '#EDF2F5',
  orange: '#FF8934',
  orangeLight1: '#FFF1BD',
  violet: '#AA0D95',
  violetLight1: '#F2CFED',
  green: '#15BD76',
  greenLight1: '#C2F0DC',
  blue: '#0F7AD8',
  blueLight1: '#C2DCF2',
  lightBlue: '#00CCE4',
  lightBlueLight1: '#B8EDF3',
  red: '#FF4F56',
  redLight1: '#FFDCDE',
  yellow: '#FFCC07',
  yellowLight1: '#FFF1BD',
  white: '#fff',
};

export const lightColors: Colors = {
  //// Colors
  primary: '#0C344B',
  primaryDark1: '#082333',
  primaryLight1: '#3D5866',
  primaryLight2: '#8FA6B2',
  primaryLight3: '#CCD9DF',
  primaryLight4: '#EFF3F5',
  primaryLight5: '#F0F0F0',
  primaryLight6: '#F7F9FA',
  primaryLight7: '#EDF2F5',
  orange: '#FF8934',
  orangeLight1: '#FFF1BD',
  violet: '#AA0D95',
  violetLight1: '#F2CFED',
  green: '#15BD76',
  greenLight1: '#C2F0DC',
  blue: '#0F7AD8',
  blueLight1: '#C2DCF2',
  lightBlue: '#00CCE4',
  lightBlueLight1: '#B8EDF3',
  red: '#FF4F56',
  redLight1: '#FFDCDE',
  yellow: '#FFCC07',
  yellowLight1: '#FFF1BD',
  white: '#fff',
};

export interface Sizes {
  sizeHeroTitle: number;
  sizeHeroSubtitle: number;
  sizeSectionTitle: number;
  sizeSectionSubtitle: number;
  sizeFeatureTitle: number;
  sizeFeatureDesc: number;
  sizeBullet: number;
  sizeParagraphTitle: number;
  sizeParagraph: number;
  sizeActions: number /* Buttons, links, nav items, etc */;
  sizeActionsSmall: number;
  sizeCode: number;
  // Radius
  radius: number;
  radiusBig: number;
  radiusSmall: number;
  // [C] Container
  middleContainerWidth: number;
  middleContainerNarrowWidth: number;
  // [C] Nav
  navHeight: number;
  // Spaces
  space8: number;
  space12: number;
  space16: number;
  space24: number;
  space32: number;
  space40: number;
  space64: number;
  space128: number;
  // Z Index
  diagonalBgZIndex: number;
  getStartedCardZIndex: number;
  worldMapZIndex: number;
  overlayZIndex: number;

  // Font Family Stacks
  fontStackMono: string;
}

export const sizes: Sizes = {
  ///// Sizes
  // Font Sizes
  sizeHeroTitle: 48,
  sizeHeroSubtitle: 24,
  sizeSectionTitle: 32,
  sizeSectionSubtitle: 20,
  sizeFeatureTitle: 28,
  sizeFeatureDesc: 16,
  sizeBullet: 16,
  sizeParagraphTitle: 20,
  sizeParagraph: 16,
  sizeActions: 16 /* Buttons, links, nav items, etc */,
  sizeActionsSmall: 14,
  sizeCode: 12,
  // Radius
  radius: 6,
  radiusBig: 8,
  radiusSmall: 4,
  // [C] Container
  middleContainerWidth: 1200,
  middleContainerNarrowWidth: 1100,
  // [C] Nav
  navHeight: 40,
  // Spaces
  space8: 8,
  space12: 12,
  space16: 16,
  space24: 24,
  space32: 32,
  space40: 40,
  space64: 64,
  space128: 128,
  // Z Index
  diagonalBgZIndex: 1,
  getStartedCardZIndex: 5,
  worldMapZIndex: 1,
  overlayZIndex: 100,

  // Font Family Stacks
  fontStackMono:
    "SFMono-Regular, 'Roboto Mono', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};

export const theme: ThemeInterface = {
  mode: 'dark',
  colors: darkColors,
  sizes,
  shape,
  shadows,
  zIndex,
};
