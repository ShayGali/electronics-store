import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/Style";
import { ImageBackground } from "react-native";

export default function CategoryGridTile(props) {
  return (
    <TouchableOpacity
      style={styles.gridComponent}
      onPress={props.navigateToCategoryScreen}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 25, opacity: 0.4 }}
        source={{ uri: props.imgUrl }}
        resizeMode={"contain"}
        style={styles.gridComponentBackground}
      >
        <View style={styles.gridContainer}>
          <Text style={styles.content}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
