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
import { ButtonPrimary, ButtonBorderV2 } from '../../ui';

const styles = StyleSheet.create({
  container: {
    height: '50%',
    backgroundColor: colors.black9,
    // paddingHorizontal: 15,
    // paddingBottom: 15,
    // borderRadius: 16,
    // borderColor: 'black',
    justifyContent: 'space-between',
    borderTopLeftRadius: 16,
    borderTopEndRadius: 16
  },
  topWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'transparent'
    // borderTopLeftRadius: 16,
    // borderTopEndRadius: 16
  },
  contentWrapper: {
    // alignItems: 'center',
    // alignContent: 'center',
    // padding: 50,
    height: 250,
    backgroundColor: 'purple'
    // borderTopLeftRadius: 16,
    // borderTopEndRadius: 16
  },
  bottomWrapper: {
    // alignItems: 'center',
    // paddingVertical: 20
    // backgroundColor: 'purple'
    // borderTopLeftRadius: 16,
    // borderTopEndRadius: 16
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

const ModalDiscount = ({
  modalTitle,
  isVisible,
  onBackButtonPress,
  onClose,
  items,
  onPress,
  modalTitleTextColor
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
        {/* Top wrapper */}
        <View style={styles.topWrapper}>
          <TextComponent
            content={modalTitle}
            size={fonts.fs20}
            family={fonts.light}
            color={modalTitleTextColor || colors.black9}
          />
        </View>
        {/* Content wrapper */}
        <View style={styles.contentWrapper}>
          <TextComponent
            content="Amount"
            size={fonts.fs14}
            family={fonts.light}
            color={colors.white1}
          />
          <TextComponent
            content="Amount"
            size={fonts.fs14}
            family={fonts.light}
            color={colors.white1}
          />
        </View>
        {/* Bottom wrapper */}
        <View style={styles.bottomWrapper}>
          <ButtonBorderV2
            contentLeft="Apply"
            contentMiddle="|"
            contentRight="Cancel"
            buttonColor={colors.black10}
            textColorLeft={colors.white1}
            textColorMiddle={colors.primary}
            textColorRight={colors.white1}
            buttonHeight={50}
            inModal
            fontSize={fonts.fs16}
            onPressLeft={() => console.warn('Left')}
            onPressRight={() => console.warn('Right')}
          />
        </View>
        {/* <BoxShadow>
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
        </BoxShadow> */}
        {/* <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Write here..."
            fontFamily={fonts.regular}
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline
          />
        </View> */}
        {/* <View style={{ marginTop: 20, width: '100%' }}>
          <ButtonBorderV2
            content="Get Paid Now"
            contentMiddle="|"
            contentRight="Get Paid Later"
            buttonColor={colors.red2}
            textColorLeft={colors.white1}
            textColorMiddle={colors.white1}
            textColorRight={colors.white1}
            buttonHeight={40}
            inModal
            fontSize={fonts.fs16}
            onPressLeft={() => console.warn('Left')}
            onPressRight={() => console.warn('Right')}
          />
        </View> */}
      </View>
    </Modal>
  );
};

export default ModalDiscount;
