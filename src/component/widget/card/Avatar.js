import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';
import { colors } from '../../../styles/baseStyle';
import image from '../../../assets';

const styles = {
  wrapper: {
    width: 65,
    height: 65,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.secondary,
    borderRadius: 50,
    elevation: 1,
    shadowColor: colors.secondary,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.8
  },
  imageStyle: {
    width: 60,
    height: 60
  }
};

const Avatar = ({
  logo, onPress
}) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <Image style={styles.imageStyle} source={image.Check} />
  </TouchableOpacity>
);

Avatar.propTypes = {
  logo: string.isRequired,
  onPress: func.isRequired
};

export default Avatar;
