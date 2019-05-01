import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

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
    itemName: {
        color:'#205ea5', 
        fontWeight: '400', 
        fontSize: 18
    },
    itemRole: {
        color:'#000000', 
        fontWeight: 'bold', 
        fontSize: 16
    },
    listview: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 200, 
        borderColor: '#d6d6d6', 
        borderWidth: 1, 
        width: (windowWidth/2) + 2, 
        marginLeft: -1
    },
    listImage: { 
        width: 90, 
        height: 90 
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: -100,
        backgroundColor:'#145bb4'
    }
});

module.exports = styles