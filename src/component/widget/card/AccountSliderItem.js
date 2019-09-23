import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, fonts} from '../../../styles/baseStyle';
import {pt20, pb25, mt5, ml25, p10, mb10, p20, p40, mr5, mr10} from '../../../styles/commonStyle';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from '../../ui/typography/TextComponent';

const AccountSliderItem = ({suffixNo, amount, connectAcc}) => {
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
          <View style={mr10}>
            {/*TODO have to change icon   */}
            <Image
              style={{width: 35, height: 35}}
              source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />
          </View>
          <View>
            <TextComponent
              content={`Connect Suffix ${suffixNo}`}
              family={fonts.regular}
              size={fonts.fs12}
              color={colors.black0}
            />
            <TextComponent
              content={amount}
              family={fonts.regular}
              size={fonts.fs50}
              color={colors.black0}
            />
            <TextComponent
              content={connectAcc}
              family={fonts.semiBold}
              size={fonts.fs12}
              color={colors.black0}/>
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
  currencyIcon: {
    alignItems: "center",
    justifyContent: "center",
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
    // lineHeight: 61
  },
  connectAccNo: {
    // fontStyle: "italic",
    // letterSpacing: 1.8,
  }
});

export default AccountSliderItem