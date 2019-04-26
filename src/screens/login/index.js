import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import styles from './main.styles'
import LogoIcon from '../../assets/ic_logo.png'

class Login extends Component {

  componentWillMount() {
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={LogoIcon} style={styles.logoImage} resizeMode='contain' />
        <Text style={styles.headerText}>Welcome to Tiggmi</Text>
        <Text style={styles.descriptionText}>Please log in to continue</Text>
        <View stlye={styles.phoneNumberContainer}>
          <TextInput
            style={styles.phoneNumberText}
            placeholder={'Phone Number'}
            placeholderTextColor={'#a9a9a9'}
            keyboardType={'numeric'}>
          </TextInput>
        </View>
        <View
          style={styles.continueButtonContainer}
        >
        <TouchableOpacity style={{justifyContent: "center"}}>
          <Text style={styles.continueButton}>Continue</Text>
        </TouchableOpacity>
        </View>


      </ScrollView>
    )
  }
}


export default Login
