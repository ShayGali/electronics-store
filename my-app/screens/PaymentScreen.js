import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

import styles from "../assets/Style";

export default function PaymentScreen({ route, navigation }) {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [state, setState] = useState("");
  let [creditCardNumber, setCreditCardNumber] = useState("");
  let [expressionDate, setExpressionDate] = useState("");
  let [CVVNumber, setCVVNumber] = useState("");

  let [isFnameValid, setIsFnameValid] = useState(true);
  let [isLnameValid, setIsLnameValid] = useState(true);
  let [isEmailValid, setIsEmailValid] = useState(true);
  let [isStateValid, setIsStateValid] = useState(true);
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

    if (
      email.indexOf("@") == -1 ||
      (email.split("@")[0].length == 0 &&
        email.split("@")[1].indexOf(".") == -1)
    ) {
      setIsEmailValid(false);
      isValid = false;
    } else setIsEmailValid(true);

    if (state == "") {
      setIsStateValid(false);
      isValid = false;
    } else setIsStateValid(true);

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
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <View style={{margin: 30}}></View> 
        
        <View style={styles.inputView}>
          <Text style={styles.textInput}>first name</Text>
          <TextInput
            onChangeText={(text) => setFname(text)}
            style={[styles.input, isFnameValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isFnameValid ? "" : "Enter first name"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>last name</Text>
          <TextInput
            onChangeText={(text) => setLname(text)}
            style={[styles.input, isLnameValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isLnameValid ? "" : "Enter last name"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>email</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={[styles.input, isEmailValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isEmailValid ? "" : "Enter valid email"}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.textInput}>state</Text>
          <TextInput
            onChangeText={(text) => setState(text)}
            style={[styles.input, isStateValid ? "" : styles.inputError]}
          />
          <Text style={styles.errorMsg}>
            {isStateValid ? "" : "Enter state"}
          </Text>
        </View>

        <View style={[styles.inputView]}>
          <Text style={[styles.textInput]}>credit card number</Text>
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
            {isCreditCardNumberValid ? "" : "Enter  valid credit card number"}
          </Text>
        </View>

        <View style={[styles.inputView]}>
          <Text style={[styles.textInput]}>expression date</Text>
          <TextInput
            onChangeText={(text) => setExpressionDate(text)}
            style={[
              styles.input,
              isExpressionDateValid ? "" : styles.inputError,
            ]}
            maxLength={5}
            placeholder={"MM/YY"}
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
            if (true || checkIfAllFilled() & checkCreditCardDetails()) {
              navigation.replace("Ordered");
            }
          }}
        />
      </ScrollView>
    </View>
  );
}
