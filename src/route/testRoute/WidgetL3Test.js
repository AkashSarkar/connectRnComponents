import React from 'react';
import { ScrollView, View } from 'react-native';
import { colors, fonts } from '../../styles/baseStyle';
import { TextComponent } from '../../component/ui';
import { mb10, pb10, mb20 } from '../../styles/commonStyle';
import {
  HotelList,
  TripTypeList,
  ExpenseList,
  BrandStackList,
  MenuStackList,
  AvatarList,
  PaymentInfo,
  Checkout,
  QuickAmount
} from '../../component/widget';

const WidgetL2Test = ({ navigation }) => {
  const paymentInformation = [
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

  const checkoutSummary = [
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
    }
  ];

  const quickAmounts = [10, 20, 30, 40, 50];

  const hotels = [
    {
      id: 1,
      title: 'Sonargao',
      logo: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
      subtitle: 'Dhaka, Bangladesh',
      price: '11000 per night',
      people: '360',
      rating: '1'
    },
    {
      id: 2,
      title: 'Hotel name',
      logo: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
      subtitle: 'Area, Country',
      price: 'Price/night',
      people: '360',
      rating: '2'
    },
    {
      id: 3,
      title: 'Hotel name',
      logo: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
      subtitle: 'Area, Country',
      price: 'Price/night',
      people: '360',
      rating: '3'
    },
    {
      id: 4,
      title: 'Hotel name',
      logo: 'https://media.gettyimages.com/photos/hawa-mahal-palace-of-winds-jaipur-rajasthan-india-picture-id596959480?s=2048x2048',
      subtitle: 'Area, Country',
      price: 'Price/night',
      people: '360',
      rating: '4'
    }
  ];

  const trips = [
    {
      id: 1,
      title: 'Hotel name',
      logo: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      id: 2,
      title: 'software',
      logo: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      id: 3,
      title: 'software',
      logo: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      id: 4,
      title: 'software',
      logo: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    }
  ];

  const expense = [
    {
      id: 1,
      title: 'Transport',
      subtitle: '5 Transaction',
      topValue: '900',
      bottomValue: '100%',
      logo: 'Check',
      disabled: false

    },
    {
      id: 2,
      title: 'Transport',
      subtitle: '5 Transaction',
      topValue: '100',
      bottomValue: '0%',
      logo: 'Check',
      disabled: false
    },
    {
      id: 3,
      title: 'Transport',
      subtitle: '5 Transaction',
      topValue: '2.2',
      bottomValue: '30%',
      logo: 'Check',
      disabled: false
    },
    {
      id: 4,
      title: 'Transport',
      subtitle: '5 Transaction',
      topValue: '34',
      bottomValue: '70%',
      logo: 'Check',
      disabled: false
    },
    {
      id: 5,
      title: 'Transport',
      subtitle: '5 Transaction',
      topValue: '',
      bottomValue: '',
      logo: 'Check',
      disabled: true
    },
    {
      id: 6,
      title: 'Transport',
      subtitle: '5 Transaction',
      topValue: '',
      bottomValue: '',
      logo: 'Check',
      disabled: true
    }
  ];

  const brands = [
    {
      id: 1,
      content: 'Transport',
      buttonColor: 'yellow1',
      textColor: 'primary2',
      logo: 'Check'

    },
    {
      id: 2,
      content: 'Transport',
      buttonColor: 'yellow1',
      textColor: 'primary2',
      logo: 'Check'
    },
    {
      id: 3,
      content: 'Transport',
      buttonColor: 'yellow1',
      textColor: 'primary2',
      logo: 'Check'
    },
    {
      id: 4,
      content: 'Transport',
      buttonColor: 'yellow1',
      textColor: 'primary2',
      logo: 'LogoConnect'
    }
  ];

  const menus = [
    {
      id: 1,
      content: 'Transport',
      buttonColor: 'success',
      textColor: 'primary2',
      logo: 'Check'

    },
    {
      id: 2,
      content: 'Transport',
      buttonColor: 'error',
      textColor: 'primary2',
      logo: 'Check'
    },
    {
      id: 3,
      content: 'Transport',
      buttonColor: 'white1',
      textColor: 'primary2',
      logo: 'Check'
    },
    {
      id: 4,
      content: 'Transport',
      buttonColor: 'yellow1',
      textColor: 'primary2',
      logo: 'LogoConnect'
    },
    {
      id: 5,
      content: 'Transport',
      buttonColor: 'success',
      textColor: 'primary2',
      logo: 'Check'

    },
    {
      id: 6,
      content: 'Transport',
      buttonColor: 'error',
      textColor: 'primary2',
      logo: 'Check'
    },
    {
      id: 7,
      content: 'Transport',
      buttonColor: 'white1',
      textColor: 'primary2',
      logo: 'Check'
    },
    {
      id: 8,
      content: 'Transport',
      buttonColor: 'yellow1',
      textColor: 'primary2',
      logo: 'LogoConnect'
    },
    {
      id: 9,
      content: 'Transport',
      buttonColor: 'error',
      textColor: 'primary2',
      logo: 'Check'
    }
  ];

  const avater = [
    {
      id: 1,
      logo: 'https://www.rugbyworldcup.com/default/rwc-person-images-site/1200/48322.png',
      status: 'success',
      disabled: false
    },
    {
      id: 2,
      logo: 'https://www.rugbyworldcup.com/default/rwc-person-images-site/1200/48324.png',
      status: 'pending',
      disabled: false
    },
    {
      id: 3,
      logo: 'https://www.rugbyworldcup.com/default/rwc-person-images-site/1200/39867.png',
      status: 'pending',
      disabled: false
    },
    {
      id: 4,
      logo: 'https://www.rugbyworldcup.com/default/rwc-person-images-site/1200/56053.png',

      disabled: false
    }
  ];

  const avater2 = [
    {
      id: 1,
      logo: 'https://www.rugbyworldcup.com/default/rwc-person-images-site/1200/48322.png',
      status: 'success',
      disabled: true
    },
    {
      id: 2,
      logo: 'https://www.rugbyworldcup.com/default/rwc-person-images-site/1200/48324.png',
      status: 'failed',
      disabled: true
    },
    {
      id: 3,
      logo: 'https://www.rugbyworldcup.com/default/rwc-person-images-site/1200/39867.png',
      status: 'pending',
      disabled: true
    },
    {
      id: 4,
      logo: 'https://www.rugbyworldcup.com/default/rwc-person-images-site/1200/56053.png',

      disabled: true
    }
  ];

  const checkoutQuantity = () => {
    alert('CHECK OUT');
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
          totalAmount="12000"
        />
      </View>
      {/* list/PaymentInfo */}

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/MenuStack"
          family={fonts.bold}
        />
        <MenuStackList
          items={menus}
          onPress={id => console.log(id)}
        />
      </View>
      {/* list/MenuStack */}

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/BrandStack"
          family={fonts.bold}
        />
        <BrandStackList
          items={brands}
          onPress={id => console.log(id)}
        />
      </View>
      {/* list/BrandStack */}

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/Checkout"
          family={fonts.bold}
        />
        <Checkout
          onPressQuantity={checkoutQuantity}
          totalAmount={1650}
          checkoutSummary={checkoutSummary}
          totalQuantity={3}
        />
      </View>
      {/* list/Checkout */}

      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/QuickAmount"
          family={fonts.bold}
        />
        <QuickAmount amounts={quickAmounts} />
      </View>
      {/* list/QuickAmount */}

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/Hotel"
          family={fonts.bold}
        />
        <HotelList
          items={hotels}
          onPress={id => console.log(id)}
        />
      </View>
      {/* list/Hotel */}

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/TripType"
          family={fonts.bold}
        />
        <TripTypeList
          items={trips}
          onPress={id => console.log(id)}
        />
      </View>
      {/* list/TripType */}

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/Expense"
          family={fonts.bold}
        />
        <ExpenseList
          items={expense}
          onPress={id => console.log(id)}
        />
      </View>
      {/* list/TripType */}

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="list/AvatarList"
          family={fonts.bold}
        />
        <AvatarList
          items={avater}
          onPress={id => console.log(id)}
        />
      </View>
      {/* list/AvatarList */}

      <View style={mb20}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="List/AvatarList"
          family={fonts.bold}
        />
        <AvatarList
          items={avater2}
          onPress={id => console.log(id)}
        />
      </View>
      {/* list/AvatarList */}
    </ScrollView>
  );
};

export default WidgetL2Test;
