import React from 'react';
import {
  StyleSheet, TouchableOpacity, View, Platform, Image
} from 'react-native';
import {
  number, string, func, bool
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv10 } from '../../../styles/commonStyle';
import { SafeAreaView } from 'react-navigation';

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
  secondbuttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  secondWrapper: {
    // width: '50%',
    borderRadius: 10,
    // padding: 10,
    // width: 44,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'red',
    fontWeight: 'bold'
  },

  rightWrapper: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonDoubleWithIcon = ({
  contentLeft,
  contentRight,
  contentSecond,
  buttonColor,
  textColorLeft,
  textColorRight,
  buttonHeight,
  fontSize,
  onPressLeft,
  onPressRight,
  disabled,
  disabledColor = colors.grey1,
  tickImage
}) => (
  // <TouchableOpacity onPress={onPress}>
  <SafeAreaView>
  <View style={[styles.buttonWrapper]} hitSlop={styles.hitSlop}>
    <TouchableOpacity
      onPress={onPressLeft}
      style={[styles.leftWrapper, {
        backgroundColor: disabled ? disabledColor : buttonColor,
        paddingTop: platform === 'android' ? 0 : 12,
        height: buttonHeight,
        // justifyContent: platform === 'android' ? 'center' : 'flex-start'
      }]}
      disabled={disabled}
    >
      <Image
        source={tickImage}
        style={{
            height: 11.8,
            width: 11.8
        }}
        resizeMode="contain"
      />
      <TextComponent
        content={contentLeft}
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
      <Image
      source={tickImage}
      style={{
        height: 11.8,
        width: 11.8
      }}
      resizeMode="contain"
    />
    </TouchableOpacity>
  </View>
  <View style={[styles.secondbuttonWrapper]} hitSlop={styles.hitSlop}>
    <View style={{width: '50%'}}/>
    <TouchableOpacity
      onPress={onPressLeft}
      style={[styles.secondWrapper, {
        // backgroundColor: disabled ? disabledColor : buttonColor,
        paddingTop: platform === 'android' ? 0 : 12,
        height: buttonHeight,
        // justifyContent: platform === 'android' ? 'center' : 'flex-start'
      }]}
      disabled={disabled}
    >
      <TextComponent
        content={contentSecond}
        family={fonts.regular}
        size={fontSize}
        color={textColorLeft}
      />
    </TouchableOpacity>
  </View>
  </SafeAreaView>
);

ButtonDoubleWithIcon.propTypes = {
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


export default ButtonDoubleWithIcon;
