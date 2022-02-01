import React from "react";
import { Text } from "react-native";
import AppNavigator from "./navigation/AppNavigation";
import AppLoading from "expo-app-loading";

import { useFonts, Neucha_400Regular } from "@expo-google-fonts/neucha";

export default function App() {
  let [fontsLoaded, err] = useFonts({
    Neucha_400Regular,
    "Neucha-Regular": require("./assets/fonts/Neucha/Neucha-Regular.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  else return <AppNavigator />;
}
