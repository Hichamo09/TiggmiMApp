import { StyleSheet } from 'react-native'

export const styleVariables = {
  placeholderColor: '#73737d'
}

const styles = StyleSheet.create({
  formField: {
    height: 30,
    color: 'black',
    fontSize: 12,
    paddingVertical: 3
  },
  rightButtonContainer: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center'
  }
})

export default styles
