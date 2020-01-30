import React from 'react';
import {
  Text, View, Image, TouchableOpacity, TouchableHighlight, StyleSheet, FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import {
  arrayOf, shape, number, string, func, bool
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';


const styles = StyleSheet.create({
  container: {
    height: '40%',
    backgroundColor: colors.black9,
    paddingBottom: 15,
    borderRadius: 16
  },
  viewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  listViewWrapper: {
    flex: 1
  }
});

const renderItem = (item, onSelect) => (
  <TouchableHighlight
    style={{
      paddingVertical: 10,
      paddingHorizontal: 30,
      alignItems: 'center'
    }}
    underlayColor={colors.black10}
    onPress={() => onSelect(item.id)}
  >
    <TextComponent
      content={item.title}
      size={fonts.fs18}
      family={fonts.medium}
      color={colors.white1}
    />
  </TouchableHighlight>
);


const ModalSecondaryV2 = ({
  modalTitle,
  isVisible,
  onBackButtonPress,
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
          size={fonts.fs20}
          family={fonts.light}
          color={colors.primary}
        />
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

ModalSecondaryV2.propTypes = {
  modalTitle: string.isRequired,
  isVisible: bool,
  onBackButtonPress: func,
  items: shape({
    id: number.isRequired,
    title: string.isRequired
  }).isRequired,
  onSelect: func
};

export default ModalSecondaryV2;
