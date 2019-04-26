import PropTypes from 'prop-types'
import React from 'react'
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Platform,
  View
} from 'react-native'

const ViewPropTypes = require('react-native').ViewPropTypes || View.propTypes

const EMPTY_OBJECT = {}
class Button extends React.Component {
  constructor (props) {
    super(props)
    this.onPressBlocked = false
  }

  render () {
    const {
      children,
      style,
      onPress,
      rippleColor,
      borderless,
      hasTouchFeedback,
      ...otherProps
    } = this.props
    const shouldShowTouchableFeedback =
      hasTouchFeedback && !(Platform.OS === 'android' && Platform.Version <= 20)
    if (!shouldShowTouchableFeedback) {
      return (
        <View style={style} ref={this.setRef}>
          <TouchableWithoutFeedback onPress={this.onPress} {...otherProps}>
            {children}
          </TouchableWithoutFeedback>
        </View>
      )
    }
    if (Platform.OS === 'android') {
      return (
        <View style={style} ref={this.setRef}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(rippleColor, borderless)}
            onPress={this.onPress}
            {...otherProps}
          >
            {children}
          </TouchableNativeFeedback>
        </View>
      )
    }
    return (
      <TouchableHighlight
        style={style}
        onPress={this.onPress}
        {...otherProps}
        ref={this.setRef}
      >
        {children}
      </TouchableHighlight>
    )
  }

  onPress = event => {
    event.persist()
    this.onPressThrottledCb(event)
  }

  onPressThrottledCb = event => {
    if (!this.props.onPress) {
      return
    }

    if (this.onPressBlocked) {
      return
    }

    this.onPressBlocked = true
    setTimeout(() => {
      this.onPressBlocked = false
    }, this.props.throttleDuration)

    if (this.props.data) {
      this.props.onPress(Object.assign(event, { data: this.props.data }))
    } else {
      this.props.onPress(event)
    }
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

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  children: PropTypes.element.isRequired,
  underlayColor: TouchableHighlight.propTypes.underlayColor,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  borderless: PropTypes.bool, // Set this property to true for rounded buttons and for circular ripple effect around icons.
  rippleColor: PropTypes.string,
  hasTouchFeedback: PropTypes.bool,
  throttleDuration: PropTypes.number
}

Button.defaultProps = {
  underlayColor: 'rgba(255, 255, 255, 0.1)',
  rippleColor: 'rgba(211, 211, 211, 0.3)',
  borderless: false,
  hasTouchFeedback: true,
  throttleDuration: 300,
  style: EMPTY_OBJECT
}

export default Button
