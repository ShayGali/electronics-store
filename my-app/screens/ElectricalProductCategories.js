// CountriesScreen.js

import { StyleSheet, Text, View, Button } from "react-native";

export default function ElectricalProductCategories({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Categories screen</Text>
      <Button
        title="Go to Products..."
        onPress={() => navigation.navigate("Products")}
      />
      {/* replace() function - we cannot go back. replace the first screen to the current screen */}
      {/* <Button
        color="green"
        title="Use replace..."
        onPress={() => navigation.replace("Products")}
      /> */}
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