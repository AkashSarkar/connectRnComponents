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
import { ButtonBorderV2 } from '../../ui';


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: colors.white1,
    // paddingHorizontal: 15,
    // paddingBottom: 10,
    borderRadius: 16,
    borderColor: 'black'
  },
  viewWrapper: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10
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
    // alignContent: 'center',
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
    backgroundColor: colors.white1,
    borderRadius: 16,
    borderColor: 'black'
  },
  imageList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 15
    // backgroundColor: colors.white1
  },
  listImageStyle: {
    height: 60,
    width: 60,
    borderRadius: 16,
    resizeMode: 'contain'
  },
  imageBOxWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    // height: 60,
    // width: 60,
    elevation: 1,
    backgroundColor: colors.white1
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
  isDescription,
  onSelect,
  titleColor,
  borderButtonColor
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
    {
      isDescription && (
        <View style={styles.container}>
          <View style={styles.viewWrapper}>
            <TextComponent
              content={modalTitle}
              size={fonts.fs16}
              family={fonts.semiBold}
            />
            <TouchableOpacity
              onPress={onClose}
              style={styles.closeModalContainer}>
              <Image
                style={styles.closeImageStyle}
                source={image.Cross}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.lineStyle} /> */}
          <View
            style={styles.listViewWrapper}
          >
            <FlatList
              data={items}
              renderItem={({ item }) => (
                <ModalItemList item={item} onSelect={onSelect}/>
              )}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      )
    }
    {
      !isDescription && (
        <View style={styles.container}>
          <View style={[styles.viewWrapper], { height: 100 }}>
            <TextComponent
              content={modalTitle}
              size={fonts.fs20}
              family={fonts.medium}
              color={titleColor}
            />
          </View>
          <View style={styles.bottomWrapper}>
            <ButtonBorderV2
              contentLeft="Apply"
              contentMiddle="|"
              contentRight="Cancel"
              buttonColor={borderButtonColor}
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
        </View>
      )
    }


    <View style={styles.containerBottom}>
      <View style={styles.textWrapper}>
        <TextComponent
          content={modalTitleBottom}
          size={fonts.fs16}
          family={fonts.semiBold}
        />
      </View>
      <View>
        <TouchableOpacity onPress={onClose} style={styles.imageList}>
          <View style={styles.imageBOxWrapper}>
            <Image
              style={styles.listImageStyle}
              source={image.Desco}
            />
          </View>
          <View style={styles.imageBOxWrapper}>
            <Image
              style={styles.listImageStyle}
              source={image.Connect}
            />
          </View>
          <View style={styles.imageBOxWrapper}>
            <Image
              style={styles.listImageStyle}
              source={image.FlagBd}
            />
          </View>
          <View style={styles.imageBOxWrapper}>
            <Image
              style={styles.listImageStyle}
              source={image.SliderIcon}
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
  onSelect: func,
  isDescription: bool,
  titleColor: string,
  borderButtonColor: string
};

export default ModalDouble;
