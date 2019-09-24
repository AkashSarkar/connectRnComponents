import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { string, func, array, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import LinearGradient from 'react-native-linear-gradient';
import { pv15 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      ...pv15
    },
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  });

const ButtonGradientPrimary = ({
    content, buttonColor, textColor, fontSize, onPress
}) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={buttonColor} style={styles.buttonWrapper} hitSlop={styles.hitSlop}>
            <TextComponent content={content} family={fonts.regular} size={fontSize} color={textColor} />
        </LinearGradient>
    </TouchableOpacity>
);

ButtonGradientPrimary.propTypes = {
    content: string.isRequired,
    buttonColor: array.isRequired,
    textColor: string.isRequired,
    fontSize: number,
    onPress: func,
  };
  

export default ButtonGradientPrimary;
