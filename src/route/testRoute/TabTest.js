import React from 'react';
import { View } from 'react-native';
import { TabWrapper } from '../../component/widget';
import { TextComponent } from '../../component/ui';

const TabTest = () => {
  const tab1Components = () => (
    <View>
      <TextComponent content="Hello"/>
      <TextComponent content="Hello"/>
      <TextComponent content="Hello"/>
    </View>
  );
  const tab2Components = () => (
    <View>
      <TextComponent content="There"/>
      <TextComponent content="There"/>
      <TextComponent content="There"/>
      <TextComponent content="There"/>
    </View>
  );

  return (
    <TabWrapper
      tab1Components={tab1Components()}
      tab2Components={tab2Components()}
      tabTitle1="Tab1"
      tabTitle2="Tab2"
    />
  );
};

export default TabTest;
