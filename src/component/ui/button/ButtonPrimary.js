import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {array, func, number, string} from 'prop-types';
import {fonts} from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import LinearGradient from 'react-native-linear-gradient';
import { pv10 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    ...pv10
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  }
});

const ButtonPrimary = ({content, buttonColor, textColor, fontSize, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient colors={buttonColor} style={styles.buttonWrapper} hitSlop={styles.hitSlop}>
      <TextComponent content={content} family={fonts.regular} size={fontSize} color={textColor} />
    </LinearGradient>
  </TouchableOpacity>
);

ButtonPrimary.propTypes = {
  content: string.isRequired,
  buttonColor: array.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  onPress: func
};


export default ButtonPrimary;
