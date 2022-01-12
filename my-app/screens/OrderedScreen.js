import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function OrderedScreen ({ route, navigation }) {
  return (
    <View>
        <Text>Ordered Screen</Text>
        <Button
        title="Go to Home Screen..."
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}