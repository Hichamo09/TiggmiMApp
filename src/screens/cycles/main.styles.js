import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    titleText:{
        color: '#148ac8',
        fontWeight: '600',
        fontSize: 32,
        paddingBottom: 20,
    },
    cycle: { 
        backgroundColor: '#fff', 
        width: windowWidth/2-10, 
        padding: 10,
        margin: 2,
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#999999',
    },
    singleCycle: {
        paddingHorizontal: 5, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    cycleText: {
        fontWeight: '400', 
        fontSize: 20, 
        color: '#3b82cc'
    }
});

module.exports = styles