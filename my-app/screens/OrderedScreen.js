import { Text, View, Button } from "react-native";

export default function OrderedScreen({ route, navigation }) {
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
