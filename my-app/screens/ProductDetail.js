import React, { useState } from "react";

import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../assets/Style";
import { PRODUCTS, cart } from "../data/data";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";

export default function ProductDetail({ route, navigation }) {
  const productID = route.params.productID;

  const currentProduct = PRODUCTS.find((product) => product.id === productID);
  const image = { uri: currentProduct.imgUrl };

  return (
    <View style={styles.BG}>
      <ScrollView>
        <View style={{ margin: 50 }}>
          <Text style={[styles.mainHL, { marginBottom: 20 }]}>
            {currentProduct.title}
          </Text>

          <View style={[styles.viewProductImg]}>
            <Image style={styles.prodImg} source={image} resizeMode="contain" />
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
              Price: {(currentProduct.price).toFixed(2)}$
            </Text>
            <Text style={[styles.regText, { margin: 5 }]}>
              Shipping price: {currentProduct.shippingPrice}$
            </Text>
            <Text style={[styles.regText, { margin: 5 }]}>
              Final price: {(currentProduct.price + currentProduct.shippingPrice).toFixed(2)}$
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
                let numOfOrders = cart.filter(
                  (item) => item.product === currentProduct
                ).length;

                if (numOfOrders == 0) {
                  cart.push({
                    product: currentProduct,
                    numOfOrders: 1,
                  });
                } else {
                  cart.forEach((item) => {
                    item.product == currentProduct ? item.numOfOrders++ : "";
                  });
                }
                navigation.navigate("Cart");
              }}
            >
              <Text
                style={[
                  styles.AddToCartText,
                  {
                    padding: 10,
                    marginBottom: 5,
                    marginLeft: 5,
                    textAlign: "left",
                  },
                ]}
              >
                Add to cart
              </Text>
              <Icon name="cart" style={{ fontSize: 50, marginTop: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
