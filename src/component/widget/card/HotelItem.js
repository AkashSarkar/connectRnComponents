import React from 'react';
import { View, Image } from 'react-native';
import { string, number } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import { mb10 } from '../../../styles/commonStyle';
import image from '../../../assets';

const styles = {
  wrapper: {
    width: '100%',
    height: 350,
    backgroundColor: colors.white1
  },
  imagestyle: {
    borderRadius: 8,
    height: 250
  },
  topWrapper: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3
  },
  bottomWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
};

const HotelItem = ({
  content, family, size, color
}) => (
  <View style={styles.wrapper}>
    <View style={[styles.topWrapper, mb10]}>
      <Image
        style={styles.imagestyle}
        source={{ uri: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048' }}
      />
    </View>
    <View style={styles.bottomWrapper}>
      <TextComponent
        content="Hotel name"
        color={colors.primary2}
        family={fonts.semiBold}
        size={fonts.fs14}
      />
      <TextComponent
        content="Area, Country"
        color={colors.primary2}
        family={fonts.regular}
        size={fonts.fs12}
      />
      <TextComponent
        content="Price/night"
        color={colors.primary2}
        family={fonts.regular}
        size={fonts.fs10}
      />
      <TextComponent
        content="360"
        color={colors.primary2}
        family={fonts.regular}
        size={fonts.fs10}
      />
    </View>
  </View>
);

HotelItem.propTypes = {
//   content: string.isRequired,
//   family: string.isRequired,
//   size: number.isRequired,
//   color: string.isRequired
};

export default HotelItem;
