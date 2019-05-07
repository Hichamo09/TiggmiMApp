import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Room from './roomComponent';
import styles from './main.styles';



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
            carouselItems: [
                {
                    title:"Bedroom 1",
                    url: require('../../assets/slider-room1.png')
                },
                {
                    title:"Bedroom 2",
                    url: require('../../assets/slider-room2.png')
                },
                {
                    title:"Bedroom 3",
                    url: require('../../assets/slider-room1.png')
                },
                {
                    title:"Bedroom 4",
                    url: require('../../assets/slider-room2.png')
                },
                {
                    title:"Bedroom 5",
                    url: require('../../assets/slider-room1.png')
                }
            ]
        };
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
                    <Text style={styles.titleText}>{this.state.myText}</Text>
                </View>
                <View>
                    <View style={styles.topEditButton}>
                        <MaterialIcons name="edit" size={24} color="#2B7CD9" />
                    </View>
                </View>
            </View>
        );
    }

    _renderSlider = () => {
        return (
            <View style={{ height: 200, paddingTop: 20,}}>
                <Carousel
                    data={this.state.carouselItems}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    renderItem={this._renderItem}
                    onSnapToItem = { (index) => {
                        this.setState({activeIndex:index})
                        this.setState({myText: this.state.carouselItems[index].title})
                    }}
                />
                
                
            </View>
        );
    }

    _renderItem({item,index}){
        return <Room url={item.url} />;
    }

    _pagination = () => {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
                dotsLength={carouselItems.length}
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
        return (
            <View style={styles.roomDetailsView}>
                <View style={{flex:2}}>
                    <Image
                        source={require('../../assets/room-bar.png')}
                        style={styles.window}
                    />
                </View>
                <View style={{flex:2}}>
                    <Image
                        source={require('../../assets/room-bar.png')}
                        style={styles.window}
                    />
                </View>
                <View style={{flex:1}}>
                    <Image
                        source={require('../../assets/light.png')}
                        style={styles.light}
                    />
                </View>
            </View>
        )
    }

    _premium = () => {
        return (
            <View>
                <View style={styles.premiumView}>
                    <Image
                        source={require('../../assets/premium.png')}
                        style={styles.premiumImage}
                    />
                </View>
                <View style={{alignItems: 'center',}}>
                    <Image
                        source={require('../../assets/temp.png')}
                        style={styles.temp}
                    />
                </View>
            </View>
        )
    }
    render() {
        return (
                <View style={styles.container}>
                    { this._renderTitle() }
                    { this._renderSlider() }
                    { this._pagination() }
                    { this._renderRoomDetails() }
                    { this._premium() }
                </View>
                
                
        );
    }
}
