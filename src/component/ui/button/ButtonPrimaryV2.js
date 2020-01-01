import React from 'react';
import { TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import {
  string, func, array, number, bool
} from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv10, pv25 } from '../../../styles/commonStyle';

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

const ButtonPrimary = ({
  content, buttonColor = colors.primary, buttonHeight = 80, textColor, fontSize, onPress, disabled
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.buttonWrapper, {
      backgroundColor: buttonColor,
      paddingTop: platform === 'android' ? 0 : 12,
      height: buttonHeight,
      justifyContent: platform === 'android' ? 'center' : 'flex-start'
    }]}
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

ButtonPrimary.propTypes = {
  content: string.isRequired,
  buttonColor: array.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  buttonHeight: number,
  onPress: func,
  disabled: bool
};


export default ButtonPrimary;
