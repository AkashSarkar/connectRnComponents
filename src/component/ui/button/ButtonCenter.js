import React from 'react';
import {
  TouchableOpacity, StyleSheet, Image, View
} from 'react-native';
import { number, string, func } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv10 } from '../../../styles/commonStyle';
import image from '../../../assets';


const styles = StyleSheet.create({
  buttonWrapper: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 1,
    shadowColor: colors.black1,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.3,
    ...pv10
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  },
  leftWrapper: {
    paddingRight: 5
  },
  rightWrapper: {
    paddingRight: 18
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 26,
    width: 26,
    padding: 7
  }
});

const ButtonCenter = (
  {
    content, buttonColor, textColor, fontSize, onPress, logo
  }
) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.buttonWrapper, { backgroundColor: buttonColor }]}
    hitSlop={styles.hitSlop}
  >
    <View style={styles.leftWrapper}>
      <Image
        style={styles.imageStyle}
        source={image[logo]}
      />
    </View>
    <View
      style={styles.rightWrapper}
    >
      <TextComponent
        content={content}
        family={fonts.regular}
        size={fontSize}
        color={textColor}
      />
    </View>
  </TouchableOpacity>
);

ButtonCenter.propTypes = {
  content: string.isRequired,
  buttonColor: string.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  logo: string.isRequired,
  onPress: func
};

export default ButtonCenter;
