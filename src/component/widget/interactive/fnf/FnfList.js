import React from 'react';
import { View } from 'react-native';
import { array } from 'prop-types';
import { mb10 } from '../../../../styles/commonStyle';
import FnfMember from './FnfMember';

const FnfList = ({ items }) => (
  items.map(item => (
    <View style={mb10} key={item.id}>
      <FnfMember
        name={item.name}
        number={item.number}
        isConnect={item.isConnect}
        channels={item.channels}
      />
    </View>
  ))
);
FnfList.prorTypes = {
  items: array
}
export default FnfList;
