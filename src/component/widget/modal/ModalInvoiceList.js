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
import assets from '../../../assets';

const styles = StyleSheet.create({
  container: {
    height: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderRadius: 16,
    borderColor: 'black'
  }
});


const ModalInvoiceList = ({
  isVisible,
  onBackButtonPress,
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
      <View style={{ paddingBottom: 10, paddingTop: 30 }}>
        <Image
          source={assets.Plus}
          style={{
            height: 144,
            width: 144
          }}
          resizeMode="contain"
        />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={{
            paddingVertical: 10
          }}
          >
            <View style={{ alignItems: 'center' }}>
              <TextComponent
                content={item.title}
                size={fonts.fs14}
                family={fonts.regular}
                color={colors.black0}
              />

              <View>
                <TextComponent
                  content={item.details}
                  size={fonts.fs18}
                  family={fonts.semiBold}
                  color={colors.black0}
                />
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </Modal>
);

ModalInvoiceList.propTypes = {
  isVisible: bool,
  items: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      details: string.isRequired
    })
  ),
  onSelect: func
};

export default ModalInvoiceList;
