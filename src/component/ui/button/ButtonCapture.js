import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { func, bool } from 'prop-types';

import { colors } from '../../../styles/baseStyle';

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 60,
    height: 60,
    backgroundColor: colors.white1,
    borderStyle: 'solid',
    borderWidth: 10,
    borderColor: '#9d9d9d',
    borderRadius: 100
  },
  disabledStyle: {
    opacity: 0.5
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  }
});

const ButtonCapture = ({ onPress, disabled }) => (
  <TouchableOpacity
    onPress={() => {
      if (!disabled) onPress();
    }}
    style={[disabled && styles.disabledStyle]}
    hitSlop={styles.hitSlop}
  >
    <View style={styles.buttonWrapper} />
  </TouchableOpacity>
);

ButtonCapture.propTypes = {
  onPress: func.isRequired,
  disabled: bool
};

export default ButtonCapture;
