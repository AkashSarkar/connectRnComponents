import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { ButtonPrimary } from '../../component/ui';
import { colors, gradientColors } from '../../styles/baseStyle';

const screenContainer = {
  height: '100%',
  flexDirection: 'column',
  paddingHorizontal: 10,
  justifyContent: 'space-between',
  paddingVertical: 10
};

const TestRoute = ({ navigation }) => (
  <SafeAreaView>
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
  </SafeAreaView>
);

export default TestRoute;
