import React from 'react';
import {ScrollView} from 'react-native';
import {ButtonPrimary} from "../../component/ui";
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {colors, gradientColors} from "../../styles/baseStyle";
import {ph10, pv10} from "../../styles/commonStyle";

const screenContainer = {
  height: '100%',
  // flexDirection: 'column',
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
      content="UI Component"
      onPress={() => navigation.navigate('UIComponentTest')}
    />

    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="Interactive"
      onPress={() => navigation.navigate('UIComponentTest')}
    />

    <ButtonPrimary
      buttonColor={gradientColors.gradient5}
      textColor={colors.bgPrimary}
      content="Widget L/1"
      onPress={() => navigation.navigate('UIComponentTest')}
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
      onPress={() => navigation.navigate('UIComponentTest')}
    />

  </ScrollView>
);

export default TestRoute;
