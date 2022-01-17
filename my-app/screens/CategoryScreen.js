import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../assets/Style";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import { CATEGORIES, PRODUCTS } from "../data/data";

export default function CategoryScreen({ route, navigation }) {
  const categoryID = route.params.categoryID;

  // const catTitle = CATEGORIES.find(cat => cat.id === categoryID).title

  const displayedProducts = PRODUCTS.filter(
    (item) => item.category == categoryID
  );
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate("ProductDetail", {
            productID: item.id,
            categoryName: item.title,
          });
        }}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 25, opacity: 0.6 }}
          source={{ uri: item.imgUrl }}
          resizeMode="contain"
          style={styles.BGImg}
        >
          {/* <View style={{alignItems:"center",justifyContent:'center'}}> */}
          <View style={[styles.gridContainer]}>
            <Text style={[styles.titles, { fontSize: 28 }]}>{item.title}</Text>
            <Text style={[styles.titles, { fontSize: 35 }]}>{item.price}$</Text>
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
