import React, { useState } from 'react';
import { View } from 'react-native';
import TabWrapper from '../tab/TabWrapper';
import InputField from '../input/InputField';
import { mb10, p10 } from '../../../styles/commonStyle';

const InputTabbed = () => {
  const BankAccountComponent = () => {
    const [accountNumber, setAccountNumber] = useState('');
    return (
      <View style={p10}>
        <View style={mb10}>
          <InputField
            value={accountNumber}
            placeholder="EX: 0011-310063223"
            keyboardType="numeric"
            maxLength={14}
            returnKeyType="next"
            onChangeText={(text) => {
              setAccountNumber(text);
            }}
            setIsValid={(validity) => {
            }}
            validations={[
              {
                validationType: 'required',
                value: true,
                msg: 'This field is required'
              },
              {
                validationType: 'type',
                value: 'number',
                msg: 'This field must be number'
              }
            ]}
          />
        </View>
      </View>
    );
  };

  const CreditCardComponent = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [validity, setValidity] = useState('');
    const [cvc, setCvc] = useState('');
    return (
      <View style={p10}>
        <View style={mb10}>
          <InputField
            value={cardNumber}
            placeholder="Card Number"
            keyboardType="numeric"
            maxLength={14}
            returnKeyType="next"
            onChangeText={(text) => {
              setCardNumber(text);
            }}
            setIsValid={(validity) => {
            }}
            validations={[
              {
                validationType: 'required',
                value: true,
                msg: 'This field is required'
              },
              {
                validationType: 'type',
                value: 'number',
                msg: 'This field must be number'
              }
            ]}
          />
        </View>
        <View style={mb10}>
          <InputField
            value={cardholderName}
            placeholder="Cardholder Name"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={(text) => {
              setCardholderName(text);
            }}
            setIsValid={(validity) => {
            }}
            validations={[
              {
                validationType: 'required',
                value: true,
                msg: 'This field is required'
              },
              {
                validationType: 'type',
                value: 'number',
                msg: 'This field must be number'
              }
            ]}
          />
        </View>
        <View style={mb10}>
          <InputField
            value={validity}
            placeholder="Valid Thru(MM/YY)"
            keyboardType="numeric"
            maxLength={5}
            returnKeyType="next"
            onChangeText={(text) => {
              setValidity(text);
            }}
            setIsValid={(validity) => {
            }}
            validations={[
              {
                validationType: 'required',
                value: true,
                msg: 'This field is required'
              },
              {
                validationType: 'type',
                value: 'number',
                msg: 'This field must be number'
              }
            ]}
          />
        </View>
        <View style={mb10}>
          <InputField
            value={cvc}
            placeholder="CVC Number"
            keyboardType="numeric"
            maxLength={5}
            returnKeyType="next"
            onChangeText={(text) => {
              setCvc(text);
            }}
            setIsValid={(validity) => {
            }}
            validations={[
              {
                validationType: 'required',
                value: true,
                msg: 'This field is required'
              },
              {
                validationType: 'type',
                value: 'number',
                msg: 'This field must be number'
              }
            ]}
          />
        </View>
      </View>
    );
  };
  return (
    <TabWrapper
      tabTitle1="Bank Account"
      tabTitle2="Credit Card"
      tabSubtitle1="Please enter a valid bank account or credit card number that you hold"
      tabSubtitle2="Please enter the valid credit card information that you hold"
      tab1Components={BankAccountComponent()}
      tab2Components={CreditCardComponent()}
    />
  );
};
export default InputTabbed;
