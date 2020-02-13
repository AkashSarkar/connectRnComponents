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
    width: '100%',
    backgroundColor: 'white'
    // justifyContent:'space-between'
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
    borderColor: colors.white1,
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
  textColorMiddle,
  textColorRight,
  buttonHeight = 80,
  fontSize,
  onPressLeft,
  onPressRight,
  inModal,
  disabled
}) => (
    <View
      style={[styles.buttonWrapper]}
      hitSlop={styles.hitSlop}
    >
      <TouchableOpacity
        onPress={onPressLeft}
        style={{
          flex: 1,
          backgroundColor: buttonColor
        }}
        disabled={disabled}
      >
        <View style={[styles.buttonStyle, {
          borderBottomLeftRadius: inModal ? 15 : 0,
          height: buttonHeight
        }]}
        >
          <TextComponent
            content={contentLeft}
            family={fonts.regular}
            size={fontSize}
            color={disabled ? disabledColor : textColorLeft}
          />
        </View>
      </TouchableOpacity>

      {/* <View style={[styles.middleWrapper,
      {
        // marginTop: platform === 'android' ? 0 : 12,
        backgroundColor: buttonColor,
        // height: buttonHeight
      }]}
    >
      <TextComponent
        content={contentMiddle}
        family={fonts.regular}
        size={fontSize}
        color={textColorMiddle}
      />
    </View> */}
      <View style={[styles.borderWrapper, {
        marginTop: platform === 'android' ? 27 : 12
      }]}
      >
        <View style={styles.borderStyle} />
      </View>
      <TouchableOpacity
        onPress={onPressRight}
        style={{
          flex: 1,
          backgroundColor: buttonColor,
          borderBottomRightRadius: inModal ? 15 : 0,
          marginLeft: -1
        }}
      >
        <View style={[styles.buttonStyle, {
          borderBottomLeftRadius: inModal ? 15 : 0,
          height: buttonHeight
        }]}
        >
          <TextComponent
            content={contentRight}
            family={fonts.regular}
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
  disabledColor: string,
  buttonColor: string.isRequired,
  textColorLeft: string.isRequired,
  textColorRight: string.isRequired,
  buttonHeight: number,
  fontSize: number,
  onPressLeft: func,
  onPressRight: func,
  inModal: bool,
  disabled: bool
};


export default ButtonBorderV2;
