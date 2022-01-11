import { View,  FlatList,Text } from 'react-native';
import styles from '../assets/Style';
// import ProductGridTile from './../components/ProductGridTile';
import { CATEGORIES, PRODUCTS } from '../data/data';

export default function ProductsPerCategory({ route, navigation }) {

  const categoryID = route.params.categoryID

  // const catTitle = CATEGORIES.find(cat => cat.id === categoryID).title

  const displayedProducts = PRODUCTS.filter(item => item.catID == categoryID)

  const renderGridItem = ({ item }) => {
    return (
      // TODO: change this
      <ProductGridTile
        imageUrl={item.imageUrl}
        title={item.title}
        price={item.price}
        onSelect={() => {
          navigation.navigate("ProductDetail", {
            productID: item.id,
            productTitle: item.title
          });
        }}
      />
    );
  };

  return (
    <View style={styles.BG}>
      {/* <View style={{padding:120}}>
        <FlatList
          data={displayedProducts}
          keyExtractor={(item) => item.id}
          renderItem={renderGridItem}
          numColumns={2}
        />
      </View> */}
      <Text>asdsadd</Text>
    </View>
  );
}