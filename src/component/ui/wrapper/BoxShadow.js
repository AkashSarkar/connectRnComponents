import React from 'react';
import { StyleSheet, View } from 'react-native';
import { node, number } from 'prop-types';

import { colors } from '../../../styles/baseStyle';
import { mb10 } from '../../../styles/commonStyle';

const style = StyleSheet.create({
  boxShadow: {
    backgroundColor: colors.offWhite,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 1,
    width: '100%'
  }
});

const BoxShadow = ({ children, borderRadius = 16 }) => (
  <View style={[style.boxShadow, { borderRadius }]}>{children}</View>
);

BoxShadow.propTypes = {
  children: node.isRequired,
  borderRadius: number
};

export default BoxShadow;
