import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createContext, useContext } from "react";
import { PRODUCTS } from "../data/data";

// const Context = createContext(PRODUCTS[0]);

export default function CartScreen ({ route, navigation }) {
  const value = route.params.productName
  return (
    <View>
        <Text>Cart</Text>
        {/* <Context.Provider value={value}>
          <MyProduct/>
        </Context.Provider> */}
        <Button
        title="Go to Payment..."
        onPress={() => navigation.navigate("Payment")}
      />
    </View>
  );
}

// function MyProduct() {
//   const value = useContext(Context);
//   return <span>{value}</span>;
// }