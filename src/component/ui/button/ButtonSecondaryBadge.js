import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { string, func, array, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv5 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
      width: 80,
      height: 25,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      ...pv5,
    },
    hitSlop: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5
      },
    leftViewWrapper: {
        marginRight: 10
    },
    rightViewWrapper: {
        alignItems: 'center',
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: 'red',
        position: 'absolute',
        right: 0,
        bottom: 15
      },
  });

const ButtonSecondaryBadge = ({
    content, buttonColor, textColorContent, textColorBadge, fontSizeText,fontSizeBadge, badgeCount, onPress
}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonWrapper, {backgroundColor: buttonColor }]} hitSlop={styles.hitSlop}>
            <View style={styles.leftViewWrapper}>
                <TextComponent content={content} family={fonts.regular} size={fontSizeText} color={textColorContent} />
            </View>
            <View style={styles.rightViewWrapper}>
                <TextComponent content={badgeCount} family={fonts.regular} size={fontSizeBadge} color={textColorBadge} />
            </View>
        </View>
    </TouchableOpacity>
);

ButtonSecondaryBadge.propTypes = {
    content: string.isRequired,
    buttonColor: string.isRequired,
    textColorContent: string.isRequired,
    textColorBadge: string.isRequired,
    fontSizeText: number,
    fontSizeBadge: number,
    badgeCount: string,
    onPress: func,
  };
  

export default ButtonSecondaryBadge;