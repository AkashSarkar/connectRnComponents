import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, fonts, gradientColors} from '../../../styles/baseStyle';
import {mb10, mr20, mt5, pb15, ph20, pt10, pv10} from '../../../styles/commonStyle';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from '../../ui/typography/TextComponent';
import AmountWidget from "../../../utils/AmountWidget";
import {array, func, number, string} from 'prop-types';
import assets from '../../../assets';

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
    size: fonts.fs52,
    color: colors.black0
  };

  let decimalStyle = {
    fontFamily: fonts.regular,
    size: fonts.fs30,
    color: colors.black0
  };

  return (
    <LinearGradient colors={gradient} style={[styles.cardBg, mt5, pt10, pb15]}>
      <View style={[ph20, pv10]}>
        <View style={styles.header}>
          {/*TODO have to change icon   */}
          <TouchableOpacity onPress={handleInformation}>
            <Image
              style={[styles.informationIcon, mb10]}
              source={InfoImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={mr20}>
            {/*TODO have to change icon   */}
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
  informationIcon: {
    width: 20,
    height: 20,
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