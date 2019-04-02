import React from 'react'
import PropTypes from 'prop-types'
import { TextInput as RNTextInput, View, Platform } from 'react-native'

import styles, { styleVariables } from './TextInput.style'

export default class TextInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textInputHeight: 0,
      rightAccessoryViewWidth: 0
    }
  }

  render () {
    const placeholderTextColor = styleVariables.placeholderColor
    const { clearButtonMode, renderRightAccesoryView } = this.props
    const { rightAccessoryViewWidth } = this.state
    return (
      <View style={styles.container}>
        <RNTextInput
          key={rightAccessoryViewWidth}
          ref={this.setTextInputRef}
          enablesReturnKeyAutomatically
          autoCapitalize='none'
          autoCorrect={false}
          placeholderTextColor={placeholderTextColor}
          {...this.props}
          onLayout={this.onTextInputLayout}
          onContentSizeChange={this.onContentSizeChange}
          clearButtonMode={renderRightAccesoryView ? 'never' : clearButtonMode}
          underlineColorAndroid={'transparent'}
          style={[
            styles.formField,
            this.props.style,
            { paddingRight: rightAccessoryViewWidth }
          ]}
        />
        {this.renderRightAccesoryView()}
      </View>
    )
  }

  renderRightAccesoryView = () => {
    const { renderRightAccesoryView, rightAccessoryViewHeight } = this.props
    const { textInputHeight } = this.state
    if (
      !renderRightAccesoryView ||
      (textInputHeight === 0 && !rightAccessoryViewHeight)
    ) {
      return null
    }

    return (
      <View
        style={[
          styles.rightButtonContainer,
          { height: rightAccessoryViewHeight || textInputHeight }
        ]}
        onLayout={this.onRightAccessoryViewLayout}
      >
        {renderRightAccesoryView({ getTextInputRef: this.getTextInputRef })}
      </View>
    )
  }

  onRightAccessoryViewLayout = event => {
    if (this.state.rightAccessoryViewWidth <= 0) {
      this.setState({
        rightAccessoryViewWidth: event.nativeEvent.layout.width
      })
    }
  }

  onTextInputLayout = event => {
    const { rightAccessoryViewHeight } = this.props
    if (Platform.OS === 'ios' && !rightAccessoryViewHeight) {
      this.setState({
        textInputHeight: event.nativeEvent.layout.height
      })
    }
  }

  onContentSizeChange = event => {
    const { textInputHeight } = this.state
    const { renderRightAccesoryView, rightAccessoryViewHeight } = this.props
    if (
      Platform.OS === 'Android' &&
      textInputHeight === 0 &&
      renderRightAccesoryView &&
      !rightAccessoryViewHeight
    ) {
      this.setState({
        textInputHeight: event.nativeEvent.contentSize.height
      })
    }
  }

  setTextInputRef = textInputRef => {
    this.textInputRef = textInputRef
  }

  getTextInputRef = () => this.textInputRef
}

TextInput.propTypes = {
  onChangeText: PropTypes.func,
  clearButtonMode: PropTypes.string,
  style: RNTextInput.propTypes.style,
  renderRightAccesoryView: PropTypes.func,
  rightAccessoryViewHeight: PropTypes.number
}

TextInput.defaultProps = {
  editable: true,
  placeholder: 'Type here',
  shouldAutoFocus: false,
  keyboardType: 'default',
  returnKeyType: 'next',
  secureTextEntry: false,
  clearButtonMode: 'while-editing'
}
