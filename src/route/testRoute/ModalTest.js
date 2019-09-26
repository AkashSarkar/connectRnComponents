import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, SafeAreaView
} from 'react-native';
import { ButtonPrimary } from '../../component/ui';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ModalSecondary } from '../../component/widget';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
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
              content="Button Primary"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={this.toggleModal}
            />
            <ModalSecondary
              modalTitle="Select Operator"
              isVisible={this.state.isModalVisible}
              onBackButtonPress={this.handleClose}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default ModalTest;
