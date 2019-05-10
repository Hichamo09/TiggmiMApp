import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        
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
    },
    notificationHeader:{
        flexDirection: 'row', 
        justifyContent:'space-between', 
        paddingHorizontal: 5
    },
    notificationMsg: {
        fontWeight: '400', 
        fontSize: 20, 
        color:'#3d4e62'
    },
    notificationType: {
        fontWeight: 'bold', 
        fontSize: 20, 
        color: '#2d3645'
    },
    notificationDetail: {
        paddingHorizontal: 5
    }
});

module.exports = styles