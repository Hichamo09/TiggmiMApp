import { StyleSheet } from 'react-native'
import {Dimensions } from "react-native";


const screenWidth = Math.round(Dimensions.get('window').width);

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
    paddingTop: 10,
    // flexDirection: "row"
  },
  blockRow: {
    flexDirection: "row"
  },
  blockTitle: {
    fontSize: 20,
    color: "black",
    marginLeft: 30
  },
  blockSubTitle: {
    fontSize: 18,
    color: "#2587af",
  },
  time: {
    backgroundColor: "#2587af",
    fontSize: 18,
    width: 50,
    textAlign: "center",
    margin: 2,
    color: "#fff"
  },
  roomBlock: {
    marginLeft: 5,
    flexWrap: 'wrap'
  },
  roomTitle: {
    fontSize: 17,
    color: "#2587af",
  },
  roomItems: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth
  },
  itemTitle: {
    flex: 2,
  },
  itemController: {
    flex: 1,
    backgroundColor: "#2587af",
    padding: 3,
    borderRadius: 5,
    height: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  itemStartTime: {
    flex: 1
  },
  itemEndTime: {
    flex: 1
  },
  smallText: {
    textAlign: "center",
    fontSize: 12,
    position: "absolute",
    left: "25%",
    bottom: -12
  }
});


export default styles;
