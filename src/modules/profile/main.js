import React, { Component } from 'react';
import { View, Image, Text, Button, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
//import { Ionicons, FontAwesome } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import image from '../../assets/image';
import access from '../../assets/access';
import styles from './main.styles';
import { __assign } from 'tslib';


const windowWidth = Dimensions.get('window').width;

const cycledata = ['7am Routine', 'Week-end'];

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.nameHeader}>
          <View style={styles.topBackButton}>
            <FontAwesome name="chevron-left" size={24} color="#2B7CD9" />
          </View>
          <View style={styles.topName}>
            <Text style={styles.titleText}>Lamine Soulami</Text>
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
            <Text style={styles.generalText}>Admin</Text>
          </View>
        </View>
        <View style={styles.generalFlow}>
          <View style={styles.generalIcon}>
            <Ionicons name="ios-call" size={34} color="#2B7CD9" />
          </View>
          <View>
            <Text style={styles.generalText2}>0612345678</Text>
          </View>
        </View>
        <View style={styles.accessView}>
            <Text style={styles.accessViewLabel}>{__('Access:')}</Text>
            <View style={styles.rooms}>
              <FlatList
                data={access}
                numColumns={2}
                renderItem={({item}) => (
                  <Image
                    style={{ width: (windowWidth/2)-30, height: 60 }}
                    source={{uri: item.room}}
                    resizeMode="contain"
                  />
                )}
              />
            </View>
        </View>
        <View style={styles.accessView}>
            <Text style={styles.accessViewLabel}>{__('Cycles:')}</Text>
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
