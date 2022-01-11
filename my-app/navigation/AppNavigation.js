import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// NavigationContainer - gives the root navigator.
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens:
import CategoriesScreen from "../screens/ElectricalProductCategories";
import ProductsScreen from "../screens/ProductsPerCategory";
import ProductsDetailScreen from "../screens/ProductDetail";
import CartScreen from "../screens/CartScreen";
import PaymentScreen from "../screens/PaymentScreen";
import OrderedScreen from "../screens/OrderedScreen";



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="ProductDetail" component={ProductsDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Ordered" component={OrderedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
