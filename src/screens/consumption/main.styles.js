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
      flex: 1
  },
  titleText: {
      fontSize: 20,
      marginBottom: 5,
      marginLeft: -20,
      color: '#135CB3',
  },
  chartContainer: {
    padding: 5,
    flexDirection: "row",
    height: 300,
    marginBottom: 100
  },
  chart: {
    flex: 2,
  },
  chartLabel: {
    flex: 1
  }
})


export default styles
