import React from 'react';
import {
  Image, StyleSheet, TouchableOpacity, View
} from 'react-native';
import { func, number, string } from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import { BoxShadow } from '../../ui';
import { p10, ph10, pv5 } from '../../../styles/commonStyle';
import assets from '../../../assets';

const styles = StyleSheet.create({
  adWrapper: {
    flexDirection: 'row'
  },
  adLogoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey2,
    borderRadius: 8,
    ...pv5,
    elevation: 1,
    shadowColor: colors.black1,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 1,
    width: 55,
    height: 55
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
  }
});

const Ad = ({
  handleCloseAd, title, details, adIcon, closeIcon
}) => (
  <BoxShadow>
    <View style={[styles.adWrapper, p10]}>

      <View style={styles.adLogoWrapper}>
        <Image
          style={styles.imageStyle}
          source={adIcon}
        />
      </View>
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
            source={closeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  </BoxShadow>
);


Ad.propTypes = {
  handleCloseAd: func.isRequired,
  closeIcon: number,
  adIcon: number,
  title: string,
  details: string
};

Ad.defaultProps = {
  closeIcon: assets.Cross,
  adIcon: assets.Bkash
};

export default Ad;
