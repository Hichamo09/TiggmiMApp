import PropTypes from 'prop-types'
import React from 'react'
import { ViewPropTypes } from 'react-native'
import { Circle } from 'react-native-progress'
import { View } from 'atoms'

import _keys from 'lodash/keys'
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

    switch (this.props.type) {
      case LOADER_TYPES.doubleLoader: {
        return this.renderDoubleLoader()
      }
      default: {
        return (
          <View style={[styles.loaderContainer, backgroundStyle]}>
            <Circle
              size={loaderSize}
              indeterminate
              color={color || styleVariables.loader.color}
            />
          </View>
        )
      }
    }
  }

  renderDoubleLoader = () => {
    const {
      innerLoaderSize,
      backgroundStyle,
      color,
      size,
      innerLoaderColor
    } = this.props
    const loaderSize = size || styleVariables.loader.size
    return (
      <View style={[styles.loaderContainer, backgroundStyle]}>
        <Circle
          size={loaderSize}
          indeterminate
          color={color || styleVariables.outerLoaderColor}
          endAngle={0.5}
          borderWidth={2}
        />
        <View style={styles.innerLoaderContainer}>
          <Circle
            size={innerLoaderSize || loaderSize - 12}
            indeterminate
            color={innerLoaderColor || styleVariables.innerLoaderColor}
            direction={'counter-clockwise'}
            endAngle={0.625}
            borderWidth={2}
          />
        </View>
      </View>
    ) // outer circle: #ffffff, inner circle: #73737d on dark background
  }
}

Loader.propTypes = {
  size: PropTypes.number,
  innerLoaderSize: PropTypes.number,
  color: PropTypes.string,
  innerLoaderColor: PropTypes.string,
  backgroundStyle: ViewPropTypes.style,
  type: PropTypes.oneOf(_keys(LOADER_TYPES))
}

Loader.Types = LOADER_TYPES

Loader.defaultProps = {
  type: 'default',
  doubleLoader: false
}
