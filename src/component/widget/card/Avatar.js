import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { string, func, bool, number } from 'prop-types';
import { colors } from '../../../styles/baseStyle';

const styles = {
  wrapper: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.white1,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 50
  }
};

const colorBorder = (status) => {
  let color;
  switch (status) {
    case 'success':
      color = colors.secondary;
      break;
    case 'pending':
      color = 'transparent';
      break;
    case 'failed':
      color = colors.red1;
      break;
    default:
      color = 'transparent';
  }
  return color;
};

const colorShadow = (status) => {
  let color;
  switch (status) {
    case 'success':
      color = colors.secondary;
      break;
    case 'pending':
      color = colors.black0;
      break;
    case 'failed':
      color = colors.red1;
      break;
    default:
      color = colors.black0;
  }
  return color;
};

const Avatar = ({
  logo, status, disabled, onPress
}) => {
  const [active, setActive] = useState(false);
  // console.log(active);
  return (
    <TouchableOpacity
      onPress={() => {
        setActive(!active);
        onPress();
      }}
      disabled={disabled}
      style={[
        styles.wrapper,
        {
          shadowColor: !disabled
            ? active
              ? colors.secondary
              : colors.black0
            : colorShadow(status)
        }
      ]}
    >
      <Image
        style={[
          styles.imageStyle,
          {
            borderColor: !disabled
              ? active
                ? colors.secondary
                : 'transparent'
              : colorBorder(status)
          }
        ]}
        source={logo}
      />
    </TouchableOpacity>
  );
};

Avatar.propTypes = {
  logo: number.isRequired,
  onPress: func.isRequired,
  status: string,
  disabled: bool
};

export default Avatar;
