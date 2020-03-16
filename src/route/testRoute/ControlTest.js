import React from 'react';
import { View } from 'react-native';
import { Control } from '../../component/widget';
import { FeatureWrapperV2 } from '../../component/ui';
import { colors } from '../../styles/baseStyle';
import assets from '../../assets';

const ControlTest = ({ navigation }) => (
  <FeatureWrapperV2
    title=" Test"
    backgroundColor={colors.white1}
    titleTextColor={colors.secondary}
    rightIcon={assets.CrossDark}
    style={{ flex: 1 }}
    rightPressAction={() => navigation.goBack()}
  >
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', padding: 60
    }}
    >
      <Control
        onSwipeLeft={() => console.warn('left')}
        onSwipeRight={() => console.warn('right')}
        onSwipeUp={() => console.warn('up')}
        onSwipeDown={() => console.warn('down')}
      />
    </View>
  </FeatureWrapperV2>
);

export default ControlTest;
