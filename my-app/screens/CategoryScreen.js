import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../assets/Style";
import { PRODUCTS } from "../data/data";

export default function CategoryScreen({ route, navigation }) {
  // thw products of the category
  const displayedProducts = PRODUCTS.filter(
    (item) => item.category == route.params.categoryID
  );
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate("ProductDetail", {
            productID: item.id,
          });
        }}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 25, opacity: 0.6 }}
          source={{ uri: item.imgUrl }}
          resizeMode="contain"
          style={styles.BGImg}
        >
          <View style={[styles.gridContainer]}>
            <Text style={[styles.titles, { fontSize: 28 }]}>{item.title}</Text>
            <Text style={[styles.titles, { fontSize: 35 }]}>
              {item.price.toFixed(2)}$ {/*toFixed - to add .00, and do show more than 2*/}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.BG}>
      <Text style={[styles.titles, { fontSize: 50 }]}>Products</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={displayedProducts}
        renderItem={renderGridItem}
      />
    </View>
  );
}
