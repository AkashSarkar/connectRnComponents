import React from 'react';
import { Image, View } from 'react-native';
import { number, object, string } from 'prop-types';
import SwipeableWrapper from '../../../ui/wrapper/SwipeableWrapper';
import assets from '../../../../assets';
import { BoxShadow, TextComponent } from '../../../ui';
import { mr5, p10 } from '../../../../styles/commonStyle';
import { colors, fonts } from '../../../../styles/baseStyle';

const styles = {
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftChild: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightChild: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  borderBottom: {
    borderColor: colors.grey2,
    borderWidth: 1,
    width: '100%'
  },
  avatarShadow: {
    borderRadius: 30,
    backgroundColor: colors.white2,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 1
  }
}
const SplitItem = (
  {
    avatar, name, amount, rightActions, leftActions
  }
) => {
  const splitItem = () => {
    return (
      <View style={[styles.wrapper, p10]}>
        <View style={styles.leftChild}>
          <View style={[mr5, styles.avatarShadow]}>
            <Image source={avatar} style={{ height: 60, width: 60 }}/>
          </View>
          <TextComponent
            size={fonts.fs20}
            color={colors.primary2}
            content={name}
            family={fonts.regular}
          />
        </View>
        <View style={styles.rightChild}>
          <Image source={assets.Lock2} style={{ height: 20, width: 20 }}/>
          <TextComponent
            size={fonts.fs18}
            color={colors.primary2}
            content={`TK.${amount}`}
            family={fonts.medium}
          />
          <View style={styles.borderBottom}/>
        </View>
      </View>
    );
  }
  return (
    <SwipeableWrapper
      rightActions={rightActions}
      leftActions={leftActions}
      rightSwiperWidth={50}
      SwiperBackgroundColor={colors.grey2}
    >
      <BoxShadow>
        {splitItem()}
      </BoxShadow>
    </SwipeableWrapper>
  );
}
SplitItem.propTypes = {
  avatar: number,
  name: string,
  amount: string,
  rightActions: object,
  leftActions: object
}
export default SplitItem;
