import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {
  string, func, array, number, bool
} from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv10 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    ...pv10,
    paddingHorizontal: 10
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonPrimary = ({
  content, buttonColor, textColor, fontSize, onPress, disabled
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
  >
    <LinearGradient
      colors={buttonColor}
      style={styles.buttonWrapper}
      hitSlop={styles.hitSlop}
    >
      <TextComponent
        content={content}
        family={fonts.regular}
        size={fontSize}
        color={textColor}
      />
    </LinearGradient>
  </TouchableOpacity>
);

ButtonPrimary.propTypes = {
  content: string.isRequired,
  buttonColor: array.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  onPress: func,
  disabled: bool
};


export default ButtonPrimary;
