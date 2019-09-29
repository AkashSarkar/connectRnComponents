import React from 'react';
import { View } from 'react-native';
import { string, number } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';

const styles = {
  wrapper: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: colors.white1,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    paddingBottom: 20
  },
  leftWrapper: {
    justifyContent: 'flex-end'
  },
  rightWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
};

const SeatListItem = ({
  title, subtitle, duration, price, available
}) => (
  <View style={styles.wrapper}>
    <View style={styles.leftWrapper}>
      <TextComponent
        content={title}
        color={colors.black1}
        family={fonts.semiBold}
        size={fonts.fs16}
      />
      <TextComponent
        content={subtitle}
        color={colors.black1}
        family={fonts.regular}
        size={fonts.fs10}
      />
      <TextComponent
        content={duration}
        color={colors.black1}
        family={fonts.regular}
        size={fonts.fs10}
      />
    </View>
    <View style={styles.rightWrapper}>
      <TextComponent
        content={available}
        color={colors.primary2}
        family={fonts.regular}
        size={fonts.fs10}
      />
      <TextComponent
        content={price}
        color={colors.primary2}
        family={fonts.semiBold}
        size={fonts.fs16}
      />
    </View>
  </View>
);

SeatListItem.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  duration: string.isRequired,
  available: string.isRequired,
  price: string.isRequired
};

export default SeatListItem;
