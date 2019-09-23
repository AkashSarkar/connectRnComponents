import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwipeableCard from './src/component/swipeable/SwipeableCard';

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
    height: 300,
    marginBottom: 10
  }
});
const BoxShadow = ({ children }) => (
  <View style={style.boxShadow}>{children}</View>
);

const App = () => {
  return (
    <View>
      <SwipeableCard>
        <BoxShadow>
          <View style={{justifyContent:"center"}}>
            <Text>Hello world</Text>
          </View>
        </BoxShadow>

      </SwipeableCard>
    </View>

  );
};
export default App;
