import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import {
  any, bool, func, number, string
} from 'prop-types';
import SwipeableWrapper from '../../../swipeable/SwipeableWrapper';
import assets from '../../../../assets';
import { BoxShadow, TextComponent } from '../../../ui';
import { mr5, p10, p5 } from '../../../../styles/commonStyle';
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
const SplitItem = ({ avatar, name, amount }) => {
  const refs = {
    swipeableRef: useRef(null)
  }
  const deleteAction = () => {
    refs.swipeableRef.current.close();
    alert('delete');
  }
  const mapRightActions = () => {
    const { Delete } = assets;
    return (
      [
        {
          id: 1,
          icon: Delete,
          color: '#00000029',
          x: 50,
          pressHandler: deleteAction
        }
      ]
    );
  }
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
      rightActions={mapRightActions()}
      rightSwiperWidth={50}
      SwiperBackgroundColor={colors.grey2}
      ref={refs.swipeableRef}
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
  amount: string
}
export default SplitItem;
