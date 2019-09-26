import React, { useState } from 'react';
import { View, Image } from 'react-native';
import {
  any, bool, func, number, string
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import { Input, TextComponent } from '../../ui';
import { p5, pr10, pr20, pr25 } from '../../../styles/commonStyle';
import assets from '../../../assets';
import InputField from './InputField';

const styles = {
  wrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  borderBottom: {
    borderBottomColor: colors.grey1,
    borderBottomWidth: 1
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%'
  }
}
const AmountChange = ({ title }) => {
  const [amount, setAmount] = useState(0);
  return (
    <View style={[styles.wrapperStyle]}>
      <TextComponent
        size={fonts.fs14}
        color={colors.primary2}
        content={title}
        family={fonts.medium}
      />
      <View style={[styles.amountWrapper, pr25]}>
        <Image source={assets.Minus} style={{ height: 30, width: 30 }}/>
        <InputField
          value={amount}
          keyboardType="numeric"
          maxLength={11}
          returnKeyType="next"
          onChangeText={(text) => {
            setAmount(text);
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
        <Image source={assets.Plus} style={{ height: 30, width: 30 }}/>
      </View>
    </View>
  );
}
AmountChange.propTypes = {
  title: string
}
export default AmountChange;
