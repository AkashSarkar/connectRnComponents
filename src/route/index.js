import { createAppContainer, createStackNavigator } from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import CardTest from './testRoute/CardTest';
import ButtonTest from './testRoute/ButtonTest';
import TestAccountSliderItem from './testRoute/TestAccountSliderItem';
import TabTest from './testRoute/TabTest';
import PickerTest from './testRoute/PickerTest';
import InputTest from './testRoute/InputTest';
import SwitchTest from './testRoute/SwitchTest';

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
    CardTest,
    ButtonTest,
    TestAccountSliderItem,
    TabTest,
    PickerTest,
    InputTest,
    SwitchTest
  },
  {
    initialRouteName: 'TestRoute',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
