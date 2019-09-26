import React from 'react';
import {
  TouchableOpacity, StyleSheet, View, Image
} from 'react-native';
import {
  string, func, array, number
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv5 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 150,
    height: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    ...pv5,
    elevation: 1,
    shadowColor: colors.black1,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonTag = ({
  content, buttonColor, textColor, fontSize, onPress
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.buttonWrapper, { backgroundColor: buttonColor }]} hitSlop={styles.hitSlop}>
      <TextComponent content={content} family={fonts.regular} size={fontSize} color={textColor} />
    </View>
  </TouchableOpacity>
);

ButtonTag.propTypes = {
  content: string.isRequired,
  buttonColor: string.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  onPress: func
};


export default ButtonTag;
