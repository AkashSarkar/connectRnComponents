import React from 'react';
import { ScrollView } from 'react-native';
import { TimePick, DateRange, DatePick } from '../../component/widget';
import { FeatureWrapperV2 } from '../../component/ui';
import { colors } from '../../styles/baseStyle';
import assets from '../../assets';

const PickerTest = ({ navigation }) => (
  <FeatureWrapperV2
    title=" Test"
    backgroundColor={colors.white1}
    titleTextColor={colors.secondary}
    rightIcon={assets.CrossDark}
    style={{ flex: 1 }}
    rightPressAction={() => navigation.goBack()}
  >
    <ScrollView>
      <TimePick />
      <DateRange
      // onEndDateSelected={(date) => { console.log(date); }}
      // onStartDateSelected={(date) => { console.log(date); }}
        onSubmitPress={() => console.log()}
        buttonTitle="See Results"
      />
      <DatePick title="Journey Date" />
    </ScrollView>
  </FeatureWrapperV2>
);

export default PickerTest;
