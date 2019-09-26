import { createAppContainer, createStackNavigator } from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import CardTest from './testRoute/CardTest';
import ButtonTest from './testRoute/ButtonTest';
import HeaderTest from './testRoute/HeaderTest';
import TestAccountSliderItem from './testRoute/TestAccountSliderItem';
import TabTest from './testRoute/TabTest';
import PickerTest from './testRoute/PickerTest';
import ListTest from './testRoute/ListTest';
import InputTest from './testRoute/InputTest';
import SwitchTest from './testRoute/SwitchTest';
import UIComponentTest from './testRoute/UIComponentTest';
import WidgetL1Test from './testRoute/WidgetL1Test';
import WidgetL3Test from './testRoute/WidgetL3Test';
import LimitTest from './testRoute/LimitTest';
import SplitTest from './testRoute/SplitTest';
import FnfTest from './testRoute/FnfTest';
import InteractiveTest from './testRoute/InteractiveTest';
import WidgetInputTest from './testRoute/WidgetInputTest';

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
    ButtonTest,
    HeaderTest,
    CardTest,
    TestAccountSliderItem,
    TabTest,
    PickerTest,
    ListTest,
    InputTest,
    SwitchTest,
    UIComponentTest,
    WidgetL1Test,
    WidgetL3Test,
    SplitTest,
    FnfTest,
    LimitTest,
    InteractiveTest,
    WidgetInputTest
  },
  {
    initialRouteName: 'TestRoute',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
