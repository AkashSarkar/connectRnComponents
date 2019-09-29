import React from 'react';
import {StyleSheet, View} from 'react-native';
import {pb6} from "../styles/commonStyle";
import TextComponent from '../component/ui/typography/TextComponent';
import {number, object} from 'prop-types';

const AmountWidget = ({amount = 0, amountStyle = {}, decimalStyle = {}}) => {

  const styles = StyleSheet.create({
    amountTextWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    decimalWrapper: {
      alignSelf: 'flex-end',
    }
  });
  
  let givenAmount = parseFloat(amount).toFixed(2);
  givenAmount = givenAmount.split('.');
  let _amount = (givenAmount[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let _decimal = givenAmount[1];

  return (
    <View style={styles.amountTextWrapper}>
      <TextComponent
        content={_amount}
        family={amountStyle.fontFamily}
        size={amountStyle.size}
        color={amountStyle.color}
      />
      <View style={[styles.decimalWrapper, pb6]}>
        <TextComponent
          content={`.${_decimal}`}
          family={decimalStyle.fontFamily}
          size={decimalStyle.size}
          color={decimalStyle.color}
        />
      </View>
    </View>
  );
};
AmountWidget.propTypes = {
  amountStyle: object.isRequired,
  decimalStyle: object.isRequired,
  amount: number.isRequired
};
export default AmountWidget;
