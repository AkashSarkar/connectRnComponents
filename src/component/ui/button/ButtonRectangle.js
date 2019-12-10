import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { string, func } from 'prop-types';
import TextComponent from '../typography/TextComponent';
import { fonts, colors } from '../../../styles/baseStyle';

const styles = {
  buttonStyle: {
    padding: 10,
    borderRadius: 6,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};
const ButtonRectangle = ({
  content, buttonColor, textColor, onPress
}) => (
  <TouchableOpacity
    style={[styles.buttonStyle, { backgroundColor: buttonColor || colors.black1 }]}
    onPress={onPress}
  >
    <View style={styles.textStyle}>
      <TextComponent
        content={content}
        size={fonts.fs24}
        color={textColor || colors.white1}
        family={fonts.medium}
      />
    </View>
  </TouchableOpacity>
);

ButtonRectangle.propTypes = {
  buttonColor: string,
  onPress: func,
  content: string.isRequired,
  textColor: string
};

export default ButtonRectangle;
