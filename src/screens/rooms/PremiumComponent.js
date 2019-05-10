import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import styles from './main.styles';
const windowWidth = Dimensions.get('window').width;

export default class PremiumComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <View style={styles.premiumView}>
                    <Image
                        source={this.props.premium}
                        style={styles.premiumImage}
                    />
                </View>
                <View style={{alignItems: 'center',}}>
                    <Image
                        source={this.props.temp}
                        style={styles.temp}
                    />
                </View>
            </View>
        )
    }
}