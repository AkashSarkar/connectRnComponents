import React from 'react';
import { TouchableOpacity, Text, SafeAreaView } from 'react-native';

const App = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('TestRoute')}
      >
        <Text style={{ fontFamily: 'Montserrat-Bold' }}>Go to test route</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default App;
