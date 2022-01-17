import React, { useState, createContext } from "react";
import AppNavigator from "./navigation/AppNavigation";
import { StyleSheet, Text, View, Button } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";

export default function App() {
  let [fontsLoaded, err] = useFonts({
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
    "Oswald-VariableFont_wght": require("./assets/fonts/Oswald,Reggae_One/Oswald/Oswald-VariableFont_wght.ttf"),
    "ReggaeOne-Regular": require("./assets/fonts/Oswald,Reggae_One/Reggae_One/ReggaeOne-Regular.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;
  else return <AppNavigator />;
}
