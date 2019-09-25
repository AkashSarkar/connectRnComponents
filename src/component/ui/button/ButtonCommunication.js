import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {func, number, string} from 'prop-types';
import {colors} from '../../../styles/baseStyle';
import {pv5} from '../../../styles/commonStyle';

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
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  },
  viewWrapper: {
    padding: 5
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    margin: 7
  }
});

const ButtonCommunication = ({buttonColor, buttonLogo, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.buttonWrapper, {backgroundColor: buttonColor}]} hitSlop={styles.hitSlop}>
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
