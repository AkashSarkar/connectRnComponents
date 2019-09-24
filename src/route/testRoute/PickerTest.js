import React from 'react';
import { View, Text } from 'react-native';
import { TimePick, DateRange, DatePick } from '../../component/widget';

const PickerTest = () => (
  <View>
    <TimePick />
    <DateRange />
    <DatePick title="Journey Date" />
  </View>
);

export default PickerTest;
