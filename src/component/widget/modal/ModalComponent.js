import React from 'react';
import { StyleSheet, View } from 'react-native';
import { func, bool, node } from 'prop-types';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  modalWrapper: {
    margin: 0
  },
  contentWrapper: {
    flex: 1
  }
});

const ModalComponent = ({ isVisible, setVisible, children }) => {
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <Modal
      backdropOpacity={0.5}
      isVisible={isVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      hideModalContentWhileAnimating
      style={styles.modalWrapper}
      backdropTransitionOutTiming={0}
      animationOutTiming={300}
    >
      <View style={styles.contentWrapper}>{children}</View>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isVisible: bool,
  setVisible: func,
  children: node.isRequired
};

export default ModalComponent;
