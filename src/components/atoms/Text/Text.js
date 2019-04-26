import React from 'react'
import { Text } from 'react-native'

import styles from './Text.style'

const TextWrapper = props => (
  <Text {...props} style={[styles.textStyle, props.style]} />
)

TextWrapper.propTypes = {
  style: Text.propTypes.style
}

export default TextWrapper
