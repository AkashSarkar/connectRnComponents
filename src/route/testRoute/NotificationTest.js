import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Notification } from '../../component/widget/interactive';
import {
  TextComponent, BoxShadow, CarouselWrapper, FeatureWrapperV2
} from '../../component/ui';
import { fonts, colors, gradientColors } from '../../styles/baseStyle';
import assets from '../../assets';

const NotificationTest = ({ navigation }) => {
  const notifications = () => {
    const components = [];

    components.push(
      <Notification
        logo={assets.JamunaBankLogo1}
        content={`
                With Jamuna Bank Credit Card, get  desired home appliances at 5% discount from Rangs Electronics Ltd.
                Offer valid till August 12, 2019. 
                Helpline: 16221
                `}
        buttonTitle="Read More"
        footer="Jamuna Bank Ltd."
        bgColor={gradientColors.gradientPrimary}
        buttonColor={gradientColors.gradientPrimary}
        contentColor={colors.white1}
      />,
    );
    components.push(
      <Notification
        logo={assets.JamunaBankLogo1}
        content={`
                With Jamuna Bank Credit Card, get  desired home appliances at 5% discount from Rangs Electronics Ltd.
                Offer valid till August 12, 2019. 
                Helpline: 16221
                `}
        buttonTitle="Read More"
        footer="Jamuna Bank Ltd."

      />,
    );
    components.push(
      <Notification
        logo={assets.JamunaBankLogo1}
        content={`
                With Jamuna Bank Credit Card, get  desired home appliances at 5% discount from Rangs Electronics Ltd.
                Offer valid till August 12, 2019. 
                Helpline: 16221
                `}
        buttonTitle="Read More"
        footer="Jamuna Bank Ltd."
        bgColor={gradientColors.gradientYellow}
        buttonColor={gradientColors.gradientYellow}
      />,
    );

    return components;
  };

  return (
    <FeatureWrapperV2
      title=" Test"
      backgroundColor={colors.white1}
      titleTextColor={colors.secondary}
      rightIcon={assets.CrossDark}
      style={{ flex: 1 }}
      rightPressAction={() => navigation.goBack()}
    >
      <View style={{ paddingTop: 15 }}>
        <CarouselWrapper componentArray={notifications()} />
      </View>
    </FeatureWrapperV2>
  );
};

export default NotificationTest;
