import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FabButton, TextComponent } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';
import assets from '../../assets';
import { p15 } from '../../styles/commonStyle';

const styles = StyleSheet.create({
  wrapper: {
    // position: 'absolute',
    // bottom: 0,
    // flex: 1,
    top: '85%',
    height: '12%',
    width: '100%',
    backgroundColor: colors.black,
    // zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {}

});
const BottomMenu = () => {
  const resetPin = () => {
    console.warn('resetPin');
  };
  const termsOfAgreement = () => {
    console.warn('termsOfAgreement');
  };
  const instructions = () => {
    console.warn('instructions');
  };
  const businessProfile = () => {
    console.warn('businessProfile');
  };
  const languageChange = () => {
    console.warn('languageChange');
  };
  const scan = () => {
    console.warn('Scan');
  };
  const nfc = () => {
    console.warn('Nfc');
  };
  const rightActions = [
    {
      func: scan,
      translate: 100,
      icon: assets.HandQRCode,
      text: 'Scan NFC'
    },
    {
      func: nfc,
      translate: 160,
      icon: assets.Nfc,
      text: 'Scan QR Code'
    }
  ];
  const leftActions = [
    {
      func: termsOfAgreement,
      translate: 100,
      icon: assets.Search,
      text: 'Terms of agreement'
    }, {
      func: instructions,
      translate: 160,
      icon: assets.Search,
      text: 'Instructions'
    }, {
      func: businessProfile,
      translate: 220,
      icon: assets.Search,
      text: 'Business Profile'
    }, {
      func: languageChange,
      translate: 280,
      icon: assets.Search,
      text: 'English'
    }, {
      func: resetPin,
      translate: 340,
      icon: assets.Search,
      text: 'Re-Set Pin'
    }
  ];

  return (
    <View style={[styles.wrapper, p15]}>
      <FabButton
        childrenButtons={leftActions}
        background={colors.secondary}
        parentIcon={assets.Plus}
      />
      <TextComponent
        content="Menu"
        size={fonts.fs14}
        family={fonts.regular}
        color={colors.white}
      />
      <FabButton
        childrenButtons={rightActions}
        background={colors.secondary}
        parentIcon={assets.Plus}
        right
      />
    </View>
  );
};
export default BottomMenu;
