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
import LimitTest from './testRoute/LimitTest';
import SplitTest from './testRoute/SplitTest';
import NotificationTest from './testRoute/NotificationTest';
import FnfTest from './testRoute/FnfTest';

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
    LimitTest,
    SplitTest,
    NotificationTest,
    FnfTest
  },
  {
    initialRouteName: 'TestRoute',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
