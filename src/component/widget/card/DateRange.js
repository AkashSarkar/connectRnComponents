import React from 'react';
import { View, StyleSheet } from 'react-native';
import { func } from 'prop-types';
import { DatePicker } from 'react-native-wheel-picker-android';
import { BoxShadow, TextComponent } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';
import DateWheel from './DateWheel';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateWrapper: {
    width: '45%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  label: {
    marginBottom: 5
  }
});

const DateRange = ({ onStartDateSelected, onEndDateSelected }) => (
  <BoxShadow>
    <View style={styles.container}>
      <View style={styles.dateWrapper}>
        <View style={styles.label}>
          <TextComponent
            color={colors.black}
            content="Start Date"
            family={fonts.medium}
            size={fonts.fs14}
          />
        </View>
        <DateWheel onDateSelected={onStartDateSelected} />
      </View>
      <View style={styles.dateWrapper}>
        <View style={styles.label}>
          <TextComponent
            color={colors.black}
            content="Start Date"
            family={fonts.medium}
            size={fonts.fs14}
          />
        </View>
        <DateWheel onDateSelected={onEndDateSelected} />
      </View>
    </View>
  </BoxShadow>
);

DateRange.propTypes = {
  onStartDateSelected: func,
  onEndDateSelected: func
};

export default DateRange;
