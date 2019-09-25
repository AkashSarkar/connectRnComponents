import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TextComponent} from "../../ui";
import {colors, fonts} from "../../../styles/baseStyle";
import SwitchComponent from "../../ui/input/SwitchComponent";
import {ph10, pv10} from "../../../styles/commonStyle";

const AccountListItem = ({onSwitchChange, accountInformation, switchIsOn}) => {

  return (
    <View style={[styles.wrapper, pv10, ph10]}>
      <Image
        style={styles.iconStyle}
        source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
      />
      <Image
        style={styles.AccountLogoStyle}
        source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
      />
      <View>
        <TextComponent
          size={fonts.fs12}
          color={colors.black0}
          content={accountInformation.accountName}
          family={fonts.regular}/>
        <TextComponent
          size={fonts.fs12}
          color={colors.black0}
          content={`Connect Suffix ${accountInformation.suffix}`}
          family={fonts.regular}/>
        <TextComponent
          size={fonts.fs12}
          color={colors.black0}
          content={accountInformation.accountNo}
          family={fonts.bold}/>
        <TextComponent
          size={fonts.fs12}
          color={colors.red1}
          content={accountInformation.accountType}
          family={fonts.bold}/>
      </View>
      <Image
        style={styles.iconStyle}
        source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
      />
      <SwitchComponent isOn={switchIsOn} onValueChange={onSwitchChange}/>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    height: 20,
    width: 20
  },
  AccountLogoStyle: {
    height: 70,
    width: 112
  }
});

export default AccountListItem;