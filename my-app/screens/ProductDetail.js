import React, { useContext } from "react";
import { Context } from "../App";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../assets/Style";
import { PRODUCTS } from "../data/data";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

export default function ProductDetail({ route, navigation }) {
  const { cart, addToCart } = useContext(Context);
  const currentProduct = PRODUCTS.find(
    (product) => product.id === route.params.productID
  );

  return (
    <View style={styles.BG}>
      <ScrollView>
        <View style={{ margin: 50 }}>
          <Text style={[styles.mainHL, { marginBottom: 20 }]}>
            {currentProduct.title}
          </Text>

          <View style={[styles.viewProductImg]}>
            <Image
              style={[styles.prodImg]}
              source={{ uri: currentProduct.imgUrl }}
              resizeMode="contain"
            />
          </View>

          <Text style={[styles.headLines, { marginBottom: 10 }]}>
            Description
          </Text>

          <View style={{ marginBottom: 30 }}>
            <Text style={styles.regText}>{currentProduct.description}</Text>
          </View>

          <View style={[styles.boxFrame, { marginBottom: 30 }]}>
            <Text style={[styles.regText, { margin: 5 }]}>
              Dimensions: {currentProduct.dimensions}
            </Text>
            <Text style={[styles.regText, { margin: 5 }]}>
              Price: {currentProduct.price}$
            </Text>
            <Text style={[styles.regText, { margin: 5 }]}>
              {/*if the shipping price of the product is 0, so free shipping will be display*/}
              Shipping price:{" "}
              {currentProduct.shippingPrice > 0
                ? currentProduct.shippingPrice + "$"
                : "free shipping"}
            </Text>
            <Text style={[styles.regText, { margin: 5 }]}>
              Final price:{" "}
              {(currentProduct.price + currentProduct.shippingPrice).toFixed(2)}
              $
            </Text>
          </View>

          <View style={[styles.boxFrame, { marginBottom: 30 }]}>
            <Text style={[styles.headLines, { fontSize: 32 }]}>
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
                let numOfOrders = cart.filter(
                  (item) => item.product === currentProduct
                ).length;

                // if he is not in the cart so we need to add it to the cart with numOfOrders = 1
                if (numOfOrders == 0) {
                  addToCart({
                    product: currentProduct,
                    numOfOrders: 1,
                  });
                  // if he is already in the cart so we add 1 to the product numOfOrders
                } else {
                  cart.forEach((item) => {
                    item.product == currentProduct ? item.numOfOrders++ : "";
                  });
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
