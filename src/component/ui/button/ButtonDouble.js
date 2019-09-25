import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { string, func, array, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import LinearGradient from 'react-native-linear-gradient';
import { pv10, pv15 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 18,
        // elevation: 1,
        // shadowColor: colors.black1,
        // shadowOffset: {
        //     width: 0,
        //     height: 3
        // },
        // shadowRadius: 6,
        // shadowOpacity: 0.1,
        ...pv10
    },
    buttonLeft: {
      width: '50%',  
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      ...pv15
    },
    buttonRight: {
      width: '50%',  
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      ...pv15
    },
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  });

const ButtonDouble = ({
    content, buttonColor, textColorLeft, textColorRight, fontSize, onPress
}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonWrapper, {backgroundColor: buttonColor }]} hitSlop={styles.hitSlop}>
            <LinearGradient colors={buttonColor} style={styles.buttonLeft} hitSlop={styles.hitSlop}>
                <TextComponent content={content} family={fonts.regular} size={fontSize} color={textColorLeft} />
            </LinearGradient>
            <View style={styles.buttonRight}>
                <TextComponent content={content} family={fonts.regular} size={fontSize} color={textColorRight} />
            </View>
        </View>
    </TouchableOpacity>
);

ButtonDouble.propTypes = {
    content: string.isRequired,
    buttonColor: array.isRequired,
    textColorLeft: string.isRequired,
    textColorRight: string.isRequired,
    fontSize: number,
    onPress: func,
  };
  

export default ButtonDouble;
