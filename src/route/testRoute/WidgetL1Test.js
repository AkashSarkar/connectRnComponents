import React from 'react';
import {ScrollView, View} from "react-native";
import {colors, fonts, gradientColors} from "../../styles/baseStyle";
import {TextComponent} from "../../component/ui";
import {mb10, pb10} from "../../styles/commonStyle";
import AccountSliderItem from "../../component/widget/card/AccountSliderItem";
import AccountListItem from "../../component/widget/card/AccountListItem";
import AccountDetails from "../../component/widget/card/AccountDetails";
import Ad from "../../component/widget/card/Ad";

const WidgetL1Test = ({navigation}) => {

  const handleAccountSliderItem = () => {
    alert("AccountSliderItem");
  };

  const accountListonSwitchChange = () => {
    alert("accountListonSwitchChange");
  };

  const handleAccountDetailsShareButton = () => {
    alert("handleShareButton");
  };

  const handleOnAdChange = () => {
    alert("handleOnAdChange");
  };

  let accountListItemInformation = {
    accountName: 'Jamuna Bank',
    suffix: '23',
    accountNo: '4829 888888 9090 99',
    accountType: 'Salary A/C',
    isSwitchOn: true
  };

  const screenContainer = {
    paddingHorizontal: 10,
    paddingVertical: 10
  };

  return (
    <ScrollView contentContainerStyle={screenContainer}>
      <View style={mb10}>
        <TextComponent
          size={fonts.fs30}
          color={colors.black0}
          content="Card"
          family={fonts.bold}
        />
      </View>

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/AccountSliderItem"
          family={fonts.bold}
        />
        <AccountSliderItem
          handleInformation={handleAccountSliderItem}
          gradient={gradientColors.gradientYellow}
          suffixNo="12" amount={`125897.00`}
          connectAcc={`0002-90909-90909`}
        />
      </View>
      {/*widget/card/AccountSliderItem*/}

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/AccountListItem"
          family={fonts.bold}
        />
        <AccountListItem
          onSwitchChange={accountListonSwitchChange}
          accountInformation={accountListItemInformation}/>
      </View>
      {/*widget/card/AccountListItem*/}

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/AccountDetails"
          family={fonts.bold}
        />
        <AccountDetails
          handleShareButton={handleAccountDetailsShareButton}/>
      </View>
      {/*widget/card/AccountDetails*/}

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/Ad"
          family={fonts.bold}
        />
        <Ad
          handleCloseAd={handleOnAdChange}
          title="Lorem ipsum dolor sit amet"
          details="consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."/>
      </View>
      {/*widget/card/Ad*/}


    </ScrollView>
  )
};

export default WidgetL1Test