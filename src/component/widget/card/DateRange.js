import React from 'react';
import { View, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';
import { stringLiteral } from '@babel/types';
import { BoxShadow, TextComponent, ButtonPrimary } from '../../ui';
import { colors, fonts, gradientColors } from '../../../styles/baseStyle';
import DateWheel from './DateWheel';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  dateWheelWrapper: {
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
  },
  submitBtnWrapper: {
    padding: 10
  }
});

const DateRange = ({
  onStartDateSelected, onEndDateSelected, buttonTitle, onSubmitPress
}) => (
  <BoxShadow>
    <View style={styles.container}>
      <View style={styles.dateWheelWrapper}>
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
      <View style={styles.submitBtnWrapper}>
        <ButtonPrimary textColor={colors.white1} buttonColor={gradientColors.gradientPrimary} content={buttonTitle} onPress={onSubmitPress} />
      </View>
    </View>
  </BoxShadow>
);

DateRange.defaultProps = {
  onStartDateSelected: () => {},
  onEndDateSelected: () => {},
  onSubmitPress: () => {}
};

DateRange.propTypes = {
  buttonTitle: stringLiteral.isRequired,
  onStartDateSelected: func.isRequired,
  onEndDateSelected: func.isRequired,
  onSubmitPress: func.isRequired
};

export default DateRange;
