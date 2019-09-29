import React from 'react';
import {
  Image, StyleSheet, TouchableOpacity, View
} from 'react-native';
import { func, string } from 'prop-types';
import { colors } from '../../../styles/baseStyle';
import { pv5 } from '../../../styles/commonStyle';
import image from '../../../assets';


const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  imageStyle: {
    resizeMode: 'contain',
    padding: 10
  }
});

const ButtonCommunication = (
  {
    buttonColor, buttonWidth, buttonHeight, buttonBorderRadius, iconHeight, iconWidth, logo, onPress
  }
) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={
        [styles.buttonWrapper,
          { backgroundColor: buttonColor },
          { width: buttonWidth, height: buttonHeight, borderRadius: buttonBorderRadius }]}
      hitSlop={styles.hitSlop}
    >
      <Image
        style={[styles.imageStyle, { height: iconHeight, width: iconWidth }]}
        source={image[logo]}
      />
    </View>
  </TouchableOpacity>
);

ButtonCommunication.propTypes = {
  buttonColor: string.isRequired,
  onPress: func
};

ButtonCommunication.defaultProps = {
  buttonWidth: 50,
  buttonHeight: 50,
  buttonBorderRadius: 25,
  iconHeight: 30,
  iconWidth: 30
};


export default ButtonCommunication;
