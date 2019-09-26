import React from 'react';
import { View } from 'react-native';
import Switch from '../../component/ui/input/Switch';
import { colors } from '../../styles/baseStyle';

const SwitchTest = () => {
  return (
    <View style={{ marginTop: 100, marginLeft: 10 }}>
      <Switch
        value={false}
        onChange={value => console.log(value)}
        thumbColor={colors.secondary}
        trackColor={colors.grey1}
      />
    </View>
  );
}
export default SwitchTest;
