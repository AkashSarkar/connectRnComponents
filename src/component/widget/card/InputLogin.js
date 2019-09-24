import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextComponent } from '../../ui';
import { colors, fonts, gradientColors } from '../../../styles/baseStyle';
import InputField from '../input/InputField';
import { mb10, ml10 } from '../../../styles/commonStyle';
import LinearGradientWrapper from '../../ui/wrapper/LinearGradientWrapper';

const InputLogin = () => {
  const [connectID, setConnectID] = useState('');
  const [pin, setPin] = useState('');
  return (
    <LinearGradientWrapper gradient={gradientColors.gradientInputLogin}>
      <View style={mb10}>
        <InputField
          value={connectID}
          label="Connect ID"
          labelColor={colors.secondary}
          placeholder="Type here"
          placeholderTextColor={colors.grey1}
          keyboardType="numeric"
          maxLength={11}
          returnKeyType="next"
          onChangeText={(text) => {
            setConnectID(text);
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
          value={pin}
          label="6 Digit PIN"
          labelColor={colors.secondary}
          placeholder="Type here"
          placeholderTextColor={colors.grey1}
          keyboardType="numeric"
          maxLength={11}
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
      <View style={[mb10, ml10]}>
        <TouchableOpacity
          onPress={() => console.log('pressed')}
        >
          <TextComponent
            size={fonts.fs10}
            color={colors.red1}
            content="Forgot PIN?"
            family={fonts.medium}
          />
        </TouchableOpacity>
      </View>
    </LinearGradientWrapper>

  );
}
export default InputLogin;
