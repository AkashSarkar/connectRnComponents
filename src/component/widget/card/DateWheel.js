import React from 'react';
import { View, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';
import { DatePicker, WheelPicker } from 'react-native-wheel-picker-android';
import { BoxShadow, TextComponent } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';
import { generateDays, generateMonths, generateYears } from '../../../utils/function/dateTime';

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  wheel: {
    height: 150,
    width: null,
    flex: 3
  }
});

const yearsArray = generateYears();
const currentYearIndex = yearsArray.length - 70;

const DateWheel = ({ onDateSelected }) => (
  <View style={styles.container}>
    <WheelPicker
      style={styles.wheel}
      data={generateDays()}
      isCyclic
      itemTextColor={colors.grey}
      selectedItemTextFontFamily={fonts.bold}
      selectedItemTextSize={fonts.fs18}
      itemTextSize={fonts.fs18}
      onItemSelected={data => console.log(data)}
    />
    <WheelPicker
      style={styles.wheel}
      data={generateMonths()}
      isCyclic
      itemTextColor={colors.grey}
      selectedItemTextFontFamily={fonts.bold}
      selectedItemTextSize={fonts.fs18}
      itemTextSize={fonts.fs18}
      onItemSelected={data => console.log(data)}
    />
    <WheelPicker
      style={styles.wheel}
      data={yearsArray}
      isCyclic
      itemTextColor={colors.grey}
      selectedItemTextFontFamily={fonts.bold}
      selectedItemTextSize={fonts.fs18}
      itemTextSize={fonts.fs18}
      onItemSelected={data => console.log(data)}
      selectedItem={currentYearIndex}
    />
  </View>
);

DateWheel.propTypes = {
  onDateSelected: func
};

export default DateWheel;
