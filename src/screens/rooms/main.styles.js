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
        width: "100%",
        alignItems: "center"
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
    },
    input: {
        width: 100,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        backgroundColor: '#b9dcef',
        fontSize: 18,
        textAlign: "center"
    },
    shutterContainer: {
      height: 110,
      backgroundColor: "#ccc",
      margin: 5,
      flex: 1,
      alignItems: "center"
    },
    shutterValue: {
      width: "100%",
      height: 20,
      backgroundColor: "#135CB3",
      position: "absolute",
      bottom: 0,
      zIndex: 0
    },
    lightContainer: {
      height: 120,
      margin: 5,
      width: 50,
      alignItems: "center"
    },
    lightValue: {
      width: "100%",
      height: 50,
      backgroundColor: "#135CB3",
      position: "absolute",
      bottom: 0,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
    },
    chartContainer: {
      marginTop: 20,
      padding: 5,
      flexDirection: "column",
      marginBottom: 100
    },
    chart: {
      flex: 2,
      flexDirection: "row"
    },
    charTitleContainer: {
      width: 32,
      alignItems: "flex-start",
      justifyContent: "center",
      height: 200
    },
    charTitle: {
      transform: [{ rotate: '270deg'}],
      fontSize: 15,
      color: "#135CB3",
      fontWeight: "700"
    },
    detailsIconContainer: {
      width: "100%",
      right: 0,
      top: 0,
      alignItems: "flex-end",
    },
    detailsIconDown: {
      width: 15,
      height: 15,
      marginRight: 15
    },
    detailsIconUp: {
      right: 3,
      top: 3,
      width: 15,
      height: 15,
      marginLeft: 65
    },
    dropdown: {
      width: 100,
      height: 120,
      borderWidth: 5,
      borderRadius: 10,
      position: "absolute",
      right: 0,
      top: 10,
      borderColor: "#135CB3",
      zIndex: 1,
      backgroundColor: "#fff",
      padding: 5,
      paddingTop: 10,
    },
    dropdownText: {
      fontSize: 15,
      color: "#135CB3",
      fontWeight: "800"
    }
});

module.exports = styles;
