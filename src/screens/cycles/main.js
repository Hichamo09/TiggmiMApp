import React, { Component } from 'react'
import {
    View, Dimensions, Text, FlatList, ScrollView, TouchableOpacity
} from 'react-native'
import styles from './main.styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;


export default class Cycles extends Component {
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
            <View style={{marginRight:12, width: 36, height: 36, backgroundColor:'#3785cd', alignItems: 'center', justifyContent: 'center', borderRadius:20, borderWidth: 1, borderColor: '#3785cd',}}>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('AddCycle')
                }}>
                  <FontAwesome name='plus' size={28} color='#ffffff'/>
                </TouchableOpacity>
            </View>
        ),
    });

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
      this.props.getCycle()
    }

    renderDetail = (item) => {
        return (
            <View style={styles.cycle}>
                <View style={styles.singleCycle}>
                  <TouchableOpacity>
                    <Text style={styles.cycleText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
            </View>
        )
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Cycles</Text>
                    <View style={styles.List}>
                        <FlatList
                            data={this.props.cycles}
                            numColumns={2}
                            renderItem={({item, index}) => (
                                this.renderDetail(item)
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
