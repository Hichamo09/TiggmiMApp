import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Room from './roomComponent';
import RoomDetailsComponent from './roomDetailsComponent';
import PremiumComponent from './PremiumComponent';
import styles from './main.styles';
import { _getRoomImage } from '../../utils/_helpers'




const windowWidth = Dimensions.get('window').width;

export default class Rooms extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#fff',
            borderBottomColor: '#3b82cc',
            borderBottomWidth: 1,
            shadowOpacity: 0,
            shadowOffset: {
            height: 0,
            },
            shadowRadius: 0,
            elevation: 0

        },
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <View style={{marginLeft:12}}>
                    <FontAwesome name='list-ul' size={30} color='#3b82cc'/>
                </View>
            </TouchableOpacity>
        ),
    });


    constructor(props) {
        super(props);
        this.state = {
            myText: 'Bedroom 1',
            gestureName: 'none',
            backgroundColor: '#fff',
            activeIndex: 0,
            roomsLength: 2,
            carouselItems: [
                {
                    title:"Bedroom 1",
                    url: require('../../assets/slider-room1.png'),
                    rooms: [
                        {
                            room: require('../../assets/room-bar.png'),
                        },
                        {
                            room: require('../../assets/room-bar.png'),
                        }
                    ],
                    light: require('../../assets/light.png'),
                    premium: require('../../assets/premium.png'),
                    temp: require('../../assets/temp.png')
                },
                {
                    title:"Bedroom 2",
                    url: require('../../assets/slider-room2.png'),
                    rooms: [
                        {
                            room: require('../../assets/room-bar.png'),
                        },
                        {
                            room: require('../../assets/room-bar.png'),
                        }
                    ],
                    light: require('../../assets/light.png'),
                    premium: require('../../assets/premium.png'),
                    temp: require('../../assets/temp.png')
                },
                {
                    title:"Bedroom 3",
                    url: require('../../assets/slider-room1.png'),
                    rooms: [
                        {
                            room: require('../../assets/single-window.png'),
                        }
                    ],
                    light: require('../../assets/light2.png'),
                    premium: require('../../assets/premium.png'),
                    temp: require('../../assets/temp.png')
                },
                {
                    title:"Bedroom 4",
                    url: require('../../assets/slider-room2.png'),
                    rooms: [
                        {
                            room: require('../../assets/room-bar.png'),
                        },
                        {
                            room: require('../../assets/room-bar.png'),
                        }
                    ],
                    light: require('../../assets/light.png'),
                    premium: require('../../assets/premium.png'),
                    temp: require('../../assets/temp.png')
                },
                {
                    title:"Bedroom 5",
                    url: require('../../assets/slider-room1.png'),
                    rooms: [
                        {
                            room: require('../../assets/room-bar.png'),
                        },
                        {
                            room: require('../../assets/room-bar.png'),
                        }
                    ],
                    light: require('../../assets/light.png'),
                    premium: require('../../assets/premium.png'),
                    temp: require('../../assets/temp.png')
                }
            ]
        };
    }

    componentDidMount () {
      this.props.getRooms();
      let roomsLength = this.props.rooms.length;
      console.log(roomsLength)
      this.setState({roomsLength});
    }

    updateRoom = () => {
      this.setState({editMode: false})
      console.log('this.room', this.props.rooms[this.state.activeIndex]);
      let room = Object.assign({}, this.props.rooms[this.state.activeIndex]);
      room.title = this.state.myText;
      console.log('---------room', room);
      this.props.updateRoom(room.id, room)
    }

    _renderTitle = () => {
        return (
            <View style={styles.nameHeader}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <View style={styles.topBackButton}>
                        <FontAwesome name="chevron-left" size={24} color="#2B7CD9" />
                    </View>
                </TouchableOpacity>
                <View style={styles.topName}>
                  {
                    this.state.editMode ?
                      <TextInput
                        placeholder={"room title"}
                        value={this.state.myText}
                        style={styles.input}
                        onChangeText={(myText) => {this.setState({myText})}}
                      />
                    :
                      <Text style={styles.titleText}>{this.state.myText}</Text>

                  }

                </View>
                <View>
                    <View style={styles.topEditButton}>
                    {
                      this.state.editMode ?
                      <TouchableOpacity onPress={() => {
                        this.updateRoom()
                      }}>
                        <MaterialIcons name="check" size={24} color="#2B7CD9" />

                      </TouchableOpacity>
                      :
                      <TouchableOpacity onPress={() => {
                        this.setState({editMode: true})
                      }}>
                        <MaterialIcons name="edit" size={24} color="#2B7CD9" />

                      </TouchableOpacity>
                    }


                    </View>
                </View>
            </View>
        );
    }

    _renderSlider = () => {
        return (
            <View style={{ height: 200, paddingTop: 20,}}>
                <Carousel
                    data={this.props.rooms}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    renderItem={this._renderItem}
                    onSnapToItem = { (index) => {
                        this.setState({activeIndex:index})
                        this.setState({myText: this.props.rooms[index].title})

                        let roomsLength = this.props.rooms.length;
                        console.log(roomsLength)
                        this.setState({roomsLength});
                    }}
                />


            </View>
        );
    }

    _renderItem = () => {
        return <Room url={_getRoomImage(this.props.rooms[this.state.activeIndex].type)} />;
    }

    _pagination = () => {
        const { activeIndex } = this.state;
        const { rooms } = this.props;
        return (
            <Pagination
                dotsLength={rooms.length}
                activeDotIndex={activeIndex}
                containerStyle={{ backgroundColor: '#FFF', }}
                dotStyle={{
                    width: 40,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: '#2B7CD9'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    _renderRoomDetails = () => {
      console.log('-------------render', this.state.roomsLength, "this.props.rooms", this.props.rooms, this.state.activeIndex);
      console.log('this.props.rooms[this.state.activeIndex]', this.props.rooms[this.state.activeIndex]);
        return <RoomDetailsComponent room={this.props.rooms[this.state.activeIndex]} />

    }

    _premium = () => {
        return (
            <PremiumComponent premium={this.props.rooms[this.state.activeIndex].premium} temp={this.props.rooms[this.state.activeIndex].temp} />
        )
    }
    render() {
        return (
                <ScrollView style={styles.container}>
                    { this._renderTitle() }
                    { this._renderSlider() }
                    { this._pagination() }
                    { this._renderRoomDetails()}
                </ScrollView>
        );
    }
}
