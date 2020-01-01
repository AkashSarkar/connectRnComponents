import { createAppContainer, createStackNavigator } from 'react-navigation';
import App from '../../App';
import TestRoute from './testRoute/TestRoute';
import SwipeableWrapperTest from './testRoute/SwipeableWrapperTest';
import CardTest from './testRoute/CardTest';
import ButtonTest from './testRoute/ButtonTest';
import HeaderTest from './testRoute/HeaderTest';
import TabTest from './testRoute/TabTest';
import PickerTest from './testRoute/PickerTest';
import ListTest from './testRoute/ListTest';
import InputTest from './testRoute/InputTest';
import SwitchTest from './testRoute/SwitchTest';
import ModalTest from './testRoute/ModalTest';
import LimitTest from './testRoute/LimitTest';
import SplitTest from './testRoute/SplitTest';
import NotificationTest from './testRoute/NotificationTest';
import FnfTest from './testRoute/FnfTest';
import InteractiveTest from './testRoute/InteractiveTest';
import WidgetInputTest from './testRoute/WidgetInputTest';
import UIComponentTest from './testRoute/UIComponentTest';
import UIComponentV2Test from './testRoute/UIComponentsV2Test';
import WidgetL1Test from './testRoute/WidgetL1Test';
import WidgetL2Test from './testRoute/WidgetL2Test';
import WidgetL3Test from './testRoute/WidgetL3Test';
import ControlTest from './testRoute/ControlTest';
import BudgetTest from './testRoute/BudgetTest';
import DragRouteTest from './testRoute/DragRouteTest';
import AccountListTest from './testRoute/AccountListTest';
import CCMTest from './testRoute/CCMTest';
import BottomDrawerTest from './testRoute/BottomDrawerTest';
import GraphTest from './testRoute/GraphTest';
import AmountCardTest from './testRoute/AmountCardTest';
import QRTest from './testRoute/QRTest';
import CameraTest from './testRoute/CameraTest';
import ProfileCardTest from './testRoute/ProfileCardTest';


const AppNavigator = createStackNavigator(
  {
    Home: App,
    TestRoute,
    SwipeableWrapperTest,
    ButtonTest,
    HeaderTest,
    CardTest,
    TabTest,
    PickerTest,
    ListTest,
    InputTest,
    SwitchTest,
    ModalTest,
    UIComponentTest,
    UIComponentV2Test,
    WidgetL1Test,
    WidgetL2Test,
    WidgetL3Test,
    SplitTest,
    FnfTest,
    LimitTest,
    InteractiveTest,
    WidgetInputTest,
    NotificationTest,
    ControlTest,
    DragRouteTest,
    BudgetTest,
    AccountListTest,
    CCMTest,
    BottomDrawerTest,
    GraphTest,
    QRTest,
    CameraTest,
    ProfileCardTest,
  },
  {
    initialRouteName: 'ButtonTest',
    headerMode: 'none'
  },
);

export default createAppContainer(AppNavigator);
