import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Title from '../title/Title';
import {p20} from "../../../styles/commonStyle";
import BoxShadow from "../../ui/wrapper/BoxShadow";

const styles = StyleSheet.create({
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...p20
  },
  imageStyle: {
    width: 35,
    height: 35
  }
});

const AccountDetails = ({handleShareButton}) => {

  handleShareButton = () => {
    alert("hello")
  };

  return (
    <BoxShadow>
      <View style={styles.contentWrapper}>
        <Title subTitle="Account Name" title="Anisur Rahman"/>
        <TouchableOpacity onPress={handleShareButton}>
          <Image
            style={styles.imageStyle}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentWrapper}>
        <Title subTitle="Account No" title="0000 1234 5678 9"/>
      </View>
      <View style={styles.contentWrapper}>
        <Title subTitle="Routing No" title="123456789"/>
        <Title subTitle="CONNECT Suffix" title="12"/>
      </View>
    </BoxShadow>
  )
};

export default AccountDetails