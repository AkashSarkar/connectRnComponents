import React from 'react';
import { View, Image } from 'react-native';
import { string } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import { p15, mb10, mb5 } from '../../../styles/commonStyle';
import image from '../../../assets';

const styles = {
  wrapper: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.grey2,
    borderRadius: 10,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  imageStyle: {
    width: 50,
    height: 50
  },
  leftStyle: {
    width: '30%'
  },
  rightStyle: {
    width: '70%',
    justifyContent: 'space-around',
    ...p15
  }
};

const Scan = ({
  title, subtitle
}) => (
  <View style={styles.wrapper}>
    <View style={styles.leftStyle}>
      <Image style={styles.imageStyle} source={image['Check']} />
    </View>
    <View style={[styles.rightStyle, mb10]}>
      <View>
        <View style={mb5}>
          <TextComponent
            content={title}
            color={colors.primary2}
            family={fonts.regular}
            size={fonts.fs16}
          />
        </View>
        <TextComponent
          content={subtitle}
          color={colors.primary2}
          family={fonts.semiBold}
          size={fonts.fs10}
        />
      </View>
      <TextComponent
        content={subtitle}
        color={colors.primary2}
        family={fonts.semiBold}
        size={fonts.fs10}
      />
    </View>
  </View>
);

Scan.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired
};

export default Scan;
