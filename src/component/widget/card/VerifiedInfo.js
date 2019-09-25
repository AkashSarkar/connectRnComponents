import React from 'react';
import { View } from 'react-native';
import { string, number } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { TextComponent } from '../../ui';
import { fonts, colors, gradientColors } from '../../../styles/baseStyle';
import { p15, mb5, mb20 } from '../../../styles/commonStyle';

const styles = {
  wrapper: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.white1,
    borderRadius: 16,
    ...p15,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  }
};

const VerifiedInfo = ({
  title1, title2, subtitle1, subtitle2
}) => (
  <LinearGradient colors={gradientColors.gradientPrimary} style={[styles.wrapper]}>
    <View style={mb20}>
      <View style={mb5}>
        <TextComponent
          content={title1}
          color={colors.secondary}
          family={fonts.semiBold}
          size={fonts.fs14}
        />
      </View>
      <View style={mb5}>
        <TextComponent
          content={subtitle1}
          color={colors.white1}
          family={fonts.regular}
          size={fonts.fs12}
        />
      </View>
    </View>
    <View>
      <View style={mb5}>
        <TextComponent
          content={title2}
          color={colors.secondary}
          family={fonts.semiBold}
          size={fonts.fs14}
        />
      </View>
      <View style={mb5}>
        <TextComponent
          content={subtitle2}
          color={colors.white1}
          family={fonts.regular}
          size={fonts.fs12}
        />
      </View>
    </View>
  </LinearGradient>
);

VerifiedInfo.propTypes = {
  title1: string.isRequired,
  title2: string.isRequired,
  subtitle1: string.isRequired,
  subtitle2: string.isRequired
};

export default VerifiedInfo;
