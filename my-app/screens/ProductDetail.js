// TripDetails

import { StyleSheet, Text, View, Button } from "react-native";

// Add another button - move from screen 2 to screen 3: TripDetailScreen

export default function ProductDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Product Detail screen</Text>
      

      {/* The goBack() function is built-in */}
      <Button title="Go back.." onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});