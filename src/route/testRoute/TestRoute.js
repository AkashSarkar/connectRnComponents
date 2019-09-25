import React from 'react';
import {ScrollView} from 'react-native';
import {ButtonPrimary} from "../../component/ui";
import {colors, gradientColors} from "../../styles/baseStyle";

const screenContainer = {
  height: '100%',
  flexDirection: 'column',
  paddingLeft: 10,
  paddingRight: 10,
  justifyContent: 'space-between',
  paddingVertical: 10
};

const TestRoute = ({navigation}) => (
  <ScrollView contentContainerStyle={screenContainer}>
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="Swipeable Test"
      onPress={() => navigation.navigate('SwipeableWrapperTest')}
    />
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="ButtonTest"
      onPress={() => navigation.navigate('ButtonTest')}
    />
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="Test Account Slider Item"
      onPress={() => navigation.navigate('TestAccountSliderItem')}
    />
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="TabTest"
      onPress={() => navigation.navigate('TabTest')}
    />
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="PickerTest"
      onPress={() => navigation.navigate('PickerTest')}
    />
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="CardTest"
      onPress={() => navigation.navigate('CardTest')}
    />
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="InputTest"
      onPress={() => navigation.navigate('InputTest')}
    />
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="SwitchTest"
      onPress={() => navigation.navigate('SwitchTest')}
    />
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="Header Test"
      onPress={() => navigation.navigate('HeaderTest')}
    />
  </ScrollView>
);

export default TestRoute;
