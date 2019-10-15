import React from 'react';
import { View, Text } from 'react-native';
import { AccountGraph, BottomDrawer } from '../../component/widget';

const data = [
  { x: new Date(2018, 9, 1), y: 50 },
  { x: new Date(2018, 9, 16), y: 1000 },
  { x: new Date(2018, 9, 17), y: 20000 },
  { x: new Date(2018, 10, 1), y: 200 },
  { x: new Date(2018, 10, 2), y: 300 },
  { x: new Date(2018, 10, 5), y: 450 },
  { x: new Date(2018, 10, 8), y: 50000 }
];

const GraphTest = () => (
  <View style={{
    paddingTop: 50,
    flex: 1
  }}
  >
    <BottomDrawer>
      <AccountGraph data={data} />
    </BottomDrawer>
  </View>
);

export default GraphTest;
