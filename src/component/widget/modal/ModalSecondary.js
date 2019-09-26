import React from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';

const ModalSecondary = ({
  modalTitle, isVisible, onBackButtonPress
}) => (
  <Modal
    isVisible={isVisible}
    backdropColor={colors.black0}
    backdropOpacity={0.5}
    animationIn="zoomInDown"
    animationOut="zoomOutUp"
    animationInTiming={300}
    animationOutTiming={600}
    onBackButtonPress={onBackButtonPress}
    backdropTransitionInTiming={300}
    backdropTransitionOutTiming={600}
  >
    <View style={{
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'black'
    }}
    >
      <TextComponent
        content={modalTitle}
        size={fonts.fs16}
      />
    </View>
  </Modal>
);

export default ModalSecondary;
