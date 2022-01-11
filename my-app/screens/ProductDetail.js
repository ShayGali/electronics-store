import { View, Text, Image,TouchableOpacity,ScrollView ,Divider } from 'react-native';
import styles from '../assets/Style';
import { PRODUCTS } from '../data/data';
import { ShoppingCartOutlined } from '@ant-design/icons'
// import { Divider } from 'react-native-elements'


export default function ProductDetail({ route, navigation }) {

  const productID = route.params.productID

  const currentProduct = PRODUCTS.find(product => product.id === productID)
  // let a = {a:"Asd",b:"asdsad"}
  const image = { uri: currentProduct.imgUrl }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ margin: 80 }}>
          <View>
            <Image style={styles.prodImg} source={image} />
          </View>
           <Text style={[styles.mainHL, { marginBottom: 20 }]}>{currentProduct.title}</Text>


          <Text style={[styles.headLines, { marginBottom: 10 }]}>Description</Text>
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.regText}>{currentProduct.description}</Text>
          </View>
          <View style={[styles.boxFrame, { marginBottom: 30 }]}>
            <Text style={[styles.regText, { margin: 5 }]}>Dimensions: {currentProduct.dimensions}</Text>
            <Text style={[styles.regText, { margin: 5 }]}>Price: {currentProduct.price}$</Text>
            <Text style={[styles.regText, { margin: 5 }]}>Shipping price: {currentProduct.shippingPrice}$</Text>
            <Text style={[styles.regText, { margin: 5 }]}>Final price: {currentProduct.price + currentProduct.shippingPrice}$</Text>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={[styles.headLines, { marginBottom: 10 }]}>Reviews</Text>
            <Text style={[styles.regText, styles.boxFrame]}>{currentProduct.reviews.review.reduce((a,b)=> a+b,0)/currentProduct.reviews.review.length}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.regText, { marginBottom: 5 }]}>Add to cart -{'>'}  </Text>

            <TouchableOpacity><Text>sadsd</Text></TouchableOpacity>
            
          </View> 
        </View>
      </ScrollView>
    </View>
  );
}