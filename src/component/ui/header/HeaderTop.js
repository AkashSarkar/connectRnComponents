import React from 'react';
import {
  View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { string, func } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import { p10 } from '../../../styles/commonStyle';
import TextComponent from '../typography/TextComponent';
import Images from '../../../assets';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  contentWrapper: {
    alignItems: 'center',
    width: '100%'
  },
  iconWrapper: {
    position: 'absolute',
    ...p10
  },
  imageStyle: {
    height: 18,
    width: 30
  }
});

const HeaderTop = ({
  content, onPress
}) => (
  <View style={styles.container}>
    <View style={styles.contentWrapper}>
      <TextComponent
        content={content}
        family={fonts.regular}
        size={fonts.fs16}
        color={colors.text1}
      />
    </View>
    <View style={styles.iconWrapper}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.imageStyle}
          source={Images.Back}
        />
      </TouchableOpacity>
    </View>
  </View>
);

HeaderTop.propTypes = {
  content: string.isRequired,
  onPress: func.isRequired
};

export default HeaderTop;
