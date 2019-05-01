import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'flex-start',
        //alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    nano:{
        width: (windowWidth/3), height: 136
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    topView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 20,
    },
    Image: {
        width: 90, 
        height: 90
    },
    cityTemp: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingLeft: 15,
    },
    Temp: {
        color: '#277cd7' , 
        fontWeight: '300', 
        fontSize: 60
    },
    Degree: {
        color: '#277cd7' , 
        fontSize: 25, 
        marginTop: -25,
    },
    House: {
        paddingRight: 40, 
        marginLeft: -20
    },
    List: {
        paddingTop: 30,
    },
    houseTemp: {
        color: '#669de6' , 
        fontSize: 20, 
        paddingLeft: 20,
    },
    tempView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    }

});

module.exports = styles