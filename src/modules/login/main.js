import React, { Component } from 'react'
import {
  View, Image, Text, TextInput, Button
} from 'atoms'
import styles from './main.styles'
import LogoIcon from '../../assets/ic_logo.png'

export default class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={LogoIcon} style={styles.logoImage} resizeMode='contain' />
        <Text style={styles.headerText}>{__('Welcome to Tiggmi')}</Text>
        <Text style={styles.descriptionText}>{__('Please log in to continue')}</Text>
        <View stlye={styles.phoneNumberContainer}><Image />
          <TextInput 
            style={styles.phoneNumberText} 
            placeholder={'Phone Number'} 
            placeholderTextColor={'#a9a9a9'}
            keyboardType={'numeric'}>
          </TextInput>
        </View>
        <Button style={styles.continueButtonContainer} onPress={this.onContinuePress}>
            <Text style={styles.continueButtonText}>{__('Continue')}</Text>
        </Button>
      </View>
    )
  }
}
