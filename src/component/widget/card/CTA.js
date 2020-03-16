import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { string, func, number } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import { p15, mb10 } from '../../../styles/commonStyle';
import image from '../../../assets';

const styles = {
  wrapper: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.grey2,
    borderRadius: 10,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  },
  leftStyle: {
    width: '40%'
  },
  rightStyle: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    ...p15
  }
};

const CTA = (
  {
    title, subtitle, onPress, logo
  }
) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <View style={styles.leftStyle}>
      <Image style={styles.imageStyle} source={logo || image.SendMoney} />
    </View>
    <View style={[styles.rightStyle, mb10]}>
      <TextComponent
        content={title}
        color={colors.primary2}
        family={fonts.semiBold}
        size={fonts.fs32}
      />
      <TextComponent
        content={subtitle}
        color={colors.primary2}
        family={fonts.regular}
        size={fonts.fs32}
      />
    </View>
  </TouchableOpacity>
);

CTA.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  onPress: func,
  logo: number
};

export default CTA;
