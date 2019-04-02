import { Platform, Dimensions } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window')

export default {
  screenWidth: width,
  screenHeight: height,
  statusBarHeight: Platform.OS === 'ios' ? ifIphoneX(44, 20) : 24,
  navBarHeight: Platform.OS === 'ios' ? 44 : 56
}
