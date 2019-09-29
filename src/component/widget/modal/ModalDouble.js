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
    height: 300,
    backgroundColor: 'white',
    padding: 20,
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
    height: 35,
    width: 35
  },
  listViewWrapper: {
    alignItems: 'center',
    height: 200,
    width: '100%'
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
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
        <View style={styles.closeModalContainer}>
          <TouchableOpacity onPress={onClose}>
            <Image
              style={styles.closeImageStyle}
              source={image.Check}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style ={styles.lineStyle} />
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
