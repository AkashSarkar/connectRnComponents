import React from 'react';
import {
  Text, View, Image, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import {
  arrayOf, shape, number, string, func, bool
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts, gradientColors } from '../../../styles/baseStyle';
import ModalItemList from '../list/ModalItemList';
import image from '../../../assets';
import { ButtonPrimary } from '../../ui';
import { p5, ph20 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: colors.black10,
    padding: 20,
    borderRadius: 16,
    borderColor: 'black'
  },
  viewWrapper: {
    paddingVertical: 10,
    backgroundColor: colors.black10
  },
  closeModalContainer: {
    position: 'absolute',
    right: 0,
    backgroundColor: colors.black10
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
        size={fonts.fs18}
        family={fonts.semiBold}
        color={colors.red2}
      />
      <TextComponent
        content={item.details}
        size={fonts.fs16}
        family={fonts.regular}
        color={colors.white1}
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
          {/*<Image*/}
          {/*  style={styles.closeImageStyle}*/}
          {/*  source={image.Cross}*/}
          {/*/>*/}
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
          <View style={{
            //flexDirection: 'row',
            alignSelf: 'flex-end',
            borderRadius: 16,
            width: 90,
            height: 24,
            paddingTop: 10
            //backgroundColor: 'powderblue'
          }}
          >
            <ButtonPrimary
              content=" Map "
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              //buttonColor={colors.red2}
              // onPress={this.toggleModalInfo}
            />
          </View>
        </View>

      </View>
    </View>
  </Modal>
);

export default ModalInfo;
