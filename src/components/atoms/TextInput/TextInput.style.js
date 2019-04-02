import { StyleSheet } from 'react-native'

export const styleVariables = {
  placeholderColor: '#73737d'
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
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
