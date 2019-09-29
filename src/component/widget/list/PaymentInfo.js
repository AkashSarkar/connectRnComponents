import React from 'react';
import {ph20, pv10, pv25} from "../../../styles/commonStyle";
import TextComponent from "../../ui/typography/TextComponent";
import {colors, fonts} from "../../../styles/baseStyle";
import {StyleSheet, View} from "react-native";
import AmountWidget from "../../../utils/AmountWidget";

const PaymentInfo = ({paymentInformation, title, paymentDate, totalAmount}) => {

  let amountStyle = {
    fontFamily: fonts.regular,
    size: fonts.fs14,
    color: colors.grey1
  };

  let decimalStyle = {
    fontFamily: fonts.regular,
    size: fonts.fs14,
    color: colors.grey1
  };

  let totalAmountStyle = {
    fontFamily: fonts.bold,
    size: fonts.fs14,
    color: colors.black0
  };

  let totalDecimalStyle = {
    fontFamily: fonts.bold,
    size: fonts.fs14,
    color: colors.black0
  };


  let renderInformation = paymentInformation.map((info, index) => {
    return <View key={index} style={[styles.wrapper]}>
      <TextComponent
        content={info.title}
        family={fonts.regular}
        size={fonts.fs14}
        color={colors.black0}/>
      <AmountWidget
        amount={info.amount}
        amountStyle={amountStyle}
        decimalStyle={decimalStyle}/>
    </View>
  });

  return (
    <View>
      <View style={[styles.borderStyle, styles.wrapper]}>
        <TextComponent
          content={title}
          family={fonts.bold}
          size={fonts.fs16}
          color={colors.black0}/>
        <TextComponent
          content={paymentDate}
          family={fonts.regular}
          size={fonts.fs14}
          color={colors.black0}/>
      </View>

      <View style={[pv25, styles.borderStyle]}>
        {renderInformation}
      </View>

      <View style={styles.wrapper}>
        <TextComponent
          content="Total Amount"
          family={fonts.bold}
          size={fonts.fs14}
          color={colors.black0}/>
        <AmountWidget
          amount={totalAmount}
          decimalStyle={totalAmountStyle}
          amountStyle={totalAmountStyle}/>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...ph20,
    ...pv10
  },
  totalCheckoutInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderStyle: {
    borderBottomColor: colors.grey1,
    borderBottomWidth: 1,
  },
  checkoutText: {
    alignItems: 'center'
  },
  totalAmount: {
    alignItems: 'flex-end'
  }
});

export default PaymentInfo;