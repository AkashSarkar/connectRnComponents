import React from 'react';
import {
  TouchableOpacity, View, StyleSheet, Platform, Image
} from 'react-native';
import {
  string, func, array, number, bool
} from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv10, pv25, mb10 } from '../../../styles/commonStyle';
// import assets from '';


const platform = Platform.OS;
const styles = StyleSheet.create({
  buttonWrapper: {
    // justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 2,
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

const FlatButtonV2 = ({
  content,
  buttonColor = colors.primary,
  buttonHeight = 30,
  textColor,
  fontFamily="ProximaNova",
  fontSize,
  onPress,
  disabled,
  disabledColor = colors.grey1
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.buttonWrapper, {
      // backgroundColor: disabled ? disabledColor : buttonColor,
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
    {/* <Image source={}/> */}
    
  </TouchableOpacity>
);

FlatButtonV2.propTypes = {
  content: string.isRequired,
  buttonColor: array.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  buttonHeight: number,
  onPress: func,
  disabled: bool,
  disabledColor: string,
  fontFamily: string,

};


export default FlatButtonV2;
