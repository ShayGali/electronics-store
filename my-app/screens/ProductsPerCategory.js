//TripDetailScreen
import { StyleSheet, Text, View, Button } from "react-native";

export default function ProductsPerCategory({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Products screen</Text>
  
        {/* Both buttons go to the same place: */}
        <Button title="Go the Categories" onPress={() => navigation.popToTop()} />
        
        <Button
          title="Go the Categories"
          onPress={() => navigation.navigate("Categories")}
        />
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