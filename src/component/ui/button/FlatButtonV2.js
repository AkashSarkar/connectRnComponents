import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  func,
  bool,
  number,
  string
} from 'prop-types';
import { fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';

const styles = StyleSheet.create({

  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
  }
});


const FlatButtonV2 = ({
  content,
  textColor,
  fontSize = 18,
  onPress,
  tickImage,
  disabled
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={styles.buttonWrapper}
    hitSlop={styles.hitSlop}
  >
    <TextComponent
      content={content}
      family={fonts.medium}
      size={fontSize}
      color={textColor}
    />
    <Image
      source={tickImage}
      style={{
        height: 20,
        width: 20
      }}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

FlatButtonV2.propTypes = {
  content: string.isRequired,
  textColor: string.isRequired,
  fontSize: number,
  onPress: func,
  disabled: bool,
  tickImage: number
};


export default FlatButtonV2;
