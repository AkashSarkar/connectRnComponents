import React from 'react';
import {
  StyleSheet, TouchableOpacity, View, Platform
} from 'react-native';
import {
  number, string, func, bool
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv10 } from '../../../styles/commonStyle';

const platform = Platform.OS;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonGradient: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    ...pv10
  },
  leftWrapper: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  rightWrapper: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonDoubleV2 = ({
  contentLeft,
  contentRight,
  buttonColor,
  textColorLeft,
  textColorRight,
  buttonHeight = 80,
  fontSize,
  onPressLeft,
  onPressRight,
  disabled,
  disabledColor = colors.grey1
}) => (
  // <TouchableOpacity onPress={onPress}>
  <View style={[styles.buttonWrapper]} hitSlop={styles.hitSlop}>
    <TouchableOpacity
      onPress={onPressLeft}
      style={[styles.leftWrapper, {
        backgroundColor: disabled ? disabledColor : buttonColor,
        paddingTop: platform === 'android' ? 0 : 12,
        height: buttonHeight,
        justifyContent: platform === 'android' ? 'center' : 'flex-start'
      }]}
      disabled={disabled}
    >
      <TextComponent
        content={contentLeft}
        family={fonts.regular}
        size={fontSize}
        color={textColorLeft}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={onPressRight}
      style={[styles.rightWrapper, {
        backgroundColor: colors.white1
      }]}
      disabled={disabled}
    >
      <TextComponent
        content={contentRight}
        family={fonts.regular}
        size={fontSize}
        color={textColorRight}
      />
    </TouchableOpacity>
  </View>
);

ButtonDoubleV2.propTypes = {
  contentLeft: string.isRequired,
  contentRight: string.isRequired,
  buttonColor: string.isRequired,
  textColorLeft: string.isRequired,
  textColorRight: string.isRequired,
  buttonHeight: number,
  fontSize: number,
  onPressLeft: func,
  onPressRight: func,
  disabled: bool,
  disabledColor: string
};


export default ButtonDoubleV2;
