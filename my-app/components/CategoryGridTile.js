import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/Style";
import { ImageBackground } from 'react-native-web';


export default function CategoryGridTile(props) {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <ImageBackground imageStyle={{borderRadius: 25}} source={props.imgUrl} resizeMode="cover" style={styles.BGImg}>
        <View style={styles.gridContainer}>
          <Text style={styles.titles}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};