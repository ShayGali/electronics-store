import React from "react";

// NavigationContainer - gives the root navigator.
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens:
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProductsDetailScreen from "../screens/ProductDetail";
import CartScreen from "../screens/CartScreen";
import PaymentScreen from "../screens/PaymentScreen";
import OrderedScreen from "../screens/OrderedScreen";

// creat a new stack navigator
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* the default navigation will be the home screen*/}
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={({ route }) => ({
            title: "Amount of products: " + route.params.categoryAmount, // the amount of products will be displayed on thw top of the screen
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductsDetailScreen}
          options={({ route }) => ({
            title: route.params.headerTitle,
          })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen
          name="Ordered"
          component={OrderedScreen}
          options={() => ({ headerLeft: () => null })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
