import { View, Text, Image,TouchableOpacity,ScrollView ,Divider } from 'react-native';
import styles from '../assets/Style';
import { PRODUCTS } from '../data/data';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
//import { ShoppingCartOutlined } from '@ant-design/icons'
// import { Divider } from 'react-native-elements'

export default function ProductDetail({ route, navigation }) {

  const productID = route.params.productID

  const currentProduct = PRODUCTS.find(product => product.id === productID)
  const image = { uri: currentProduct.imgUrl }

  return (
    <View style={styles.BG}>
      <ScrollView>
        <View style={{ margin: 50 }}>
          
           <Text style={[styles.mainHL, { marginBottom: 20 }]}>{currentProduct.title}</Text>

          <View style={[styles.viewProductImg]}>
            <Image style={styles.prodImg} source={image} resizeMode='contain' />
          </View>

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

          <View style={[styles.boxFrame, { marginBottom: 30, flexDirection: 'row' }]}>
            <Text style={[styles.headLines, {fontSize: 32}]}>Reviews: </Text>
            <Text style={[styles.regText, {marginTop: 10}]}>{currentProduct.reviews.calcGrade()} / 5</Text>
          </View>

          <View style={[styles.AddToCart, { flexDirection: "row" }]}>

            <TouchableOpacity  
            style={{flexDirection: "row"}}
              onPress={()=>navigation.navigate("Cart",{productID: currentProduct.id,productName: currentProduct.title,flag: true })}
              >
              <Text style={[styles.AddToCartText, { marginBottom: 5 }]}>Add to cart -{'>'}  </Text>
              <Icon name="cart" style={{ fontSize:50}}/>
            </TouchableOpacity>
            
          </View> 
        </View>
      </ScrollView>
    </View>
  );
}