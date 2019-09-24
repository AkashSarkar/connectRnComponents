import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors, fonts} from '../../../styles/baseStyle';
import {mb10, mr20, mt5, p20, pb25, pt20} from '../../../styles/commonStyle';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from '../../ui/typography/TextComponent';
import AmountWidget from "../../../utils/AmountWidget";


const AccountSliderItem = ({suffixNo, amount, connectAcc}) => {

  let amountStyle = {
    fontFamily: fonts.regular,
    size: fonts.fs52,
    color: colors.black0
  };

  let decimalStyle = {
    fontFamily: fonts.regular,
    size: fonts.fs26,
    color: colors.black0
  };

  let _number = 1222222.45;

  return (
    <LinearGradient colors={colors.gradient3} style={[styles.cardBg, mt5, pt20, pb25]}>
      <View style={[p20]}>
        <View style={styles.header}>
          {/*TODO have to change icon   */}
          <Image
            style={[styles.informationIcon, mb10]}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
          />
        </View>
        <View style={styles.body}>
          <View style={mr20}>
            {/*TODO have to change icon   */}
            <Image
              style={{width: 35, height: 35}}
              source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />
          </View>
          <View>
            <TextComponent
              content={`Connect Suffix 12`}
              family={fonts.regular}
              size={fonts.fs12}
              color={colors.black0}
            />
            <AmountWidget
              amount={_number}
              amountStyle={amountStyle}
              decimalStyle={decimalStyle}
            />
            <TextComponent
              content="9999 99 9 9 9"
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

export default AccountSliderItem