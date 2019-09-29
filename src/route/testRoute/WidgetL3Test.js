import React from 'react';
import {ScrollView, View} from "react-native";
import {colors, fonts} from "../../styles/baseStyle";
import {TextComponent} from "../../component/ui";
import {mb10, pb10} from "../../styles/commonStyle";
import PaymentInfo from "../../component/widget/list/PaymentInfo";
import Checkout from "../../component/widget/list/Checkout";
import QuickAmount from "../../component/widget/list/QuickAmount";

const WidgetL2Test = ({navigation}) => {

  let paymentInformation = [
    {
      title: 'Coke Light (35x10)',
      amount: 350
    },
    {
      title: 'Heineken Beer (450x10)',
      amount: 4500
    },
    {
      title: 'Pizza-Margherita (1250x3)',
      amount: 3750
    },
    {
      title: 'Ice-cream (280x10)',
      amount: 2800
    },
    {
      title: 'VAT (5%)',
      amount: 600
    }
  ];

  let checkoutSummary = [
    {
      title: 'Date',
      message: 'Aug, 10'
    },
    {
      title: 'Time',
      message: '12:30'
    },
    {
      title: 'Cinema Hall',
      message: 'Cineplex'
    }, {
      title: 'Quantity, 3',
      message: 'Tickets, 3'
    },
  ];

  let quickAmounts = [10,20,30,40,50];

  const checkoutQuantity = () => {
    alert("CHECK OUT")
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
          content="List"
          family={fonts.bold}
        />
      </View>

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/PaymentInfo"
          family={fonts.bold}
        />
        <PaymentInfo
          paymentInformation={paymentInformation}
          title="Pizza Hut"
          paymentDate="24-06-2019"
          totalAmount="12000"/>
      </View>
      {/*list/PaymentInfo*/}

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/PaymentInfo"
          family={fonts.bold}
        />
        <Checkout
          onPressQuantity={checkoutQuantity}
          totalAmount={1650}
          checkoutSummary={checkoutSummary}
          totalQuantity={3}/>
      </View>
      {/*list/PaymentInfo*/}

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/QuickAmount"
          family={fonts.bold}
        />
        <QuickAmount amounts={quickAmounts}/>
      </View>
      {/*list/QuickAmount*/}
    </ScrollView>
  )
};

export default WidgetL2Test