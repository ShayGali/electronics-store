import { StyleSheet } from "react-native";

const inputViewSize = 350;
const inputLabelSize = inputViewSize / 2;
const font = "oswald";

export default StyleSheet.create({
  //Main body
  BG: {
    flex: 1,
    // backgroundColor: "#F8F9F9"
    backgroundColor: "#1C2833",
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
    fontSize: 27,
    // color: "#48C9B0",
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 3,
    // fontFamily: "oswald,reggae-One",
    fontFamily: font,
    // fontWeight: "bold",
    margin: 5,
    elevation: 3, // for android - to see the shadow
  },

  //BG img
  BGImg: {
    height: 145,
    backgroundColor: "#85C1E9",
    borderRadius: 25,
  },

  // Product Page
  mainHL: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 40,
    // fontFamily: "oswald,reggae-One",
    fontFamily: font,
    color: "beige",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 3,
    // fontWeight: "bold",
  },

  headLines: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 40,
    color: "#fff",
    // fontFamily: "oswald,reggae-One",
    fontFamily: font,
  },

  regText: {
    fontSize: 23,
    color: "cornsilk",
    // fontFamily: "oswald,reggae-One",
    fontFamily: font,
  },
  prodImg: {
    marginTop: 30,
    marginBottom: 20,
    width: 250,
    height: 250,
    borderRadius: 25,
    borderWidth: 6,
    borderColor: "#48C9B0",
    backgroundColor: "white",
  },
  boxFrame: {
    borderWidth: 4,
    borderColor: "#48C9B0",
    borderRadius: 20,
    margin: 5,
    padding: 20,
    flexWrap: "wrap",
  },

  viewProductImg: {
    alignItems: "center",
  },

  AddToCart: {
    backgroundColor: "#48C9B0",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 7,
    elevation: 3, // for android - to see the shadow
  },

  AddToCartText: {
    color: "black",
    fontSize: 30,
    fontFamily: font,
    // fontFamily: "oswald,reggae-One",
    // fontWeight: "bold",
    marginLeft: 15,
    textShadowColor: "black",
    // textShadowOffset: { width: 3, height: 0 },
    // textShadowRadius: 3,
  },
  CatproductsTitle: {
    color: "white",
    fontSize: 23,
    fontFamily: font,
    // fontFamily: "oswald,reggae-One",
    // fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    margin: 5,
  },

  input: {
    // איפה שממש מכניסים
    height: 30,
    width: inputLabelSize,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: inputViewSize * 0.25,
  },
  inputView: {
    marginTop: 5,
    width: inputViewSize,
    justifyContent: "center",
    padding: 3,
  },
  textInput: {
    // fontFamily: "oswald,reggae-One",
    fontFamily: font,
    color: "white",
    fontSize: 18,
    marginLeft: inputViewSize * 0.25,
    marginRight: inputViewSize * 0.25,
  },
  button: {
    marginTop: 20,
    width: 150,
  },
  inputError: {
    borderColor: "#ff0000",
  },
  errorMsg: {
    color: "#ff0000",
    marginLeft: inputViewSize * 0.25,
    marginRight: inputViewSize * 0.25,
  },
});
