import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';
import { ButtonPrimary, TextComponent } from '../../ui';
import { fonts, colors, gradientColors } from '../../../styles/baseStyle';
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
    width: '100%',
    height: '90%'
  },
  leftStyle: {
    width: '35%',
    justifyContent: 'flex-end'
  },
  rightStyle: {
    width: '65%',
    justifyContent: 'space-around',
    ...p15
  }
};

const Scan = ({
  title, subtitle, content, onPress
}) => (
  <View onPress={onPress} style={styles.wrapper}>
    <View style={styles.leftStyle}>
      <Image style={styles.imageStyle} source={image.HandQRCode} />
    </View>
    <View style={[styles.rightStyle, mb10]}>
      <View>
        <View style={mb5}>
          <TextComponent
            content={title}
            color={colors.primary2}
            family={fonts.semiBold}
            size={fonts.fs16}
          />
        </View>
        <TextComponent
          content={subtitle}
          color={colors.primary2}
          family={fonts.regular}
          size={fonts.fs10}
        />
      </View>
      <ButtonPrimary
        content={content}
        buttonColor={gradientColors.gradientPrimary}
        textColor={colors.white1}
        fontSize={fonts.fs14}
        onPress={onPress}
      />
    </View>
  </View>
);

Scan.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  content: string.isRequired,
  onPress: func.isRequired
};

export default Scan;
