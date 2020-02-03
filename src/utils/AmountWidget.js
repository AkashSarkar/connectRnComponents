import React from 'react';
import { StyleSheet, View } from 'react-native';
import { string, number, object } from 'prop-types';
import { pb6 } from '../styles/commonStyle';
import TextComponent from '../component/ui/typography/TextComponent';

const AmountWidget = ({
  appendText, amount, amountStyle, decimalStyle
}) => {
  const styles = StyleSheet.create({
    amountTextWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    decimalWrapper: {
      alignSelf: 'flex-end'
    }
  });

  let givenAmount = parseFloat(amount).toFixed(2);
  givenAmount = givenAmount.split('.');
  const _amount = (givenAmount[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const _decimal = givenAmount[1];

  return (
    <View style={styles.amountTextWrapper}>

      {appendText !== '' ? (
        <TextComponent
          content={appendText}
          family={amountStyle.fontFamily}
          size={amountStyle.size}
          color={amountStyle.color}
        />
      ) : ''}

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
  appendText: string,
  amountStyle: object.isRequired,
  decimalStyle: object.isRequired,
  amount: number.isRequired
};

AmountWidget.defaultProps = {
  amount: 0,
  amountStyle: {},
  decimalStyle: {}
};

export default AmountWidget;
