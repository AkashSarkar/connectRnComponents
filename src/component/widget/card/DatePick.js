import React from 'react';
import { View, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';
import DateWheel from './DateWheel';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dateWrapper: {
    width: '45%'
  },
  label: {
    justifyContent: 'flex-start'
  }
});

const DatePick = ({ onDateSelected, title }) => (
  <View style={styles.container}>
    <View style={styles.label}>
      <TextComponent
        color={colors.black}
        content={title}
        family={fonts.medium}
        size={fonts.fs14}
      />
    </View>
    <View style={styles.dateWrapper}>
      <DateWheel onDateSelected={date => onDateSelected(date)} />
    </View>
  </View>
);

DatePick.defaultProps = {
  onDateSelected: () => {}
};

DatePick.propTypes = {
  onDateSelected: func,
  title: string
};

export default DatePick;
