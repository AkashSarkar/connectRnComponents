import React, { useState } from 'react';
import {
  Text, View, Image, TouchableOpacity, StyleSheet, FlatList, TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import {
  arrayOf, shape, number, string, func, bool
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import InputField from '../input/InputField';
import { colors, fonts, gradientColors } from '../../../styles/baseStyle';
import BoxShadow from '../../ui/wrapper/BoxShadow';
import image from '../../../assets';
import { ButtonPrimary } from '../../ui';

const styles = StyleSheet.create({
  container: {
    // height: 510,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderRadius: 16,
    borderColor: 'black'
  },
  viewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
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
    height: 244,
    borderColor: colors.black6,
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 8
    // justifyContent: 'flex-start'
  },
  textArea: {
    height: '100%',
    textAlignVertical: 'top'
  }
});

const ModalContact = ({
  modalTitle,
  isVisible,
  onBackButtonPress,
  onClose,
  items,
  onPress
}) => {
  const [id, setId] = useState('');
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
      <View style={styles.container}>
        <View style={styles.viewWrapper}>
          <TextComponent
            content={modalTitle}
            size={fonts.fs16}
            family={fonts.semiBold}
          />
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeModalContainer}
          >
            <Image
              style={styles.closeImageStyle}
              source={image.Cross}
            />
          </TouchableOpacity>
        </View>
        <BoxShadow>
          <View style={{ padding: 15 }}>
            <InputField
              value={id}
              label="Subject"
              keyboardType="default"
              maxLength={11}
              returnKeyType="next"
              onChangeText={(text) => {
                setId(text);
              }}
              setIsValid={(validity) => {
              }}
              validations={[
                {
                  validationType: 'required',
                  value: true,
                  msg: 'This field is required'
                },
                {
                  validationType: 'type',
                  value: 'number',
                  msg: 'This field must be number'
                }
              ]}
            />
          </View>
        </BoxShadow>
        <View style={{ marginTop: 20 }}>
          <ButtonPrimary
            content="Send"
            buttonColor={gradientColors.gradient5}
            textColor={colors.bgPrimary}
            fontSize={fonts.fs14}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalContact;
