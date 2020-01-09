import React from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';
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
  title, subtitle, titleColor, subtitleColor
}) => (
  <View style={styles.cardStyle}>
    {title.length > 0 && (
      <View style={mb5}>
        <TextComponent
          size={fonts.fs16}
          color={titleColor}
          content={title}
          family={fonts.medium}
        />
      </View>

    )}
    {subtitle.length > 0 && (
      <TextComponent
        size={fonts.fs12}
        color={subtitleColor}
        content={subtitle}
        family={fonts.medium}
        extraStyle={{ textAlign: 'center' }}
      />
    )}
  </View>
);
CardTitleWidget.propTypes = {
  title: string,
  subtitle: string,
  titleColor: string,
  subtitleColor: string
};
export default CardTitleWidget;
