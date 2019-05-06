import React, { Component } from 'react';
import { View, Image, Text, Button, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';



const windowWidth = Dimensions.get('window').width;

export default class Room extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                <Image
                    source={this.props.url}
                    style={{width: windowWidth, height: 180, resizeMode: 'stretch'}}
                />                
            </View>
                    
        );
    }
}
