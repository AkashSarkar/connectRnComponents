import React from 'react';
import { View, Image } from 'react-native';
import { string, number } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import { p15, pr10 } from '../../../styles/commonStyle';
import image from '../../../assets';

const styles = {
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white1,
    borderRadius: 8,
    ...p15,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  leftWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightWrapper: {
    
  },
  imagestyle: {
    width: 40,
    height: 40
  }
};

const ExpenseItem = ({
  content, family, size, color
}) => (
  <View style={[styles.wrapper]}>
    <View style={styles.leftWrapper}>
      <View style={pr10}>
        <Image
          style={styles.imagestyle}
          source={image['Check']}
        />
      </View>
      <View>
        <TextComponent
          content="Transport"
          color={colors.primary2}
          family={fonts.semiBold}
          size={fonts.fs12}
        />
        <TextComponent
          content="5 transaction"
          color={colors.grey1}
          family={fonts.regular}
          size={fonts.fs12}
        />
      </View>
    </View>
    <View style={styles.rightWrapper}>
      <TextComponent
        content="90"
        color={colors.secondary}
        family={fonts.semiBold}
        size={fonts.fs14}
      />
      <TextComponent
        content="10%"
        color={colors.grey1}
        family={fonts.regular}
        size={fonts.fs12}
      />
    </View>
  </View>
);

ExpenseItem.propTypes = {
//   content: string.isRequired,
//   family: string.isRequired,
//   size: number.isRequired,
//   color: string.isRequired
};

export default ExpenseItem;
