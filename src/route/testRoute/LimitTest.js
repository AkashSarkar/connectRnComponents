import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Limit from '../../component/interactive/limit/Limit';
import { ButtonPrimary } from '../../component/ui';
import { gradientColors, fonts, colors } from '../../styles/baseStyle';
import { LimitChange } from '../../component/interactive';

const LimitTest = () => {
  const [utilizedLimit, setUtilizedLimit] = useState(100000);
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Limit utilizedLimit={utilizedLimit} limit={500000} />
      <ButtonPrimary textColor={colors.white1} buttonColor={gradientColors.gradientPrimary} content="Set Limit" onPress={() => setUtilizedLimit(utilizedLimit + 50000)} />
      <View style={{ marginBottom: 15 }} />
      <LimitChange utilizedLimit={utilizedLimit} setUtilizedLimit={setUtilizedLimit} limit={500000} />
    </View>
  );
};

export default LimitTest;
