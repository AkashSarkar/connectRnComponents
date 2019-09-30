import React, { Component } from 'react';
import {
  View, StyleSheet, ScrollView, SafeAreaView
} from 'react-native';
import { ButtonPrimary, HeaderTop } from '../../component/ui';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ModalSecondary, ModalDouble } from '../../component/widget';


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
      isModalDoubleVisible: false
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
              modalTitle="Modal Double"
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
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default ModalTest;
