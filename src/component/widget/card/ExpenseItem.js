import React from 'react';
import { View, Image } from 'react-native';
import { string } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import { p15, pr10 } from '../../../styles/commonStyle';
import image from '../../../assets';

const styles = {
  wrapper: {
    width: '100%',
    height: 50,
    alignItems: 'flex-end'
  },
  backgroundWrapper: {
    height: 50,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    elevation: 1,
    shadowColor: colors.black0,
    opecity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  contentwrapper: {
    width: '100%',
    height: 50,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...p15

  },
  leftWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightWrapper: {
    alignItems: 'center'
  },
  imagestyle: {
    width: 40,
    height: 40
  }
};

const ExpenseItem = ({
  title, subtitle, topValue, bottomValue, logo
}) => (
  <View style={styles.wrapper}>
    <View style={[styles.backgroundWrapper, { width: `${parseInt(topValue, 10)}%` }]} />
    <View style={[styles.contentwrapper]}>
      <View style={styles.leftWrapper}>
        <View style={pr10}>
          <Image
            style={styles.imagestyle}
            source={image[logo]}
          />
        </View>
        <View>
          <TextComponent
            content={title}
            color={colors.primary2}
            family={fonts.semiBold}
            size={fonts.fs12}
          />
          <TextComponent
            content={subtitle}
            color={colors.grey1}
            family={fonts.regular}
            size={fonts.fs12}
          />
        </View>
      </View>
      <View style={styles.rightWrapper}>
        <TextComponent
          content={topValue}
          color={colors.secondary}
          family={fonts.semiBold}
          size={fonts.fs14}
        />
        <TextComponent
          content={bottomValue}
          color={colors.grey1}
          family={fonts.regular}
          size={fonts.fs12}
        />
      </View>
    </View>
  </View>
);

ExpenseItem.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  topValue: string.isRequired,
  bottomValue: string.isRequired,
  logo: string.isRequired
};

export default ExpenseItem;
