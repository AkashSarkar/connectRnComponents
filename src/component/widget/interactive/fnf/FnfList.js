import React from 'react';
import { View } from 'react-native';
import { array, object } from 'prop-types';
import { mb10 } from '../../../../styles/commonStyle';
import FnfMember from './FnfMember';

const FnfList = ({ items, rightActions, leftActions }) => (
  items.map(item => (
    <View style={mb10} key={item.id}>
      <FnfMember
        name={item.name}
        number={item.number}
        isConnect={item.isConnect}
        channels={item.channels}
        rightActions={rightActions}
        leftActions={leftActions}
      />
    </View>
  ))
);
FnfList.prorTypes = {
  items: array,
  rightActions: object,
  leftActions: object
}
export default FnfList;
