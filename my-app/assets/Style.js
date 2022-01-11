import { StyleSheet } from "react-native";

export default StyleSheet.create({

  //Main body
  BG: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // fontFam:{
  //   fontFamily: ''
  // }


  //GridComponent
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  gridContainer: {
    flex: 1,
    borderRadius: 25,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
    elevation: 3, // for android - to see the shadow
    
  },
  titles: {
    fontSize: 28,
    color: "white",
    textShadowColor: "#222",
    textShadowOffset: { width: 2, height: 3 },
    margin: 10,
  },


  //BG img
  BGImg: {
    height: 145,
  },


  // Product Page
  mainHL: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 62,
    color: 'beige',
    textShadowColor: 'brown',
    textShadowOffset: { width: 2, height: 3 }
  },

  headLines: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 42,
    color: '#fff',
    textShadowColor: 'red',
    textShadowOffset: { width: 1, height: 2 }
  },

  regText: {
    fontSize: 28,
    color: 'cornsilk',
  },
  prodImg: {
    marginTop: 30,
    marginBottom: 20,
    width: 250,
    height: 250,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "bisque"
  },
  boxFrame: {
    borderWidth: 1,
    borderColor: 'bisque',
    borderRadius: 20,
    margin:10,
    padding:20,
    flexWrap: "wrap",
  },




});