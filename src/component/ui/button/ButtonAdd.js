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
import { pv5 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 70,
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
    shadowRadius: 6,
    shadowOpacity: 0.1
    // ...pv5
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
    margin: 7
  },
  coverImageStyle: {
    position: 'absolute',
    resizeMode: 'contain',
    left: 0,
    height: '100%',
    width: '25%'
  }
});

const ButtonAdd = (
  {
    content,
    buttonColor,
    textColor,
    fontSize,
    onPress,
    buttonLogoLeft,
    buttonLogoRight
  }
) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={buttonColor}
      style={[styles.buttonWrapper]}
      hitSlop={styles.hitSlop}
    >
      {/* <View style={styles.leftImageWrapper}> */}
      <Image
        style={styles.coverImageStyle}
        source={buttonLogoLeft}
      />
      {/* </View> */}
      <View style={styles.leftWrapper}>
        <Image
          style={styles.imageStyle}
          source={buttonLogoRight}
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
  buttonLogoLeft: number.isRequired,
  buttonLogoRight: number.isRequired,
  onPress: func
};

export default ButtonAdd;
