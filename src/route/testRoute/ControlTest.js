import React from 'react';
import { View } from 'react-native';
import { Control } from '../../component/widget';

const ControlTest = () => (
  <View style={{
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 60
  }}
  >
    <Control
      onSwipeLeft={() => console.warn('left')}
      onSwipeRight={() => console.warn('right')}
      onSwipeUp={() => console.warn('up')}
      onSwipeDown={() => console.warn('down')}
    />
  </View>
);

export default ControlTest;
