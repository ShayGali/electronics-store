import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { cart, COUPONS } from "../data/data";
import styles from "../assets/Style";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function CartScreen({ navigation }) {
  const [state, setState] = useState(false);

  setTimeout(() => setState(false), 500);

  let productsInCart = cart;
  productsInCart = productsInCart.filter((product) => product.numOfOrders > 0);

  const price = productsInCart.reduce(function (prev, current) {
    return +(
      (prev + current.product.price + current.product.shippingPrice) *
      current.numOfOrders
    ).toFixed(2);
  }, 0);

  let [priceDiscount, setPriceDiscount] = useState(price);
  let [myCoupon, setCoupon] = useState("");
  let [isCouponValid, setIsCouponValid] = useState(true);
  let [discount, setDiscount] = useState(0);

  const cExists = COUPONS.find((item) => item.coupon == myCoupon);

  let isValid = true;
  const checkIfExists = () => {
    if (cExists != undefined) {
      setIsCouponValid(true);
      isValid = true;
      setDiscount(cExists.discountPercentages);
      setPriceDiscount((priceDiscount * (1 - discount)).toFixed(2));
      return priceDiscount;
    } else {
      setIsCouponValid(false);
      return priceDiscount;
    }
  };

  let deleteBtnRender = (progress, item) => {
    return (
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => {
          let product = cart.find((i) => item.product.id == i.product.id);
          product.numOfOrders--;
          setState(true);
          setPriceDiscount(
            (price - item.product.price - item.product.shippingPrice).toFixed(2)
          );
        }}
      >
        <Text style={[styles.titles, { fontSize: 15 }]}>remove from cart</Text>
      </TouchableOpacity>
    );
  };

  const renderGridItem = ({ item }) => {
    return (
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={(progress) => deleteBtnRender(progress, item)}
        >
          <View style={styles.gridItem}>
            <ImageBackground
              imageStyle={{ borderRadius: 25, opacity: 0.6 }}
              source={{ uri: item.product.imgUrl }}
              resizeMode="contain"
              style={styles.BGImg}
            >
              <View style={[styles.gridContainer]}>
                <Text style={[styles.titles, { fontSize: 25 }]}>
                  {item.product.title}
                </Text>
                <Text style={[styles.titles, { fontSize: 30 }]}>
                  {item.product.price}$
                </Text>
                <Text style={[styles.titles, { fontSize: 25 }]}>
                  number of items: {item.numOfOrders}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  return (
    <View style={styles.BG}>
      <Text style={[styles.titles, { fontSize: 50 }]}>Cart</Text>
      <FlatList
        keyExtractor={(item) => item.product.id}
        data={productsInCart}
        renderItem={renderGridItem}
        extraData={state}
      />
      <View>
        <Text style={styles.titles}>Final price: {price}$</Text>

        <View style={[styles.inputView]}>
          <Text style={styles.textInput}>Coupon: </Text>
          <TextInput
            onChangeText={(text) => setCoupon(text)}
            style={[
              styles.input,
              { marginBottom: 10 },
              isCouponValid ? "" : styles.inputError,
            ]}
          />
          <Text style={styles.errorMsg}>
            {isCouponValid ? "" : "There is no such coupon..."}
          </Text>

          <View
            style={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <TouchableOpacity
              style={styles.checkButton}
              onPress={() => {
                if (discount === 0) checkIfExists();
                else {
                  alert("You have already entered a coupon");
                }
              }}
            >
              <Text style={[styles.checkButtonText]}>CHECK</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titles}>
          Price after coupon discount: {priceDiscount}$
        </Text>

        <TouchableOpacity
          style={styles.navigateButton}
          onPress={() =>
            navigation.navigate("Payment", {
              finalPrice: priceDiscount,
            })
          }
        >
          <Text style={[styles.checkButtonText]}>Go to Payment...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
