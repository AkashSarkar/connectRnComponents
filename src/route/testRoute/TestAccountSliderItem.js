import React from 'react';
import {View} from 'react-native';
import AccountSliderItem from "../../component/widget/card/AccountSliderItem";
import {gradientColors} from "../../styles/baseStyle";

const TestAccountSliderItem = () => {

  const handleInformation = () => {
    alert("HELLO")
  };

  let suffix = 12;
  let _amount = 30444444.99;
  let connectAcc = "s23 3343 34";

  return (
    <View>
      <AccountSliderItem
        handleInformation={handleInformation}
        gradient={gradientColors.gradientYellow}
        suffixNo={suffix} amount={_amount}
        connectAcc={connectAcc}
      />
    </View>
  )
};

export default TestAccountSliderItem