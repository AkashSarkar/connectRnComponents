import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import { array, bool, string } from 'prop-types';
import { colors, fonts } from '../../../../styles/baseStyle';
import { BoxShadow } from '../../../ui';
import SwipeableWrapper from '../../../swipeable/SwipeableWrapper';
import assets from '../../../../assets';
import TextComponent from '../../../ui/typography/TextComponent';
import { p10 } from '../../../../styles/commonStyle';

const Budget = (
  {
    name,
    amount,
    amountTitle
  }
) => {

  const refs = {
    swipeableRef: useRef(null)
  }
  const deleteAction = () => {
    refs.swipeableRef.current.close();
    alert('delete');
  }
  const pauseAction = () => {
    refs.swipeableRef.current.close();
    alert('Pause');
  }
  const editAction = () => {
    refs.swipeableRef.current.close();
    alert('Edit');
  }
  const mapRightActions = () => {
    const { Delete, Check } = assets;
    return (
      [
        {
          id: 1,
          icon: Delete,
          color: '#00000029',
          x: 150,
          pressHandler: deleteAction
        },
        {
          id: 2,
          icon: Check,
          color: '#dd2c00',
          x: 50,
          pressHandler: editAction
        }
      ]
    );
  }
  const budget = () => (
    <View>
      <View>
        <TextComponent
          size={fonts.fs14}
          color={colors.white2}
          content={name}
          family={fonts.semiBold}
        />
      </View>
    </View>
  )
  return (
    <SwipeableWrapper
      rightActions={mapRightActions()}
      rightSwiperWidth={150}
      SwiperBackgroundColor={colors.grey2}
      ref={refs.swipeableRef}
    >
      <BoxShadow>
        {budget()}
      </BoxShadow>
    </SwipeableWrapper>
  );
}
Budget.propTypes = {
  name: string,
  amount: string,
  amountTitle: string
}
export default Budget;
