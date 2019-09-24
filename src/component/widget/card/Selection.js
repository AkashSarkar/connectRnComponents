import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import TextComponent from "../../ui/typography/TextComponent";
import {colors, fonts} from "../../../styles/baseStyle";
import {BoxShadow} from "../../ui";
import {ml15, ph10, pv25} from "../../../styles/commonStyle";

const Selection = ({handleModalOpen, heading}) => {

  return (
    <BoxShadow>
      <View style={[styles.selectionWrapper, pv25, ph10]}>
        <Image
          style={styles.imageStyle}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
        <View style={[styles.contentWrapper, ml15]}>
          <TextComponent
            size={fonts.fs18}
            color={colors.black0}
            content={heading}
            family={fonts.bold}
          />
        </View>
        <TouchableOpacity onPress={handleModalOpen}>
          <Image
            style={styles.modalImage}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
          />
        </TouchableOpacity>
      </View>
    </BoxShadow>
  )
};

const styles = StyleSheet.create({
  selectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentWrapper: {
    flexGrow: 2
  },
  imageStyle: {
    height: 25,
    width: 25
  },
  modalImage: {
    height: 50,
    width: 50
  }
});

export default Selection;