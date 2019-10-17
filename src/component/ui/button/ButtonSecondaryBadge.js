import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { string, func, number } from 'prop-types';
import { fonts, colors } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv8, mh10, mh5, ph10, ph5 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
      width: 80,
      height: 25,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      ...pv8
    },
    hitSlop: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5
    },
    rightViewWrapper: {
        alignItems: 'center',
        height: 18,
        width: 18,
        borderRadius: 9,
        backgroundColor: 'red',
        position: 'absolute',
        right: -3,
        bottom: 15,
        padding: 2
      },
  });

const ButtonSecondaryBadge = ({
    content, buttonColor, textColorContent, textColorBadge, fontSizeText,fontSizeBadge, badgeCount, onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.buttonWrapper, {backgroundColor: buttonColor }]} hitSlop={styles.hitSlop}>
                <View>
                    <TextComponent 
                        content={content} 
                        family={fonts.regular} 
                        size={fontSizeText} 
                        color={textColorContent} 
                    />
                </View>
                {badgeCount && 
                <View style={styles.rightViewWrapper}>
                    <TextComponent 
                        content={badgeCount} 
                        family={fonts.regular} 
                        size={fontSizeBadge} 
                        color={textColorBadge}
                    />
                </View>}
            </View>
        </TouchableOpacity>
    )
};

ButtonSecondaryBadge.propTypes = {
    content: string.isRequired,
    badgeCount: number,
    onPress: func,
};

ButtonSecondaryBadge.defaultProps = {
    buttonColor:colors.lightGrey,
    textColorContent:colors.colorSecondery,
    textColorBadge:colors.white1,
    fontSizeText:fonts.fs12,
    fontSizeBadge:fonts.fs10

  };
  

export default ButtonSecondaryBadge;