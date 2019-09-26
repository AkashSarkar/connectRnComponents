import React from 'react';
import {
  Text, View, Image, TouchableOpacity, ScrollView, FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import image from '../../../assets';

const renderItem = item => (
  <View style={{
    paddingVertical: 10,
    paddingHorizontal: 30
  }}
  >
    <TouchableOpacity onPress={() => console.warn(item.id)}>
      <TextComponent
        content={item.title}
        size={fonts.fs16}
        family={fonts.semiBold}
        color={colors.colorSecondery}
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
    <View style={{
      height: 300,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 16,
      borderColor: 'black'
    }}
    >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
      }}
      >
        <TextComponent
          content={modalTitle}
          size={fonts.fs16}
          family={fonts.semiBold}
        />
        <View style={{
          position: 'absolute',
          right: 0
        }}
        >
          <TouchableOpacity onPress={onClose}>
            <Image
              style={{
                height: 35,
                width: 35
              }}
              source={image.Check}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          height: 200,
          width: '100%'
        }}
      >
        <FlatList
          data={items}
          renderItem={({ item }) => (
            renderItem(item)
          )}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  </Modal>
);

export default ModalSecondary;
