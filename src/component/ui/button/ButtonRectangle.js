import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { string, func, number } from 'prop-types';
import TextComponent from '../typography/TextComponent';
import { fonts, colors } from '../../../styles/baseStyle';

const styles = {
  buttonStyle: {
    // width: '100%',
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
    alignItems: 'center'
  }
};
const ButtonRectangle = ({
  content, buttonColor, textColor, onPress, image
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
            height: 30,
            width: 40,
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
    {/* <View style={styles.textStyle}>
      <TextComponent
        content={content}
        size={fonts.fs24}
        color={textColor || colors.white1}
        family={fonts.medium}
      />
    </View> */}
  </TouchableOpacity>
);

ButtonRectangle.propTypes = {
  buttonColor: string,
  onPress: func,
  content: string,
  textColor: string,
  image: number
};

export default ButtonRectangle;
