import React from 'react';
import {
  View, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import {
  shape, number, string, func, bool
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';


const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: colors.black9,
    paddingHorizontal: 5,
    paddingBottom: 10,
    borderRadius: 16,
    borderColor: 'black'
  },
  viewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomColor: colors.grey3,
    borderBottomWidth: 1
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
    height: 210,
    width: '100%'
  }
});

const renderItem = (item, onSelect) => (
  <View style={{
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center'
  }}
  >
    <TouchableOpacity onPress={() => onSelect(item.id)}>
      <TextComponent
        content={item.title}
        size={fonts.fs18}
        family={fonts.regular}
        color={colors.white1}
      />
    </TouchableOpacity>
  </View>
);


const ModalSecondary = ({
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
          color={colors.red2}
          content={modalTitle}
          size={fonts.fs20}
          family={fonts.regular}
        />
      </View>
      <View
        style={styles.listViewWrapper}
      >
        <FlatList
          data={items}
          renderItem={({ item }) => (
            // <ModalItemList item={item} onSelect={onSelect} />
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

ModalSecondary.propTypes = {
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

export default ModalSecondary;
