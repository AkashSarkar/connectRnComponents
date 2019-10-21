import React, { useState } from 'react';
import { View } from 'react-native';
import { mb20, ph15 } from '../../styles/commonStyle';
import { TextComponent } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';
import { Amount } from '../../component/widget';

const AccountListTest = () => {
  const [amount, setAmount] = useState(500);
  return (
    <View style={[mb20, ph15]}>
      <TextComponent
        size={fonts.fs20}
        color={colors.secondary}
        content="AmountCard"
        family={fonts.bold}
      />
      <Amount title="Total Bill" subtitle={`Tk: ${amount}`} />
    </View>

  );
};
export default AccountListTest;
