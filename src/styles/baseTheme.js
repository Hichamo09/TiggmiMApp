import { Platform } from 'react-native'
import standardMetrics from './standardMetrics'

const BASE_THEME = {
  colors: {
    // Social Channel
    facebook: '#3b5998',
    googleplus: '#dd4b39',
    linkedin: '#007bb5',
    pinterest: '#cb2027',
    twitter: '#55acee',

    // transparent
    transparent: 'rgba(0,0,0,0)',
    transparent_75: 'rgba(0,0,0,0.75)',
    transparent_60: 'rgba(0,0,0,0.6)',
    transparent_50: 'rgba(0,0,0,0.5)',

    // standard
    white: '#fff',
    black: '#000',
    grey: 'grey'
  },
  fonts: {
    fontFamily: Platform.OS === 'ios' ? 'SF UI Text' : 'Roboto',
    fontNames: {
      light: Platform.OS === 'ios' ? 'SFUIText-Light' : 'Roboto-Light',
      regular: Platform.OS === 'ios' ? 'SFUIText-Regular' : 'Roboto-Regular',
      medium: Platform.OS === 'ios' ? 'SFUIText-Medium' : 'Roboto-Medium',
      semibold: Platform.OS === 'ios' ? 'SFUIText-Semibold' : 'Roboto-Bold',
      bold: Platform.OS === 'ios' ? 'SFUIText-Bold' : 'Roboto-Black'
    },
    sizes: {
      display3: 28,
      display2: 22,
      display1: 20,
      headline: 24,
      title: Platform.OS === 'ios' ? 16 : 20,
      subheading3: 18,
      subheading2: 16,
      subheading1: 15,
      body2: 14,
      body1: 13,
      caption2: 12,
      caption1: 11,
      button: 14,
      denseButton: 13
    },
    multiplier: {
      // for dynamic sizing
      xsmall: 13 / 16, // multiplier
      small: 14 / 16,
      medium: 15 / 16,
      large: 1.0,
      xlarge: 17 / 16,
      xxlarge: 18 / 16,
      xxxlarge: 19 / 16
    },
    weights: {
      thin: '100',
      light: '200',
      regular: '300',
      medium: '400',
      bold: '500'
    }
  },
  metrics: {
    ...standardMetrics,
    avatar: 40,
    icon: 24
  },
  images: {
    // add channel icons etc
  }
}

export default BASE_THEME
