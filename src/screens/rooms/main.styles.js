import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
    },
    nameHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topBackButton: {
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    topEditButton: {
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    topName: {
        alignItems: 'center',
        paddingLeft: -20,
        marginTop: -5,
    },
    titleText: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: -20,
        color: '#135CB3',
    },
    roomDetailsView: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    window: {
        width: (windowWidth/5)*2, 
        height: 180, 
        resizeMode: 'stretch'
    },
    window2: {
        width: (windowWidth/5)*4, 
        height: 180, 
        resizeMode: 'stretch'
    },
    light: {
        width: (windowWidth/5), 
        height: 180, 
        resizeMode: 'stretch'
    },
    premiumView: {
        alignItems: 'flex-start', 
        paddingLeft: 40,
    },
    premiumImage: {
        width: 100, 
        height: 26, 
        resizeMode: 'stretch'
    },
    temp: {
        width: windowWidth-40, 
        height: 60, 
        resizeMode: 'stretch'
    }
});

module.exports = styles;