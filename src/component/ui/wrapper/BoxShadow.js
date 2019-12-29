import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  node, number, object, string
} from 'prop-types';

import { colors } from '../../../styles/baseStyle';

const style = StyleSheet.create({
  boxShadow: {
    justifyContent: 'center',
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 3,
    width: '100%'
  }
});

const BoxShadow = ({
  children, borderRadius = 16, extraStyle, background = colors.offWhite
}) => (
  <View style={[style.boxShadow, { backgroundColor: background }, { borderRadius }, extraStyle]}>{children}</View>
);

BoxShadow.propTypes = {
  children: node.isRequired,
  borderRadius: number,
  extraStyle: object,
  background: string
};

export default BoxShadow;
