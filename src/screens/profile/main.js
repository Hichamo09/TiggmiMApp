import React, { Component } from 'react';
import { View, Image, Text, Button, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import RoomCard from '../../components/RoomCard'
import { getRoomDetails } from '../../utils/_helpers'


import image from '../../assets/image';
import access from '../../assets/access';
import styles from './main.styles';



const windowWidth = Dimensions.get('window').width;

const cycledata = ['7am Routine', 'Week-end'];

export default class Profile extends Component {
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
          <TouchableOpacity onPress={() => navigation.navigate('AddMember', {member: navigation.state.params.member})}>
            <View style={{marginRight:12, width: 36, height: 36, backgroundColor:'#fff', alignItems: 'center', justifyContent: 'center',}}>
                <MaterialIcons name='edit' size={30} color='#3b82cc'/>
            </View>
          </TouchableOpacity>

        ),
    });


    constructor(props) {
        super(props);
        this.state = {
          member: this.props.navigation.state.params.member,
          rooms: []
        }
    }

    componentDidMount () {
      let rooms = getRoomDetails(this.props.rooms, this.state.member.rooms);
      this.setState({rooms: rooms})
    }

    render() {
      const {
        full_name,
        phone_number,
        gender,
        role
      } = this.state.member
        return (
        <ScrollView style={styles.container}>
            <View style={styles.nameHeader}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View style={styles.topBackButton}>
                    <FontAwesome name="chevron-left" size={24} color="#2B7CD9" />
                </View>
            </TouchableOpacity>
            <View style={styles.topName}>
                <Text style={styles.titleText}>{full_name}</Text>
            </View>
            <View>
            </View>
            </View>
            <View style={styles.centerImage}>
            <Image
                style={styles.logoImage}
                source={{uri: image.profile}}
                resizeMode="contain"
            />
            </View>
            <View style={styles.generalFlow}>
            <View style={styles.generalIcon}>
                <FontAwesome name="check-circle" size={32} color="#2B7CD9" />
            </View>
            <View>
                <Text style={styles.generalText}>{role}</Text>
            </View>
            </View>
            <View style={styles.generalFlow}>
            <View style={styles.generalIcon}>
                <Ionicons name="ios-call" size={34} color="#2B7CD9" />
            </View>
            <View>
                <Text style={styles.generalText2}>{phone_number}</Text>
            </View>
            </View>
            <View style={styles.accessView}>
                <Text style={styles.accessViewLabel}>Access:</Text>
                <View style={styles.rooms}>
                    <FlatList
                        data={this.state.rooms}
                        numColumns={2}
                        renderItem={({item, index}) => (
                          <RoomCard
                            name={item.title}
                            type={item.type}
                            id={item.id}
                          />
                        )}
                    />
                </View>
            </View>
            <View style={styles.accessView}>
                <Text style={styles.accessViewLabel}>Cycles:</Text>
                <View style={styles.cycles}>
                <FlatList
                    data={cycledata}
                    numColumns={2}
                    renderItem={({item}) => (
                    <View style={{padding:20}}>
                        <TouchableOpacity style={{
                            shadowColor: 'rgba(0,0,0, .4)', // IOS
                            shadowOffset: { height: 1, width: 1 }, // IOS
                            shadowOpacity: 1, // IOS
                            shadowRadius: 1, //IOS
                            backgroundColor: '#fff',
                            elevation: 6, // Android
                            height: 50,
                            paddingHorizontal: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            borderRadius:10,
                        }}>
                        <Text style={{fontSize: 14, color: '#2B7CD9'}}>{item}</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                />
                </View>
            </View>
        </ScrollView>
        );
    }
}
