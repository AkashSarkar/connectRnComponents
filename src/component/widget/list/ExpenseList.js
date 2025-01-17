import React from 'react';
import { View } from 'react-native';
import {
  arrayOf, shape, number, string, bool, func
} from 'prop-types';
import { mb10 } from '../../../styles/commonStyle';
import { colors } from '../../../styles/baseStyle';
import ExpenseItem from '../card/ExpenseItem';

const styles = {
  wrapper: {
    width: '100%',
    backgroundColor: colors.white1
  }
};

const ExpenseList = ({
  items, onPress
}) => (
  <View style={styles.wrapper}>
    {
      items.map((item, index) => (
        <View key={item.id} style={mb10}>
          <ExpenseItem
            title={item.title}
            subtitle={item.subtitle}
            topValue={item.topValue}
            bottomValue={item.bottomValue}
            logo={item.logo}
            disabled={item.disabled}
            onPress={() => onPress(index)}
          />
        </View>
      ))
    }
  </View>
);

ExpenseList.propTypes = {
  items: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      subtitle: string.isRequired,
      topValue: string.isRequired,
      bottomValue: string.isRequired,
      logo: string.isRequired,
      disabled: bool
    })
  ).isRequired,
  onPress: func
};

export default ExpenseList;
