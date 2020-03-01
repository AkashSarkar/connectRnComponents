import React from 'react';
import {
  View, Image, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import {
  shape, number, string, func, bool, object
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import ModalItemList from '../list/ModalItemList';
import image from '../../../assets';
import ButtonBorderV2 from '../../ui/button/ButtonBorderV2';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black9,
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderRadius: 16,
    borderColor: 'black'
  },
  containerPayment: {
    backgroundColor: colors.black9,
    borderRadius: 16,
    borderColor: 'black',
    justifyContent: 'space-between'
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
    height: 260,
    width: '100%'
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: colors.black5,
    margin: 10
  },
  containerBottom: {
    height: 115,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.black9,
    borderRadius: 16,
    borderColor: 'black'
  },
  imageList: {
    marginBottom: 15
  },
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listImageStyle: {
    height: 60,
    width: 60,
    borderRadius: 16,
    resizeMode: 'contain'
  },
  textWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});
const ModalDouble = ({
  modalTitle,
  modalTitleBottom,
  contentLeft,
  contentMiddle,
  contentRight,
  isVisible,
  isPayment,
  onPressLeft,
  onPressRight,
  DoubleColor,
  onBackButtonPress,
  onClose,
  items,
  onSelect
}) => (
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
    {isPayment && (
      <View style={[styles.containerPayment, { height: 150 }]}>
        <View style={styles.viewWrapper}>
          <TextComponent
            content={modalTitle}
            size={fonts.fs20}
            family={fonts.light}
            color={DoubleColor.titleColor}
          />
        </View>
        <View>
          <ButtonBorderV2
            contentLeft={contentLeft}
            contentMiddle={contentMiddle}
            contentRight={contentRight}
            buttonColor={DoubleColor.buttonbgColor}
            textColorLeft={colors.white1}
            textColorMiddle={colors.primary}
            textColorRight={colors.white1}
            buttonHeight={50}
            inModal
            fontSize={fonts.fs16}
            onPressLeft={onPressLeft}
            onPressRight={onPressRight}
          />
        </View>
      </View>
    )
    }
    {!isPayment && (
      <View style={[styles.container, { height: 350 }]}>
        <View style={styles.viewWrapper}>
          <TextComponent
            color={colors.red2}
            content={modalTitle}
            size={fonts.fs20}
            family={fonts.light}
          />

        </View>

        <View
          style={styles.listViewWrapper}
        >
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <ModalItemList item={item} onSelect={onSelect} />
            )}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    )
    }
    <View style={styles.containerBottom}>
      <View style={styles.textWrapper}>
        <TextComponent
          color={colors.red2}
          content={modalTitleBottom}
          size={fonts.fs20}
          family={fonts.light}
        />
      </View>
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={onClose}>
          <View>
            <Image
              style={styles.listImageStyle}
              source={image.PayVisa}
            />
          </View>
        </TouchableOpacity>

        <View style={{ borderWidth: 1, borderColor: colors.red2, height: 10 }} />
        <TouchableOpacity onPress={onClose}>
          <View style={styles.imageBOxWrapper}>
            <Image
              style={styles.listImageStyle}
              source={image.PayMasterCard}
            />
          </View>
        </TouchableOpacity>

        <View style={{ borderWidth: 1, borderColor: colors.red2, height: 10 }} />
        <TouchableOpacity onPress={onClose}>
          <View style={styles.imageBOxWrapper}>
            <Image
              style={styles.listImageStyle}
              source={image.PayAmex}
            />
          </View>
        </TouchableOpacity>

        <View style={{ borderWidth: 1, borderColor: colors.red2, height: 10 }} />
        <TouchableOpacity onPress={onClose}>
          <View style={styles.imageBOxWrapper}>
            <Image
              style={styles.listImageStyle}
              source={image.PayUnionPay}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>


  </Modal>
);

ModalDouble.propTypes = {
  modalTitle: string.isRequired,
  modalTitleBottom: string.isRequired,
  isVisible: bool,
  isPayment: bool,
  contentLeft: string,
  contentMiddle: string,
  contentRight: string,
  DoubleColor: object,
  onBackButtonPress: func,
  onClose: func,
  items: shape({
    id: number.isRequired,
    title: string.isRequired
  }),
  onSelect: func,
  onPressLeft: func,
  onPressRight: func
};

export default ModalDouble;
