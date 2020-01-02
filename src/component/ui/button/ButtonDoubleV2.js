import React from 'react';
import {
  StyleSheet, TouchableOpacity, View, Platform
} from 'react-native';
import {
  array, number, string, func, bool
} from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv10, pv25 } from '../../../styles/commonStyle';

const platform = Platform.OS;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
    // borderWidth: 0.2
    // elevation: 1
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
  content,
  contentRight,
  buttonColor = colors.primary,
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
        content={content}
        family={fonts.regular}
        size={fontSize}
        color={textColorLeft}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={onPressRight}
      style={styles.rightWrapper}
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
  content: string.isRequired,
  contentRight: string.isRequired,
  buttonColor: array.isRequired,
  textColorLeft: string.isRequired,
  textColorRight: string.isRequired,
  fontSize: number,
  onPressLeft: func,
  onPressRight: func,
  disabled: bool,
  disabledColor: string
};


export default ButtonDoubleV2;
