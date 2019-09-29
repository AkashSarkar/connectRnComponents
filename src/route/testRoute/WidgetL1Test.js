import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ButtonPrimary, TextComponent } from '../../component/ui';
import {
  mb10, mb20, p10, pb10
} from '../../styles/commonStyle';
import AccountSliderItem from '../../component/widget/card/AccountSliderItem';
import AccountListItem from '../../component/widget/card/AccountListItem';
import AccountDetails from '../../component/widget/card/AccountDetails';
import Ad from '../../component/widget/card/Ad';

import {
  Amount,
  Avatar,
  CTA,
  ExpenseItem,
  HotelItem,
  PopUpMessage,
  Scan,
  SeatListItem,
  TripType,
  VerifiedInfo
} from '../../component/widget';

const WidgetL1Test = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const handleAccountSliderItem = () => {
    alert('AccountSliderItem');
  };

  const accountListonSwitchChange = () => {
    alert('accountListonSwitchChange');
  };

  const handleAccountDetailsShareButton = () => {
    alert('handleShareButton');
  };

  const handleOnAdChange = () => {
    alert('handleOnAdChange');
  };

  const onAccountListIconPress = () => {
    alert('onAccountListIconPress');
  };

  const accountListItemInformation = {
    accountName: 'Jamuna Bank',
    suffix: '23',
    accountNo: '4829 8888 9090 9999',
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
          suffixNo={12}
          amount={12589997.88888}
          connectAcc="0002-90909-90909"
        />
      </View>
      {/* widget/card/AccountSliderItem */}

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/AccountListItem"
          family={fonts.bold}
        />
        <AccountListItem
          onSwitchChange={accountListonSwitchChange}
          onIconPress={onAccountListIconPress}
          accountInformation={accountListItemInformation}
        />
      </View>
      {/* widget/card/AccountListItem */}

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/AccountDetails"
          family={fonts.bold}
        />
        <AccountDetails handleShareButton={handleAccountDetailsShareButton} />
      </View>
      {/* widget/card/AccountDetails */}

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
          details="consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        />
      </View>
      {/* widget/card/Ad */}
      <View style={mb20}>
        <CTA
          title="Send"
          subtitle="Money"
        />
      </View>

      <View style={mb20}>
        <Avatar
          title="Send"
          subtitle="Money"
        />
      </View>

      <View style={mb20}>
        <SeatListItem
          title="Desh Travels"
          subtitle="110-DHK-CHAP Non AC"
          duration="5:45 AM  1:30 PM"
          available="32 Seats Available"
          price="BDT Tk. 450.00"
        />
      </View>

      <View style={mb20}>
        <PopUpMessage
          icon="Check"
          content="Success message"
        />
      </View>

      <View style={mb20}>
        <Amount
          title="Due Amount"
          subtitle="Tk. 3,600.00"
        />
      </View>

      <View style={mb20}>
        <VerifiedInfo
          title1="bKash Account Name"
          title2="bKash Account Number"
          subtitle1="Mehzabi Chaudhry"
          subtitle2="01755 666 777"
        />
      </View>

      <View style={mb20}>
        <Scan
          title="Scan a valid QR code"
          subtitle="Please scan a valid QR code connect ID from
        the product or web"
          content="Scan now"
        />
      </View>

      <View style={mb20}>
        <ExpenseItem
          title="Hotel Name"
          subtitle="Dhaka"
          topValue="1002"
          bottomValue="12%"
        />
      </View>

      <View style={mb20}>
        <TripType
          logo="https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048"
          title="Hotel Name"
        />
      </View>

      <View style={mb20}>
        <HotelItem
          logo="https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048"
          title="Hotel Name"
          subtitle="Dhaka"
          price="1002"
          people="340"
          rating="4"
        />
      </View>

      <View style={[p10]}>
        <View style={mb10}>
          <TextComponent
            size={fonts.fs30}
            color={colors.black0}
            content="Card Input Widget"
            family={fonts.bold}
          />
        </View>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Input Widget Test"
          onPress={() => navigation.navigate('WidgetInputTest')}
        />
      </View>
    </ScrollView>
  );
};

export default WidgetL1Test;
