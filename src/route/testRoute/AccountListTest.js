import React from 'react';
import { View } from 'react-native';
import { mb20, ph15 } from '../../styles/commonStyle';
import { TextComponent, FeatureWrapperV2 } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';
import AccountList from '../../component/widget/card/AccountList';
import assets from '../../assets';

const AccountListTest = ({ navigation }) => {
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
    }
  ];
  return (
    <FeatureWrapperV2
      title="Input"
      backgroundColor={colors.white1}
      titleTextColor={colors.secondary}
      rightIcon={assets.CrossDark}
      style={{ flex: 1 }}
      rightPressAction={() => navigation.goBack()}
    >
      <View style={[mb20, ph15]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="interactive/AccountList"
          family={fonts.bold}
        />
        <AccountList accounts={accountData} />
      </View>
    </FeatureWrapperV2>

  );
};
export default AccountListTest;
