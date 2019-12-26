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
import image from '../../../assets';

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 146,
    height: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    ...pv5,
    paddingHorizontal: 20,
    elevation: 1,
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
    // paddingLeft: 10
  },
  rightWrapper: {
    // paddingRight: 13
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 26,
    width: 26,
    marginHorizontal: 7
  }
});

const MenuItem = ({
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

MenuItem.propTypes = {
  content: string.isRequired,
  logo: string.isRequired,
  buttonColor: string.isRequired,
  textColor: string.isRequired,
  onPress: func
};


export default MenuItem;
