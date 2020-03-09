import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import {
  string, func, bool, number, object
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';

const styles = {
  buttonStyle: {
    padding: 10,
    borderRadius: 6,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1
    // activeOpacity: .7
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};
const ButtonRectangle = ({
  content,
  buttonColor,
  textColor,
  onPress,
  styleProp,
  isIcon,
  icon,
  value,
  disabled,
  size
}) => {
  const onPressHandler = () => {
    onPress(value);
  };
  // console.log(value)
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        { backgroundColor: buttonColor || colors.black1 },
        styleProp
      ]}
      onPress={() => onPressHandler()}
      disabled={disabled}
    >
      <View style={styles.textStyle}>
        {isIcon ? (
          <View
            style={[styles.imageStyle,
              size === fonts.fs14
                ? { height: 18, width: 45 }
                : size === fonts.fs18
                  ? { height: 22, width: 45 }
                  : size === fonts.fs50
                    ? { height: 60, width: 90 }
                    : { height: 30, width: 45 }
            ]}
          >
            <Image
              source={icon}
              style={
                size === fonts.fs50
                  ? { height: 30, width: 30 }
                  : size === fonts.fs14
                    ? { height: 10, width: 10 }
                    : { height: 12, width: 12 }
              }
              resizeMode="contain"
            />
          </View>
        ) : (
          <TextComponent
            content={content}
            size={size}
            color={textColor || colors.white1}
            family={fonts.regular}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

ButtonRectangle.propTypes = {
  buttonColor: string,
  onPress: func,
  content: string.isRequired,
  textColor: string,
  isIcon: bool,
  icon: number,
  value: string,
  disabled: bool,
  size: number,
  styleProp: object
};

export default ButtonRectangle;
