import React, { useState } from "react";
import { Text, View, Button,TextInput, FlatList,ImageBackground, TouchableOpacity } from "react-native";
import { PRODUCTS, cart, COUPONS } from "../data/data";
import styles from '../assets/Style';

export default function CartScreen({ route, navigation }) {

  const productsInCart = cart;

  const price = cart.reduce(function (prev, current){
    return prev + +current.price + +current.shippingPrice
  }, 0);

  let[priceDiscount, setPriceDiscount] = useState(+price);
  let [myCoupon, setCoupon] = useState("");
  let [isCouponValid, setIsCouponValid] = useState(true);

  const cExists = COUPONS.find(item => item.coupon == myCoupon);
  
  let isValid = true;
  const checkIfExists = () => {
    if (cExists != undefined) {
      setIsCouponValid(true);
      isValid = true;
      let discount = +cExists.discountPercentages;
      setPriceDiscount( +priceDiscount * (1 - (+discount)));
      return priceDiscount;
    }else {
      setIsCouponValid(false); 
      return priceDiscount;
    }
};


  const renderGridItem = ({ item }) => {
    return (
    <View style={styles.gridItem}> 

      <ImageBackground imageStyle={{borderRadius: 25, opacity: 0.6}} source={{uri:item.imgUrl}} resizeMode='contain' style={styles.BGImg}>
        <View style={[styles.gridContainer]} >
          <Text style={[styles.titles, {fontSize: 28}]}>{item.title}</Text>
          <Text style={[styles.titles, {fontSize: 35}]}>{item.price}$</Text>
        </View>
      </ImageBackground>
      
    </View>
    );
  }

  return (
    <View style={styles.BG}>
        <Text style={[styles.titles,{fontSize:50}]}>Cart</Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={productsInCart}
          renderItem={renderGridItem}
          numColumns={1}
        />
      <View>
        <Text style={styles.titles}>Final price: {price}$</Text>
        
        <View style={[styles.inputView]}>
          <Text style={styles.textInput}>Coupon: </Text>
          <TextInput
            onChangeText={(text) => setCoupon(text)}
            style={[styles.input, {marginBottom: 10}, isCouponValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isCouponValid ? "" : "There is no such coupon..."}
          </Text>

          {/* <Button
          title="Submit"
          style={styles.couponButton}
          onPress={() => checkIfExists()}
          /> */}
          <View style={{flexDirection: "center", justifyContect: "center", alignItems: 'center', textAlign: "center"}}>
          <TouchableOpacity
            style={styles.checkButton}
            onPress={() => {
              checkIfExists()
            }}>
            <Text style={styles.checkButtonText}>CHECK</Text>
          </TouchableOpacity>
          </View>
        </View>
          <Text style={styles.titles}>Price after coupon discount: {priceDiscount}$</Text>

        <Button
        title="Go to Payment..."
        onPress={() => navigation.navigate("Payment", {
          finalPrice: priceDiscount
        })}
      />
      </View>
    </View>
  );

}

