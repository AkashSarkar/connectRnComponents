import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';
import moment from 'moment';
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


const DateWheel = ({ onDateSelected }) => {
  const { years: yearsArray, currentYearIndex } = generateYears();

  console.log(yearsArray[119]);

  const daysArray = generateDays();

  const monthsArray = generateMonths();

  const [dateString, setDateString] = useState(`01-01-${yearsArray[currentYearIndex]}`);

  const setDate = (type, value) => {
    const stringArray = dateString.split('-');

    let finalString = '';

    switch (type) {
      case 'day':
        finalString = `${value}-${stringArray[1]}-${stringArray[2]}`;
        break;
      case 'month':
        finalString = `${stringArray[0]}-${value}-${stringArray[2]}`;
        break;
      case 'year':
        finalString = `${stringArray[0]}-${stringArray[1]}-${value}`;
        break;

      default:
        break;
    }

    setDateString(finalString);

    const date = moment(finalString, 'DD-MM-YYYY').toDate();

    onDateSelected(date);
  };


  return (
    <View style={styles.container}>
      <WheelPicker
        style={styles.wheel}
        data={daysArray}
        isCyclic
        itemTextColor={colors.grey}
        selectedItemTextFontFamily={fonts.bold}
        selectedItemTextSize={fonts.fs18}
        itemTextSize={fonts.fs18}
        onItemSelected={idx => setDate('day', daysArray[idx])}
      />
      <WheelPicker
        style={styles.wheel}
        data={monthsArray}
        isCyclic
        itemTextColor={colors.grey}
        selectedItemTextFontFamily={fonts.bold}
        selectedItemTextSize={fonts.fs18}
        itemTextSize={fonts.fs18}
        onItemSelected={idx => setDate('month', idx + 1)}
      />
      <WheelPicker
        style={styles.wheel}
        data={yearsArray}
        isCyclic
        itemTextColor={colors.grey}
        selectedItemTextFontFamily={fonts.bold}
        selectedItemTextSize={fonts.fs18}
        itemTextSize={fonts.fs18}
        onItemSelected={idx => setDate('year', yearsArray[idx])}
        selectedItem={currentYearIndex}
      />
    </View>
  );
};

DateWheel.propTypes = {
  onDateSelected: func.isRequired
};

export default DateWheel;
