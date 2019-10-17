import React from 'react';
import { View, Text } from 'react-native';
import { TimePick, DateRange, DatePick } from '../../component/widget';

const PickerTest = () => (
  <View>
    <TimePick />
    <DateRange
      // onEndDateSelected={(date) => { console.log(date); }}
      // onStartDateSelected={(date) => { console.log(date); }}
      onSubmitPress={() => console.log()}
      buttonTitle="See Results"
    />
    <DatePick title="Journey Date" />
  </View>
);

export default PickerTest;
