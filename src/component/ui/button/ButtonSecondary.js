import React from 'react';
import {
  Platform, StyleSheet, TouchableOpacity, Image, View
} from 'react-native';
import {
  array, bool, func, number, string
} from 'prop-types';
import TextComponent from '../typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import assets from '../../../assets';

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
  buttonHeight,
  textColor,
  fontSize,
  onPress,
  disabled,
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
      family={fonts.bold}
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

ButtonSecondary.defaultProps = {
  content: 'Confirm',
  textColor: colors.white1,
  fontSize: number,
  buttonHeight: 80,
  onPress: () => '',
  disabled: false,
  isLeftIcon: false,
  isRightIcon: false,
  leftIcon: assets.Edit,
  rightIcon: assets.Add
};

ButtonSecondary.propTypes = {
  content: string,
  textColor: string,
  fontSize: number,
  buttonHeight: number,
  onPress: func,
  disabled: bool,
  isLeftIcon: bool,
  isRightIcon: bool,
  leftIcon: number,
  rightIcon: number,
  extraStyle: string
};


export default ButtonSecondary;
