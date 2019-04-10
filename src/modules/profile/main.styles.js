import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  nameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBackButton: {
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  topName: {
    alignItems: 'center',
    paddingLeft: -40,
    marginTop: -5,
  },
  centerImage: {
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    marginBottom: 5,
    color: '#135CB3',
  },
  logoImage: {
    width: windowWidth - 60,
    height: 240,
  },
  generalFlow: {
    flexDirection: 'row',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkStyle: {
    width: 32,
    height: 32,
  },
  generalIcon: {
    paddingRight: 10,
  },
  callStyle: {
    width: 40,
    height: 40,
  },
  generalText: {
    fontSize: 18,
  },
  generalText2: {
    fontSize: 18,
    color: '#2B7CD9',
    marginTop: 3,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: 'red',
    margin: 3,
    width: 300,
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 6, // Android
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  accessView:{
    paddingTop: 10
  },
  accessViewLabel: {
    paddingLeft: 10, 
    marginLeft: 20, 
    color: '#2B7CD9', 
    fontSize: 20, 
    fontWeight: '300'
  },
  rooms: { 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  cycles: { 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

module.exports = styles;
