import React from 'react';
import {
  View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import Images from '../../../assets';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  imageStyle: {
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    height: 26,
    width: 26,
    margin: 7
  }
});

const HeaderTop = ({
  content, onPress
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.imageStyle}
        source={Images.Check}
      />
    </TouchableOpacity>
    <TextComponent content={content} family={fonts.regular} size={fonts.fs20} color={colors.text1} />
  </View>
);

export default HeaderTop;
