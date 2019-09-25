import React, { useState } from 'react';
import { View } from 'react-native';
import { BoxShadow } from '../../ui';
import { mb10, p10 } from '../../../styles/commonStyle';
import InputField from '../input/InputField';
import { colors } from '../../../styles/baseStyle';

const InputLabeled = () => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  return (
    <BoxShadow>
      <View style={p10}>
        <View style={mb10}>
          <InputField
            value={pin}
            label="6 Digit PIN Code"
            labelColor={colors.black}
            placeholder="Type here"
            placeholderTextColor={colors.grey1}
            keyboardType="numeric"
            maxLength={6}
            returnKeyType="next"
            secureTextEntry
            onChangeText={(text) => {
              setPin(text);
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
            value={confirmPin}
            label="Re-Enter 6 Digit PIN Code"
            labelColor={colors.black}
            placeholder="Type here"
            placeholderTextColor={colors.grey1}
            keyboardType="numeric"
            maxLength={6}
            returnKeyType="next"
            secureTextEntry
            onChangeText={(text) => {
              setConfirmPin(text);
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
    </BoxShadow>
  );
}
export default InputLabeled;
