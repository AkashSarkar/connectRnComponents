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
    alignItems: 'center'

  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonSecondary = ({
  content,
  buttonColor,
  buttonHeight,
  textColor,
  fontSize,
  onPress,
  disabled,
  disabledColor = colors.grey1,
  isLeftIcon,
  isRightIcon,
  leftIcon,
  rightIcon,
  extraStyle
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.buttonWrapper, {
      backgroundColor: disabled ? disabledColor : buttonColor,
      paddingTop: platform === 'android' ? 0 : 12,
      height: buttonHeight,
      flexDirection: 'row'
    }, extraStyle]}
    hitSlop={styles.hitSlop}
  >
    {
      isLeftIcon && (
        <View style={{ paddingRight: 10 }}>
          <Image
            source={leftIcon}
            style={{
              height: 20,
              width: 20
            }}
            resizeMode="contain"
          />
        </View>
      )
    }

    <TextComponent
      content={content}
      family={fonts.regular}
      size={fontSize}
      color={textColor}
    />

    {
      isRightIcon && (
        <View style={{ paddingLeft: 10 }}>
          <Image
            source={rightIcon}
            style={{
              height: 20,
              width: 20
            }}
            resizeMode="contain"
          />
        </View>
      )
    }

  </TouchableOpacity>
);

ButtonSecondary.propTypes = {
  content: string.isRequired,
  buttonColor: array.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  buttonHeight: number,
  onPress: func,
  disabled: bool,
  disabledColor: string,
  isLeftIcon: bool,
  isRightIcon: bool,
  leftIcon: number,
  rightIcon: number,
  extraStyle: string
};


export default ButtonSecondary;
