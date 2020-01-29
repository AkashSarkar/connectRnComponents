import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import {
  array, bool, func, number, string
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';

const platform = Platform.OS;
const styles = StyleSheet.create({
  buttonWrapper: {
    // justifyContent: 'flex-start',
    alignItems: 'center'
    // borderRadius: 25,
    // paddingHorizontal: 10
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonPrimaryV2 = ({
  content,
  buttonColor = colors.primary,
  buttonHeight = 80,
  textColor,
  fontSize,
  onPress,
  disabled,
  disabledColor
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.buttonWrapper, {
      backgroundColor: buttonColor,
      paddingTop: platform === 'android' ? 0 : 12,
      height: buttonHeight,
      justifyContent: platform === 'android' ? 'center' : 'flex-start',
      flexDirection: 'row'
    }]}
    hitSlop={styles.hitSlop}
  >
    <TextComponent
      content={content}
      family={fonts.regular}
      size={fontSize}
      color={disabled ? disabledColor : textColor}
    />
  </TouchableOpacity>
);

ButtonPrimaryV2.propTypes = {
  content: string.isRequired,
  buttonColor: array.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  buttonHeight: number,
  onPress: func,
  disabled: bool,
  disabledColor: string
};


export default ButtonPrimaryV2;
