import {createStackNavigator, createAppContainer} from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import AccountSliderItem from '../component/widget/card/AccountSliderItem';
import ButtonTest from './testRoute/ButtonTest';

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
    AccountSliderItem,
    ButtonTest
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
