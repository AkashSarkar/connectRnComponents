import React from 'react';
import { View, Image } from 'react-native';
import {
  array, bool, string, object
} from 'prop-types';
import { colors, fonts } from '../../../../styles/baseStyle';
import { BoxShadow } from '../../../ui';
import SwipeableWrapper from '../../../swipeable/SwipeableWrapper';
import assets from '../../../../assets';
import TextComponent from '../../../ui/typography/TextComponent';
import { p10 } from '../../../../styles/commonStyle';

const FnfMember = (
  {
    name,
    number,
    channels,
    isConnect,
    rightActions,
    leftActions
  }
) => {
  const styles = {
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    leftChild: {},
    rightChild: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    channelStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }
  const fnfMember = () => (
    <View style={[styles.wrapper, p10]}>
      <View>
        <TextComponent
          size={fonts.fs20}
          color={colors.primary2}
          content={name}
          family={fonts.regular}
        />
        <TextComponent
          size={fonts.fs14}
          color={colors.primary2}
          content={number}
          family={fonts.regular}
        />
        <View style={styles.channelStyle}>
          {
            channels.map(channel => (
              <Image
                key={channel.id}
                source={channel.icon}
                style={{ width: 30, height: 30 }}
              />
            ))
          }
        </View>
      </View>
      {isConnect && (
        <View style={styles.rightChild}>
          <Image source={assets.Connect} style={{ width: 60, height: 60 }}/>
        </View>
      )}
    </View>
  )
  return (
    <SwipeableWrapper
      rightActions={rightActions}
      leftActions={leftActions}
      rightSwiperWidth={130}
      SwiperBackgroundColor={colors.grey2}
    >
      <BoxShadow>
        {fnfMember()}
      </BoxShadow>
    </SwipeableWrapper>
  );
}
FnfMember.propTypes = {
  name: string,
  number: string,
  channels: array,
  isConnect: bool,
  leftActions: object,
  rightActions: object
}
export default FnfMember;
