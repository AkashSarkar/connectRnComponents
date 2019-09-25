import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { string, func, array, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import LinearGradient from 'react-native-linear-gradient';
import { pv10 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      ...pv10
    },
    hitSlop: {
      top: 5,
      bottom: 5,
      left: 5,
      right: 5
    },
    leftViewWrapper: {
      marginRight: 15
    },
    rightViewWrapper: {
      alignItems: 'center',
      width: 35,
      borderRadius: 20,
      backgroundColor: 'red'
    },
  });

const ButtonPrimaryBadge = ({
    content, badgeCount, buttonColor, textColor, fontSizeText, fontSizeBadge, onPress
}) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={buttonColor} style={styles.buttonWrapper} hitSlop={styles.hitSlop}>
            <View style={styles.leftViewWrapper}>
                <TextComponent content={content} family={fonts.regular} size={fontSizeText} color={textColor} />
            </View>
            <View style={styles.rightViewWrapper}>
                <TextComponent content={badgeCount} family={fonts.regular} size={fontSizeBadge} color={textColor} />
            </View>
        </LinearGradient>
    </TouchableOpacity>
);

ButtonPrimaryBadge.propTypes = {
    content: string.isRequired,
    buttonColor: array.isRequired,
    textColor: string.isRequired,
    fontSizeText: number,
    fontSizeBadge: number,
    onPress: func,
  };
  

export default ButtonPrimaryBadge;
