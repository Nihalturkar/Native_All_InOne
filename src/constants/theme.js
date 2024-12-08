import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // Nectar 
  primary: '#363795',
  primary2: '#5383EC',
  lightblue: '#F1F5FF',
  bottomblue : '#005C97',
  darkblue:"#4A66AC",
  yellow: 'rgb(253, 203,15)',
  green:"rgba(83, 177, 117, 1)",
  lightgray1: '#F5F5F5',
  lightgray2: '#D9D9D9',
  lightblue: '#DBDFFF',
  lightblue2: '#e9f6f9',
  pink: 'rgba(201, 44, 81, 1)',
  green: 'rgba(52, 161, 34, 1)',
  //white
  border: '#CEC4C4',
  prime: '#EC2F07',
  white: '#FFFFFF',
  red: 'rgba(229, 55, 55, 1)',
  // black
  black: '#000000',
  gray: '#F5F5F5',
  gray1: 'rgba(101, 98, 98, 1)',
  // gray10: 'rgba(89, 84, 84, 1)',
  gray10: '#F2F3F2',
  gray20: 'rgba(217, 217, 217, 1)',
  gray30: 'rgba(147, 147, 147, 1)',
  gray40: '#999999',
  gray50: '#7F7F7F',
  gray60: '#666666',
  gray70: '#4C4C4C',
  gray80: '#333333',
  gray85: '#242526',
  gray90: '#191919',

  // lightGray
  lightGray: '#C1C1C1',
  lightGray1: '#DDDDDD',
  lightGray10: 'rgba(242, 242, 242, 1)',
  lightGray31: 'rgba(196, 196, 196, 0.31)',

  transparent: "transparent",
  // // yellow
  // yellow: '#FFC107',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding1: 15,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  //Font family
  black: 'Gilroy-Black',
  extrabold:"Gilroy-ExtraBold",
  bold: 'Gilroy-Bold',
  semiBold: 'Gilroy-Heavy',
  medium: 'Gilroy-Medium',
  regular: 'Gilroy-Regular',
  light: 'Gilroy-Light',
  thin: 'Gilroy-Thin',

  fourHundred: {fontFamily: 'Gilroy-Regular'},
  fiveHundred: {fontFamily: 'Gilroy-Medium'},
  sixHundred: {fontFamily: 'Gilroy-Bold'},
  sevenHundred: {fontFamily: 'Gilroy-Heavy'},
  eightHundred: {fontFamily: 'Gilroy-Black'},
  nineHundred: {fontFamily: 'Gilroy-ExtraBold'},
};

export const darkTheme = {
  backgroundColor: COLORS.darkBackground,
};

export const lightTheme = {
  backgroundColor: COLORS.white,
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
