import React, { Component } from 'react';
import {
  View, StyleSheet, ScrollView, SafeAreaView
} from 'react-native';
import { ButtonPrimary, HeaderTop } from '../../component/ui';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import {
  ModalSecondary,
  ModalDouble,
  ModalInfo,
  ModalFamilyList,
  ModalContact,
  ModalDiscount,
  ModalDiscountV2,
  ModalSecondaryV2,
  ModalContactV2,
  ModalAddDiscount
} from '../../component/widget';


const DataModalSecondary = [
  {
    id: '1',
    title: 'Connect'
  },
  {
    id: '2',
    title: 'Jamuna Bank'
  },
  {
    id: '3',
    title: 'Dmoney'
  },
  {
    id: '4',
    title: 'First Item'
  },
  {
    id: '5',
    title: 'Credit Card'
  },
  {
    id: '58694a0f-3da1-471f-',
    title: 'Third Item'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed53abb28ba',
    title: 'First Item'
  },
  {
    id: '3ac68af5-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '5864a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  }
];

const DataModalSecondaryV2 = [
  {
    id: '1',
    title: 'Jamuna Bank'
  },
  {
    id: '2',
    title: 'Eastern Bank'
  },
  {
    id: '3',
    title: 'Sonali Bank'
  },
  {
    id: '4',
    title: 'Dutch Bangla Bank'
  },
  {
    id: '5',
    title: 'City Bank'
  },
  {
    id: '6',
    title: 'Pubali Bank'
  },
  {
    id: '7',
    title: 'Al Arafa Bank'
  },
  {
    id: '8',
    title: 'Community Bank'
  },
  {
    id: '9',
    title: 'Janata Bank'
  }
];

const DataModalDouble = [
  {
    id: '1',
    title: 'Connect',
    cardInfo: 'VISA *1564'
  },
  {
    id: '2',
    title: 'Jamuna Bank',
    cardInfo: 'VISA *1564'
  },
  {
    id: '3',
    title: 'Dmoney',
    cardInfo: 'VISA *1564'
  },
  {
    id: '4',
    title: 'First Item',
    cardInfo: 'VISA *1564'
  },
  {
    id: '5',
    title: 'Credit Card',
    cardInfo: 'VISA *1564'
  },
  {
    id: '58694a0f-3da1-471f-',
    title: 'Third Item',
    cardInfo: 'VISA *1564'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed53abb28ba',
    title: 'First Item',
    cardInfo: 'VISA *1564'
  },
  {
    id: '3ac68af5-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    cardInfo: 'VISA *1564'
  },
  {
    id: '5864a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    cardInfo: 'VISA *1564'
  }
];
const DataModalInfo = [
  {
    id: '1',
    title: 'Location: ',
    details: 'House# 7, Road# 1, Block# B, Niketon, Gulshan-1, Dhaka 1212'
  },
  {
    id: '2',
    title: 'Corporate Office: ',
    details: 'Saimon Center, 4th Floor, House# 4/A, Road# 22, Gulshan-1, Dhaka 1212'
  }
];

const DataModalFamilyList = [
  {
    id: '1',
    title: 'Nabila’s Savings A/C'
  },
  {
    id: '2',
    title: 'Raya’s Savings A/C'
  },
  {
    id: '3',
    title: 'Isa’s Savings A/C'
  },
  {
    id: '4',
    title: 'Friend’s Savings A/C'
  },
  {
    id: '5',
    title: 'Nabila’s Savings A/C'
  },
  {
    id: '6',
    title: 'Raya’s Savings A/C'
  },
  {
    id: '7',
    title: 'Isa’s Savings A/C'
  },
  {
    id: '8',
    title: 'Friend’s Savings A/C'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center'
  },
  viewWrapper: {
    marginBottom: 40
  }
});
const discountV2Color = {
  titleColor: colors.red2,
  modalbgColor: colors.black9,
  inputTextColor: colors.white1,
  centerTextColor: colors.white1,
  buttonbgColor: colors.primary,
  buttontextColor: colors.white1,
  textAreabgColor: colors.buttonColor1
};
const contactV2Color = {
  titleColor: colors.red2,
  modalbgColor: colors.white1,
  inputTextColor: colors.black0,
  centerTextColor: colors.black0,
  buttonbgColor: colors.black10,
  buttontextColor: colors.black0,
  textAreabgColor: colors.buttonColor1
};
const modalInfoColor = {
  titleColor: colors.red2,
  modalbgColor: colors.black,
  textComponentColor1: colors.red2,
  textComponentColor2: colors.white1
};

