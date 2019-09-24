import React from 'react';
import { View, Text } from 'react-native';
import { TimePicker, DatePicker } from 'react-native-wheel-picker-android';
import { BoxShadow } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';

const TimePick = () => (
  <BoxShadow>
    <View style={{ paddingTop: 15 }}>
      <DatePicker
        itemTextColor={colors.grey}
        selectedItemTextFontFamily={fonts.bold}
        selectedItemTextSize={fonts.fs18}
        itemTextSize={fonts.fs18}
        onTimeSelected={() => console.log('change')}
        format24
        hidAM
      />
    </View>
  </BoxShadow>
);

export default TimePick;
