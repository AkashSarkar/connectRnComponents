import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { bool, string, func } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { pv10 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#d6d6d6',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    ...pv10
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  }
});

const ButtonCenter = (
  {
    content, buttonColor, textColor, fontSize, onPress, buttonLogo
  }
) => (
  <TouchableOpacity
    style={[styles.buttonWrapper, buttonColor]}
    hitSlop={styles.hitSlop}
  >
    <Image
          style={{resizeMode:'contain'}}
          source={buttonLogo}
        />
    <TextComponent
        content={content}
        family={fonts.regular}
        size={fontSize}
        color={textColor}
      />
  </TouchableOpacity>
);

ButtonCenter.defaultProps = {
  loading: false
};

ButtonCenter.propTypes = {
  content: string.isRequired
};

export default ButtonCenter;
