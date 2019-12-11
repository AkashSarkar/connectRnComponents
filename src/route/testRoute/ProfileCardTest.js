import React from 'react';
import { View } from 'react-native';
import { TextComponent } from '../../component/ui';
import ProfileCard from '../../component/widget/card/ProfileCard';
import { pb10, p10 } from '../../styles/commonStyle';
import { fonts, colors, gradientColors } from '../../styles/baseStyle';
import assets from '../../assets';

const PickerTest = () => {
  const leftPress = () => {
    console.log('left press');
  };
  const rightPress = () => {
    console.log('right press');
  }
  return (
    <View style={[pb10, p10]}>
      <TextComponent
        size={fonts.fs20}
        color={colors.secondary}
        content="widget/card/ProfileCard"
        family={fonts.bold}
      />
      <ProfileCard
        leftGradient={gradientColors.gradient4}
        rightGradient={gradientColors.gradient3}
        logo={assets.Bkash}
        title="Bismillah Store"
        connectId="1234 1700 2001 1"
        leftButtonColor={gradientColors.gradient5}
        rightButtonColor={gradientColors.gradient5}
        onLeftPress={() => leftPress()}
        onRightPress={() => rightPress()}
        leftButtonText="Location"
        rightButtonText="QR Code"
        badge={assets.Bronze}
        badgeTitle="Bronze"
      />
    </View>
  );
};

export default PickerTest;
