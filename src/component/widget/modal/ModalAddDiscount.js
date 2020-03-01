import React, { useState } from 'react';
import {
  View, Image, StyleSheet
} from 'react-native';
import Modal from 'react-native-modal';
import {
  string, bool, func, object
} from 'prop-types';
import { TextInput } from 'react-native-gesture-handler';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import assets from '../../../assets';
import { mr10 } from '../../../styles/commonStyle';
import { ButtonBorderV2 } from '../../ui';

const styles = StyleSheet.create({
  container: {
    height: 330,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderColor: 'black',
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
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    height: 250
  },
  percentWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
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
    height: 170,
    borderColor: colors.buttonColor1,
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 8
  },
  textArea: {
    height: '100%',
    textAlignVertical: 'top',
    color: 'white'
  },
  input: {
    fontSize: 74,
    fontFamily: fonts.light
  }
});
const ModalAddDiscount = ({
  modalTitle,
  isVisible,
  onBackButtonPress,
  onPressLeft,
  onPressRight,
  discountV2Color
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
      <View
        style={[{
          backgroundColor: discountV2Color.modalbgColor
        },
        styles.container
        ]}
      >
        <View style={styles.viewWrapper}>
          <TextComponent
            content={modalTitle}
            size={fonts.fs20}
            family={fonts.medium}
            color={discountV2Color.titleColor}
          />
        </View>
        <View style={styles.contentWrapper}>
          <View style={{ alignSelf: 'center' }}>
            <TextComponent
              content="Amount"
              size={fonts.fs14}
              family={fonts.light}
              color={discountV2Color.inputTextColor}
              extraStyle={{
                marginRight: 110,
                lineHeight: 22
              }}
            />
          </View>

          <View style={styles.percentWrapper}>
            <Image
              source={assets.Taka}
              style={[mr10, {
                height: 30,
                width: 30
              }]}
              resizeMode="contain"
            />

            <TextInput
              style={[styles.input, { color: discountV2Color.centerTextColor }]}
              onChangeText={text => setInput(text)}
              value={input}
              maxLength={3}
              autoFocus
              keyboardType="number-pad"
            />

            <View>
              <TextComponent
                content="%"
                family={fonts.light}
                color={discountV2Color.centerTextColor}
                extraStyle={{ fontSize: 74 }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <ButtonBorderV2
          contentLeft="Apply"
          contentMiddle="|"
          contentRight="Cancel"
          buttonColor={discountV2Color.buttonbgColor}
          textColorLeft={discountV2Color.buttontextColor}
          textColorMiddle={colors.primary}
          textColorRight={discountV2Color.buttontextColor}
          buttonHeight={50}
          inModal
          fontSize={fonts.fs16}
          onPressLeft={onPressLeft}
          onPressRight={onPressRight}
        />
      </View>
    </Modal>
  );
};

ModalAddDiscount.propTypes = {
  modalTitle: string,
  isVisible: bool,
  onBackButtonPress: func,
  onPressLeft: func,
  onPressRight: func,
  discountV2Color: object
};

export default ModalAddDiscount;
