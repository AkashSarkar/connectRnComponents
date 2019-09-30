import React, { useRef } from 'react';
import { View } from 'react-native';
import {
  any, array, bool, string
} from 'prop-types';
import { colors, fonts } from '../../../../styles/baseStyle';
import SwipeableWrapper from '../../../swipeable/SwipeableWrapper';
import assets from '../../../../assets';
import TextComponent from '../../../ui/typography/TextComponent';
import { p10 } from '../../../../styles/commonStyle';

const styles = {
  textWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    width: '100%'
  },
  rightText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  shadeWrapper: {
    flexDirection: 'row',
    height: 70
  },
  leftShades: {
    flex: 2,
    flexDirection: 'row'
  },
  subBudgetShades: {
    flex: 1,
    flexDirection: 'row'
  }
}
const Budget = (
  {
    name,
    amount,
    amountTitle,
    shadeColor,
    isSubBudget
  }
) => {
  const refs = {
    swipeableRef: useRef(null)
  }
  const deleteAction = () => {
    refs.swipeableRef.current.close();
    alert('delete');
  }
  const editAction = () => {
    refs.swipeableRef.current.close();
    alert('Edit');
  }
  const addAction = () => {
    refs.swipeableRef.current.close();
    alert('Add');
  }
  const mapLeftActions = () => {
    const { Add2 } = assets;
    return (
      [
        {
          id: 1,
          icon: Add2,
          color: '#00000029',
          x: -50,
          pressHandler: addAction
        }
      ]
    );
  }
  const mapRightActions = () => {
    const { Delete, Edit } = assets;
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
          icon: Edit,
          color: '#dd2c00',
          x: 50,
          pressHandler: editAction
        }
      ]
    );
  }
  /**
   *
   * @param color
   * @param height
   * @param index
   * @returns {*}
   */
  const shadeComponent = (color, index = null) => (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: color,
          marginLeft: -1
        },
        index === 0 ? {
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16
        } : null,
        index === null ? {
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16
        } : null,
        isSubBudget ? {
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16
        } : null
      ]}
      key={index}
    />
  )
  const budget = () => (
    <View>
      {isSubBudget ? (
        <View style={styles.shadeWrapper}>
          <View style={styles.subBudgetShades}>
            {
              shadeComponent(shadeColor.color)
            }
          </View>
        </View>
      ) : (
        <View style={styles.shadeWrapper}>
          <View style={styles.leftShades}>
            {shadeColor.map((item, index) => (
              shadeComponent(item.color, index)
            ))}
          </View>
          <View style={{ flex: 1 }}>
            {shadeComponent(colors.secondary)}
          </View>
        </View>
      )}
      <View style={[styles.textWrapper, p10]}>
        <View>
          <TextComponent
            size={fonts.fs14}
            color={colors.white2}
            content={name}
            family={fonts.semiBold}
          />
        </View>
        <View style={styles.rightChild}>
          <TextComponent
            size={fonts.fs10}
            color={colors.white2}
            content={amountTitle}
            family={fonts.medium}
          />
          <TextComponent
            size={fonts.fs14}
            color={colors.white2}
            content={amount}
            family={fonts.medium}
          />
        </View>
      </View>
    </View>
  )
  return (
    <SwipeableWrapper
      rightActions={mapRightActions()}
      leftActions={isSubBudget ? null : mapLeftActions()}
      leftSwiperWidth={isSubBudget ? 0 : 80}
      rightSwiperWidth={100}
      SwiperBackgroundColor={colors.grey2}
      ref={refs.swipeableRef}
    >
      {budget()}
    </SwipeableWrapper>
  );
}
Budget.propTypes = {
  name: string,
  amount: string,
  amountTitle: string,
  shadeColor: array || any,
  isSubBudget: bool
}
export default Budget;
