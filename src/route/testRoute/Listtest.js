import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { 
  HotelList, TripTypeList, ExpenseList
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
  { id: 3 },
  { id: 4 }
];

const hotels = [
  {
    id: 1,
    title: 'Sonargao',
    url: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
    subtitle: 'Dhaka, Bangladesh',
    price: '11000 per night',
    people: '360',
    rating: '1'
  },
  {
    id: 2,
    title: 'Hotel name',
    url: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
    subtitle: 'Area, Country',
    price: 'Price/night',
    people: '360',
    rating: '2'
  },
  {
    id: 3,
    title: 'Hotel name',
    url: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
    subtitle: 'Area, Country',
    price: 'Price/night',
    people: '360',
    rating: '3'
  },
  {
    id: 4,
    title: 'Hotel name',
    url: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
    subtitle: 'Area, Country',
    price: 'Price/night',
    people: '360',
    rating: '4'
  }
];

const trips = [
  {
    id: 1,
    title: 'Hotel name',
    url: 'https://facebook.github.io/react-native/img/tiny_logo.png'
  },
  {
    id: 2,
    title: 'software',
    url: 'https://facebook.github.io/react-native/img/tiny_logo.png'
  },
  {
    id: 3,
    title: 'software',
    url: 'https://facebook.github.io/react-native/img/tiny_logo.png'
  },
  {
    id: 4,
    title: 'software',
    url: 'https://facebook.github.io/react-native/img/tiny_logo.png'
  }
];


const ListTest = ({ navigation }) => (
  <ScrollView contentContainerStyle={screenContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate('SwipeableWrapperTest')}
    >
      <Text> Button Test</Text>
    </TouchableOpacity>
    <View style={mb20}>
      <HotelList items={hotels} />
    </View>
    <View style={mb20}>
      <TripTypeList items={trips} />
    </View>
    <View style={mb20}>
      <ExpenseList items={items} />
    </View>
  </ScrollView>
);

export default ListTest;
