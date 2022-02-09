import React from "react";

import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import styles from "../assets/Style";
import CategoryGridTile from "../components/CategoryGridTile";

export default function HomeScreen({ navigation }) {
  // How to render each category
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        imgUrl={item.imgUrl}
        navigateToCategoryScreen={() => {
          navigation.navigate("CategoryScreen", {
            categoryID: item.id,
            categoryAmount: item.amount,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.mainBackground}>
      <Text style={[styles.content, { fontSize: 50 }]}>Categories</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
}
