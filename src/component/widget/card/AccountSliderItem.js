import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  array, func, number, string
} from 'prop-types';
import { colors, fonts, gradientColors } from '../../../styles/baseStyle';
import {
  mb15, mr15, ph15, pv15, mv10
} from '../../../styles/commonStyle';
import TextComponent from '../../ui/typography/TextComponent';
import AmountWidget from '../../../utils/AmountWidget';
import assets from '../../../assets';
import { ButtonCommunication } from '../../ui';

const AccountSliderItem = (
  {
    handleInformation,
    // gradient = gradientColors.gradientYellow,
    color1,
    color2,
    textColor1,
    textColor2,
    activeIndex,
    InfoImage = assets.Info,
    connectImage = assets.ConnectCoin,
    suffixNo,
    amount,
    connectAcc,
    icon
  }
) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const amountStyle = {
    fontFamily: fonts.regular,
    size: (screenHeight >= 800 && screenWidth >= 800) ? fonts.fs120 : screenWidth >= 500 ? fonts.fs70 : screenHeight <= 670 ? fonts.fs36 : screenHeight <= 720 ? fonts.fs40 : screenHeight <= 750 ? fonts.fs50 : fonts.fs50,
    color: activeIndex !== 3 ? textColor1 : textColor2
  };

  const decimalStyle = {
    fontFamily: fonts.regular,
    size: (screenHeight >= 800 && screenWidth >= 800) ? fonts.fs120 : screenWidth >= 500 ? fonts.fs70 : screenHeight <= 670 ? fonts.fs36 : screenHeight <= 720 ? fonts.fs40 : screenHeight <= 750 ? fonts.fs50 : fonts.fs50,
    color: activeIndex !== 3 ? textColor1 : textColor2
  };

  return (
    <View style={[ph15, pv15, mb15, styles.cardBg, { backgroundColor: activeIndex !== 3 ? color1 : color2 }]}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <ButtonCommunication
          logo={InfoImage}
          buttonColor={colors.white1}
          buttonWidth={screenWidth >= 500 ? 30 : 20}
          buttonHeight={screenWidth >= 500 ? 30 : 20}
          buttonBorderRadius={screenWidth >= 500 ? 15 : 10}
          iconHeight={screenWidth >= 500 ? 30 : 20}
          iconWidth={screenWidth >= 500 ? 30 : 20}
          textColor={colors.text2}
          fontSize={fonts.fs14}
          onPress={handleInformation}
        />
        <Image
          source={icon}
          style={{
            height: screenWidth >= 500 ? 22.5 : 15,
            width: screenWidth >= 500 ? 150 : 100
          }}
          resizeMode="contain"
        />
      </View>

      <View>
        <View style={{ paddingLeft: 50 }}>
          <TextComponent
            content={`Connect Suffix ${suffixNo}`}
            family={fonts.regular}
            size={screenWidth <= 500 ? fonts.fs12 : fonts.fs24}
            color={activeIndex !== 3 ? textColor1 : textColor2}
          />
        </View>
        <View style={[{ flexDirection: 'row' }, mv10]}>
          <View style={[{ justifyContent: 'center' }, mr15]}>
            <Image
              style={screenWidth >= 500 ? { width: 45, height: 45 } : { width: 30, height: 30 }}
              source={connectImage}
            />
          </View>

          <AmountWidget
            amount={amount}
            amountStyle={amountStyle}
            decimalStyle={decimalStyle}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ paddingLeft: 50 }}>
            <TextComponent
              content={connectAcc}
              family={fonts.regular}
              size={screenWidth <= 500 ? fonts.fs12 : fonts.fs24}
              color={activeIndex !== 3 ? textColor1 : textColor2}
            />
          </View>
          <TextComponent
            content="LOAN A/C"
            family={fonts.regular}
            size={screenWidth <= 500 ? fonts.fs12 : fonts.fs24}
            color={activeIndex !== 3 ? textColor1 : textColor2}
          />
        </View>
      </View>
    </View>
  );
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
    alignItems: 'center'
    // flexDirection: "row",
  },
  connectAmount: {
    lineHeight: 61
  }
  // connectAccNo: {
  //   fontStyle: "italic",
  //   letterSpacing: 1.8,
  // }
});

AccountSliderItem.propTypes = {
  handleInformation: func.isRequired,
  gradient: array,
  suffixNo: number.isRequired,
  amount: number.isRequired,
  connectAcc: string.isRequired,
  activeIndex: number,
  color1: string,
  color2: string,
  textColor1: string,
  textColor2: string,
  icon: number,
  InfoImage: number,
  connectImage: number
};

export default AccountSliderItem;
