import React, { useState } from 'react';
import { View } from 'react-native';
import Limit from '../../component/widget/interactive/limit/Limit';
import { ButtonPrimary, FeatureWrapperV2 } from '../../component/ui';
import { gradientColors, colors } from '../../styles/baseStyle';
import { LimitChange } from '../../component/widget/interactive';
import assets from '../../assets';

const LimitTest = ({ navigation }) => {
  const [utilizedLimit, setUtilizedLimit] = useState(1000);
  const [budgetLimit, setBudgetLimit] = useState(4000);
  return (
    <FeatureWrapperV2
      title=" Test"
      backgroundColor={colors.white1}
      titleTextColor={colors.secondary}
      rightIcon={assets.CrossDark}
      style={{ flex: 1 }}
      rightPressAction={() => navigation.goBack()}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 10,
          paddingHorizontal: 20
        }}
      >
        <Limit utilizedLimit={utilizedLimit} totalLimit={10000} budgetLimit={budgetLimit} />
        <ButtonPrimary
          textColor={colors.white1}
          buttonColor={gradientColors.gradientPrimary}
          content="Set Limit"
          onPress={() => setUtilizedLimit(utilizedLimit + 2000)}
        />
        <ButtonPrimary
          textColor={colors.white1}
          buttonColor={gradientColors.gradientPrimary}
          content="Set Budget"
          onPress={() => setBudgetLimit(budgetLimit + 1000)}
        />
        <View style={{ marginBottom: 15 }} />
        <LimitChange initialUtilized={300000} limit={500000} onChange={currentValue => console.log(currentValue)} />
      </View>
    </FeatureWrapperV2>
  );
};

export default LimitTest;
