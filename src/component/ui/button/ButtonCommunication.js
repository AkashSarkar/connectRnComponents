import React from 'react';
import {
  TouchableOpacity, StyleSheet, View, Image
} from 'react-native';
import {
  string, func, array, number
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import { pv5 } from '../../../styles/commonStyle';
import image from '../../../assets';


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
  imageStyle: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    padding: 10
  }
});

const ButtonCommunication = ({
  buttonColor, logo, onPress
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={[styles.buttonWrapper, { backgroundColor: buttonColor }]}
      hitSlop={styles.hitSlop}
    >
      <Image
        style={styles.imageStyle}
        source={image[logo]}
      />
    </View>
  </TouchableOpacity>
);

ButtonCommunication.propTypes = {
  buttonColor: string.isRequired,
  logo: string.isRequired,
  onPress: func
};


export default ButtonCommunication;
