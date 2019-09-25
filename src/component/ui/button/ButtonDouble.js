import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  array, func, number, string
} from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv10 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 1,
    backgroundColor: colors.white1,
    shadowColor: colors.black1,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 0.1
  },
  buttonGradient: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    alignSelf: 'stretch',
    ...pv10
  },
  leftWrapper: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  rightWrapper: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});

const ButtonDouble = ({
  content,
  contentRight,
  buttonColor,
  textColorLeft,
  textColorRight,
  fontSize,
  onPress
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.buttonWrapper]} hitSlop={styles.hitSlop}>
      <View style={styles.leftWrapper}>
        <LinearGradient
          colors={buttonColor}
          style={styles.buttonGradient}
          hitSlop={styles.hitSlop}
        >
          <TextComponent
            content={content}
            family={fonts.regular}
            size={fontSize}
            color={textColorLeft}
          />
        </LinearGradient>
      </View>
      <View style={styles.rightWrapper}>
        <TextComponent
          content={contentRight}
          family={fonts.regular}
          size={fontSize}
          color={textColorRight}
        />
      </View>
    </View>
  </TouchableOpacity>
);

ButtonDouble.propTypes = {
  content: string.isRequired,
  contentRight: string.isRequired,
  buttonColor: array.isRequired,
  textColorLeft: string.isRequired,
  textColorRight: string.isRequired,
  fontSize: number,
  onPress: func
};


export default ButtonDouble;
