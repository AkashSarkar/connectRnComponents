import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import {
  arrayOf, shape, number, string, func, bool, object
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import { ButtonBorderV2, ButtonPrimaryV2 } from '../../ui';

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

const ModalDiscountV2 = ({
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
        <View
          style={[{ backgroundColor: discountV2Color.textAreabgColor },
            styles.textAreaContainer
          ]}
        >
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Write here..."
            fontFamily={fonts.regular}
            placeholderTextColor={discountV2Color.inputTextColor}
            numberOfLines={10}
            multiline
          />
        </View>
        <View style={{
          height: 25,
          width: '100%',
          alignItems: 'flex-end',
          marginTop: 20
        }}
        >
          <ButtonPrimaryV2
            content="Pin with map"
            textColor={discountV2Color.buttontextColor}
            fontSize={fonts.fs12}
            buttonColor={discountV2Color.buttonbgColor}
            buttonHeight={30}
            extraStyle={{
              borderRadius: 16,
              paddingHorizontal: 20
            }}
            // onPress={this.toggleModalInfo}
          />
        </View>
      </View>
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
    </Modal>
  );
};
ModalDiscountV2.propTypes = {
  modalTitle: string.isRequired,
  isVisible: bool,
  onBackButtonPress: func,
  onClose: func,
  onSelect: func,
  discountV2Color: object
};

export default ModalDiscountV2;
