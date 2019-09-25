import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { string, func, array, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv5 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
      width: 100,
      height: 36,
      flexDirection: 'row',  
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
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
      },
    leftWrapper:{
        marginRight: 5
    },
    rightWrapper:{
        marginRight: 18
    },
    imageStyle:{
        resizeMode:'contain',
        height: 26, 
        width: 26, 
        margin: 7
    }
  });

const ButtonBrand = ({
    content, buttonColor, textColor, fontSize, buttonLogo, onPress
}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonWrapper, {backgroundColor: buttonColor }]} hitSlop={styles.hitSlop}>
            <View style={styles.leftWrapper}>
                <Image
                    style={styles.imageStyle}
                    source={buttonLogo}
                />
            </View>
            <View style={styles.rightWrapper}>
                <TextComponent content={content} family={fonts.regular} size={fontSize} color={textColor} />
            </View>
        </View>
    </TouchableOpacity>
);

ButtonBrand.propTypes = {
    content: string.isRequired,
    buttonColor: string.isRequired,
    textColor: string.isRequired,
    fontSize: number,
    buttonLogo: number.isRequired,
    onPress: func,
  };
  

export default ButtonBrand;
