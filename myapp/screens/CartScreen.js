import React, { useState, useContext } from "react";
import { Context } from "../App";
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { COUPONS } from "../data/data";
import styles from "../assets/Style";

import DeleteBtn from "../components/DeleteBtn";
import CartGridTile from "../components/CartGridTile";

export default function CartScreen({ navigation }) {
  const { cart, removeFromCart, removeProductWithZeroOrderers } =
    useContext(Context);
  // the price of all the products in the cart with the shippingPrice
  const price = cart.reduce(function (prev, current) {
    return +(
      (prev + current.product.price + current.product.shippingPrice) *
      current.numOfOrders
    ).toFixed(2);
  }, 0);

  // the price after hte coupon discount
  let [priceAfterDiscount, setPriceAfterDiscount] = useState(price);
  // the coupon that the user enter in the input
  let [couponInput, setCouponInput] = useState("");
  // check if the coupon is valid. will change only if the user enter invalid coupon.
  let [isCouponValid, setIsCouponValid] = useState(true);
  // the percentages discount of from the price.
  let [discountPercentages, setDiscountPercentages] = useState(0);

  // function that check the coupon that the user entered
  const enterCoupon = () => {
    // find if the coupon exists
    const coupon = COUPONS.find((item) => item.coupon == couponInput);
    if (coupon != undefined) {
      // if he is exists then we calculate the discount
      // add to the discount percentages of the cart the discount percentages of the coupon
      setDiscountPercentages(discountPercentages + coupon.discountPercentages);
      // update the price with the new coupon
      setPriceAfterDiscount(
        (priceAfterDiscount * (1 - coupon.discountPercentages)).toFixed(2)
      );
      // set the isCouponValid to true
      setIsCouponValid(true);
    } else {
      // if the coupon is invalid then we update then we update the isCouponValid filed
      setIsCouponValid(false);
    }
  };

  // function that will render the delete button of each item
  // the progress property is not in use, i just need the item
  const deleteBtnRender = (progress, item) => {
    return (
      <DeleteBtn
        removeItem={() => {
          // remove the item from the cart
          removeFromCart(item);
          // update the price
          setPriceAfterDiscount(
            (price - item.product.price - item.product.shippingPrice).toFixed(2)
          );
          removeProductWithZeroOrderers();
        }}
      />
    );
  };

  // function that render each item in the cart

  const renderGridItem = ({ item }) => {
    return (
      <CartGridTile
        renderRightActions={(progress) => deleteBtnRender(progress, item)}
        imgUrl={item.product.imgUrl}
        title={item.product.title}
        price={item.product.price}
        shippingPrice={item.product.shippingPrice}
        numOfOrders={item.numOfOrders}
      />
    );
  };

  return (
    <View style={styles.mainBackground}>
      <Text style={[styles.content, { fontSize: 50 }]}>Cart</Text>
      <FlatList
        keyExtractor={(item) => item.product.id}
        data={cart}
        renderItem={renderGridItem}
      />

      <View>
        <View style={[styles.inputView]}>
          <Text style={styles.textInput}>Coupon: </Text>
          <TextInput
            onChangeText={(text) => setCouponInput(text)}
            style={[styles.input, isCouponValid ? "" : styles.inputError]}
          />
          <Text style={[styles.errorMsg, { marginBottom: 10 }]}>
            {isCouponValid ? "" : "There is no such coupon..."}
          </Text>

          <View style={{ alignItems: "center", textAlign: "center" }}>
            <TouchableOpacity
              style={styles.enterCouponButton}
              onPress={() => {
                if (discountPercentages === 0) enterCoupon();
                else {
                  alert("You have already entered a coupon");
                }
              }}
            >
              <Text style={styles.buttonText}>ENTER COUPON</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.content}>Cart subtotal: {price}$</Text>
        <Text
          style={[
            styles.content,
            discountPercentages === 0 ? { display: "none" } : "",
          ]}
        >
          Cart total after discount: {priceAfterDiscount}$
        </Text>

        <TouchableOpacity
          style={styles.navigateButton}
          onPress={() =>
            navigation.navigate("Payment", {
              finalPrice: priceAfterDiscount,
            })
          }
        >
          <Text style={[styles.buttonText]}>Go to Payment...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
