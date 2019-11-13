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
import assets from "../../assets";

if (
  // layout animation is used.
  Platform.OS === 'android'
  && UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
/**
 * This component is for showing sub budgets.when budget card is clicked
 * it expends and shows sub budgets sliding from top.
 */
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
  const deleteAction = () => {
    alert('delete');
  };
  const editAction = () => {
    alert('Edit');
  };
  const addAction = () => {
    alert('Add');
  };
  // actions and functions for left swipe
  const mapLeftActions = () => {
    const { Add2 } = assets;
    return (
      [
        {
          id: 1,
          icon: Add2,
          color: '#00000029',
          x: -50,
          pressHandler: addAction
        }
      ]
    );
  };
  // actions and functions for right swipe
  const mapRightActions = () => {
    const { Delete, Edit } = assets;
    return (
      [
        {
          id: 1,
          icon: Delete,
          color: '#00000029',
          x: 150,
          pressHandler: deleteAction
        },
        {
          id: 2,
          icon: Edit,
          color: '#dd2c00',
          x: 50,
          pressHandler: editAction
        }
      ]
    );
  }
  let number = 9;
  /**
   * renders all nine sub budgets
   * animatable views are used for animation
   */
  const renderSubBudget = () => {
    const colorsArray = [...budgetMultiShades, { color: colors.secondary }]
    return (
      mapBudget().map((item, index) => {
        number -= 1;
        return (
          <Animatable.View
            animation="fadeInDown"
            duration={300}
            delay={100}
            style={[pl25, mb10, { zIndex: -1 }]}
            key={index}
          >
            <Budget
              name={item.name}
              amount={item.amount}
              amountTitle={item.amountTitle}
              shadeColor={colorsArray[number]}
              isSubBudget
              leftActions={mapLeftActions()}
              rightActions={mapRightActions()}
            />
          </Animatable.View>
        );
      })
    );
  };
  // list of sub budgtes
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
        activeOpacity={1}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setShouldSubBudgetRender(!shouldSubBudgetRender);
          setRenderAll(!renderAll);
        }}
      >
        <Budget
          name="Shopping"
          amount="10,000,000"
          amountTitle="Budget Amount"
          shadeColor={budgetMultiShades}
          leftActions={mapLeftActions()}
          rightActions={mapRightActions()}
        />
      </TouchableOpacity>
      {
        shouldSubBudgetRender && renderSubBudget()
      }

    </View>
  );
  return (
    <ScrollView>
      <HeaderTop content="Modal Test" onPress={() => navigation.goBack()} />
      {renderAll ? (
        <Animatable.View
          animation="slideInDown"
          duration={300}
          iterationCount={1}
        >
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
              leftActions={mapLeftActions()}
              rightActions={mapRightActions()}
            />
          </View>
          {renderBudgetList()}
        </Animatable.View>
      ) : (
        renderBudgetList()
      )}
    </ScrollView>
  );
};
export default BudgetTest;