class ModalTest extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <HeaderTop
      content="Modal Test"
      onPress={() => navigation.goBack()}
    />
  });


  constructor(props) {
    super(props);
    this.state = {
      isModalSecondaryVisible: false,
      isModalSecondaryV2Visible: false,
      isModalDoubleVisible: false,
      isModalInfoVisible: false,
      isModalFamilyList: false,
      isModalContact: false,
      isModalContactV2: false,
      isModalDiscount: false,
      isModalDiscountV2: false,
      isModalAddDiscount: false
    };
  }

  toggleModalSecondary = () => {
    this.setState({
      isModalSecondaryVisible: !this.state.isModalSecondaryVisible
    });
  };

  toggleModalSecondaryV2 = () => {
    this.setState({
      isModalSecondaryV2Visible: !this.state.isModalSecondaryV2Visible
    });
  };

  toggleModalDouble = () => {
    this.setState({
      isModalDoubleVisible: !this.state.isModalDoubleVisible
    });
  };

  toggleModalInfo = () => {
    this.setState({
      isModalInfoVisible: !this.state.isModalInfoVisible
    });
  };

  toggleFamilyList = () => {
    this.setState({
      isModalFamilyList: !this.state.isModalFamilyList
    });
  };

  toggleModalContact = () => {
    this.setState({
      isModalContact: !this.state.isModalContact
    });
  };

  toggleModalContactV2 = () => {
    this.setState({
      isModalContactV2: !this.state.isModalContact
    });
  };

  toggleModalAddDiscount = () => {
    this.setState({
      isModalAddDiscount: !this.state.isModalAddDiscount
    });
  };

  toggleModalDiscount = () => {
    this.setState({
      isModalDiscount: !this.state.isModalDiscount
    });
  };

  toggleModalDiscountV2 = () => {
    this.setState({
      isModalDiscountV2: !this.state.isModalDiscountV2
    });
  };

  handleCloseModalSecondary = () => {
    this.setState({
      isModalSecondaryVisible: !this.state.isModalSecondaryVisible
    });
  };

  handleCloseModalSecondaryV2 = () => {
    this.setState({
      isModalSecondaryV2Visible: !this.state.isModalSecondaryV2Visible
    });
  };

  handleCloseModalDouble = () => {
    this.setState({
      isModalDoubleVisible: !this.state.isModalDoubleVisible
    });
  };

  handleCloseModalInfo = () => {
    this.setState({
      isModalInfoVisible: !this.state.isModalInfoVisible
    });
  };

  handleCloseFamilyList = () => {
    this.setState({
      isModalFamilyList: !this.state.isModalFamilyList
    });
  };

  handleCloseModalContact = () => {
    this.setState({
      isModalContact: !this.state.isModalContact
    });
  };

  handleCloseModalContactV2 = () => {
    this.setState({
      isModalContactV2: !this.state.isModalContactV2
    });
  };

  handleCloseModalAddDiscount = () => {
    this.setState({
      isModalAddDiscount: !this.state.isModalAddDiscount
    });
  };

  handleCloseModalDiscount = () => {
    this.setState({
      isModalDiscount: !this.state.isModalDiscount
    });
  };

  handleCloseModalDiscountV2 = () => {
    this.setState({
      isModalDiscountV2: !this.state.isModalDiscountV2
    });
  };

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <HeaderTop
            content="Modal Test"
            onPress={() => this.props.navigation.goBack()}
          />
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="Modal Secondary"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModalSecondary}
            />
            <ModalSecondary
              modalTitle="Modal Secondary"
              isVisible={this.state.isModalSecondaryVisible}
              onBackButtonPress={this.handleCloseModalSecondary}
              onClose={this.handleCloseModalSecondary}
              items={DataModalSecondary}
              onSelect={(id) => {
                console.warn('from top ', id);
                this.handleCloseModalSecondary();
              }}
            />
          </View>
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="Modal Double"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModalDouble}
            />
            <ModalDouble
              isDescription
              borderButtonColor={colors.black0}
              modalTitle="Select account"
              modalTitleBottom="Card payments with"
              titleColor={colors.red2}
              isVisible={this.state.isModalDoubleVisible}
              onBackButtonPress={this.handleCloseModalDouble}
              onClose={this.handleCloseModalDouble}
              items={DataModalDouble}
              onSelect={(id) => {
                console.warn('from top ', id);
                this.handleCloseModalDouble();
              }}
            />
          </View>
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="Modal Info"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModalInfo}
            />
            <ModalInfo
              isVisible={this.state.isModalInfoVisible}
              onBackButtonPress={this.handleCloseModalInfo}
              onClose={this.handleCloseModalInfo}
              items={DataModalInfo}
              modalInfoColor={modalInfoColor}
            />
          </View>
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="Modal FamilyList"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleFamilyList}
            />
            <ModalFamilyList
              modalTitle="Select Member"
              isVisible={this.state.isModalFamilyList}
              onBackButtonPress={this.handleCloseFamilyList}
              onClose={this.handleCloseFamilyList}
              onButtonPress={() => console.warn('add now')}
              items={DataModalFamilyList}
              onSelect={(id) => {
                console.warn('from top ', id);
                this.handleCloseFamilyList();
              }}
            />
          </View>
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="Modal Contact"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModalContact}
            />
            <ModalContact
              modalTitle="Email"
              isVisible={this.state.isModalContact}
              onBackButtonPress={this.handleCloseModalContact}
              onClose={this.handleCloseModalContact}
              onPress={this.handleCloseModalContact}
              onSelect={(id) => {
                console.warn('from top ', id);
                this.handleCloseModalContact();
              }}
            />
          </View>
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="Modal SecondaryV2"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModalSecondaryV2}
            />
            <ModalSecondaryV2
              modalTitle="Bank Name"
              isVisible={this.state.isModalSecondaryV2Visible}
              onBackButtonPress={this.handleCloseModalSecondaryV2}
              onClose={this.handleCloseModalSecondaryV2}
              items={DataModalSecondaryV2}
              onSelect={(id) => {
                console.warn('from top ', id);
                this.handleCloseModalSecondaryV2();
              }}
            />
          </View>
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="Modal Discount v2"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModalDiscountV2}
            />
            <ModalDiscountV2
              modalTitle="Add New Location"
              modalTitleTextColor={colors.primary}
              isVisible={this.state.isModalDiscountV2}
              discountV2Color={discountV2Color}
              onBackButtonPress={this.handleCloseModalDiscountV2}
              onClose={this.handleCloseModalDiscountV2}
              onPress={this.handleCloseModalDiscountV2}
              onSelect={(id) => {
                console.warn('from top ', id);
                this.handleCloseModalDiscountV2();
              }}
            />
          </View>
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="Modal Count v2"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModalContactV2}
            />
            <ModalContactV2
              // isDescription
              modalTitle="Add description"
              contactV2Color={contactV2Color}
              modalTitleTextColor={colors.primary}
              isVisible={this.state.isModalContactV2}
              onBackButtonPress={this.handleCloseModalContactV2}
              onClose={this.handleCloseModalContactV2}
              onPress={this.handleCloseModalContactV2}
              onSelect={(id) => {
                console.warn('from top ', id);
                this.handleCloseModalContactV2();
              }}
            />
          </View>
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="ModalAddDiscount"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModalAddDiscount}
            />
            <ModalAddDiscount
              modalTitle="Add discount"
              discountV2Color={discountV2Color}
              modalTitleTextColor={colors.primary}
              isVisible={this.state.isModalAddDiscount}
              onBackButtonPress={this.handleCloseModalAddDiscount}
              onClose={this.handleCloseModalAddDiscount}
              onPress={this.handleCloseModalAddDiscount}
              onSelect={(id) => {
                console.warn('from top ', id);
                this.handleCloseModalAddDiscount();
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default ModalTest;
