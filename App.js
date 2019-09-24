import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const App = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TestRoute')}>
      <Text style={{fontFamily: 'Montserrat-Bold'}}>Go to test route</Text>
    </TouchableOpacity>
  );
};
export default App;
