import React from 'react';
import { View, StyleSheet } from 'react-native';
import { func, string, bool } from 'prop-types';
import { TextComponent, ButtonPrimary } from '../../ui';
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
  onStartDateSelected,
  onEndDateSelected,
  buttonTitle,
  onSubmitPress,
  isSubmitButton
}) => (
  <View style={styles.container}>
    <View style={styles.dateWheelWrapper}>
      <View style={styles.dateWrapper}>
        <View style={styles.label}>
          <TextComponent
            color={colors.primary2}
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
            color={colors.primary2}
            content="End Date"
            family={fonts.medium}
            size={fonts.fs14}
          />
        </View>
        <DateWheel onDateSelected={onEndDateSelected} />
      </View>
    </View>
    {isSubmitButton && (
      <View style={styles.submitBtnWrapper}>
        <ButtonPrimary
          textColor={colors.white1}
          buttonColor={gradientColors.gradientPrimary}
          content={buttonTitle}
          onPress={onSubmitPress}
        />
      </View>
    )}
  </View>
);

DateRange.defaultProps = {
  onStartDateSelected: () => {},
  onEndDateSelected: () => {},
  onSubmitPress: () => {},
  isSubmitButton: true
};

DateRange.propTypes = {
  buttonTitle: string.isRequired,
  onStartDateSelected: func.isRequired,
  onEndDateSelected: func.isRequired,
  onSubmitPress: func,
  isSubmitButton: bool
};

export default DateRange;
