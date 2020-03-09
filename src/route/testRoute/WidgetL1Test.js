import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { colors, fonts } from '../../styles/baseStyle';
import { HeaderTop, TextComponent } from '../../component/ui';
import {
  mb10, mb20, mt10, p10, pb10
} from '../../styles/commonStyle';
import AccountSliderItem from '../../component/widget/card/AccountSliderItem';
import AccountListItem from '../../component/widget/card/AccountListItem';
import AccountDetails from '../../component/widget/card/AccountDetails';
import Ad from '../../component/widget/card/Ad';

import {
  Amount,
  CTA,
  ExpenseItem,
  HotelItem,
  InputLabeled,
  InputLogin,
  InputMiddleLabeled,
  PopUpMessage,
  Scan,
  SeatListItem,
  TripType,
  VerifiedInfo,
  InputTabbedV2
} from '../../component/widget';
import BoxShadow from '../../component/ui/wrapper/BoxShadow';
import InputField from '../../component/widget/input/InputField';
import assets from '../../assets';
import Selection from '../../component/widget/card/Selection';
import ProfileCard from '../../component/widget/card/ProfileCard';
import PaymentsCard from '../../component/widget/card/PaymentsCard';

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
  const handleSelectionModal = () => {
    alert('handleSelectionModal');
  };

  const onButtonPress = () => {
    console.log('');
  };

  const onTextChange = (val) => {
    console.log(val);
  };

  return (
    <ScrollView contentContainerStyle={screenContainer}>
      <HeaderTop content="Modal Test" onPress={() => navigation.goBack()} />
      <View style={mb10}>
        <TextComponent
          size={fonts.fs30}
          color={colors.black0}
          content="Card"
          family={fonts.bold}
        />
      </View>
      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/SeatListItem"
          family={fonts.bold}
        />
        <SeatListItem
          title="Desh Travels"
          subtitle="110-DHK-CHAP Non AC"
          duration="5:45 AM  1:30 PM"
          available="32 Seats Available"
          price="BDT Tk. 450.00"
        />
      </View>

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/PopUpMessage"
          family={fonts.bold}
        />
        <PopUpMessage
          icon="Check"
          content="Success message"
        />
      </View>

      <View style={{ marginLeft: 10 }}>
        <View style={mb10}>
          <TextComponent
            size={fonts.fs20}
            color={colors.secondary}
            content="widget/card/InputSearch"
            family={fonts.bold}
          />
        </View>
        <BoxShadow>
          <View style={{ padding: 15 }}>
            <InputField
              value={search}
              placeholder="Type here"
              keyboardType="default"
              maxLength={11}
              returnKeyType="next"
              onChangeText={(text) => {
                setSearch(text);
              }}
              setIsValid={(validity) => {
              }}
              validations={[
                {
                  validationType: 'required',
                  value: true,
                  msg: 'This field is required'
                },
                {
                  validationType: 'type',
                  value: 'number',
                  msg: 'This field must be number'
                }
              ]}
              isIcon
              iconSource={assets.Search}
            />
          </View>
        </BoxShadow>
        {/* widget/card/InputSearch */}
      </View>

      <View>
        <View style={[mb20, p10, mt10]}>
          <TextComponent
            size={fonts.fs20}
            color={colors.secondary}
            content="widget/card/InputLogin"
            family={fonts.bold}
          />
          <InputLogin />
        </View>
        <View style={[mb20, p10, mt10]}>
          <TextComponent
            size={fonts.fs20}
            color={colors.secondary}
            content="widget/card/InputLabeled"
            family={fonts.bold}
          />
          <InputLabeled />
        </View>
        <View style={mb20}>
          <TextComponent
            size={fonts.fs20}
            color={colors.secondary}
            content="widget/card/InputTabbed"
            family={fonts.bold}
          />
          <InputTabbedV2 />
        </View>
        <View style={mb20}>
          <TextComponent
            size={fonts.fs20}
            color={colors.secondary}
            content="widget/card/InputMiddleLabeled"
            family={fonts.bold}
          />
          <InputMiddleLabeled
            isInput
            isButton
            isIcon
            placeholder="+880"
            buttonText="Next"
            onButtonPress={onButtonPress}
            title="Mobile Number"
            subtitle="Please enter the mobile number that your bank account is registered with"
            onTextChange={onTextChange}
          />
        </View>
      </View>
      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/Selection"
          family={fonts.bold}
        />
        <Selection
          heading="Grameenphone"
          handleModalOpen={handleSelectionModal}
        />
      </View>

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/AccountListItem"
          family={fonts.bold}
        />
        <AccountListItem accountInformation={accountListItemInformation} />
      </View>
      {/* widget/card/AccountListItem */}
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
          content="widget/card/ProfileCard"
          family={fonts.bold}
        />
        <ProfileCard
          handleInformation={handleAccountSliderItem}
          suffixNo={12}
          amount={12589997.88888}
          connectAcc="0002-90909-90909"
        />
      </View>
      {/* widget/card/ProfileCard */}

      <View style={pb10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/PaymentsCard"
          family={fonts.bold}
        />
        <PaymentsCard
          upperLeftContent="Salary Account"
          upperRightContent="188,000.00"
          lowerContent1="Remaining balance:"
          lowerContent2="175,500.00"
          upperLeftIcon={assets.Add}
          upperRightIcon={assets.Add2}
          lowerIcon={assets.Add2}
        />
      </View>
        
      {/* widget/card/PaymentsCard */}

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
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/AmountChange"
          family={fonts.bold}
        />
        {/* Amount change component goes here */}
      </View>
      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/Scan"
          family={fonts.bold}
        />
        <Scan
          title="Scan a valid QR code"
          subtitle="Please scan a valid QR code connect ID from
        the product or web"
          content="Scan now"
        />
      </View>

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/Amount"
          family={fonts.bold}
        />
        <Amount
          title="Due Amount"
          subtitle="Tk. 3,600.00"
        />
      </View>

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/VerifiedInfo"
          family={fonts.bold}
        />
        <VerifiedInfo
          title1="bKash Account Name"
          title2="bKash Account Number"
          subtitle1="Mehzabi Chaudhry"
          subtitle2="01755 666 777"
        />
      </View>

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/CTA"
          family={fonts.bold}
        />
        <CTA
          title="Send"
          subtitle="Money"
          logo={assets.SendMoney}
        />
      </View>
      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/TripType"
          family={fonts.bold}
        />
        <TripType
          logo={assets.Hotel}
          title="Hotel Name"
        />
      </View>

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/Hotel"
          family={fonts.bold}
        />
        <HotelItem
          logo={assets.Hotel}
          title="Hotel Name"
          subtitle="Dhaka"
          price="1002"
          people="340"
          rating="4"
        />
      </View>
      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="widget/card/ExpenseItem"
          family={fonts.bold}
        />
        <ExpenseItem
          title="Hotel Name"
          subtitle="Dhaka"
          topValue="1002"
          bottomValue="12%"
        />
      </View>
    </ScrollView>
  );
};

export default WidgetL1Test;
