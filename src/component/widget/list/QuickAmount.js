import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonQuickAmount from "../../ui/button/ButtonQuickAmount";
import {colors, fonts} from "../../../styles/baseStyle";
import {mv10, ph20} from "../../../styles/commonStyle";

const QuickAmount = ({amounts}) => {
  let renderAmounts = amounts.map((amount) => {
    return <ButtonQuickAmount
      content={`${amount}%`}
      buttonColor={colors.white1}
      textColor={colors.text2}
      fontSize={fonts.fs14}
      onPress={onPress}/>
  });

  const onPress = () => {
    alert("HELLO")
  };

  return (
    <View style={[styles.amountWrapper, ph20, mv10]}>
      {renderAmounts}
    </View>
  )
};

const styles = StyleSheet.create({
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default QuickAmount;