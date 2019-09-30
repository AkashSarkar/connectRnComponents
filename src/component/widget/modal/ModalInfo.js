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
    height: 250,
    backgroundColor: colors.white1,
    padding: 20,
    borderRadius: 16,
    borderColor: 'black'
  },
  viewWrapper: {
    paddingVertical: 10,
    backgroundColor: colors.white1
  },
  closeModalContainer: {
    position: 'absolute',
    right: 0,
    backgroundColor: colors.white1
  },
  closeImageStyle: {
    height: 24,
    width: 24
  },
  listViewWrapper: {
    width: '100%'
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: colors.black5,
    margin: 10
  },
  hitSlop: {
    top: 15,
    bottom: 15,
    left: 15,
    right: 15
  }
});

const renderItem = item => (
  <View style={{
    paddingVertical: 10,
    alignItems: 'flex-start'
  }}
  >
    <View>
      <TextComponent
        content={item.title}
        size={fonts.fs16}
        family={fonts.semiBold}
        color={colors.black0}
      />
      <TextComponent
        content={item.details}
        size={fonts.fs16}
        family={fonts.regular}
        color={colors.black0}
      />
    </View>
  </View>
);

const ModalInfo = ({
  isVisible,
  onBackButtonPress,
  onClose,
  items
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
        <TouchableOpacity
          onPress={onClose}
          style={styles.closeModalContainer}
          hitSlop={styles.hitSlop}
        >
          <Image
            style={styles.closeImageStyle}
            source={image.Cross}
          />
        </TouchableOpacity>
        <View
          style={styles.listViewWrapper}
        >
          <FlatList
            data={items}
            renderItem={({ item }) => (
              renderItem(item)
            )}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>

      </View>
    </View>
  </Modal>
);

export default ModalInfo;