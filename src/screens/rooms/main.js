import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  LineChart,
} from 'react-native-chart-kit';

import Room from './roomComponent';
import RoomDetailsComponent from './roomDetailsComponent';
import PremiumComponent from './PremiumComponent';
import styles from './main.styles';
import { _getRoomImage } from '../../utils/_helpers'

import { Hours, Days, Months } from '../../config/chartData';



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
            myText: '',
            gestureName: 'none',
            backgroundColor: '#fff',
            activeIndex: 0,
            roomsLength: 2,
            showDropdown: false,
            chartLabels: Days,
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
      if (this.props.navigation.getParam('room_id')) {
        return this.setState({activeIndex: this.props.navigation.getParam('room_id')}, () => {
          this.setState({myText: this.props.rooms[this.state.activeIndex].title})
        })
      }
      this.setState({myText: this.props.rooms[this.state.activeIndex].title})

    }

    updateRoom = () => {
      this.setState({editMode: false})
      let room = Object.assign({}, this.props.rooms[this.state.activeIndex]);
      room.title = this.state.myText;
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
      console.log('this.State.activeIndex', this.state.activeIndex);
        return (
            <View style={{ height: 200, paddingTop: 20,}}>
                <Carousel
                    data={this.props.rooms}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    renderItem={this._renderItem}
                    firstItem={this.props.navigation.getParam('room_id')}
                    onSnapToItem = { (index) => {
                        this.setState({activeIndex:index})
                        this.setState({myText: this.props.rooms[index].title})

                        let roomsLength = this.props.rooms.length;
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
        return <RoomDetailsComponent rooms={this.props.rooms} room={this.props.rooms[this.state.activeIndex]} />

    }

    _premium = () => {
        return (
            <PremiumComponent premium={this.props.rooms[this.state.activeIndex].premium} temp={this.props.rooms[this.state.activeIndex].temp} />
        )
    }

    _renderCharts = () => {
      return (
        <View style={styles.chartContainer}>
          {
            this.state.showDropdown ?
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => {
                this.setState({showDropdown: false})
              }}>
                  <Image style={styles.detailsIconUp} source={require('../../assets/details_iconUp.png')}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                this.setState({chartLabels: Hours})
              }}>
                  <Text style={styles.dropdownText}>Per hour</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.setState({chartLabels: Days})
              }}>
                <Text style={styles.dropdownText}>Per day</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.setState({chartLabels: Months})
              }}>
                <Text style={styles.dropdownText}>Per month</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={styles.dropdownText}>Per year</Text>
              </TouchableOpacity>

            </View>
            :
            <View style={styles.detailsIconContainer}>
              <TouchableOpacity style={{alignItems: "flex-end"}} onPress={() => {
                this.setState({showDropdown: true})
              }}>
                <Image style={styles.detailsIconDown} source={require('../../assets/details_icon.png')}/>
              </TouchableOpacity>
            </View>
          }


          <View style={styles.chart}>
          <View style={styles.charTitleContainer}>
            <Text style={styles.charTitle}>kWh</Text>
          </View>
          <LineChart
            data={{
              labels: this.state.chartLabels,
              datasets: [{
                data: [
                  33, 32, 38, 29, 39, 30, 42
                ]
              }]
            }}
            width={Dimensions.get('window').width - 50} // from react-native
            height={200}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(19, 92, 179, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              borderRadius: 16,
              flex: 6
            }}
          />
          </View>
          <View style={styles.chartLabel}>

          </View>

        </View>
      )
    }

    render() {
        return (
                <ScrollView style={styles.container}>
                    { this._renderTitle() }
                    { this._renderSlider() }
                    { this._pagination() }
                    { this._renderRoomDetails() }
                    { this._renderCharts() }
                </ScrollView>
        );
    }
}
