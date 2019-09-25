import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import ButtonTest from './testRoute/ButtonTest';
import HeaderTest from './testRoute/HeaderTest';

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
    ButtonTest,
    HeaderTest
  },
  {
    initialRouteName: 'HeaderTest',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
