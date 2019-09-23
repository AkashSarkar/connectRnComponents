import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import CardTest from './testRoute/CardTest';

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
    CardTest
  },
  {
    initialRouteName: 'CardTest',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
