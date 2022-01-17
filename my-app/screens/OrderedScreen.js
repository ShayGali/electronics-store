import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Cart } from "../App";

export default function OrderedScreen({ route, navigation }) {
  let Cart = useContext(Cart);

  return (
    <View>
      <Text>Thank you for your order</Text>
      <Button
        title="Go to Home Screen..."
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}
