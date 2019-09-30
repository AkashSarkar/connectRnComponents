import React from 'react';
import { ScrollView, View } from 'react-native';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ButtonPrimary, TextComponent } from '../../component/ui';
import { mb10, mb20, ph15 } from '../../styles/commonStyle';
import assets from '../../assets';
import AccountList from '../../component/widget/card/AccountList';

const InteractiveTest = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={mb10}>
        <TextComponent
          size={fonts.fs30}
          color={colors.black0}
          content="Interactive"
          family={fonts.bold}
        />
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Split Test"
          onPress={() => navigation.navigate('SplitTest')}
        />
      </View>
      <View style={mb10}>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Fnf Test"
          onPress={() => navigation.navigate('FnfTest')}
        />
      </View>
      <View style={mb10}>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Notification Test"
          onPress={() => navigation.navigate('NotificationTest')}
        />
      </View>
      <View style={mb10}>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Limit Test"
          onPress={() => navigation.navigate('LimitTest')}
        />
      </View>
      <View style={mb10}>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Control Test"
          onPress={() => navigation.navigate('ControlTest')}
        />
      </View>
      <View style={mb10}>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Budget Test"
          onPress={() => navigation.navigate('BudgetTest')}
        />
      </View>
      <View style={mb10}>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="CCM Test"
          onPress={() => navigation.navigate('CCMTest')}
        />
      </View>
      <View style={mb10}>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="AccountList Test"
          onPress={() => navigation.navigate('AccountListTest')}
        />
      </View>
    </ScrollView>
  );
};

export default InteractiveTest;
