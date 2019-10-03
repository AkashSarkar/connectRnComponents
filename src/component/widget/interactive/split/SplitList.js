import React from 'react';
import { View } from 'react-native';
import { array } from 'prop-types';
import SplitItem from './SplitItem';
import { mb10 } from '../../../../styles/commonStyle';

const SplitList = ({ items, rightActions }) => (
  items.map(item => (
    <View style={mb10} key={item.id}>
      <SplitItem
        avatar={item.avatar}
        name={item.name}
        amount={item.amount}
        rightActions={rightActions}
      />
    </View>
  ))
);
SplitList.prorTypes = {
  items: array
};
export default SplitList;
