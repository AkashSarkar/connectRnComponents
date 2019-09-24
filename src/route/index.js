import { createAppContainer, createStackNavigator } from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import CardTest from './testRoute/CardTest';
import ButtonTest from './testRoute/ButtonTest';
<<<<<<< HEAD
import AccountDetails from '../component/widget/card/AccountDetails';
import TestAccountSliderItem from './testRoute/TestAccountSliderItem';
import TabTest from './testRoute/TabTest';
=======
import TabTest from './testRoute/TabTest';
import PickerTest from './testRoute/PickerTest';
>>>>>>> widget/timePicker

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
<<<<<<< HEAD
    CardTest,
    ButtonTest,
    AccountDetails,
    TestAccountSliderItem,
    TabTest
=======
    ButtonTest,
    TabTest,
    PickerTest
>>>>>>> widget/timePicker
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
