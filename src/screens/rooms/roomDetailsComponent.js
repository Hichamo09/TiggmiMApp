import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './main.styles';
const windowWidth = Dimensions.get('window').width;

export default class RoomDetailsComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let rooms = [];
        // let shutterPins = this.props.carouselItem ? this.props.carouselItem.pins.filter(x => x.type === "shutter") : []
        let length = 1
        {
          for(let i = 0; i < length; i++){
            if(length == 1){
                rooms.push(
                    <View>
                        <View style={styles.shutterContainer}>
                          <View style={styles.shutterValue}>
                          </View>
                        </View>
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
      }
        return (
            <View styles={styles.roomDetailsComponent} >
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={styles.shutterContainer}>
                  <View style={styles.shutterValue}>
                  </View>
                  <Image
                    source={require('../../assets/window-room.png')}
                    style={{width: 40, position: "absolute", bottom: 30, zIndex: 1}}
                  />
                  <Image
                    source={require('../../assets/down.png')}
                    style={{width: 30, height: 30, position: "absolute", bottom: 25, left: 10, zIndex: 1}}
                  />
                  <Image
                    source={require('../../assets/up.png')}
                    style={{width: 30, height: 30, position: "absolute", bottom: 25, right: 10, zIndex: 1}}
                  />
                </View>
                <View style={styles.shutterContainer}>
                  <View style={styles.shutterValue}>
                  </View>
                  <Image
                    source={require('../../assets/window-room.png')}
                    style={{width: 40, position: "absolute", bottom: 30, zIndex: 1}}
                  />
                  <Image
                    source={require('../../assets/down.png')}
                    style={{width: 30, height: 30, position: "absolute", bottom: 25, left: 10, zIndex: 1}}
                  />
                  <Image
                    source={require('../../assets/up.png')}
                    style={{width: 30, height: 30, position: "absolute", bottom: 25, right: 10, zIndex: 1}}
                  />
                </View>

                <View style={styles.lightContainer}>
                  <View style={styles.lightValue}>
                  </View>
                  <Image
                    source={require('../../assets/light-room.png')}
                    style={{width: 30, position: "absolute", bottom: 20, zIndex: 1}}
                  />
                </View>
              </View>



            </View>
        )
    }
}
