import React from 'react';
import { View } from 'react-native';
import { string, number } from 'prop-types';
import { TextComponent } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';
import { mb5 } from '../../../styles/commonStyle';

const styles = {
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  }
};
const CardTitleWidget = ({
  title,
  subtitle,
  titleColor,
  subtitleColor,
  titleSize,
  subtitleSize,
  titleFonts,
  subTitleFonts
}) => (
  <View style={styles.cardStyle}>
    {title.length > 0 && (
      <View style={mb5}>
        <TextComponent
          size={titleSize}
          color={titleColor}
          content={title}
          family={titleFonts}
        />
      </View>

    )}
    {subtitle.length > 0 && (
      <TextComponent
        size={subtitleSize}
        color={subtitleColor}
        content={subtitle}
        family={subTitleFonts}
        extraStyle={{ textAlign: 'center' }}
      />
    )}
  </View>
);
CardTitleWidget.defaultProps = {
  titleColor: colors.secondary,
  subtitleColor: colors.white,
  titleSize: fonts.fs16,
  subtitleSize: fonts.fs12,
  titleFonts: fonts.medium,
  subTitleFonts: fonts.medium
};
CardTitleWidget.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  titleColor: string,
  subtitleColor: string,
  titleSize: number,
  subtitleSize: number,
  titleFonts: string,
  subTitleFonts: string
};
export default CardTitleWidget;
