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


const styles = StyleSheet.create({
  container: {
    height: 350,
    backgroundColor: colors.white1,
    padding: 20,
    borderRadius: 16,
    borderColor: 'black'
  },
  viewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
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
    height: 235,
    width: '100%'
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: colors.black5,
    margin: 10
  },
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white1
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

const renderItem = (item, onSelect) => (
  <View style={{
    paddingVertical: 10,
    alignItems: 'flex-start'
  }}
  >
    <TouchableOpacity onPress={() => onSelect(item.id)}>
      <TextComponent
        content={item.title}
        size={fonts.fs16}
        family={fonts.regular}
        color={colors.black7}
      />
    </TouchableOpacity>
  </View>
);

const ModalFamilyList = ({
  modalTitle,
  isVisible,
  onBackButtonPress,
  onClose,
  onButtonPress,
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
          content={modalTitle}
          size={fonts.fs16}
          family={fonts.semiBold}
        />
        <TouchableOpacity onPress={onClose} style={styles.closeModalContainer}>
          <Image
            style={styles.closeImageStyle}
            source={image.Cross}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={{ width: '60%' }}>
          <TextComponent
            content="Not in the list?"
            size={fonts.fs16}
            family={fonts.semiBold}
          />
        </View>
        <View style={{ width: '40%' }}>
          <ButtonPrimary
            content="Add Now"
            buttonColor={gradientColors.gradient5}
            textColor={colors.bgPrimary}
            fontSize={fonts.fs14}
            onPress={onButtonPress}
          />
        </View>
      </View>
      <View
        style={styles.listViewWrapper}
      >
        <FlatList
          data={items}
          renderItem={({ item }) => (
            renderItem(item, onSelect)
          )}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  </Modal>
);


ModalFamilyList.propTypes = {
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

export default ModalFamilyList;
