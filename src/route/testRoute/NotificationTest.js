import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Notification } from '../../component/widget/interactive';
import { TextComponent, BoxShadow, CarouselWrapper } from '../../component/ui';
import { fonts, colors, gradientColors } from '../../styles/baseStyle';
import assets from '../../assets';

const NotificationTest = () => {
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
    <View style={{ paddingTop: 15 }}>
      <CarouselWrapper componentArray={notifications()} />
    </View>
  );
};

export default NotificationTest;
