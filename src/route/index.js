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
import ModalTest from './testRoute/ModalTest';

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
    ModalTest
  },
  {
    initialRouteName: 'ModalTest',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
