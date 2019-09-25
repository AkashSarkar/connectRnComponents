import React from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';
import { TextComponent } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';

const styles = {
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 6
  }
}
const CardTitleWidget = ({ title, subtitle }) => (
  <View style={styles.cardStyle}>
    {title.length > 0 && (
      <TextComponent
        size={fonts.fs16}
        color={colors.primary2}
        content={title}
        family={fonts.medium}
      />
    )}
    {subtitle.length > 0 && (
      <TextComponent
        size={fonts.fs10}
        color={colors.primary2}
        content={subtitle}
        family={fonts.medium}
      />
    )}
  </View>
)
CardTitleWidget.propTypes = {
  title: string,
  subtitle: string
}
export default CardTitleWidget;
