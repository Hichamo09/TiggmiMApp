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
        paddingTop: 20,
        paddingHorizontal: 5,
        margin: 2,
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#999999',
    }
});

module.exports = styles