import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors, fonts, gradientColors} from '../../../styles/baseStyle';
import {mb15, mr15, ph15, pv15} from '../../../styles/commonStyle';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from '../../ui/typography/TextComponent';
import AmountWidget from "../../../utils/AmountWidget";
import {array, func, number, string} from 'prop-types';
import assets from '../../../assets';
import {ButtonCommunication} from "../../ui";

const AccountSliderItem = (
  {
    handleInformation,
    gradient = gradientColors.gradientYellow,
    InfoImage = assets.Info,
    connectImage = assets.ConnectCoin,
    suffixNo,
    amount,
    connectAcc
  }) => {
  let amountStyle = {
    fontFamily: fonts.regular,
    size: fonts.fs50,
    color: colors.black0
  };

  let decimalStyle = {
    fontFamily: fonts.regular,
    size: fonts.fs30,
    color: colors.black0
  };

  return (
    <LinearGradient colors={gradient} style={[styles.cardBg]}>
      <View style={[ph15, pv15, mb15]}>
        <ButtonCommunication
          logo={InfoImage}
          buttonColor={colors.white1}
          buttonWidth={20}
          buttonHeight={20}
          buttonBorderRadius={10}
          iconHeight={20}
          iconWidth={20}
          textColor={colors.text2}
          fontSize={fonts.fs14}
          onPress={handleInformation}/>
        <View style={[styles.body]}>
          <View style={mr15}>
            <Image
              style={{width: 35, height: 35}}
              source={connectImage}
            />
          </View>
          <View>
            <TextComponent
              content={`Connect Suffix ${suffixNo}`}
              family={fonts.regular}
              size={fonts.fs12}
              color={colors.black0}
            />
            <AmountWidget
              amount={amount}
              amountStyle={amountStyle}
              decimalStyle={decimalStyle}
            />
            <TextComponent
              content={connectAcc}
              family={fonts.bold}
              size={fonts.fs12}
              color={colors.black0}
              extraStyle={styles.connectAccNo}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  cardBg: {
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 1,
    borderRadius: 20
  },
  body: {
    alignItems: "center",
    flexDirection: "row",
  },
  connectAmount: {
    lineHeight: 61
  },
  connectAccNo: {
    fontStyle: "italic",
    letterSpacing: 1.8,
  }
});

AccountSliderItem.propTypes = {
  handleInformation: func.isRequired,
  gradient: array,
  suffixNo: number.isRequired,
  amount: number.isRequired,
  connectAcc: string.isRequired
};

export default AccountSliderItem