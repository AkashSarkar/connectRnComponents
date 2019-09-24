import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';

const screenContainer = {
  height: '100%',
  flexDirection: 'column',
  paddingLeft: 10,
  paddingRight: 10,
  justifyContent: 'space-between',
  paddingVertical: 10
};

const TestRoute = ({ navigation }) => (
  <ScrollView contentContainerStyle={screenContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate('SwipeableWrapperTest')}
    >
      <Text> Swipeable Test</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => navigation.navigate('ButtonTest')}
    >
      <Text> Button Test</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('TestAccountSliderItem')}
    >
      <Text>Account Slider item</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('AccountDetails')}
    >
      <Text>Account Details</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('TabTest')}
    >
      <Text> Tab Test</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('PickerTest')}
    >
      <Text> Picker Test</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('CardTest')}>
      <Text>Card Details</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => navigation.navigate('InputTest')}
    >
      <Text>Input Field</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => navigation.navigate('SwitchTest')}
    >
      <Text>Switch Test</Text>
    </TouchableOpacity>
  </ScrollView>
);

export default TestRoute;
