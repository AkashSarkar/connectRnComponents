import React from 'react';
import {
  Platform, StyleSheet, TouchableOpacity, Image, View
} from 'react-native';
import {
  array, bool, func, number, string
} from 'prop-types';
import TextComponent from '../typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';

const platform = Platform.OS;
const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: colors.grey1,
    borderWidth: 1

  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonInfo = ({
  content,
  buttonHeight,
  textColor,
  fontSize,
  onPress,
  extraStyle
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.buttonWrapper, {
      paddingTop: platform === 'android' ? 0 : 12,
      height: buttonHeight
    }, extraStyle]}
    hitSlop={styles.hitSlop}
  >
    <TextComponent
      content={content}
      family={fonts.regular}
      size={fontSize}
      color={textColor}
    />

  </TouchableOpacity>
);


ButtonInfo.defaultProps = {
  content: 'Show Invoice Information',
  textColor: colors.primary,
  fontSize: fonts.fs14,
  buttonHeight: 50,
  onPress: () => ''
};

ButtonInfo.propTypes = {
  content: string,
  textColor: string,
  fontSize: number,
  buttonHeight: number,
  onPress: func,
  extraStyle: string
};


export default ButtonInfo;
