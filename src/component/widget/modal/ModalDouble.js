import React from 'react';
import {
  Text, View, Image, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import {
  arrayOf, shape, number, string, func, bool
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import ModalItemList from '../list/ModalItemList';
import image from '../../../assets';


const styles = StyleSheet.create({
  container: {
    height: 350,
    backgroundColor: colors.black9,
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
  isVisible,
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
    <View style={styles.container}>
      <View style={styles.viewWrapper}>
        <TextComponent
          color={colors.red2}
          content={modalTitle}
          size={fonts.fs20}
          family={fonts.semiBold}
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
    <View style={styles.containerBottom}>
      <View style={styles.textWrapper}>
        <TextComponent
          color={colors.red2}
          content={modalTitleBottom}
          size={fonts.fs20}
          family={fonts.semiBold}
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
  isVisible: bool,
  onBackButtonPress: func,
  onClose: func,
  items: shape({
    id: number.isRequired,
    title: string.isRequired
  }).isRequired,
  onSelect: func
};

export default ModalDouble;
