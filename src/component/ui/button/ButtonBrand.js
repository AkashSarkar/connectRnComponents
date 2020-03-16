import React from 'react';
import {
  TouchableOpacity, StyleSheet, View, Image
} from 'react-native';
import {
  string, func
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv5 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 1,
    ...pv5,
    paddingHorizontal: 5,
    shadowColor: colors.black1,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.3
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  },
  leftWrapper: {
    paddingLeft: 15
  },
  rightWrapper: {
    paddingRight: 20,
    paddingLeft: 5
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 26,
    width: 26
  }
});

const ButtonBrand = ({
  content, buttonColor, textColor, logo, onPress
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.buttonWrapper, { backgroundColor: buttonColor }]}
    hitSlop={styles.hitSlop}
  >
    <View style={styles.leftWrapper}>
      <Image
        style={styles.imageStyle}
        source={logo}
      />
    </View>
    <View style={styles.rightWrapper}>
      <TextComponent
        content={content}
        family={fonts.regular}
        size={fonts.fs10}
        color={textColor}
      />
    </View>
  </TouchableOpacity>
);

ButtonBrand.propTypes = {
  content: string.isRequired,
  buttonColor: string.isRequired,
  textColor: string.isRequired,
  logo: string.isRequired,
  onPress: func
};


export default ButtonBrand;
