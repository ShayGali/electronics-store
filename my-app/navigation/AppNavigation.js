import React from "react";

// NavigationContainer - gives the root navigator.
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

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
          options={({ route , navigation }) => ({
            title: "Amount of products: " + route.params.categoryAmount, // the amount of products will be displayed on thw top of the screen
            headerRight: () => (
            <Icon onPress={() => 
                navigation.navigate("Cart", {CartScreen})
              } name="cart" style={{ fontSize: 35, margin: 10 }}
            />
          ),
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductsDetailScreen}
          options={({ route, navigation }) => ({
            title: route.params.headerTitle,
            headerRight: () => (
            <Icon onPress={() => 
                navigation.navigate("Cart", {CartScreen})
              } name="cart" style={{ fontSize: 35, margin: 10 }}
            />
          ),
          })}
        />
        <Stack.Screen name="Cart" component={CartScreen} 
        options={({ navigation }) => ({
            headerRight: () => (
            <Icon onPress={() => 
                navigation.navigate("HomeScreen", {HomeScreen})
              } name="home" style={{ fontSize: 35, margin: 10 }}
            />
          ),
          })}
          />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen
          name="Ordered"
          component={OrderedScreen}
          options={({ navigation }) => ({ headerLeft: () => null ,
            headerRight: () => (
            <Icon onPress={() => 
                navigation.navigate("HomeScreen", {HomeScreen})
              } name="home" style={{ fontSize: 35, margin: 10 }}
            />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
