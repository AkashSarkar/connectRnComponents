import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { 
  HotelList
} from '../../component/widget';
import { mb20 } from '../../styles/commonStyle';

const screenContainer = {
  width: '100%',
  flexDirection: 'column',
  paddingLeft: 10,
  paddingRight: 10,
  paddingVertical: 10
};

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

const ListTest = ({ navigation }) => (
  <ScrollView contentContainerStyle={screenContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate('SwipeableWrapperTest')}
    >
      <Text> Button Test</Text>
    </TouchableOpacity>
    <View style={mb20}>
      <HotelList items={items} />
    </View>
  </ScrollView>
);

export default ListTest;
