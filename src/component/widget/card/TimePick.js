import React from 'react';
import { View, StyleSheet } from 'react-native';
import { func } from 'prop-types';
import { DatePicker } from 'react-native-wheel-picker-android';
import { BoxShadow } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 20
  }
});

const TimePick = ({ onTimeSelected }) => (
  <BoxShadow>
    <View style={styles.container}>
      <DatePicker
        itemTextColor={colors.grey}
        selectedItemTextFontFamily={fonts.bold}
        selectedItemTextSize={fonts.fs18}
        itemTextSize={fonts.fs18}
        onDateSelected={onTimeSelected}
        format24
        hidAM
      />
    </View>
  </BoxShadow>
);

TimePick.propTypes = {
  onTimeSelected: func
};

export default TimePick;
