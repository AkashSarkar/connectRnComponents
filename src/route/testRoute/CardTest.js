import React from 'react';
import {
  ScrollView, TouchableOpacity, Text, View
} from 'react-native';
import {
  SeatListItem,
  PopUpMessage,
  Amount,
  VerifiedInfo,
  Scan,
  ExpenseItem,
  TripType,
  HotelItem
} from '../../component/widget';
import { mb20 } from '../../styles/commonStyle';

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
      <SeatListItem
        title="Desh Travels"
        subtitle="110-DHK-CHAP Non AC"
        duration="5:45 AM  1:30 PM"
        available="32 Seats Available"
        price="BDT Tk. 450.00"
      />
    </View>
    <View style={mb20}>
      <PopUpMessage
        icon="Check"
        content="Success message"
      />
    </View>
    <View style={mb20}>
      <Amount
        title="Due Amount"
        subtitle="Tk. 3,600.00"
      />
    </View>
    <View style={mb20}>
      <VerifiedInfo
        title1="bKash Account Name"
        title2="bKash Account Number"
        subtitle1="Mehzabi Chaudhry"
        subtitle2="01755 666 777"
      />
    </View>
    <View style={mb20}>
      <Scan
        title="Scan a valid QR code"
        subtitle="Please scan a valid QR code connect ID from
        the product or web"
        content="Scan now"
      />
    </View>
    <View style={mb20}>
      <ExpenseItem
        title="Hotel Name"
        subtitle="Dhaka"
        topValue="1002"
        bottomValue="340"
      />
    </View>
    <View style={mb20}>
      <TripType
        url="https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048"
        title="Hotel Name"
      />
    </View>
    <View style={mb20}>
      <HotelItem
        url="https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048"
        title="Hotel Name"
        subtitle="Dhaka"
        price="1002"
        people="340"
        rating="4"
      />
    </View>
  </ScrollView>
);

export default CardTest;
