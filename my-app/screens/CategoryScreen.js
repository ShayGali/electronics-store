import React from "react";
import { View,  FlatList,Text ,TouchableOpacity,ImageBackground } from 'react-native';
import styles from '../assets/Style';
import { CATEGORIES, PRODUCTS } from '../data/data';

export default function CategoryScreen({ route, navigation }) {

  const categoryID = route.params.categoryID

  // const catTitle = CATEGORIES.find(cat => cat.id === categoryID).title

  const displayedProducts = PRODUCTS.filter(item => item.category == categoryID)
  const renderGridItem = ({ item }) => {
    return (
    <TouchableOpacity style={styles.gridItem} onPress={()=>{navigation.navigate("ProductDetail", {
            productID: item.id,
            categoryName: item.title
          })}}>

      <ImageBackground imageStyle={{borderRadius: 25}} source={{uri:item.imgUrl}} resizeMode="cover" style={styles.BGImg}>
      <View style={{alignItems:"center",justifyContent:'center'}}>
          <Text style={styles.titles}>{item.title}, {item.price}</Text>
        </View>
      </ImageBackground>
      
    </TouchableOpacity>

    );
  };

  return (
    <View style={styles.BG}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={displayedProducts}
          renderItem={renderGridItem}
          numColumns={2}
        />
    </View>
  );
}