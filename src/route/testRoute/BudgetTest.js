import React from 'react';
import { View } from 'react-native';
import { mb10, mt10, p10 } from '../../styles/commonStyle';
import { TextComponent, HeaderTop } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';
import Budget from '../../component/widget/interactive/budget/Budget';

const BudgetTest = ({ navigation }) => (
  <View>
    <HeaderTop content="Modal Test" onPress={() => navigation.goBack()} />
    <View style={[p10, mt10]}>
      <View style={mb10}>
        <TextComponent
          size={fonts.fs18}
          color={colors.secondary}
          content="interactive/Budget"
          family={fonts.medium}
        />
      </View>
      <Budget
        name="Shopping"
        amount="10,000,000"
        amountTitle="Budget Amount"
      />
    </View>
  </View>
);
export default BudgetTest;
