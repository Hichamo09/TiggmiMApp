import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import {
  LineChart,
} from 'react-native-chart-kit'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './main.styles'
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Room from '../rooms/roomComponent';
import PremiumComponent from '../rooms/PremiumComponent';

import { _getRoomImage } from '../../utils/_helpers';
import { Hours, Days, Months } from '../../config/chartData';


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
          roomsLength: 2,
          showDropdown: false,
          chartLabels: Days
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
            </View>
        );
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
                    { this._renderCharts()}
                </ScrollView>
        );
    }


}
