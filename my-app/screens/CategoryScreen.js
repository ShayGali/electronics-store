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

import ProductGridTile from "../components/ProductGridTile";

export default function CategoryScreen({ route, navigation }) {
  // thw products of the category
  const displayedProducts = PRODUCTS.filter(
    (item) => item.category == route.params.categoryID
  );
  const renderGridItem = ({ item }) => {
    return (
      <ProductGridTile
        imgUrl={item.imgUrl}
        price={item.price}
        title={item.title}
        navigateToProductDetailsScreen={() => {
          navigation.navigate("ProductDetail", {
            productID: item.id,
            headerTitle: item.title,
          });
        }}
      />
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
