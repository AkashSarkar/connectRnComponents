import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  Animated,
  ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  mb10, mt10, p10, pl25
} from '../../styles/commonStyle';
import { HeaderTop, TextComponent } from '../../component/ui';
import { budgetMultiShades, colors, fonts } from '../../styles/baseStyle';
import Budget from '../../component/widget/interactive/budget/Budget';

if (
  Platform.OS === 'android'
  && UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const BudgetTest = ({ navigation }) => {
  const [shouldSubBudgetRender, setShouldSubBudgetRender] = useState(false);
  const [renderAll, setRenderAll] = useState(true);

  const mapBudget = () => (
    [
      {
        name: 'Phone',
        amount: '50,000',
        amountTitle: 'Phone Budget'
      },
      {
        name: 'Laptop',
        amount: '100,000',
        amountTitle: 'Laptop Budget'
      },
      {
        name: 'Grocery',
        amount: '5,000',
        amountTitle: 'Grocery Budget'
      },
      {
        name: 'Shopping',
        amount: '20,000',
        amountTitle: 'Shopping Budget'
      },
      {
        name: 'Phone',
        amount: '50,000',
        amountTitle: 'Phone Budget'
      },
      {
        name: 'Laptop',
        amount: '100,000',
        amountTitle: 'Laptop Budget'
      },
      {
        name: 'Grocery',
        amount: '5,000',
        amountTitle: 'Grocery Budget'
      },
      {
        name: 'Shopping',
        amount: '20,000',
        amountTitle: 'Shopping Budget'
      },
      {
        name: 'Shopping',
        amount: '20,000',
        amountTitle: 'Shopping Budget'
      }
    ]
  );
  let number = 9;
  const renderSubBudget = () => {
    const colorsArray = [...budgetMultiShades, { color: colors.secondary }]
    return (
      mapBudget().map((item, index) => {
        number -= 1;
        return (
          <Animated.View style={[pl25, mb10]} key={index}>
            <Budget
              name={item.name}
              amount={item.amount}
              amountTitle={item.amountTitle}
              shadeColor={colorsArray[number]}
              isSubBudget
            />
          </Animated.View>
        );
      })
    );
  }
  const renderBudgetList = () => (
    <View style={[p10, mt10]}>
      <View style={mb10}>
        <TextComponent
          size={fonts.fs18}
          color={colors.secondary}
          content="interactive/BudgetList"
          family={fonts.medium}
        />
      </View>
      <TouchableOpacity
        style={mb10}
        activeOpacity={0.9}
        onPress={() => {
          setShouldSubBudgetRender(!shouldSubBudgetRender);
          setRenderAll(!renderAll);
        }}
      >
        <Budget
          name="Shopping"
          amount="10,000,000"
          amountTitle="Budget Amount"
          shadeColor={budgetMultiShades}
        />
      </TouchableOpacity>
      {
        shouldSubBudgetRender && renderSubBudget()
      }

    </View>
  );
  return (
    <ScrollView>
      <HeaderTop content="Modal Test" onPress={() => navigation.goBack()}/>
      {renderAll ? (
        <View>
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
              shadeColor={budgetMultiShades}
            />
          </View>
          {renderBudgetList()}
        </View>
      ) : (
        renderBudgetList()
      )}
    </ScrollView>
  );
};
export default BudgetTest;
