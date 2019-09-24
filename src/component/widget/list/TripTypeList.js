import React from 'react';
import { View, ScrollView } from 'react-native';
import { array } from 'prop-types';
import { mr10 } from '../../../styles/commonStyle';
import { fonts, colors } from '../../../styles/baseStyle';
import TripType from '../card/TripType';

const styles = {
  wrapper: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    backgroundColor: colors.white1
  }
};

const TripTypeList = ({
  items
}) => (
  <ScrollView style={styles.wrapper} horizontal>
    {
      items.map(item => (
        <View style={mr10}>
          <TripType />
        </View>
      ))
    }
  </ScrollView>
);

TripTypeList.propTypes = {
  items: array.isRequired
};

export default TripTypeList;
