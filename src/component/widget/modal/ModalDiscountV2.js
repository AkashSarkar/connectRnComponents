import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import {
  arrayOf, shape, number, string, func, bool
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts, gradientColors } from '../../../styles/baseStyle';
import { ButtonBorderV2, ButtonPrimary } from '../../ui';

const styles = StyleSheet.create({
  container: {
    height: 330,
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
    height: 170,
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

const ModalDiscountV2 = ({
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
            size={fonts.fs20}
            family={fonts.medium}
            color={colors.red2}
          />
          {/*Cross button*/}
          {/*<TouchableOpacity*/}
          {/*  onPress={onClose}*/}
          {/*  style={styles.closeModalContainer}*/}
          {/*>*/}
          {/*  <Image*/}
          {/*    style={styles.closeImageStyle}*/}
          {/*    source={image.Cross}*/}
          {/*  />*/}
          {/*</TouchableOpacity>*/}
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Write here..."
            fontFamily={fonts.regular}
            placeholderTextColor={colors.white1}
            numberOfLines={10}
            multiline
          />
        </View>
        <View style={{
          alignSelf: 'flex-end',
          borderRadius: 16,
          width: 100,
          height: 24,
          paddingTop: 20
        }}
        >
          <ButtonPrimary
            content="Pin with map"
            buttonColor={gradientColors.gradient5}
            textColor={colors.bgPrimary}
            fontSize={fonts.fs14}
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
  onSelect: func
};

export default ModalDiscountV2;
