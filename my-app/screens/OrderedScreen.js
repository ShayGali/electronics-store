import { Text, View, Button } from "react-native";
import styles from '../assets/Style';

export default function OrderedScreen({ route, navigation }) {
  let a = route.params.address;
  let ci = route.params.city;
  let co = route.params.country;

  return (
    <View style={styles.BG}>
      <View style={{padding: 20, textAlign: "center", alignContent: "center"}}>
        <Text style={[styles.mainHL, {margin: 10}]}>Thank you for your order!</Text>
        <Text style={[styles.titles, {margin: 10}]}>Your order will be shipped to your address within 7 to 14 days...</Text>
        <Text style={[styles.titles, styles.boxFrame, {margin: 10, marginBottom: 30}]}>Your address: {a}, {ci}, {co}</Text>
        
        <Button
          title="Go to Home Screen..."
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </View>
  );
}
