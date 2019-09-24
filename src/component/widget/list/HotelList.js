import React from 'react';
import { View } from 'react-native';
import { array } from 'prop-types';
import { mb10 } from '../../../styles/commonStyle';
import { fonts, colors } from '../../../styles/baseStyle';
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
      items.map(item => <HotelItem />)
    }
  </View>
);

Hotellist.propTypes = {
  items: array.isRequired
};

export default Hotellist;
