import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { ButtonPrimary, FeatureWrapperV2 } from '../../component/ui';
import { colors, gradientColors } from '../../styles/baseStyle';
import assets from '../../assets';

const screenContainer = {
  height: '100%',
  flexDirection: 'column',
  paddingHorizontal: 10,
  justifyContent: 'space-between',
  paddingVertical: 10
};

const TestRoute = ({ navigation }) => (
  <FeatureWrapperV2
    title="TestRoute"
    backgroundColor={colors.white1}
    titleTextColor={colors.secondary}
    rightIcon={assets.CrossDark}
    style={{ flex: 1 }}
    rightPressAction={() => navigation.goBack()}
  >
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
        content="Widget/L1"
        onPress={() => navigation.navigate('WidgetL1Test')}
      />

      <ButtonPrimary
        buttonColor={gradientColors.gradient5}
        textColor={colors.bgPrimary}
        content="Widget/L2"
        onPress={() => navigation.navigate('WidgetL2Test')}
      />

      <ButtonPrimary
        buttonColor={gradientColors.gradient5}
        textColor={colors.bgPrimary}
        content="Widget/L3"
        onPress={() => navigation.navigate('WidgetL3Test')}
      />
      <ButtonPrimary
        buttonColor={gradientColors.gradient5}
        textColor={colors.bgPrimary}
        content="Picker Test"
        onPress={() => navigation.navigate('PickerTest')}
      />
    </ScrollView>
  </FeatureWrapperV2>
);

export default TestRoute;
