import React from 'react';
import {
  ScrollView, TouchableOpacity, Text, View
} from 'react-native';
import {
  HotelList, TripTypeList, ExpenseList, BrandStackList, MenuStackList
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
    logo: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
    subtitle: 'Dhaka, Bangladesh',
    price: '11000 per night',
    people: '360',
    rating: '1'
  },
  {
    id: 2,
    title: 'Hotel name',
    logo: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
    subtitle: 'Area, Country',
    price: 'Price/night',
    people: '360',
    rating: '2'
  },
  {
    id: 3,
    title: 'Hotel name',
    logo: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
    subtitle: 'Area, Country',
    price: 'Price/night',
    people: '360',
    rating: '3'
  },
  {
    id: 4,
    title: 'Hotel name',
    logo: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
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
    logo: 'https://facebook.github.io/react-native/img/tiny_logo.png'
  },
  {
    id: 2,
    title: 'software',
    logo: 'https://facebook.github.io/react-native/img/tiny_logo.png'
  },
  {
    id: 3,
    title: 'software',
    logo: 'https://facebook.github.io/react-native/img/tiny_logo.png'
  },
  {
    id: 4,
    title: 'software',
    logo: 'https://facebook.github.io/react-native/img/tiny_logo.png'
  }
];

const expense = [
  {
    id: 1,
    title: 'Transport',
    subtitle: '5 Transaction',
    topValue: '900',
    bottomValue: '100%',
    logo: 'Check'

  },
  {
    id: 2,
    title: 'Transport',
    subtitle: '5 Transaction',
    topValue: '100',
    bottomValue: '0%',
    logo: 'Check'
  },
  {
    id: 3,
    title: 'Transport',
    subtitle: '5 Transaction',
    topValue: '2.2',
    bottomValue: '30%',
    logo: 'Check'
  },
  {
    id: 4,
    title: 'Transport',
    subtitle: '5 Transaction',
    topValue: '34',
    bottomValue: '70%',
    logo: 'Check'
  }
];

const brands = [
  {
    id: 1,
    content: 'Transport',
    buttonColor: 'yellow1',
    textColor: 'primary2',
    logo: 'Check'

  },
  {
    id: 2,
    content: 'Transport',
    buttonColor: 'yellow1',
    textColor: 'primary2',
    logo: 'Check'
  },
  {
    id: 3,
    content: 'Transport',
    buttonColor: 'yellow1',
    textColor: 'primary2',
    logo: 'Check'
  },
  {
    id: 4,
    content: 'Transport',
    buttonColor: 'yellow1',
    textColor: 'primary2',
    logo: 'LogoConnect'
  }
];

const menus = [
  {
    id: 1,
    content: 'Transport',
    buttonColor: 'success',
    textColor: 'primary2',
    logo: 'Check'

  },
  {
    id: 2,
    content: 'Transport',
    buttonColor: 'error',
    textColor: 'primary2',
    logo: 'Check'
  },
  {
    id: 3,
    content: 'Transport',
    buttonColor: 'white1',
    textColor: 'primary2',
    logo: 'Check'
  },
  {
    id: 4,
    content: 'Transport',
    buttonColor: 'yellow1',
    textColor: 'primary2',
    logo: 'LogoConnect'
  }
];


const ListTest = ({ navigation }) => (
  <ScrollView contentContainerStyle={screenContainer}>
    <TouchableOpacity
      style={mb20}
      onPress={() => navigation.navigate('SwipeableWrapperTest')}
    >
      <Text> Button Test</Text>
    </TouchableOpacity>
    <View style={mb20}>
      <BrandStackList
        items={brands}
        onPress={id => console.log(id)}
      />
    </View>
    <View style={mb20}>
      <MenuStackList
        items={menus}
        onPress={id => console.log(id)}
      />
    </View>
    <View style={mb20}>
      <ExpenseList items={expense} />
    </View>
    <View style={mb20}>
      <HotelList items={hotels} />
    </View>
    <View style={mb20}>
      <TripTypeList items={trips} />
    </View>
  </ScrollView>
);

export default ListTest;
