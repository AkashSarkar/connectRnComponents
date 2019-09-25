import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import TextComponent from "../../ui/typography/TextComponent";
import {colors, fonts} from "../../../styles/baseStyle";
import {BoxShadow} from "../../ui";
import {p10, ph10} from "../../../styles/commonStyle";

const Ad = ({handleCloseAd, title, details}) => {

  return (
    <BoxShadow>
      <View style={[styles.adWrapper, p10]}>
        <Image
          style={styles.imageStyle}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
        <View style={[styles.contentWrapper, ph10]}>
          <TextComponent
            size={fonts.fs10}
            color={colors.black0}
            content={title}
            family={fonts.bold}
          />
          <TextComponent
            size={fonts.fs10}
            color={colors.black0}
            content={details}
            family={fonts.regular}
          />
        </View>
        <View>
          <TouchableOpacity onPress={handleCloseAd}>
            <Image
              style={styles.closeImgStyle}
              source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </BoxShadow>
  )
};

const styles = StyleSheet.create({
  adWrapper: {
    flexDirection: 'row'
  },
  imageStyle: {
    height: 55,
    width: 55
  },
  closeImgStyle: {
    height: 15,
    width: 15
  },
  contentWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%'
  },
});

export default Ad;