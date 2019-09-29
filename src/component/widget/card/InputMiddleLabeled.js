import React, { useState } from 'react';
import { View } from 'react-native';
import { BoxShadow } from '../../ui';
import CardTitleWidget from '../title/CardTitleWidget';
import { mb10, p10, p15 } from '../../../styles/commonStyle';
import InputField from '../input/InputField';
import assets from '../../../assets';

const InputMiddleLabeled = () => {
  const [accountNumber, setAccountNumber] = useState('');
  return (
    <View style={p10}>
      <BoxShadow>
        <View style={p15}>
          <CardTitleWidget
            title="Mobile Number"
            subtitle="Please enter the mobile number that your bank account is registered with"
          />
          <View style={mb10}>
            <InputField
              value={accountNumber}
              placeholder="+880"
              keyboardType="numeric"
              maxLength={11}
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
              isIcon
              iconSource={assets.Check}
            />
          </View>
        </View>
      </BoxShadow>
    </View>
  );
};
export default InputMiddleLabeled;
