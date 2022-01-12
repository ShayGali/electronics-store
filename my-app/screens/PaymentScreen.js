import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function PaymentScreen ({ route, navigation }) {
  return (
    <View>
        <Text>Payment Screen</Text>
        <Button
        title="Go to Ordered..."
        onPress={() => navigation.replace("Ordered")}
      />
    </View>
  );
}