import React from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView
} from 'react-native';
import {
  SeatListItem,
  PopUpMessage,
  Amount,
  VerifiedInfo,
  InputLogin,
  InputLabeled,
  InputTabbed,
  InputMiddleLabeled
} from '../../component/widget';
import { mb20, p10 } from '../../styles/commonStyle';

const screenContainer = {
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  paddingLeft: 10,
  paddingRight: 10,
  paddingVertical: 10
};

const CardTest = () => (
  <ScrollView>
    <KeyboardAvoidingView>
      <View style={mb20}>
        <SeatListItem/>
      </View>
      <View style={mb20}>
        <PopUpMessage/>
      </View>
      <View style={mb20}>
        <Amount/>
      </View>
      <View style={mb20}>
        <VerifiedInfo/>
      </View>

      <View style={mb20}>
        <InputLogin/>
      </View>

      <View style={[mb20, p10]}>
        <InputLabeled/>
      </View>

      <View style={[mb20]}>
        <InputTabbed/>
      </View>
      <View style={[mb20]}>
        <InputMiddleLabeled/>
      </View>
    </KeyboardAvoidingView>
  </ScrollView>
);

export default CardTest;
