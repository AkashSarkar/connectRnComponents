import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextComponent from "../../ui/typography/TextComponent";
import {colors, fonts} from "../../../styles/baseStyle";
import {ButtonCommunication} from "../../ui";
import assets from "../../../assets";
import {mr10, ph20, ph60, pt15, pt20, pv10, pv15, pv5} from "../../../styles/commonStyle";
import BoxShadow from "../../ui/wrapper/BoxShadow";
import AmountWidget from "../../../utils/AmountWidget";

const Checkout = ({onPressQuantity, totalAmount, checkoutSummary, totalQuantity}) => {

  let amountStyle = {
    fontFamily: fonts.bold,
    size: fonts.fs18,
    color: colors.black0
  };

  let decimalStyle = {
    fontFamily: fonts.bold,
    size: fonts.fs18,
    color: colors.black0
  };

  let renderInformation = checkoutSummary.map((info, index) => {
    return <View key={index} style={[styles.borderStyle, styles.wrapper, ph20, pv10]}>
      <TextComponent
        content={info.title}
        family={fonts.regular}
        size={fonts.fs12}
        color={colors.grey1}/>
      <TextComponent
        content={info.message}
        family={fonts.regular}
        size={fonts.fs12}
        color={colors.grey1}/>
    </View>
  });

  return (
    <View style={pv15}>
      <BoxShadow borderRadius={20}>
        <View style={[styles.wrapper, pv5, ph20]}>
          <TextComponent
            content="Quantity"
            family={fonts.bold}
            size={fonts.fs14}
            color={colors.black0}/>
          <View style={styles.totalCheckoutInfo}>
            <View style={[styles.borderStyle, styles.checkoutText, mr10]}>
              <TextComponent
                content={totalQuantity}
                family={fonts.light}
                size={fonts.fs12}
                color={colors.grey1}/>
            </View>
            <ButtonCommunication
              logo={assets.Check}
              buttonColor={colors.white1}
              buttonWidth={30}
              buttonHeight={30}
              buttonBorderRadius={15}
              iconHeight={30}
              iconWidth={30}
              textColor={colors.text2}
              fontSize={fonts.fs14}
              onPress={onPressQuantity}/>
          </View>
        </View>
      </BoxShadow>
      <View style={[pt20, ph60]}>
        {renderInformation}
        <View style={[styles.totalAmount, pt15]}>
          <AmountWidget
            amountStyle={amountStyle}
            decimalStyle={decimalStyle}
            amount={totalAmount}
            appendText="BDT "/>
        </View>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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


export default Checkout;