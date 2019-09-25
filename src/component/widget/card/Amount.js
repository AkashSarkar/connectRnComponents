import React from 'react';
import { View } from 'react-native';
import { string, number } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import { p15, mb10 } from '../../../styles/commonStyle';

const styles = {
  wrapper: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey2,
    borderRadius: 10,
    ...p15,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  }
};

const Amount = ({
  title, subtitle
}) => (
  <View style={styles.wrapper}>
    <View style={mb10}>
      <TextComponent
        content={title}
        color={colors.black1}
        family={fonts.regular}
        size={fonts.fs10}
      />
    </View>
    <View>
      <TextComponent
        content={subtitle}
        color={colors.black1}
        family={fonts.semiBold}
        size={fonts.fs16}
      />
    </View>
  </View>
);

Amount.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired
};

export default Amount;
