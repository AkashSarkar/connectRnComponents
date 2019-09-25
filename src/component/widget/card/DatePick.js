import React from 'react';
import { View, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';
import DateWheel from './DateWheel';
import { BoxShadow, TextComponent } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  <BoxShadow>
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
        <DateWheel onDateSelected={date => console.log(date)} />
      </View>
    </View>
  </BoxShadow>
);

DatePick.propTypes = {
  onDateSelected: func,
  title: string
};

export default DatePick;
