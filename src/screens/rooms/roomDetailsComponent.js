import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import styles from './main.styles';
const windowWidth = Dimensions.get('window').width;

export default class RoomDetailsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          shutterValue: 50,
          lightValue: 0
        }
    }


    renderShutters = () => {
      return (
        <View style={styles.shutterContainer}>
          <View style={{...styles.shutterValue, height: this.state.shutterValue}}>
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
      )

    }


    render() {

        return (
            <View styles={styles.roomDetailsComponent} >
              <View style={{flexDirection: "row", alignItems: "center"}}>

                <FlatList
                  data={this.props.room ? this.props.room.pins.filter(item => item.type === "shutter") : []}
                  renderItem={this.renderShutters}
                  numColumns={2}
                />

                {
                  this.props.room ?
                    this.props.room.pins.find(x => x.type === "light") ?
                    <TouchableOpacity onPress={() => {
                      this.setState({lightValue: !this.state.lightValue})
                    }}>
                      <View style={styles.lightContainer}>
                        <View style={{...styles.lightValue, height: this.state.lightValue ? "100%" : 0}}>
                        </View>
                          <Image
                            source={require('../../assets/light-room.png')}
                            style={{width: 30, position: "absolute", bottom: 20, zIndex: 1}}
                          />
                      </View>
                    </TouchableOpacity>
                    : null
                    : null
                }


              </View>


            </View>
        )
    }
}
