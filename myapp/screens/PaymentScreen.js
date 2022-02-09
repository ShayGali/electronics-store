import React, { useState, useContext } from "react";
import { Context } from "../App";

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "../assets/Style";

export default function PaymentScreen({ navigation }) {
  const { emptyTheCart } = useContext(Context);

  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [country, setCountry] = useState("");
  let [city, setCity] = useState("");
  let [address, setAddress] = useState("");
  let [cardholderName, setCardholderName] = useState("");
  let [cardholderId, setCardholderId] = useState("");
  let [creditCardNumber, setCreditCardNumber] = useState("");
  let [expressionDate, setExpressionDate] = useState("");
  let [CVVNumber, setCVVNumber] = useState("");

  let [isFnameValid, setIsFnameValid] = useState(true);
  let [isLnameValid, setIsLnameValid] = useState(true);
  let [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  let [isEmailValid, setIsEmailValid] = useState(true);
  let [isCountryValid, setIsCountryValid] = useState(true);
  let [isCityValid, setIsCityValid] = useState(true);
  let [isAddressValid, setIsAddressValid] = useState(true);
  let [isCardholderNameValid, setIsCardholderNameValid] = useState(true);
  let [isCardholderIdValid, setIsCardholderIdValid] = useState(true);
  let [isCreditCardNumberValid, setIsCreditCardValid] = useState(true);
  let [isExpressionDateValid, setIsExpressionDateValid] = useState(true);
  let [isCVVNumberValid, setIsCVVNumberValid] = useState(true);

  const checkIfAllFilled = () => {
    let isValid = true;
    if (fname == "") {
      setIsFnameValid(false);
      isValid = false;
    } else setIsFnameValid(true);

    if (lname == "") {
      setIsLnameValid(false);
      isValid = false;
    } else setIsLnameValid(true);

    if (phoneNumber.length < 10) {
      setIsPhoneNumberValid(false);
      isValid = false;
    } else setIsPhoneNumberValid(true);

    if (
      email.indexOf("@") == -1 ||
      (email.split("@")[0].length == 0 &&
        email.split("@")[1].indexOf(".") == -1)
    ) {
      setIsEmailValid(false);
      isValid = false;
    } else setIsEmailValid(true);

    if (country == "") {
      setIsCountryValid(false);
      isValid = false;
    } else setIsCountryValid(true);

    if (city == "") {
      setIsCityValid(false);
      isValid = false;
    } else setIsCityValid(true);

    if (address == "") {
      setIsAddressValid(false);
      isValid = false;
    } else setIsAddressValid(true);

    if (cardholderName == "") {
      setIsCardholderNameValid(false);
      isValid = false;
    } else setIsCardholderNameValid(true);

    if (cardholderId.length != 9) {
      setIsCardholderIdValid(false);
      isValid = false;
    } else setIsCardholderIdValid(true);

    return isValid;
  };

  const checkCreditCardDetails = () => {
    let isValid = true;

    if (expressionDate.length == 5) {
      if (expressionDate.indexOf("/") !== -1) {
        let [month, year] = expressionDate.split("/");
        if (month > 0 || month < 12) setIsExpressionDateValid(true);
        else {
          setIsExpressionDateValid(false);
          isValid = false;
        }

        if (year > 0 || year < 40) setIsExpressionDateValid(true);
        else {
          setIsExpressionDateValid(false);
          isValid = false;
        }
      } else {
        setIsExpressionDateValid(false);
        isValid = false;
      }
    } else {
      setIsExpressionDateValid(false);
      isValid = false;
    }

    if (creditCardNumber.length < 16) {
      setIsCreditCardValid(false);
      isValid = false;
    } else {
      setIsCreditCardValid(true);
    }

    if (CVVNumber.length < 3) {
      setIsCVVNumberValid(false);
      isValid = false;
    } else {
      setIsCVVNumberValid(true);
    }

    return isValid;
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView style={styles.scrollView}>
        <View style={{ margin: 20 }}></View>
        <Text style={styles.content}>Enter your details: </Text>
        <View style={[styles.inputView]}>
          <Text style={styles.textInput}>First name: </Text>
          <TextInput
            onChangeText={(text) => setFname(text)}
            style={[styles.input, isFnameValid ? "" : styles.inputError]}
            placeholder="first name..."
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isFnameValid ? "" : "Enter a first name"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>Last name: </Text>
          <TextInput
            onChangeText={(text) => setLname(text)}
            style={[styles.input, isLnameValid ? "" : styles.inputError]}
            placeholder="last name..."
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isLnameValid ? "" : "Enter a last name"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>Phone number: </Text>
          <TextInput
            onChangeText={(text) => setPhoneNumber(text)}
            style={[styles.input, isPhoneNumberValid ? "" : styles.inputError]}
            placeholder="+972550000000"
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isPhoneNumberValid
              ? ""
              : "Enter a valid phone number (at list 10 digits). "}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>Email: </Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={[styles.input, isEmailValid ? "" : styles.inputError]}
            placeholder="aaa@gmail.com"
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isEmailValid ? "" : "Enter a valid email address"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>Country: </Text>
          <TextInput
            onChangeText={(text) => setCountry(text)}
            style={[styles.input, isCountryValid ? "" : styles.inputError]}
            placeholder="country..."
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isCountryValid ? "" : "Enter a country"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>City: </Text>
          <TextInput
            onChangeText={(text) => setCity(text)}
            style={[styles.input, isCityValid ? "" : styles.inputError]}
            placeholder="city..."
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isCityValid ? "" : "Enter a city"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>Address: </Text>
          <TextInput
            onChangeText={(text) => setAddress(text)}
            style={[styles.input, isAddressValid ? "" : styles.inputError]}
            placeholder="address..."
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isAddressValid ? "" : "Enter a shipping address"}
          </Text>
        </View>

        <Text style={styles.content}>Enter credit card details: </Text>

        <View style={[styles.inputView]}>
          <Text style={styles.textInput}>Cardholder name: </Text>
          <TextInput
            onChangeText={(text) => setCardholderName(text)}
            style={[
              styles.input,
              isCardholderNameValid ? "" : styles.inputError,
            ]}
            placeholder="full name..."
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isCardholderNameValid ? "" : "Enter a cardholder name"}
          </Text>
        </View>

        <View style={[styles.inputView]}>
          <Text style={styles.textInput}>Cardholder id number: </Text>
          <TextInput
            onChangeText={(text) => setCardholderId(text)}
            style={[styles.input, isCardholderIdValid ? "" : styles.inputError]}
            maxLength={9}
            placeholder="123456789"
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isCardholderIdValid
              ? ""
              : "Enter a valid cardholder id number (9 digits)"}
          </Text>
        </View>

        <View style={[styles.inputView]}>
          <Text style={[styles.textInput]}>Credit card number: </Text>
          <TextInput
            onChangeText={(text) => setCreditCardNumber(text)}
            style={[
              styles.input,
              isCreditCardNumberValid ? "" : styles.inputError,
            ]}
            keyboardType="numeric"
            maxLength={16}
            placeholder="1234567890123456"
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isCreditCardNumberValid
              ? ""
              : "Enter a valid credit card number (16 digits)."}
          </Text>
        </View>

        <View style={[styles.inputView]}>
          <Text style={[styles.textInput]}>Expression date: </Text>
          <TextInput
            onChangeText={(text) => setExpressionDate(text)}
            style={[
              styles.input,
              isExpressionDateValid ? "" : styles.inputError,
            ]}
            maxLength={5}
            placeholder="01/25"
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isExpressionDateValid
              ? ""
              : "Enter a valid expression date (for example: 11/25)"}
          </Text>
        </View>

        <View style={[styles.inputView, { marginBottom: 50 }]}>
          <Text style={[styles.textInput]}>CVV</Text>
          <TextInput
            onChangeText={(text) => setCVVNumber(text)}
            style={[styles.input, isCVVNumberValid ? "" : styles.inputError]}
            keyboardType="numeric"
            maxLength={3}
            secureTextEntry={true}
            placeholder="123"
            placeholderTextColor="grey"
          />
          <Text style={styles.errorMsg}>
            {isCVVNumberValid ? "" : "Enter a valid CVV number(3 digits)."}
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.navigateButton, { marginBottom: 20 }]}
          onPress={() => {
            if (checkIfAllFilled() & checkCreditCardDetails()) {
              emptyTheCart();
              navigation.replace("Ordered", {
                country: country,
                city: city,
                address: address,
              });
            }
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
