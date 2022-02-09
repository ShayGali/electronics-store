import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../assets/Style";

export default function ProductGridTile(props) {
  return (
    <TouchableOpacity style={styles.deleteBtn} onPress={props.removeItem}>
      <Text style={[styles.titles, { fontSize: 15 }]}>remove from cart</Text>
    </TouchableOpacity>
  );
}
