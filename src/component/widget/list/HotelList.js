import React from 'react';
import { View } from 'react-native';
import {
  arrayOf, shape, number, string
} from 'prop-types';
import { mb10 } from '../../../styles/commonStyle';
import { colors } from '../../../styles/baseStyle';
import HotelItem from '../card/HotelItem';

const styles = {
  wrapper: {
    width: '100%',
    backgroundColor: colors.white1
  }
};

const Hotellist = ({
  items
}) => (
  <View style={styles.wrapper}>
    {
      items.map(item => (
        <HotelItem
          key={item.id}
          logo={item.logo}
          title={item.title}
          subtitle={item.subtitle}
          price={item.price}
          people={item.people}
          rating={item.rating}
        />
      ))
    }
  </View>
);

Hotellist.propTypes = {
  items: arrayOf(
    shape({
      id: number.isRequired,
      logo: string.isRequired,
      title: string.isRequired,
      subtitle: string.isRequired,
      price: string.isRequired,
      people: string.isRequired,
      rating: string.isRequired
    })
  ).isRequired
};

export default Hotellist;
