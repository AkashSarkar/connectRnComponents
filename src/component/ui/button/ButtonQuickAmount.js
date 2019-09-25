import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { string, func, array, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv5 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
      width: 50,
      height: 30,
      flexDirection: 'row',  
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.colorSecondery
    },
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    },
    viewWrapper:{
      margin: 5
    }
  });

const ButtonQuickAmount = ({
    content, buttonColor, textColor, fontSize, onPress
}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonWrapper, {backgroundColor: buttonColor }]} hitSlop={styles.hitSlop}>
            <View style={styles.viewWrapper}>
                <TextComponent content={content} family={fonts.regular} size={fontSize} color={textColor} />
            </View>
        </View>
    </TouchableOpacity>
);

ButtonQuickAmount.propTypes = {
    content: string.isRequired,
    buttonColor: string.isRequired,
    textColor: string.isRequired,
    fontSize: number,
    onPress: func,
  };
  

export default ButtonQuickAmount;