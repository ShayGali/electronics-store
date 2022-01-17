import React from "react";
import { Text, View, Button } from "react-native";
import { PRODUCTS, cart } from "../data/data";

export default function CartScreen({ navigation }) {
  return (
    <View>
      <Text>Cart</Text>
      <Text>{cart.map((product) => product.id)}</Text>
      <Button
        title="Go to Payment..."
        onPress={() => navigation.navigate("Payment")}
      />
    </View>
  );
}
