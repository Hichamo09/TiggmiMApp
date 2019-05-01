import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'flex-start',
        //alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 30,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    nameHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topBackButton: {
        alignItems: 'flex-start',
        paddingLeft: 30,
    },
    titleText: {
        color: '#2587af',
        fontWeight: '600',
        fontSize: 24,
    },
    topName: {
        alignItems: 'center',
        marginTop: -10,
    },
    topView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 20,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b9dcef',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        borderColor: '#b9dcef',
        borderWidth: 1,
        paddingTop: 5,
        marginTop: 5
    },
    searchIcon: {
        padding: 5,
    },
    input: {
        flex: 1,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        backgroundColor: '#b9dcef',
        color: '#FFF',
        fontSize: 14
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
        paddingTop: 10,
        paddingBottom: 100,
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