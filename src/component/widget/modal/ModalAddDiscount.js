import React, { useState } from 'react';
import {
  Text, View, Image, StyleSheet, TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import { ButtonBorderV2, ButtonPrimaryV2 } from '../../ui';
import assets from '../../../assets';
import { mb10, ml20, mr10, mr15, mr20 } from '../../../styles/commonStyle';

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
  }
});

const ModalAddDiscount = ({
  modalTitle,
  isVisible,
  onBackButtonPress,
  onClose,
  items,
  onPress,
  discountV2Color
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
            <View>
              <TextComponent
                content="10%"
                //size={fonts.fs52}
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
          onPressLeft={() => console.warn('Left')}
          onPressRight={() => console.warn('Right')}
        />
      </View>

    </Modal>
  );
};

export default ModalAddDiscount;
