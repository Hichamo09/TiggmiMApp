import PropTypes from 'prop-types'
import React from 'react'
import { ViewPropTypes, ActivityIndicator } from 'react-native'
import { View } from 'atoms'

import _isEqual from 'lodash/isEqual'

import styles, { styleVariables } from './Loader.style'

const LOADER_TYPES = {
  default: 'default',
  doubleLoader: 'doubleLoader'
}

export default class Loader extends React.Component {
  shouldComponentUpdate (nextProps) {
    return !_isEqual(this.props, nextProps)
  }

  render () {
    const { size, color, backgroundStyle } = this.props
    const loaderSize = size || styleVariables.loader.size

    return (
      <View style={[styles.loaderContainer, backgroundStyle]}>
        <ActivityIndicator
          size={loaderSize}
          color={color || styleVariables.loader.color}
        />
      </View>
    )
  }
}

Loader.propTypes = {
  size: PropTypes.number,
  // innerLoaderSize: PropTypes.number,
  color: PropTypes.string,
  // innerLoaderColor: PropTypes.string,
  backgroundStyle: ViewPropTypes.style
  // type: PropTypes.oneOf(_keys(LOADER_TYPES))
}

Loader.Types = LOADER_TYPES

Loader.defaultProps = {
  type: 'default',
  doubleLoader: false
}
