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
      textAlign: "center"
  },

  titleInput: {
    width: 200,
    height: 40,
    fontSize: 16,
    backgroundColor: "#B9DCEF",
    borderRadius: 5,
    textAlign: "center"
  },
  block: {
    marginTop: 10,
    paddingTop: 10
  },
  blockTitle: {
    fontSize: 20,
    color: "black"
  }
});


export default styles;
