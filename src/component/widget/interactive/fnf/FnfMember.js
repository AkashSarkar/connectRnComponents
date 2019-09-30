import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import { array, bool, string } from 'prop-types';
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
    isConnect
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
    const { Delete, Pause, Edit } = assets;
    return (
      [
        {
          id: 1,
          icon: Delete,
          color: '#00000029',
          x: 130,
          pressHandler: deleteAction
        },
        {
          id: 2,
          icon: Pause,
          color: '#ffab00',
          x: 80,
          pressHandler: pauseAction
        },
        {
          id: 3,
          icon: Edit,
          color: '#dd2c00',
          x: 50,
          pressHandler: editAction
        }
      ]
    );
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
              <Image key={channel.id} source={channel.icon} style={{ width: 30, height: 30 }}/>
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
      rightActions={mapRightActions()}
      rightSwiperWidth={130}
      SwiperBackgroundColor={colors.grey2}
      ref={refs.swipeableRef}
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
  isConnect: bool
}
export default FnfMember;
