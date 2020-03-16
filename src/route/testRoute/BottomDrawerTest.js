import React from 'react';
import { View, Text } from 'react-native';
import { BottomDrawer } from '../../component/widget/interactive';
import { TextComponent, FeatureWrapperV2 } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';
import assets from '../../assets';

const BottomDrawerTest = ({ navigation }) => (
  <FeatureWrapperV2
    title=" Test"
    backgroundColor={colors.white1}
    titleTextColor={colors.secondary}
    rightIcon={assets.CrossDark}
    style={{ flex: 1 }}
    rightPressAction={() => navigation.goBack()}
  >
    <View style={{ flex: 1 }}>
      <BottomDrawer>
        <TextComponent
          color={colors.primary}
          content="Hellow"
          family={fonts.bold}
          size={fonts.fs14}
        />
        <TextComponent
          color={colors.primary}
          content="Hellow"
          family={fonts.bold}
          size={fonts.fs14}
        />
        <TextComponent
          color={colors.primary}
          content="Hellow"
          family={fonts.bold}
          size={fonts.fs14}
        />
        <TextComponent
          color={colors.primary}
          content="Hellow"
          family={fonts.bold}
          size={fonts.fs14}
        />
      </BottomDrawer>
    </View>
  </FeatureWrapperV2>
);

export default BottomDrawerTest;
