import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const App = ({ navigation }) => {
  console.log(navigation);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TestRoute')}>
      <Text>Go to test route</Text>
    </TouchableOpacity>
  );
}
export default App;
