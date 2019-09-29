import React from 'react';
import { ScrollView } from 'react-native';
import { ButtonGradientPrimary, ButtonPrimary } from '../../component/ui';
import { colors, gradientColors } from '../../styles/baseStyle';

const screenContainer = {
  height: '100%',
  flexDirection: 'column',
  paddingHorizontal: 10,
  justifyContent: 'space-between',
  paddingVertical: 10
};

const TestRoute = ({ navigation }) => (
  <ScrollView contentContainerStyle={screenContainer}>

    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="UI Component"
      onPress={() => navigation.navigate('UIComponentTest')}
    />

    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="Interactive"
      onPress={() => navigation.navigate('InteractiveTest')}
    />

    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="Widget L/1"
      onPress={() => navigation.navigate('WidgetL1Test')}
    />

    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="Widget L/2"
      onPress={() => navigation.navigate('UIComponentTest')}
    />

    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="Widget L/3"
      onPress={() => navigation.navigate('WidgetL3Test')}
    />
    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="List Test"
      onPress={() => navigation.navigate('ListTest')}
    />
  </ScrollView>
);

export default TestRoute;
