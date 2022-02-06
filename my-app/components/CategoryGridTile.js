import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/Style";
import { ImageBackground } from "react-native";

export default function CategoryGridTile(props) {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={props.navigateToCategoryScreen}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 25, opacity: 0.4 }}
        source={{ uri: props.imgUrl }}
        resizeMode={"contain"}
        style={styles.BGImg}
      >
        <View style={styles.gridContainer}>
          <Text style={styles.titles}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
