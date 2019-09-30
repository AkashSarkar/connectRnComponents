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
    backgroundColor: 'white',
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
  }
});

const ModalDouble = ({
  modalTitle,
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
      {/* <View style={styles.lineStyle} /> */}
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
