import React, { useState } from "react";
import { Text,View,Button,TextInput,SafeAreaView,ScrollView} from "react-native";
import styles from "../assets/Style";

export default function PaymentScreen({ route, navigation }) {
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

    if (phoneNumber == "" || phoneNumber.length != 10) {
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

    if (cardholderId == "" || cardholderId.length != 9) {
      setIsCardholderIdValid(false);
      isValid = false;
    } else setIsCardholderIdValid(true);

    if (creditCardNumber == "") {
      setIsCreditCardValid(false);
      isValid = false;
    } else setIsCreditCardValid(true);

    if (expressionDate == "") {
      setIsExpressionDateValid(false);
      isValid = false;
    } else setIsExpressionDateValid(true);

    if (CVVNumber == "") {
      setIsCVVNumberValid(false);
      isValid = false;
    } else setIsCVVNumberValid(true);

    return isValid;
  };

  const checkCreditCardDetails = () => {
    let isValid = true;

    if (expressionDate.length == 5) {
      if (expressionDate.indexOf("/") !== -1) {
        let [month, year] = expressionDate.split("/");
        if (month > 0 || month < 12) setIsExpressionDateValid(true);
        else {
          // alert("month");
          setIsExpressionDateValid(false);
          isValid = false;
        }

        if (year > 0 || year < 40) setIsExpressionDateValid(true);
        else {
          // alert("year");
          setIsExpressionDateValid(false);
          isValid = false;
        }
      } else {
        // alert("Enter valid expression date \nMM/YY");
        setIsExpressionDateValid(false);
        isValid = false;
      }
    } else {
      setIsExpressionDateValid(false);
      isValid = false;
    }

    if (creditCardNumber.length < 16) {
      // alert("enter full credit card");
      setIsCreditCardValid(false);
      isValid = false;
    } else {
      setIsCreditCardValid(true);
    }

    if (CVVNumber.length < 3) {
      // alert("CVV");
      setIsCVVNumberValid(false);
      isValid = false;
    } else {
      setIsCVVNumberValid(true);
    }

    return isValid;
  };

  return (
    <SafeAreaView style={styles.BG}>
      <ScrollView style={styles.scrollView}>

        <View style={{margin: 20}}></View> 
        <Text style={styles.titles}>Enter your details: </Text>
        <View style={[styles.inputView]}>
          <Text style={styles.textInput}>First name: </Text>
          <TextInput
            onChangeText={(text) => setFname(text)}
            style={[styles.input, isFnameValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isFnameValid ? "" : "Enter first name"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>Last name: </Text>
          <TextInput
            onChangeText={(text) => setLname(text)}
            style={[styles.input, isLnameValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isLnameValid ? "" : "Enter last name"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>Phone number: </Text>
          <TextInput
            onChangeText={(text) => setPhoneNumber(text)}
            style={[styles.input, isPhoneNumberValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isPhoneNumberValid ? "" : "Enter a phone number"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>Email: </Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={[styles.input, isEmailValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isEmailValid ? "" : "Enter valid email"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>Country: </Text>
          <TextInput
            onChangeText={(text) => setCountry(text)}
            style={[styles.input, isCountryValid ? "" : styles.inputError]}
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
          />
          <Text style={styles.errorMsg}>
            {isAddressValid ? "" : "Enter an address"}
          </Text>
        </View>

        <Text style={styles.titles}>Enter credit card details: </Text>

        <View style={[styles.inputView]}>
          <Text style={styles.textInput}>Cardholder name: </Text>
          <TextInput
            onChangeText={(text) => setCardholderName(text)}
            style={[styles.input, isCardholderNameValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isCardholderNameValid ? "" : "Enter name"}
          </Text>
        </View>

        <View style={[styles.inputView]}>
          <Text style={styles.textInput}>Cardholder id number: </Text>
          <TextInput
            onChangeText={(text) => setCardholderId(text)}
            style={[styles.input, isCardholderIdValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isCardholderIdValid ? "" : "Enter name"}
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
          />
          <Text style={styles.errorMsg}>
            {isCreditCardNumberValid ? "" : "Enter a valid credit card number"}
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
          />
          <Text style={styles.errorMsg}>
            {isExpressionDateValid ? "" : "Enter valid expression date"}
          </Text>
        </View>

        <View style={[styles.inputView, {marginBottom: 50}]}>
          <Text style={[styles.textInput]}>CVV</Text>
          <TextInput
            onChangeText={(text) => setCVVNumber(text)}
            style={[styles.input, isCVVNumberValid ? "" : styles.inputError]}
            keyboardType="numeric"
            maxLength={3}
            secureTextEntry={true}
          />
          <Text style={styles.errorMsg}>
            {isCVVNumberValid ? "" : "Enter valid CVV"}
          </Text>
        </View>

        <Button
          title="Submit"
          style={styles.button}
          onPress={() => {
            if (checkIfAllFilled() && checkCreditCardDetails()) {
              navigation.replace("Ordered", {
              country: country,
              city: city,
              address: address
              });
            }
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
