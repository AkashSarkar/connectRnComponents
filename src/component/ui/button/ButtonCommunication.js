import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { string, func, array, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv5 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
      width: 50,
      height: 50,
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
    viewWrapper:{
        padding: 5
    },
    imageStyle:{
        resizeMode:'contain',
        height: 30, 
        width: 30, 
        margin: 7
    }
  });

const ButtonCommunication = ({
    buttonColor, buttonLogo, onPress
}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonWrapper, {backgroundColor: buttonColor }]} hitSlop={styles.hitSlop}>
            <View style={styles.viewWrapper}>
                <Image
                    style={styles.imageStyle}
                    source={buttonLogo}
                />
            </View>
        </View>
    </TouchableOpacity>
);

ButtonCommunication.propTypes = {
    buttonColor: string.isRequired,
    buttonLogo: number.isRequired,
    onPress: func,
  };
  

export default ButtonCommunication;
