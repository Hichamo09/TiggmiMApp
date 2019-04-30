import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Modal,
  WebView
} from 'react-native';
import url from 'url';

import styles from './main.styles'
import LogoIcon from '../../assets/ic_logo.png'

const captchaUrl = `https://safe-caverns-72277.herokuapp.com/`

class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      phone_number: "",
      showModal: false,
      confirmationCode: ""
    }
  }



  _handleResponse = data => {
    let query = url.parse(data.url, true).query;


    if (query.hasOwnProperty('token')) {
      this.setState({ showModal: false });
      this.props.signUp(this.state.phone_number, query.token);
    } else if (query.hasOwnProperty('cancel')) {
      this.setState({ showModal: false, status: "cancelled" });
    }
  }


  renderCaptchScreen = () => {
    return (
      <View style={{ marginTop: 100 }}>
        <Modal
        visible={this.state.showModal}
        onRequestClose={() => this.setState({ showModal: false })}
        >
          <WebView
            source={{ uri: captchaUrl }}
            onNavigationStateChange={data =>
              this._handleResponse(data)
            }
            injectedJavaScript={`document.f1.submit()`}
          />
        </Modal>
      </View>
    )
  }

  renderInputs = () => {
    if (this.props.codeIsSent) {
      return (
        <TextInput
          style={styles.phoneNumberText}
          placeholder={'Confirmation code'}
          placeholderTextColor={'#a9a9a9'}
          keyboardType={'numeric'}
          value={this.state.confirmationCode}
          onChangeText={confirmationCode => this.setState({confirmationCode})}
          >
        </TextInput>
      )
    }
    return (
      <TextInput
        style={styles.phoneNumberText}
        placeholder={'Phone Number'}
        placeholderTextColor={'#a9a9a9'}
        keyboardType={'numeric'}
        value={this.state.phone_number}
        onChangeText={phone_number => this.setState({phone_number})}
        >
      </TextInput>
    )
  }

  _signUp = () => {
    if (this.props.codeIsSent) {
      this.props.confirmCode(this.props.firebaseCode, this.state.confirmationCode);
      return console.log('---------confirm method');
    }
    this.setState({
      showModal: true
    })
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={LogoIcon} style={styles.logoImage} resizeMode='contain' />
        <Text style={styles.headerText}>Welcome to Tiggmi</Text>
        {
          this.props.codeIsSent ?
          <Text style={styles.descriptionText}>Please Enter your confirmation code</Text>
          :
          <Text style={styles.descriptionText}>Please Enter your phone number to continue</Text>
        }
        <View stlye={styles.phoneNumberContainer}>
          {this.renderInputs()}
        </View>
        {
          this.props.errorMessage ?
          <View>
            <Text style={styles.errorMessageText}>{this.props.errorMessage}</Text>
          </View>
          : null
        }

        <View
          style={styles.continueButtonContainer}
        >
          <TouchableOpacity
            onPress={this._signUp}
          >
            <Text style={styles.continueButton}>Continue</Text>
          </TouchableOpacity>
        </View>
        {this.renderCaptchScreen()}

      </ScrollView>
    )
  }
}

export default Login;
