import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/Style";
import { ImageBackground } from "react-native";

export default function ProductGridTile(props) {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={props.navigateToProductDetailsScreen}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 25, opacity: 0.6 }}
        source={{ uri: props.imgUrl }}
        resizeMode="contain"
        style={styles.BGImg}
      >
        <View style={[styles.gridContainer]}>
          <Text style={[styles.titles, { fontSize: 28 }]}>{props.title}</Text>
          <Text style={[styles.titles, { fontSize: 35 }]}>
            {props.price.toFixed(2)}${" "}
            {/*toFixed - to add .00, and do show more than 2*/}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
