import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Animated, Image as RNImage } from 'react-native'

import _isEmpty from 'lodash/isEmpty'

import styles from './Image.style'

const ViewPropTypes = require('react-native').ViewPropTypes || View.propTypes

const EMPTY_OBJECT = {}
class Image extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      imageOpacity: new Animated.Value(0),
      source: props.source,
      showErrorPlaceholder: true
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.source !== nextProps.source) {
      this.setState({
        source: nextProps.source,
        showErrorPlaceholder: true
      })
    }
  }

  render () {
    const { shouldRenderPlaceholder, children } = this.props

    if (children) {
      console.warn(
        'children in Image is deprecated... use ImageBackground instead.'
      ) // eslint-disable-line no-console
    }

    if (shouldRenderPlaceholder) {
      return (
        <View
          ref={this.setRef}
          style={[
            this.props.style,
            styles.imageContainer,
            { backgroundColor: this.props.imagePlaceholderColor }
          ]}
        >
          <Animated.Image
            resizeMode={'contain'}
            resizeMethod={'resize'}
            style={[{ opacity: this.state.imageOpacity }, this.props.style]}
            onLoad={this.onLoad}
            onError={this.onError}
            {...this.props}
            source={this.state.source}
          />
        </View>
      )
    }

    return (
      <RNImage
        ref={this.setRef}
        onError={this.onError}
        {...this.props}
        source={this.state.source}
      />
    )
  }

  onLoad = () => {
    Animated.timing(this.state.imageOpacity, {
      toValue: 1,
      duration: 250
    }).start()
  }

  onError = () => {
    const { placeholder } = this.props
    if (!this.state.showErrorPlaceholder && __DEV__) {
      console.warn(
        `\`placeholder\`: ${placeholder} provided to \`Image\` could not be set`
      ) // eslint-disable-line no-console
    }

    if (_isEmpty(placeholder) || !this.state.showErrorPlaceholder) {
      return
    }

    this.setState({
      source: placeholder,
      showErrorPlaceholder: false
    })
  }

  setRef = ref => {
    this.rootRef = ref
  }

  setNativeProps = nativeProps => {
    if (this.rootRef && typeof this.rootRef.setNativeProps === 'function') {
      this.rootRef.setNativeProps(nativeProps)
    }
  }
}

Image.propTypes = {
  style: ViewPropTypes.style,
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string
    }),
    PropTypes.number
  ]).isRequired,
  shouldRenderPlaceholder: PropTypes.bool,
  imagePlaceholderColor: PropTypes.string,
  placeholder: RNImage.propTypes.source,
  children: PropTypes.element
}

Image.defaultProps = {
  shouldRenderPlaceholder: false,
  imagePlaceholderColor: '#FAFAFD',
  style: EMPTY_OBJECT
}

module.exports = Image
