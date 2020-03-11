import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { string, func, number } from 'prop-types';
import TextComponent from '../typography/TextComponent';
import { fonts, colors } from '../../../styles/baseStyle';

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
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
};
const ButtonRectangleV2 = ({
  content, buttonColor, textColor, onPress, image, imageHeight, imagewidth
}) => (
  <TouchableOpacity
    style={[styles.buttonStyle,
      { backgroundColor: buttonColor || colors.black1 }]}
    onPress={onPress}
  >
    {image ? (
      <View style={styles.imageStyle}>
        <Image
          source={image}
          style={{
            height: imageHeight || 30,
            width: imagewidth || 30,
            resizeMode: 'contain'
          }}
        />
      </View>
    ) : (
      <View style={styles.textStyle}>
        <TextComponent
          content={content}
          size={fonts.fs24}
          color={textColor || colors.white1}
          family={fonts.medium}
        />
      </View>
    )
    }
  </TouchableOpacity>
);

ButtonRectangleV2.propTypes = {
  buttonColor: string,
  onPress: func,
  content: string,
  textColor: string,
  image: number,
  imageHeight: number,
  imagewidth: number
};

export default ButtonRectangleV2;
