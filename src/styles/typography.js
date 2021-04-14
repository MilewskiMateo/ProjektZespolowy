import {StyleSheet} from 'react-native';
import * as Colors from './colors';

export const HEADERS = StyleSheet.create({
  H1: {
    fontFamily: 'Metropolis-Black',
    fontSize: 29,
    lineHeight: 32,
    color: Colors.DARK_COLOR,
  },
  H2: {
    fontFamily: 'Metropolis-Black',
    fontSize: 24,
    lineHeight: 28,
    color: Colors.DARK_COLOR,
  },
  H3: {
    fontFamily: 'Metropolis-Black',
    fontSize: 20,
    lineHeight: 24,
    color: Colors.DARK_COLOR,
  },
  H4: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.DARK_COLOR,
  },
  H5: {
    fontFamily: 'Metropolis-Medium',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.DARK_COLOR,
  },
});

export const BODY = StyleSheet.create({
  SEMIBOLD: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.GRAY_COLOR,
  },
  MEDIUM: {
    fontFamily: 'Metropolis-Medium',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.GRAY_COLOR,
  },
});

export const BUTTON = StyleSheet.create({
  PRIMARY: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 17,
    lineHeight: 20,
    color: Colors.WHITE_COLOR,
  },
  SECONDARY: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 17,
    lineHeight: 20,
    color: Colors.GRAY_COLOR,
  },
});
