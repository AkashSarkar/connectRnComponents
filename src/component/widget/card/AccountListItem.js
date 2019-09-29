import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { func, object } from 'prop-types';
import { ButtonCommunication, TextComponent } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';
import SwitchComponent from '../../ui/input/SwitchComponent';
import { pv10, pv5 } from '../../../styles/commonStyle';
import assets from '../../../assets';
import Switch from '../../ui/input/Switch';

const AccountListItem = (
  {
    onSwitchChange,
    accountImage,
    infoIcon,
    dragIcon,
    onIconPress,
    accountInformation
  }
) => (
  <View style={[styles.wrapper, pv10]}>
    <ButtonCommunication
      logo={dragIcon}
      buttonColor={colors.white1}
      buttonWidth={20}
      buttonHeight={20}
      buttonBorderRadius={10}
      iconHeight={15}
      iconWidth={15}
      textColor={colors.text2}
      fontSize={fonts.fs14}
      onPress={onIconPress}
    />
    <View style={styles.accountLogoWrapper}>
      <Image
        style={styles.AccountLogoStyle}
        source={accountImage}
      />
    </View>
    <View style={styles.accountInformationWrapper}>
      <TextComponent
        size={fonts.fs12}
        color={colors.black0}
        content={accountInformation.accountName}
        family={fonts.regular}
      />
      <TextComponent
        size={fonts.fs12}
        color={colors.black0}
        content={`Connect Suffix ${accountInformation.suffix}`}
        family={fonts.regular}
      />
      <TextComponent
        size={fonts.fs12}
        color={colors.black0}
        content={accountInformation.accountNo}
        family={fonts.bold}
      />
      <TextComponent
        size={fonts.fs12}
        color={colors.red1}
        content={accountInformation.accountType}
        family={fonts.bold}
      />
    </View>
    <ButtonCommunication
      logo={infoIcon}
      buttonColor={colors.white1}
      buttonWidth={30}
      buttonHeight={30}
      buttonBorderRadius={15}
      iconHeight={20}
      iconWidth={20}
      textColor={colors.text2}
      fontSize={fonts.fs14}
      onPress={onIconPress}
    />
    <Switch
      value={accountInformation.isSwitchOn}
      onChange={onSwitchChange}
      thumbColor={colors.secondary}
      trackColor={colors.white1}
    />

  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  accountInformationWrapper: {
    marginRight: 5
  },
  accountLogoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    ...pv5,
    elevation: 1,
    shadowColor: colors.black1,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 1
  },
  AccountLogoStyle: {
    height: 50,
    width: 75,
    resizeMode: 'contain',
    padding: 5
  }
});

AccountListItem.propTypes = {
  accountInformation: object.isRequired,
  onSwitchChange: func.isRequired,
  onIconPress: func.isRequired
};

AccountListItem.defaultProps = {
  accountImage: assets.JamunaBankLogo1,
  infoIcon: assets.Info2,
  dragIcon: assets.Drag
};

export default AccountListItem;
