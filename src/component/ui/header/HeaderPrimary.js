import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { string, array } from 'prop-types';
import ButtonSecondaryBadge from '../button/ButtonSecondaryBadge';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  rightViewWrapper: {
    flexDirection: 'row'
  }
});

const HeaderPrimary = ({ content, buttonItems }) => {
  const badgeButtons = buttonItems.map((item, index) => (
    <View key={index} style={styles.rightViewWrapper}>
      <ButtonSecondaryBadge
        content={item.content}
        buttonColor={item.buttonColor}
        badgeCount={item.badgeCount}
        textColorContent={item.textColorContent}
        textColorBadge={item.textColorBadge}
        fontSizeText={item.fontSizeText}
        fontSizeBadge={item.fontSizeBadge}
        onPress={item.onButtonClick}
      />
    </View>
  ));

  return (
    <View style={styles.container}>
      <TextComponent content={content} size={screenHeight >= 670 ? fonts.fs20 : fonts.fs14} color={colors.text1} />
      {badgeButtons}
    </View>
  );
};

HeaderPrimary.propTypes = {
  content: string.isRequired,
  buttonItems: array.isRequired
};

export default HeaderPrimary;
