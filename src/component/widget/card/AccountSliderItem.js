import React from 'react';
import {
  Image, StyleSheet, View, Dimensions
} from 'react-native';
import {
  func, number, string
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import {
  mb15, mr15, ph15, pv15, mv10
} from '../../../styles/commonStyle';
import TextComponent from '../../ui/typography/TextComponent';
import AmountWidget from '../../../utils/AmountWidget';
import assets from '../../../assets';
import { ButtonCommunication } from '../../ui';

const styles = StyleSheet.create({
  cardBg: {
    borderRadius: 20
  },
  body: {
    alignItems: 'center'
    // flexDirection: "row",
  },
  connectAmount: {
    lineHeight: 61
  }

});

const AccountSliderItem = (
  {
    handleInformation,
    color1,
    color2,
    textColor1,
    textColor2,
    activeIndex,
    infoImage = assets.Info,
    connectImage = assets.ConnectCoin,
    suffixNo,
    amount,
    connectAcc,
    icon
  }
) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const amountStyle = {
    fontFamily: fonts.regular,
    size: screenHeight <= 720 ? fonts.fs40 : fonts.fs50,
    color: activeIndex !== 3 ? textColor1 : textColor2
  };

  const decimalStyle = {
    fontFamily: fonts.regular,
    size: screenHeight <= 720 ? fonts.fs40 : fonts.fs50,
    color: activeIndex !== 3 ? textColor1 : textColor2
  };

  return (
    <View style={[ph15, pv15, mb15, styles.cardBg, { height: 170, backgroundColor: activeIndex !== 3 ? color1 : color2 }]}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <ButtonCommunication
          logo={infoImage}
          buttonColor={colors.white1}
          buttonWidth={20}
          buttonHeight={20}
          buttonBorderRadius={10}
          iconHeight={20}
          iconWidth={20}
          textColor={colors.text2}
          fontSize={fonts.fs14}
          onPress={handleInformation}
        />
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
            size={fonts.fs12}
            color={activeIndex !== 3 ? textColor1 : textColor2}
          />
        </View>
        <View style={[{ flexDirection: 'row' }, mv10]}>
          <View style={[{ justifyContent: 'center' }, mr15]}>
            <Image
              style={{ width: 30, height: 30 }}
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
              size={fonts.fs12}
              color={activeIndex !== 3 ? textColor1 : textColor2}
            />
          </View>
          <TextComponent
            content="LOAN A/C"
            family={fonts.regular}
            size={fonts.fs12}
            color={activeIndex !== 3 ? textColor1 : textColor2}
          />
        </View>
      </View>
    </View>
  );
};
AccountSliderItem.propTypes = {
  handleInformation: func.isRequired,
  suffixNo: number.isRequired,
  amount: number.isRequired,
  connectAcc: string.isRequired,
  activeIndex: number,
  color1: string,
  color2: string,
  textColor1: string,
  textColor2: string,
  icon: number,
  infoImage: number,
  connectImage: number
};

export default AccountSliderItem;
