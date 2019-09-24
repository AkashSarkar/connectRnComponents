import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BoxShadow } from '../../ui';
import { gradientColors } from '../../../styles/baseStyle';

const InputLogin = () => {
  return (
    <BoxShadow>
      <LinearGradient colors={gradientColors.gradientInputLogin}>
        <View>

        </View>
      </LinearGradient>
    </BoxShadow>
  );
}
export default InputLogin;
