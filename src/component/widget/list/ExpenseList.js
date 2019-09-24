import React from 'react';
import { View } from 'react-native';
import { array } from 'prop-types';
import { mb10 } from '../../../styles/commonStyle';
import { fonts, colors } from '../../../styles/baseStyle';
import ExpenseItem from '../card/ExpenseItem';

const styles = {
  wrapper: {
    width: '100%',
    backgroundColor: colors.white1
  }
};

const ExpenseList = ({
  items
}) => (
  <View style={styles.wrapper}>
    {
      items.map(item => (
        <View style={mb10}>
          <ExpenseItem />
        </View>
      ))
    }
  </View>
);

ExpenseList.propTypes = {
  items: array.isRequired
};

export default ExpenseList;
