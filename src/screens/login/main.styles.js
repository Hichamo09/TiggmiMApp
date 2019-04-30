import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
     backgroundColor: 'white',
     alignItems: 'center',
    },
    logoImage: {
     width: windowWidth,
     height : 300
    },
    headerText: {
     color: '#135cb3',
     fontSize: 25,
     fontWeight: '500',
     marginBottom: 5
    },
    descriptionText: {
     fontSize: 16,
     marginBottom: 20
    },
    phoneNumberContainer: {
     flexDirection: 'row',
     paddingHorizontal: 16,
     marginBottom: 20,
    },
    phoneNumberText: {
     borderColor: '#8c8c8c',
     borderBottomWidth: 1,
     fontSize: 16,
     minWidth: 180
    },
    continueButtonContainer: {
      marginTop: 20,
      paddingHorizontal: 22,
      paddingVertical: 10,
      width: 100,
      alignItems: "center",
    },
    continueButton:{
      backgroundColor: '#2b7cd9',
      borderRadius: 24,
      fontSize: 16,
      paddingTop: 12,
      minWidth: 100,
      color: "#fff",
      textAlign: "center",
      justifyContent: "center"
    },
    errorMessageText: {
      marginTop: 10,
      color: "red",
      fontSize: 18
    }
})

module.exports = styles
