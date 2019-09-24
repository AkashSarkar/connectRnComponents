import {createAppContainer, createStackNavigator} from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import CardTest from './testRoute/CardTest';
import ButtonTest from './testRoute/ButtonTest';
import AccountDetails from "../component/widget/card/AccountDetails";
import TestAccountSliderItem from './testRoute/TestAccountSliderItem';

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
    CardTest,
    ButtonTest,
    AccountDetails,
    TestAccountSliderItem
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
