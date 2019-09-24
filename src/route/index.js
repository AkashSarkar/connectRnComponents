import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import ButtonTest from './testRoute/ButtonTest';
import TabTest from './testRoute/TabTest';
import PickerTest from './testRoute/PickerTest';

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
    ButtonTest,
    TabTest,
    PickerTest
  },
  {
    initialRouteName: 'PickerTest',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
