/*
 * Created Date: February 3rd 2019, 11:52:04 am
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

export const palette = {
  black: '#000000',
  primaryGrey: '#6f7682',
  primaryBlack: '#002124',
  bgGray: '#f7f7f7',
  secondaryGray: '#d9d9d9',
  disabledGray: '#aab1b3',
  hostGreen: '#29ccc4',
  hostBlue: '#577a80',
  notificationRed: '#ed0235',
  white: '#ffffff',
  greyishBrown15: '#40404026.4',
  dark30: '#1a2d33'
};

export const HEADER_HEIGHT = 56;

export const color = {
  // Brand Specific.
  // Only to be used in story boards. These colors will come from client's branding

  // Primary color
  hostGreen: '#29CCC4',

  // Text colors
  // Primary Dark
  navy: '#002124',

  // Primary Gray
  primaryGray: '#6F7682',

  // End of Brand specific colors.

  // Disabled state
  lightGrayBlue: '#AAB1B3',

  // Background
  bgGray: '#F7F7F7',

  // Borders/Lines
  secondaryGray: '#D9D9D9',

  // Text colors
  white: '#FFFFFF',

  // Notifications
  notificationRed: '#ED0235',

  // Shadows
  textShadow: 'rgba(0, 0, 0, 0.5)',

  dark30: 'rgba(26, 45, 51, 0.3)'
};

export const fontSize = {
  // H1
  fs1: 33,

  // H2
  fs2: 22,

  // Body emphasis
  fs3: 17,

  // Body small & buttons
  fs4: 14,

  // Icon Text
  fs5: 11,

  // Badge
  fs6: 9
};

export const iconSize = {
  is1: 14,
  is2: 16,
  is3: 20,
  is4: 32
};

export const lineHeight = {
  // H1
  lh1: 40,

  // H2, H3 & Body
  lh2: 25,

  // Body small & buttons
  lh3: 20,

  // Badges
  lh4: 15
};

export const letterSpacing = {
  // H1
  ls1: -0.4,

  // H2, H3
  ls2: -0.2,

  // Body
  ls3: -0.1,

  // Badges
  ls4: -0.06
};

export const radius = {
  border: 10,
  textShadow: 2
};

export const shadow = {
  textOffset: {
    width: 0,
    height: 1
  },
  topBarOffset: {
    width: 0,
    height: 1
  }
};

export const spacing = {
  s0: 5,
  s1: 10,
  s2: 15,
  s3: 20,
  s4: 25,
  s5: 30,
  card: 20,
  screenHorizontal: 22
};

export function fontSecondary(): Object {
  return {
    fontFamily: 'SofiaProRegular'
  };
}

export const styles = {
  screenHorizontalSpacing: spacing.screenHorizontal,
  cardSpacing: spacing.card,
  homeCardHeight: 222,
  imageCardHeight: 222,
  color,
  fontSize,
  lineHeight,
  letterSpacing,
  radius,
  shadow,
  fontSecondary
};
