import React, { useState } from "react";
import AppNavigator from "./navigation/AppNavigation";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font"; // import font
import AppLoading from "expo-app-loading";

/*
in terminal - 
expo install expo font
expo install expo-app-loading
*/

 const fetchFonts = () => {
   Font.loadAsync({
     "oswald": require("./assets/fonts/Oswald,Reggae_One/Oswald/Oswald-VariableFont_wght.ttf"),
     "reggae-One": require("./assets/fonts/Oswald,Reggae_One/Reggae_One/ReggaeOne-Regular.ttf"),
   });
 };

export default function App() {
  const[dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log(err)}
        />
    );
  }

  return (
    <AppNavigator/>
  );
}