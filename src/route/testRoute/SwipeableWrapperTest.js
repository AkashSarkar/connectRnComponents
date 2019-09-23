import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeableWrapper from '../../component/swipeable/SwipeableWrapper';

const style = StyleSheet.create({
  boxShadow: {
    borderRadius: 16,
    backgroundColor: '#fefefe',
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 1,
    width: '100%',
    height: 100,
    marginBottom: 10
  }
});
const BoxShadow = ({ children }) => (
  <View style={style.boxShadow}>{children}</View>
);
const SwipeableWrapperTest = () => (
  <View>
    <SwipeableWrapper>
      <BoxShadow>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>Swipe me</Text>
        </View>
      </BoxShadow>

    </SwipeableWrapper>
  </View>
);
export default SwipeableWrapperTest;
