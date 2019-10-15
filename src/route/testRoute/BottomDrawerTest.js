import React from 'react';
import { View, Text } from 'react-native';
import { BottomDrawer } from '../../component/widget/interactive';
import { TextComponent } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';

const BottomDrawerTest = () => (
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
);

export default BottomDrawerTest;
