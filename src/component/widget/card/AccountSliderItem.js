import React from 'react';
import {
  Image, StyleSheet, View
} from 'react-native';
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
    TakaImage = assets.Taka,
    suffixNo,
    amount,
    connectAcc,
    icon
  }
) => {
  const amountStyle = {
    fontFamily: fonts.light,
    size: fonts.fs44,
    color: activeIndex !== 3 ? textColor1 : textColor2
  };

  const decimalStyle = {
    fontFamily: fonts.light,
    size: fonts.fs44,
    color: activeIndex !== 3 ? textColor1 : textColor2
  };

  return (
    <View style={[ph15, pv15, mb15, styles.cardBg, { height: 170, justifyContent: 'space-evenly', backgroundColor: activeIndex !== 3 ? color1 : color2 }]}>
      <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>

        {/* For Future Use
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
          onPress={handleInformation}
        /> */}
        <Image
          source={icon}
          style={{
            height: 15,
            width: 100
          }}
          resizeMode="contain"
        />
      </View>

      <View>
        <View style={{ paddingLeft: 50 }}>
          <TextComponent
            content={`Connect Suffix ${suffixNo}`}
            family={fonts.regular}
            size={fonts.fs14}
            color={activeIndex !== 3 ? textColor1 : textColor2}
          />
        </View>
        <View style={[{ flexDirection: 'row' }, mv10]}>
          <View style={[{ justifyContent: 'center' }, mr15]}>
            <Image
              style={{ width: 34, height: 34 }}
              source={TakaImage}
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
              family={fonts.medium}
              size={fonts.fs16}
              color={activeIndex !== 3 ? textColor1 : textColor2}
            />
          </View>
          <TextComponent
            content="SAVINGS A/C"
            family={fonts.bold}
            size={fonts.fs12}
            // color={activeIndex !== 3 ? textColor1 : textColor2}
            color={colors.red2}
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
  // gradient: array,
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
  TakaImage: number
};

export default AccountSliderItem;
