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

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={({ route }) => ({
            title: "Amount of products: " + route.params.categoryAmount,
          })}
        />
        <Stack.Screen name="ProductDetail" component={ProductsDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Ordered" component={OrderedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}