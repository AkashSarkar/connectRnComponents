import React from 'react';
import {
  View, Image, StyleSheet, FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import {
  arrayOf, shape, string, func, bool
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import assets from '../../../assets';
import { pv25 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    paddingBottom: 10,
    marginHorizontal: 62,
    borderRadius: 16,
    borderColor: 'black'
  }
});


const ModalInvoiceList = ({
  isVisible,
  onBackButtonPress,
  items,
  isInvoice,
  isQRCode
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
      isInvoice && (
        <View style={[styles.container, { height: 400 }]}>
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
      )
    }
    {
      isQRCode && (
        <View style={[styles.container, { height: 270 }]}>
          <View>
            <View style={pv25}>
              <Image
                source={assets.Plus}
                style={{
                  height: 144,
                  width: 144
                }}
                resizeMode="contain"
              />
            </View>
            <View style={{ alignItems: 'center' }}>
              <TextComponent
                content="My Code"
                family={fonts.medium}
                size={fonts.fs16}
                color={colors.black0}
              />
            </View>
          </View>
        </View>
      )
    }

  </Modal>
);

ModalInvoiceList.propTypes = {
  isVisible: bool,
  isQRCode: bool,
  isInvoice: bool,
  items: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      details: string.isRequired
    })
  ),
  onBackButtonPress: func
};

export default ModalInvoiceList;
