import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { string, func, array, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import LinearGradient from 'react-native-linear-gradient';
import { pv15 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
    buttonWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20
    },
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  });

const ButtonBrand = ({
    buttonColor, onPress, buttonLogo
}) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={buttonColor} style={styles.buttonWrapper} hitSlop={styles.hitSlop}>
        <Image
          style={{resizeMode:'center'}}
          source={buttonLogo}
        />
        </LinearGradient>
    </TouchableOpacity>
);

ButtonBrand.propTypes = {
    buttonLogo: number.isRequired,
    buttonColor: array.isRequired,
    onPress: func,
  };
  

export default ButtonBrand;
