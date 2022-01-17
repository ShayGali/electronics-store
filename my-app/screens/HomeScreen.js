import React from "react";

import { View, Text, FlatList,TouchableOpacity,ImageBackground } from 'react-native';
import { CATEGORIES } from '../data/data';
import styles from '../assets/Style'


export default function HomeScreen({ navigation }) {
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={()=>{navigation.navigate("CategoryScreen", {
            categoryID: item.id,
            categoryName: item.title,
            categoryAmount: item.amount
          })}}>

      <ImageBackground imageStyle={{borderRadius: 25, opacity:0.4}} source={{uri:item.imgUrl}} resizeMode={"cover"} style={styles.BGImg}>
        <View style={styles.gridContainer}>
          <Text style={styles.titles}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
     
    );
  };

  return (
    <View style={styles.BG}>
      {/* <View style={styles.container}> */}
        <Text style={[styles.titles,{fontSize:50}]}>Categories</Text>
      {/* </View> */}

      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
}