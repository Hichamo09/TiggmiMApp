import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 14,
    },
    titleText:{
        color: '#148ac8',
        fontWeight: '600',
        fontSize: 32,
    },
    Image: {
        width: 90, 
        height: 90
    },
    segment: {
        paddingTop: 20, 
        paddingLeft: 10,
    },
    List: {
        paddingTop: 10,
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
    },
    

});

module.exports = styles