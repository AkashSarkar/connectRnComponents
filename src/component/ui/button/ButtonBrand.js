import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { string, func, array, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv5 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
      flexDirection: 'row',  
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      ...pv5
    },
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    },
    leftWrapper:{
        marginRight: 5
    }
  });

const ButtonBrand = ({
    content, buttonColor, textColor, fontSize, buttonLogo, onPress
}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonWrapper, {backgroundColor: buttonColor }]} hitSlop={styles.hitSlop}>
            <View style={styles.leftWrapper}>
                <Image
                    style={{resizeMode:'contain', height: 50, width: 50}}
                    source={buttonLogo}
                />
            </View>
            <View>
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
    onPress: func,
  };
  

export default ButtonBrand;
