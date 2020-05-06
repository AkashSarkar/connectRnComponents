import React from 'react';
import {
  StyleSheet, TouchableOpacity, View, Platform
} from 'react-native';
import {
  number, string, func, bool
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';

const platform = Platform.OS;

const styles = {
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%'
  },
  buttonStyle: {
    alignItems: 'center',
    marginTop: platform === 'android' ? 0 : 12,
    justifyContent: platform === 'android' ? 'center' : 'flex-start'
  },
  borderWrapper: {
    position: 'absolute',
    left: '50%',
    zIndex: 1
  },
  borderStyle: {
    borderWidth: 2,
    borderRadius: 2,
    height: 25
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
};

const ButtonBorderV2 = ({
  contentLeft,
  contentRight,
  buttonColor,
  disabledColor,
  textColorLeft,
  textColorRight,
  buttonHeight = 80,
  fontSize,
  onPressLeft,
  onPressRight,
  inModal,
  disabled,
  value
}) => (
    <View
      style={[styles.buttonWrapper]}
      hitSlop={styles.hitSlop}
    >
      <TouchableOpacity
        onPress={inModal ? () => onPressLeft(value) : onPressLeft}
        style={{
          flex: 1,
          backgroundColor: buttonColor,
          borderBottomLeftRadius: inModal ? 15 : 0
        }}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <View style={[styles.buttonStyle, {
          borderBottomLeftRadius: inModal ? 15 : 0,
          height: buttonHeight
        }]}
        >
          <TextComponent
            content={contentLeft}
            family={fonts.medium}
            size={fontSize}
            color={disabled ? disabledColor : textColorLeft}
          />
        </View>
      </TouchableOpacity>
      <View style={[styles.borderWrapper, {
        marginTop: platform === 'android' ? (inModal ? 14 : 27) : 12
      }]}
      >
        <View style={[styles.borderStyle, { borderColor: inModal ? colors.red2 : colors.white1 }]} />
      </View>
      <TouchableOpacity
        onPress={onPressRight}
        style={{
          flex: 1,
          backgroundColor: buttonColor,
          borderBottomRightRadius: inModal ? 15 : 0,
          marginLeft: -1
        }}
        activeOpacity={0.8}
      >
        <View style={[styles.buttonStyle, {
          borderBottomRightRadius: inModal ? 15 : 0,
          height: buttonHeight
        }]}
        >
          <TextComponent
            content={contentRight}
            family={fonts.medium}
            size={fontSize}
            color={textColorRight}
          />
        </View>
      </TouchableOpacity>
    </View>
  );

ButtonBorderV2.propTypes = {
  contentLeft: string.isRequired,
  contentRight: string.isRequired,
  buttonColor: string,
  textColorLeft: string,
  textColorRight: string,
  buttonHeight: number,
  fontSize: number,
  onPressLeft: func,
  onPressRight: func,
  inModal: bool,
  disabled: bool,
  disabledColor: string,
  value: string
};


export default ButtonBorderV2;
