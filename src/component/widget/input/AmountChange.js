import React, { useState, useEffect } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { string } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import { TextComponent } from '../../ui';
import { pr25 } from '../../../styles/commonStyle';
import assets from '../../../assets';
import InputField from './InputField';

const styles = {
  wrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
const AmountChange = ({ title, value }) => {
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setAmount(parseInt(value, 10));
    console.log(value);
  }, [value]);
  const increment = () => {
    setAmount(amount + 1);
  }
  const decrement = () => {
    if (!amount < 0) {
      setAmount(amount - 1);
    }
  }
  return (
    <View style={[styles.wrapperStyle]}>
      <TextComponent
        size={fonts.fs14}
        color={colors.primary2}
        content={title}
        family={fonts.medium}
      />
      <View style={[styles.amountWrapper, pr25]}>
        <TouchableOpacity
          onPress={() => decrement()}
        >
          <Image source={assets.Minus} style={{ height: 30, width: 30 }}/>
        </TouchableOpacity>
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
        <TouchableOpacity
          onPress={() => increment()}
        >
          <Image source={assets.Plus} style={{ height: 30, width: 30 }}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
AmountChange.propTypes = {
  title: string,
  value: string
}
export default AmountChange;
