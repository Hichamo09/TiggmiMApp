import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, Image,  } from 'react-native';

import styles from './main.styles';

export default class drawerContentComponents extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                <View style={styles.screenContainer}>
                    <View style={styles.screenStyle}>
                        <Text onPress={this.navigateToScreen('Home')} style={styles.screenTextStyle}>Home</Text>
                    </View>
                    <View style={styles.screenStyle}>
                        <Text onPress={this.navigateToScreen('Notification')} style={styles.screenTextStyle}>Notifications</Text>
                    </View>
                    <View style={styles.screenStyle}>
                        <Text onPress={this.navigateToScreen('Members')} style={styles.screenTextStyle}>Members</Text>
                    </View>
                    <View style={styles.screenStyle}>
                        <Text onPress={this.navigateToScreen('Alert')} style={styles.screenTextStyle}>Alert History</Text>
                    </View>
                    <View style={styles.screenStyle}>
                        <Text onPress={this.navigateToScreen('Consumption')} style={styles.screenTextStyle}>Electric consumption</Text>
                    </View>
                    <View style={styles.screenStyle}>
                        <Text onPress={this.navigateToScreen('Cycles')} style={styles.screenTextStyle}>Modles & Cycles</Text>
                    </View>
                    <View style={styles.screenStyle}>
                        <Text onPress={this.navigateToScreen('Help')} style={styles.screenTextStyle}>Help</Text>
                    </View>
                    <View style={styles.screenStyle}>
                        <Text onPress={this.navigateToScreen('Login')} style={styles.screenTextStyle}>Login</Text>
                    </View>
                </View>
                {
                // <View style={styles.headerContainer}>
                //     //   <Image
                //     //     source={require('../../../assets/white-logo.png')} style={{flex: 1, width: 100, marginRight: 80, justifyContent: 'center',}} resizeMode="contain"
                //     // />
                // </View>
              }
            </View>
        </View>

    )
  }
}
