import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import {
  mb10, mb20, mr5, mb5
} from '../../../styles/commonStyle';
import image from '../../../assets';

const styles = {
  wrapper: {
    width: '100%',
    height: 350,
    backgroundColor: colors.white1
  },
  imagestyle: {
    borderRadius: 8,
    width: '100%',
    height: 230
  },
  topWrapper: {
    width: '100%',
    height: 230,
    borderRadius: 8,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3
  },
  bottomWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  ratingStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingImageListStyle: {
    flexDirection: 'row'
  },
  ratingImageStyle: {
    width: 10,
    height: 10,
    marginRight: 2
  }
};

const HotelItem = ({
  logo, title, subtitle, price, people, rating, onPress
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.wrapper, mb10]}>
    <View style={[styles.topWrapper, mb20]}>
      <Image
        style={styles.imagestyle}
        source={logo}
      />
    </View>
    <View style={styles.bottomWrapper}>
      <View style={mb5}>
        <TextComponent
          content={title}
          color={colors.primary2}
          family={fonts.semiBold}
          size={fonts.fs14}
        />
      </View>
      <View style={mb5}>
        <TextComponent
          content={subtitle}
          color={colors.primary2}
          family={fonts.regular}
          size={fonts.fs12}
        />
      </View>
      <View style={mb5}>
        <TextComponent
          content={price}
          color={colors.primary2}
          family={fonts.regular}
          size={fonts.fs10}
        />
      </View>
      <View style={styles.ratingStyle}>
        <View style={[styles.ratingImageListStyle, mr5]}>
          {Array.from(Array(parseInt(rating, 10)), i => <Image key={i} style={styles.ratingImageStyle} source={image.Star} />)
          }
        </View>
        <TextComponent
          content={people}
          color={colors.primary2}
          family={fonts.regular}
          size={fonts.fs10}
        />
      </View>
    </View>
  </TouchableOpacity>
);

HotelItem.propTypes = {
  logo: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  price: string.isRequired,
  people: string.isRequired,
  rating: string.isRequired,
  onPress: func
};

export default HotelItem;
