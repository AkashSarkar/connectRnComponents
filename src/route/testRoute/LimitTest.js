import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Limit from '../../component/widget/interactive/limit/Limit';
import { ButtonPrimary } from '../../component/ui';
import { gradientColors, fonts, colors } from '../../styles/baseStyle';
import { LimitChange } from '../../component/widget/interactive';

const LimitTest = () => {
  const [utilizedLimit, setUtilizedLimit] = useState(1000);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 20
      }}
    >
      <Limit utilizedLimit={utilizedLimit} totalLimit={10000} budgetLimit={3000} />
      <ButtonPrimary
        textColor={colors.white1}
        buttonColor={gradientColors.gradientPrimary}
        content="Set Limit"
        onPress={() => setUtilizedLimit(utilizedLimit + 2000)}
      />
      <View style={{ marginBottom: 15 }} />
      <LimitChange initialUtilized={300000} limit={500000} onChange={currentValue => console.log(currentValue)} />
    </View>
  );
};

export default LimitTest;
