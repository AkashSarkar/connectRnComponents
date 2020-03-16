import React from 'react';
import {
  View, TouchableOpacity, StyleSheet, FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import {
  func, bool, object
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import { ButtonPrimaryV2 } from '../../ui';

const styles = StyleSheet.create({
  container: {
    height: 260,
    padding: 20,
    borderRadius: 16
  },
  viewWrapper: {
    paddingVertical: 10
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

const ModalInfo = ({
  isVisible,
  onBackButtonPress,
  onClose,
  items,
  modalInfoColor,
  mapOpen
}) => {

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
          color={modalInfoColor.textComponentColor1}
        />
        <TextComponent
          content={item.details}
          size={fonts.fs16}
          family={fonts.regular}
          color={modalInfoColor.textComponentColor2}
        />
      </View>
    </View>
  );
  return (
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
      <View
        style={[
          styles.container,
          {
            backgroundColor: modalInfoColor.modalbgColor
          }]}
      >
        <View style={styles.viewWrapper}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeModalContainer}
            hitSlop={styles.hitSlop}
          />
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
              height: 24,
              width: '100%',
              alignItems: 'flex-end',
              marginTop: 20
            }}
            >
              <ButtonPrimaryV2
                content="Map"
                textColor={colors.white1}
                fontSize={fonts.fs12}
                buttonColor={colors.primary}
                buttonHeight={30}
                extraStyle={{
                  borderRadius: 16,
                  paddingHorizontal: 28
                }}
                onPress={mapOpen}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
ModalInfo.propTypes = {
  isVisible: bool,
  onBackButtonPress: func,
  onClose: func,
  modalInfoColor: object,
  items: object
};
export default ModalInfo;
