import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function CartScreen ({ route, navigation }) {
  return (
    <View>
        <Text>Cart</Text>
        <Button
        title="Go to Payment..."
        onPress={() => navigation.navigate("Payment")}
      />
    </View>
  );
}