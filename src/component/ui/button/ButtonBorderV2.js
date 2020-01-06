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
    justifyContent: 'space-between',
    // borderWidth: 1
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
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  middleWrapper: {
    width: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },

  rightWrapper: {
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
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
}) => (
  // <TouchableOpacity onPress={onPress}>
  <View style={[styles.buttonWrapper]} hitSlop={styles.hitSlop}>
    <TouchableOpacity
      onPress={onPressLeft}
      style={[styles.leftWrapper, {
        backgroundColor: buttonColor,
        paddingBottom: platform === 'android' ? 0 : 30,
        height: buttonHeight,
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

    <View style={[styles.middleWrapper, {paddingBottom: platform === 'android' ? 0 : 30}, {backgroundColor: buttonColor}]}>
        <TextComponent
        content={contentMiddle}
        family={fonts.regular}
        size={fontSize}
        color={textColorMiddle}
        />
    </View>

    <TouchableOpacity
      onPress={onPressRight}
      style={[styles.rightWrapper, {backgroundColor: buttonColor}, {paddingBottom: platform === 'android' ? 0 : 30}]}
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
  buttonColor: string.isRequired,
  textColorLeft: string.isRequired,
  textColorMiddle: string.isRequired,
  textColorRight: string.isRequired,
  buttonHeight: number,
  fontSize: number,
  onPressLeft: func,
  onPressRight: func,
};


export default ButtonBorderV2;
