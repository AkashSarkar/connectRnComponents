import React from 'react';
import { ScrollView, View } from 'react-native';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ButtonPrimary, TextComponent } from '../../component/ui';
import { mb10, mb20, ph15 } from '../../styles/commonStyle';
import assets from '../../assets';
import AccountList from '../../component/widget/card/AccountList';
import DragInfoTest from '../../component/widget/card/DragInfoTest';

const InteractiveTest = ({ navigation }) => {

  const accountData = [
    {
      accountName: 'Jamuna Bank',
      suffix: '12',
      accountNo: '4829 0921 8391 5243',
      accountType: 'Salary A/C',
      isSwitchOn: false,
      accountImage: assets.JamunaBankLogo1

    },
    {
      accountName: 'Jamuna Bank',
      suffix: '12',
      accountNo: '4829 0921 8391 5243',
      accountType: 'Salary A/C',
      isSwitchOn: false,
      accountImage: assets.Visa1
    },
    {
      accountName: 'Jamuna Bank',
      suffix: '12',
      accountNo: '2233 2922 2323 5252',
      accountType: 'Salary A/C',
      isSwitchOn: true,
      accountImage: assets.Visa2
    },
    {
      accountName: 'Jamuna Bank',
      suffix: '12',
      accountNo: '5498 0665 9691 7368',
      accountType: 'Salary A/C',
      isSwitchOn: true,
      accountImage: assets.Mastercard1
    },
    {
      accountName: 'Dmoney',
      suffix: '12',
      accountNo: '4829 0921 8391 5243',
      accountType: 'Dmoney',
      isSwitchOn: true,
      accountImage: assets.Dmoney2
    },
  ];

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

      <ButtonPrimary
        buttonColor={gradientColors.gradient5}
        textColor={colors.bgPrimary}
        content="Budget Test"
        onPress={() => navigation.navigate('DragRouteTest')}
      />
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
          onPress={() => navigation.navigate('DragInfoTest')}
        />
        <View style={[mb20, ph15]}>
          <TextComponent
            size={fonts.fs20}
            color={colors.secondary}
            content="interactive/AccountList"
            family={fonts.bold}
          />
          <DragInfoTest accounts={accountData} />
        </View>
      </View>
    </ScrollView>
  );
};

export default InteractiveTest;
