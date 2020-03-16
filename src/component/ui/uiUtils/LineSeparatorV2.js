import React from 'react';
import {
  View
} from 'react-native';
import { colors } from '../../../styles/baseStyle';

const LineSeparatorV2 = () => (
  <View style={{ paddingHorizontal: 41 }}>
    <View style={{
      borderWidth: 1, borderRadius: 1, borderStyle: 'dotted', borderColor: colors.bgBlack
    }}
    />
  </View>
);

export default LineSeparatorV2;
