import React from 'react';
import { View, Text } from 'react-native';
import { CarouselWrapper } from '../../component/ui';
import { fonts, colors, gradientColors } from '../../styles/baseStyle';
import assets from '../../assets';
import { Notification } from '../../component/widget/interactive';
import AccountSliderItem from '../../component/widget/card/AccountSliderItem';

const CCMTest = () => {
  const handleAccountSliderItem = () => {
    alert('AccountSliderItem');
  };
  const notifications = () => {
    const components = [];

    components.push(
      <AccountSliderItem
        handleInformation={handleAccountSliderItem}
        suffixNo={12}
        amount={125899.0}
        connectAcc="Loan Limit 5,00,000"
        textColor1={colors.white1}
      // gradient={colors.blue}
        color1="blue"
      // activeIndex={idx}
        icon={assets.JamunaBankLogo2}
      />
    );
    components.push(
      <AccountSliderItem
        handleInformation={handleAccountSliderItem}
        suffixNo={12}
        amount={125899.0}
        connectAcc="Loan Limit 5,00,000"
        textColor1={colors.white1}
      // gradient={colors.blue}
        color1="blue"
      // activeIndex={idx}
        icon={assets.JamunaBankLogo2}
      />
    );
    components.push(
      <AccountSliderItem
        handleInformation={handleAccountSliderItem}
        suffixNo={12}
        amount={125899.0}
        connectAcc="Loan Limit 5,00,000"
        textColor1={colors.white1}
      // gradient={colors.blue}
        color1="blue"
      // activeIndex={idx}
        icon={assets.JamunaBankLogo2}
      />
    );

    return components;
  };
  return (
    <View style={{ paddingTop: 15 }}>
      <CarouselWrapper
        activeIndex={2}
        componentArray={notifications()}
        isPagination
        isMaxWidth
      />
    </View>
  );
};

export default CCMTest;
