import React, { Component } from 'react';
import {
  View, StyleSheet, ScrollView, SafeAreaView
} from 'react-native';
import { ButtonPrimary, HeaderTop } from '../../component/ui';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ModalSecondary, ModalDouble } from '../../component/widget';


const DATA = [
  {
    id: '1',
    title: 'First Item'
  },
  {
    id: '2',
    title: 'Second Item'
  },
  {
    id: '3',
    title: 'Third Item'
  },
  {
    id: '4',
    title: 'First Item'
  },
  {
    id: '5',
    title: 'Second Item'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center'
  },
  viewWrapper: {
    marginBottom: 10
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

  toggleModal = () => {
    this.setState({
      isModalSecondaryVisible: !this.state.isModalSecondaryVisible,
      isModalDoubleVisible: !this.state.isModalDoubleVisible
    });
  };

  handleClose = () => {
    this.setState({
      isModalSecondaryVisible: !this.state.isModalSecondaryVisible,
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
              onPress={this.toggleModal}
            />
            <ModalSecondary
              modalTitle="Select Operator"
              isVisible={this.state.isModalSecondaryVisible}
              onBackButtonPress={this.handleClose}
              onClose={this.handleClose}
              items={DATA}
              onSelect={id => console.warn(`from top ${id}`)}
            />
          </View>
          <View style={styles.viewWrapper}>
            <ButtonPrimary
              content="Modal Double"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModal}
            />
            <ModalDouble
              modalTitle="Select Operator"
              isVisible={this.state.isModalDoubleVisible}
              onBackButtonPress={this.handleClose}
              onClose={this.handleClose}
              items={DATA}
              onSelect={id => console.warn(`from top ${id}`)}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default ModalTest;
