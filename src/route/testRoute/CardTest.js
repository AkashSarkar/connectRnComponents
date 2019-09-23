import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { SeatListItem } from '../../component/widget'

const screenContainer = {
  height: '100%',
  flexDirection: 'column',
  paddingLeft: 10,
  paddingRight: 10,
  justifyContent: 'space-between',
  paddingVertical: 10
};

const CardTest = ({ navigation }) => (
  <ScrollView contentContainerStyle={screenContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate('SwipeableWrapperTest')}
    >
      <Text> Button Test</Text>
    </TouchableOpacity>
    <SeatListItem />
  </ScrollView>
);

export default CardTest;
