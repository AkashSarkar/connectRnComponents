import React, { Component } from 'react';
import {
  Animated, Dimensions, Easing, Text, View
} from 'react-native';
import SortableList from 'react-native-sortable-list';
import assets from '../../assets';
import AccountListItem from '../../component/widget/card/AccountListItem';
import { ph10 } from '../../styles/commonStyle';

const window = Dimensions.get('window');


const data = [
  {
    accountName: 'Jamuna Bank',
    suffix: '12',
    accountNo: '4829 0921 8391 5243',
    accountType: 'Salary A/C',
    isSwitchOn: false,
    accountImage: assets.JamunaBankLogo1

  },
  {
    accountName: 'Jamuna Bank',
    suffix: '12',
    accountNo: '4829 0921 8391 5243',
    accountType: 'Salary A/C',
    isSwitchOn: false,
    accountImage: assets.Visa1
  },
  {
    accountName: 'Jamuna Bank',
    suffix: '12',
    accountNo: '2233 2922 2323 5252',
    accountType: 'Salary A/C',
    isSwitchOn: true

  },
  {
    accountName: 'Jamuna Bank',
    suffix: '12',
    accountNo: '5498 0665 9691 7368',
    accountType: 'Salary A/C',
    isSwitchOn: true,
    accountImage: assets.Mastercard1
  },
  {
    accountName: 'Dmoney',
    suffix: '12',
    accountNo: '4829 0921 8391 5243',
    accountType: 'Dmoney',
    isSwitchOn: true,
    accountImage: assets.Dmoney2
  }
];

export default class Basic extends Component {
  renderRow = ({ data, active }) => <Row data={data} active={active} />

  render() {
    return (
      <View>
        <Text>React Native Sortable List</Text>
        <SortableList
          data={data}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

class Row extends Component {
  constructor(props) {
    super(props);
    this.active = new Animated.Value(0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      Animated.timing(this.active, {
        duration: 300,
        easing: Easing.bounce,
        toValue: Number(nextProps.active)
      }).start();
    }
  }

  render() {
    const { data, active } = this.props;

    return (
      <Animated.View style={ph10}>
        <AccountListItem accountInformation={data} />
      </Animated.View>
    );
  }
}
