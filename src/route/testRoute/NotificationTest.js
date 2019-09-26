import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Notification } from '../../component/widget/interactive';
import { TextComponent, BoxShadow, CarouselWrapper } from '../../component/ui';
import { fonts, colors } from '../../styles/baseStyle';
import assets from '../../assets';

const NotificationTest = () => {
  const notifications = () => {
    const components = [];

    components.push(
      <Notification
        logo={assets.AUX_Logo}
        content={`
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                `}
        buttonTitle="Read More"
        footer="Jamuna Bank"
      />
    );
    components.push(
      <Notification
        logo={assets.AUX_Logo}
        content={`
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                `}
        buttonTitle="Read More"
        footer="Jamuna Bank"
      />
    );
    components.push(
      <Notification
        logo={assets.AUX_Logo}
        content={`
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                `}
        buttonTitle="Read More"
        footer="Jamuna Bank"
      />
    );

    return components;
  };

  return (
    <View style={{ paddingTop: 15 }}>
      <CarouselWrapper
        componentArray={notifications()}
      />
    </View>
  );
};

export default NotificationTest;
