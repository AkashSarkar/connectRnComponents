import React from 'react';
import { View } from 'react-native';
import { array } from 'prop-types';
import { mb10 } from '../../../styles/commonStyle';
import { fonts, colors } from '../../../styles/baseStyle';
import TripType from '../card/TripType';

const styles = {
  wrapper: {
    width: '100%',
    backgroundColor: colors.white1
  }
};

const TripTypeList = ({
  items
}) => (
  <View style={styles.wrapper}>
    {
      items.map(item => <TripType />)
    }
  </View>
);

TripTypeList.propTypes = {
  items: array.isRequired
};

export default TripTypeList;
