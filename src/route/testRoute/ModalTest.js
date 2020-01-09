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
  ModalDiscount
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

class ModalTest extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <HeaderTop content="Modal Test" onPress={() => navigation.goBack()} />
  });


  constructor(props) {
    super(props);
    this.state = {
      isModalSecondaryVisible: false,
      isModalDoubleVisible: false,
      isModalInfoVisible: false,
      isModalFamilyList: false,
      isModalContact: false,
      isModalDiscount: false
    };
  }

  toggleModalSecondary = () => {
    this.setState({
      isModalSecondaryVisible: !this.state.isModalSecondaryVisible
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

  toggleModalDiscount = () => {
    this.setState({
      isModalDiscount: !this.state.isModalDiscount
    });
  };

  handleCloseModalSecondary = () => {
    this.setState({
      isModalSecondaryVisible: !this.state.isModalSecondaryVisible
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

  handleCloseModalDiscount = () => {
    this.setState({
      isModalDiscount: !this.state.isModalDiscount
    });
  };

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <HeaderTop content="Modal Test" onPress={() => this.props.navigation.goBack()} />
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
              modalTitle="Select account"
              modalTitleBottom="Card payments with"
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
              content="Modal Discount"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModalDiscount}
            />
            <ModalDiscount
              modalTitle="Add discount"
              modalTitleTextColor={colors.primary}
              isVisible={this.state.isModalDiscount}
              onBackButtonPress={this.handleCloseModalDiscount}
              onClose={this.handleCloseModalDiscount}
              onPress={this.handleCloseModalDiscount}
              onSelect={(id) => {
                console.warn('from top ', id);
                this.handleCloseModalDiscount();
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default ModalTest;
