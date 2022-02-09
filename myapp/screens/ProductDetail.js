import React, { useContext } from "react";
import { Context } from "../App";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../assets/Style";
import { PRODUCTS } from "../data/data";
import ProductInCart from "../models/ProductInCart";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

export default function ProductDetail({ route, navigation }) {
  const { cart, addToCart } = useContext(Context);

  const currentProduct = PRODUCTS.find(
    (product) => product.id === route.params.productID
  );

  return (
    <View style={styles.mainBackground}>
      <ScrollView>
        <View style={{ margin: 50 }}>
          <Text style={[styles.productTitle, { marginBottom: 20 }]}>
            {currentProduct.title}
          </Text>

          <View style={[{alignItems: "center"}]}>
            <Image
              style={[styles.productImage]}
              source={{ uri: currentProduct.imgUrl }}
              resizeMode="contain"
            />
          </View>

          <Text style={[styles.productSubtitles, { marginBottom: 10 }]}>
            Description
          </Text>

          <View style={{ marginBottom: 30 }}>
            <Text style={styles.productContent}>{currentProduct.description}</Text>
          </View>

          <View style={[styles.contentFrame, { marginBottom: 30 }]}>
            <Text style={[styles.productContent, { margin: 5 }]}>
              Dimensions: {currentProduct.dimensions}
            </Text>
            <Text style={[styles.productContent, { margin: 5 }]}>
              Price: {currentProduct.price}$
            </Text>
            <Text style={[styles.productContent, { margin: 5 }]}>
              {/*if the shipping price of the product is 0, so free shipping will be display*/}
              Shipping price:{" "}
              {currentProduct.shippingPrice > 0
                ? currentProduct.shippingPrice + "$"
                : "free shipping"}
            </Text>
            <Text style={[styles.productContent, { margin: 5 }]}>
              Final price:{" "}
              {(currentProduct.price + currentProduct.shippingPrice).toFixed(2)}
              $
            </Text>
          </View>

          <View style={[styles.contentFrame, { marginBottom: 30 }]}>
            <Text style={[styles.productSubtitles, { fontSize: 32 }]}>
              Reviews: {currentProduct.reviews.calcGrade()} / 5
            </Text>
          </View>

          <View
            style={[styles.AddToCart, { paddingLeft: 30, paddingRight: 30 }]}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
              }}
              onPress={() => {
                // check if the product is already in the cart so we can add it the the count of the product
                let currentProductInTheCart = cart.find(
                  (item) => item.product === currentProduct
                );
                // if he is not in the cart so we need to add it to the cart with numOfOrders = 1
                if (currentProductInTheCart == undefined) {
                  addToCart(new ProductInCart(currentProduct));
                  // if he is already in the cart so we add 1 to the product numOfOrders
                } else {
                  currentProductInTheCart.numOfOrders++;
                }
                navigation.navigate("Cart");
              }}
            >
              <Text style={styles.AddToCartText}>Add to cart</Text>
              <Icon name="cart" style={{ fontSize: 50, marginTop: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
