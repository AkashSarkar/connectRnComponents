import React, { useRef } from 'react';
import { View } from 'react-native';
import {
  any, array, bool, string, object
} from 'prop-types';
import { colors, fonts } from '../../../../styles/baseStyle';
import SwipeableWrapper from '../../../ui/wrapper/SwipeableWrapper';
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
    isSubBudget,
    leftActions,
    rightActions
  }
) => {
  /**
   * This shadeComponent func is for only design purpose..we are using 9 shades.
   * so we are manually adding border radious for 1st shade,last shade and if there 
   * is only one shade.
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
      {isSubBudget ? ( // render single budget
        <View style={styles.shadeWrapper}>
          <View style={styles.subBudgetShades}>
            {
              shadeComponent(shadeColor.color)
            }
          </View>
        </View>
      ) : (
          // render all subBudget shades mapped from a colors array.
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
      {/* this part renders the right part of the budget where Name,amount title
        and amount is shown.
      */}
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
  );
  return (
    /** SwipeableWrapper contains the sliding parts of the
     * budget slider..and accepts all the designs as children.
    */
    <SwipeableWrapper
      rightActions={rightActions}
      leftActions={isSubBudget ? null : leftActions}
      leftSwiperWidth={isSubBudget ? 0 : 80}
      rightSwiperWidth={100}
      SwiperBackgroundColor={colors.grey2}
    >
      {budget()}
    </SwipeableWrapper>
  );
};
Budget.propTypes = {
  name: string,
  amount: string,
  amountTitle: string,
  shadeColor: array || any,
  isSubBudget: bool,
  leftActions: object,
  rightActions: object
}
export default Budget;
