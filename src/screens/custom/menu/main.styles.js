import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#155db2',
        height: windowHeight-10,
    },
    headerContainer: {
        height: 120,
        paddingRight: 20,
        paddingTop: 30,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: {
        paddingTop: 80,
        backgroundColor: '#155db2'
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        marginBottom: 20,
    },
    screenTextStyle:{
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 20,
        color: 'white'

    },

});

module.exports = styles