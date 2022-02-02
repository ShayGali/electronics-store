import React from "react";
import AppNavigator from "./navigation/AppNavigation";
import AppLoading from "expo-app-loading";

import { useFonts, Neucha_400Regular } from "@expo-google-fonts/neucha";

export default function App() {
  // load the fonts
  let [fontsLoaded, err] = useFonts({
    Neucha_400Regular,
    "Neucha-Regular": require("./assets/fonts/Neucha/Neucha-Regular.ttf"),
  });

  // if the font is not loaded, then <AppLoading> will be displayed
  if (!fontsLoaded) return <AppLoading />;
  // when the font is loaded, the app will be display
  else return <AppNavigator />;
}
