import React from 'react';
import {
  TouchableOpacity, StyleSheet, ActivityIndicator, Image, View
} from 'react-native';
import {
  array, string, func, number
} from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import image from '../../../assets';


const styles = StyleSheet.create({
  buttonWrapper: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 8,
    elevation: 1,
    shadowColor: colors.black1,
    backgroundColor: colors.white1,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    paddingVertical: 5
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
  leftImageWrapper: {
    justifyContent: 'flex-start'
  },
  rightWrapper: {
    paddingRight: 18
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 26,
    width: 26,
    padding: 7
  },
  coverImageStyle: {
    position: 'absolute',
    resizeMode: 'cover',
    left: 0,
    height: '100%',
    width: '30%'
  }
});

const ButtonAdd = (
  {
    content,
    buttonColor,
    textColor,
    fontSize,
    onPress,
    logoLeft,
    logoRight
  }
) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.buttonWrapper]}
    hitSlop={styles.hitSlop}
  >
    <LinearGradient
      colors={buttonColor}
      style={{
        width: '100%',
        height: 70,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image
        style={styles.coverImageStyle}
        source={image[logoLeft]}
      />
      <View style={styles.leftWrapper}>
        <Image
          style={styles.imageStyle}
          source={image[logoRight]}
        />
      </View>
      <View style={styles.rightWrapper}>
        <TextComponent
          content={content}
          family={fonts.regular}
          size={fontSize}
          color={textColor}
        />
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

ButtonAdd.propTypes = {
  content: string.isRequired,
  buttonColor: array.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  logoLeft: string.isRequired,
  logoRight: string.isRequired,
  onPress: func
};

export default ButtonAdd;
