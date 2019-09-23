import {createStackNavigator, createAppContainer} from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import AccountSliderItem from '../component/widget/card/AccountSliderItem';

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
    AccountSliderItem
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
