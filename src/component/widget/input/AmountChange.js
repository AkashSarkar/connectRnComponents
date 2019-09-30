import React, { useState, useEffect } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { string } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import { TextComponent } from '../../ui';
import { ml5, mr5, p10, ph10, pr25 } from '../../../styles/commonStyle';
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
    alignItems: 'space-around',
    width: '20%'
  },
  plusStyle: {
    height: 20,
    width: 20,
    borderRadius: 30,
    backgroundColor: colors.white1,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 1
  },
  minusStyle: {
    height: 20,
    width: 20,
    borderRadius: 30,
    backgroundColor: colors.white1,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 1
  }
};
const AmountChange = ({ title, value }) => {
  const [amount, setAmount] = useState(value);
  useEffect(() => {
    if (amount < 0) {
      setAmount(0);
    }
  }, [amount]);
  const increment = () => {
    setAmount(amount + 1);
  };
  const decrement = () => {
    console.log(amount);
    if (amount < 0) {
      setAmount(0);
    } else {
      setAmount(amount - 1);
    }
  };
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
          disabled={amount < 0}
        >
          <Image source={assets.Minus} style={styles.minusStyle}/>
        </TouchableOpacity>
        <View style={ph10}>
          <InputField
            value={String(amount)}
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
        </View>
        <TouchableOpacity
          onPress={() => increment()}
        >
          <Image source={assets.Plus} style={styles.plusStyle}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
AmountChange.propTypes = {
  title: string,
  value: string
};
export default AmountChange;
