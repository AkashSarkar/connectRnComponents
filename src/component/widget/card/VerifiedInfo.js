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
  content, family, size, color
}) => (
  <LinearGradient colors={gradientColors.gradientPrimary} style={[styles.wrapper]}>
    <View style={mb20}>
      <View style={mb5}>
        <TextComponent
          content="bKash Account Name"
          color={colors.secondary}
          family={fonts.semiBold}
          size={fonts.fs14}
        />
      </View>
      <View style={mb5}>
        <TextComponent
          content="Mehzabi Chaudhry"
          color={colors.white1}
          family={fonts.regular}
          size={fonts.fs12}
        />
      </View>
    </View>
    <View>
      <View style={mb5}>
        <TextComponent
          content="bKash Account Number"
          color={colors.secondary}
          family={fonts.semiBold}
          size={fonts.fs14}
        />
      </View>
      <View style={mb5}>
        <TextComponent
          content="01755 666 777"
          color={colors.white1}
          family={fonts.regular}
          size={fonts.fs12}
        />
      </View>
    </View>
  </LinearGradient>
);

VerifiedInfo.propTypes = {
//   content: string.isRequired,
//   family: string.isRequired,
//   size: number.isRequired,
//   color: string.isRequired
};

export default VerifiedInfo;
