import React from 'react';
import { View, StyleSheet } from 'react-native';
import { node } from 'prop-types';

import { colors } from '../../../styles/baseStyle';
import { mb10 } from '../../../styles/commonStyle';

const style = StyleSheet.create({
  boxShadow: {
    borderRadius: 16,
    backgroundColor: colors.offWhite,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 1,
    width: '100%',
    ...mb10
  }
});

const BoxShadow = ({ children }) => (
  <View style={style.boxShadow}>{children}</View>
);

BoxShadow.propTypes = {
  children: node.isRequired
};

export default BoxShadow;
