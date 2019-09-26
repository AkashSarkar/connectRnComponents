import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  arrayOf, shape, number, string
} from 'prop-types';
import { mr10 } from '../../../styles/commonStyle';
import { colors } from '../../../styles/baseStyle';
import TripType from '../card/TripType';

const styles = {
  wrapper: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    backgroundColor: colors.white1
  }
};

const TripTypeList = ({
  items
}) => (
  <ScrollView
    style={styles.wrapper}
    horizontal
    showsHorizontalScrollIndicator={false}
  >
    {
      items.map(item => (
        <View key={item.id} style={mr10}>
          <TripType
            logo={item.logo}
            title={item.title}
          />
        </View>
      ))
    }
  </ScrollView>
);

TripTypeList.propTypes = {
  items: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      logo: string.isRequired
    })
  ).isRequired
};

export default TripTypeList;
