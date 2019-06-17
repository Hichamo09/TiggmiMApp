import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './main.styles'
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Room from '../rooms/roomComponent';
import PremiumComponent from '../rooms/PremiumComponent';

import { _getRoomImage } from '../../utils/_helpers'


const windowWidth = Dimensions.get('window').width;

export default class Consumption extends Component {

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
    headerRight: (
      <View style={{marginRight:12, width: 36, height: 36, backgroundColor:'#55bf64', alignItems: 'center', justifyContent: 'center',}}>
        <Feather name='lock' size={28} color='#ffffff'/>
      </View>
    ),
  });

  constructor(props) {
      super(props);
      this.state = {
          myText: '',
          gestureName: 'none',
          backgroundColor: '#fff',
          activeIndex: 0,
          roomsLength: 2
      };
  }

    componentDidMount () {
      if (this.props.navigation.getParam('room_id')) {
        console.log('rooom id is here', this.props.navigation.getParam('room_id'));
        return this.setState({activeIndex: this.props.navigation.getParam('room_id')}, () => {
          this.setState({myText: this.props.rooms[this.state.activeIndex].title})
        })
      }
      this.setState({myText: this.props.rooms[this.state.activeIndex].title})

    }

    _renderTitle = () => {
      console.log('styles', styles);
        return (
            <View style={styles.nameHeader}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <View style={styles.topBackButton}>
                        <FontAwesome name="chevron-left" size={24} color="#2B7CD9" />
                    </View>
                </TouchableOpacity>
                <View style={styles.topName}>
                    <Text style={styles.titleText}>{this.state.myText}</Text>
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


    _renderCharts = () => {
      return (
        <View style={styles.chartContainer}>
          <View style={styles.chart}>
          <LineChart
            data={{
              labels: ["00:00", '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
              datasets: [{
                data: [
                  20, 30, 33, 40,
                  20, 30, 33, 40,
                  20, 30, 33, 40,
                  20, 30, 33, 40,
                  20, 30, 33, 40,
                  20, 30, 33, 40,
                ]
              }]
            }}
            width={Dimensions.get('window').width} // from react-native
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
              marginVertical: 10,
              borderRadius: 16
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
                    { this._renderCharts()}
                </ScrollView>
        );
    }


}
