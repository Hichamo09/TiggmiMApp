import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import styles from './main.styles';
const windowWidth = Dimensions.get('window').width;

export default class RoomDetailsComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        var rooms = [];

        for(let i = 0; i < this.props.roomsLength; i++){
            if(this.props.roomsLength == 1){
                rooms.push(
                    <View>
                        <Image
                            source={this.props.carouselItem.rooms[i].room}
                            style={styles.window2}
                        />
                    </View>
                )
            }else{
                rooms.push(
                    <View>
                        <Image
                            source={this.props.carouselItem.rooms[i].room}
                            style={styles.window}
                        />
                    </View>
                )
            }
            
        }
        return (
            <View style={styles.roomDetailsView}>
                <View style={{flexDirection: 'row', width: (windowWidth/5)*4}}>
                    {rooms}
                </View>
                <View style={{width: windowWidth/5, justifyContent: 'flex-end',}}>
                    <Image
                        source={this.props.carouselItem.light}
                        style={styles.light}
                    />
                </View>
            </View>
        )
    }
}