import React from "react";
import AppNavigator from "./navigation/AppNavigation";
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import AppLoading from "expo-app-loading";
// import {
//   useFonts,
//   Oswald_200ExtraLight,
//   Oswald_300Light,
//   Oswald_400Regular,
//   Oswald_500Medium,
//   Oswald_600SemiBold,
//   Oswald_700Bold,
// } from "@expo-google-fonts/oswald";
import {
  useFonts,
  Neucha_400Regular,
} from "@expo-google-fonts/neucha";

/*
in terminal - 
expo install expo font
expo install expo-app-loading
*/

//  const fetchFonts = () => {
//    Font.loadAsync({
//      "oswald": require("./assets/fonts/Oswald,Reggae_One/Oswald/Oswald-VariableFont_wght.ttf"),
//      "reggae-One": require("./assets/fonts/Oswald,Reggae_One/Reggae_One/ReggaeOne-Regular.ttf"),
//      "dongle": require("./assets/fonts/Dongle/Dongle-Regular.ttf"),
//      "outfit": require("./assets/fonts/outfit/Outfit-VariableFont_wght.ttf"),
//    });
//  };

export default function App() {
  let [fontsLoaded, err] = useFonts({
    // Oswald_200ExtraLight,
    // Oswald_300Light,
    // Oswald_400Regular,
    // Oswald_500Medium,
    // Oswald_600SemiBold,
    // Oswald_700Bold,
    Neucha_400Regular,
    // "Oswald-VariableFont_wght": require("./assets/fonts/Oswald,Reggae_One/Oswald/Oswald-VariableFont_wght.ttf"),
    // "ReggaeOne-Regular": require("./assets/fonts/Oswald,Reggae_One/Reggae_One/ReggaeOne-Regular.ttf"),
    "Neucha-Regular": require("./assets/fonts/Neucha/Neucha-Regular.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;
  else return <AppNavigator />;

  // const[dataLoaded, setDataLoaded] = useState(false);

  // if(!dataLoaded){
  //   return(
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={() => console.log(err)}
  //       />
  //   );
  // }

  // return (
  //   // <View>
  //     <AppNavigator/>
  //     /* <Header myheader="Electrics store" />
  //   </View> */

  // );
}
