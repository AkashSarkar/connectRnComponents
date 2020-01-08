import React from 'react';
import {
  StyleSheet, TouchableOpacity, View, Platform
} from 'react-native';
import {
  number, string, func, bool
} from 'prop-types';
import { fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';

const platform = Platform.OS;

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  leftWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -1
  },
  middleWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonBorderV2 = ({
  content,
  contentMiddle,
  contentRight,
  buttonColor,
  textColorLeft,
  textColorMiddle,
  textColorRight,
  buttonHeight,
  fontSize,
  onPressLeft,
  onPressRight,
  inModal
}) => (
  <View
    style={[styles.buttonWrapper]}
    hitSlop={styles.hitSlop}
  >
    <TouchableOpacity
      onPress={onPressLeft}
      style={[styles.leftWrapper, {
        backgroundColor: buttonColor,
        paddingBottom: platform === 'android' ? 0 : 30,
        height: buttonHeight,
        borderBottomLeftRadius: inModal ? 15 : 0,
        justifyContent: platform === 'android' ? 'center' : 'flex-start'
      }]}
    >
      <TextComponent
        content={content}
        family={fonts.regular}
        size={fontSize}
        color={textColorLeft}
      />
    </TouchableOpacity>

    <View style={[styles.middleWrapper,
      {
        paddingBottom: platform === 'android' ? 0 : 30,
        backgroundColor: buttonColor,
        height: buttonHeight
      }]}
    >
      <TextComponent
        content={contentMiddle}
        family={fonts.regular}
        size={fontSize}
        color={textColorMiddle}
      />
    </View>


    <TouchableOpacity
      onPress={onPressRight}
      style={[styles.rightWrapper,
        {
          backgroundColor: buttonColor,
          paddingBottom: platform === 'android' ? 0 : 30,
          height: buttonHeight,
          borderBottomRightRadius: inModal ? 15 : 0,
          justifyContent: platform === 'android' ? 'center' : 'flex-start'
        }
      ]}
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

ButtonBorderV2.propTypes = {
  content: string.isRequired,
  contentRight: string.isRequired,
  contentMiddle: string.isRequired,
  buttonColor: string.isRequired,
  textColorLeft: string.isRequired,
  textColorMiddle: string.isRequired,
  textColorRight: string.isRequired,
  buttonHeight: number,
  fontSize: number,
  onPressLeft: func,
  onPressRight: func,
  inModal: bool
};


export default ButtonBorderV2;
