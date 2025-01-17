import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import {
  string, func, bool, object
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import { ButtonBorderV2 } from '../../ui';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderColor: 'black',
    backgroundColor: colors.black9,
    borderTopLeftRadius: 16,
    borderTopEndRadius: 16
  },
  viewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  bottomWrapper: {
    width: '100%'
  },
  closeModalContainer: {
    position: 'absolute',
    right: 0
  },
  closeImageStyle: {
    height: 24,
    width: 24
  },
  listViewWrapper: {
    height: 200,
    width: '100%'
  },
  textAreaContainer: {
    height: 220,
    borderColor: colors.buttonColor1,
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 8,
    // justifyContent: 'flex-start'
    backgroundColor: colors.buttonColor1
  },
  textArea: {
    height: '100%',
    textAlignVertical: 'top'
  }
});

const ModalContactV2 = ({
  modalTitle,
  isVisible,
  onBackButtonPress,
  contactV2Color,
  isDescription,
  onPressLeft,
  onPressRight
}) => {
  const [id, setId] = useState('');
  const [input, setInput] = useState('');
  return (
    <Modal
      isVisible={isVisible}
      backdropColor={colors.black5}
      backdropOpacity={0.5}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={300}
      animationOutTiming={600}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackButtonPress}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={600}
    >
      <View style={[styles.container, { height: isDescription ? 330 : 150 }]}>
        <View style={styles.viewWrapper}>
          <TextComponent
            content={modalTitle}
            size={fonts.fs20}
            family={fonts.medium}
            color={contactV2Color.titleColor}
          />
        </View>
        {isDescription && (
          <View style={styles.textAreaContainer}>
            <TextInput
              value={input}
              style={[styles.textArea, { color: contactV2Color.centerTextColor }]}
              underlineColorAndroid="transparent"
              placeholder="Write here..."
              onChangeText={(text) => setInput(text)}
              fontFamily={fonts.regular}
              placeholderTextColor={colors.white1}
              numberOfLines={10}
              multiline
            />
          </View>
        )}
      </View>
      <View style={styles.bottomWrapper}>
        <ButtonBorderV2
          contentLeft="Apply"
          contentMiddle="|"
          contentRight="Cancel"
          buttonColor={contactV2Color.buttonbgColor}
          textColorLeft={colors.white1}
          textColorMiddle={colors.primary}
          textColorRight={colors.white1}
          buttonHeight={50}
          inModal
          fontSize={fonts.fs16}
          onPressLeft={onPressLeft}
          onPressRight={onPressRight}
          value={input}
        />
      </View>
    </Modal>
  );
};
ModalContactV2.propTypes = {
  modalTitle: string.isRequired,
  isVisible: bool,
  onBackButtonPress: func,
  isDescription: bool,
  contactV2Color: object,
  onPressLeft: func,
  onPressRight: func
};

export default ModalContactV2;
