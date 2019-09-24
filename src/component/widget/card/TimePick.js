import React from 'react';
import { View, Text } from 'react-native';
import { TimePicker } from 'react-native-wheel-picker-android';
import { BoxShadow } from '../../ui';

const TimePick = () => (
  <BoxShadow>
    <View style={{ paddingTop: 15 }}>
      <TimePicker format24 hidAM />
    </View>
  </BoxShadow>
);

export default TimePick;
