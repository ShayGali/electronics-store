import React, { useState } from "react";
import AppNavigator from "./navigation/AppNavigation";
import AppLoading from "expo-app-loading";

import { useFonts, Neucha_400Regular } from "@expo-google-fonts/neucha";

export const Context = React.createContext();

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    cart.find((i) => item.product.id == i.product.id).numOfOrders--;
  };

  const emptyTheCart = () => {
    setCart([]);
  };

  const removeProductWithZeroOrderers = () => {
    setCart(cart.filter((product) => product.numOfOrders > 0));
  };

  // load the fonts
  let [fontsLoaded, err] = useFonts({
    Neucha_400Regular,
    "Neucha-Regular": require("./assets/fonts/Neucha/Neucha-Regular.ttf"),
  });

  // if the font is not loaded, then <AppLoading> will be displayed
  if (!fontsLoaded) return <AppLoading />;
  // when the font is loaded, the app will be display
  else
    return (
      <Context.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          emptyTheCart,
          removeProductWithZeroOrderers,
        }}
      >
        <AppNavigator />
      </Context.Provider>
    );
}
