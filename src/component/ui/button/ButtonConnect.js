import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { func, array, string } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import image from '../../../assets';

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonConnect = ({
  buttonColor, onPress, logo
}) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={buttonColor}
      style={styles.buttonWrapper}
      hitSlop={styles.hitSlop}
    >
      <Image
        style={{ resizeMode: 'center' }}
        source={image[logo]}
      />
    </LinearGradient>
  </TouchableOpacity>
);

ButtonConnect.propTypes = {
  logo: string.isRequired,
  buttonColor: array.isRequired,
  onPress: func
};


export default ButtonConnect;
