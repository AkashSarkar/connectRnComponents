import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { SeatListItem, PopUpMessage, Amount, VerifiedInfo, ExpenseItem } from '../../component/widget'
import { mb20} from '../../styles/commonStyle'

const screenContainer = {
  width: '100%',
  flexDirection: 'column',
  paddingLeft: 10,
  paddingRight: 10,
  paddingVertical: 10
};

const CardTest = ({ navigation }) => (
  <ScrollView contentContainerStyle={screenContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate('SwipeableWrapperTest')}
    >
      <Text> Button Test</Text>
    </TouchableOpacity>
    <View style={mb20}>
      <SeatListItem />
    </View>
    <View style={mb20}>
      <PopUpMessage />
    </View>
    <View style={mb20}>
      <Amount />
    </View>
    <View style={mb20}>
      <VerifiedInfo />
    </View>
    <View style={mb20}>
      <ExpenseItem />
    </View>
  </ScrollView>
);

export default CardTest;
