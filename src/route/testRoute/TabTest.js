import React from 'react';
import { View, Text } from 'react-native';
import { InputTabbed } from '../../component/widget';
import { TextComponent } from '../../component/ui';

const TabTest = () => {
  const tab1Components = () => (
    <View>
      <TextComponent content="Hello" />
      <TextComponent content="Hello" />
      <TextComponent content="Hello" />
    </View>
  );
  const tab2Components = () => (
    <View>
      <TextComponent content="There" />
      <TextComponent content="There" />
      <TextComponent content="There" />
      <TextComponent content="There" />
    </View>
  );

  return (
    <InputTabbed
      tab1Components={tab1Components()}
      tab2Components={tab2Components()}
      tabTitle1="Tab1"
      tabTitle2="Tab2"
    />
  );
};

export default TabTest;
