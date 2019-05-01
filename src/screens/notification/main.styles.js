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
    },
    List: {
        flex:1,
        padding: 10,
        flexDirection: 'column',
    },
    notification: { 
        backgroundColor: '#bfd6f5', 
        width: windowWidth-30, 
        padding: 10, 
        margin:10, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#bfd6f5',
    }
});

module.exports = styles