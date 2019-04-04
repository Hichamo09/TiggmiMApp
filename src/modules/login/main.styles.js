import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'white',
     alignItems: 'center',
    },
    logoImage: {
     width: windowWidth,
     height : 450
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
      marginTop: 40,
      backgroundColor: '#2b7cd9',
      borderRadius: 24,
      paddingHorizontal: 22,
      paddingVertical: 10
    },
    continueButtonText:{
     color: 'white',
     fontSize: 16,
     fontWeight: '500'
    }
})

module.exports = styles
