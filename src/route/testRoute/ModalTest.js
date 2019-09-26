import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, SafeAreaView
} from 'react-native';
import { ButtonPrimary } from '../../component/ui';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ModalSecondary } from '../../component/widget';


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

class ModalTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handleClose = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
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
              isVisible={this.state.isModalVisible}
              onBackButtonPress={this.handleClose}
              onClose={this.handleClose}
              items={DATA}
              onSelect={id => console.warn(id)}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default ModalTest;
