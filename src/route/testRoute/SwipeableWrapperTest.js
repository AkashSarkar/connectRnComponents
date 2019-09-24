import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeableWrapper from '../../component/swipeable/SwipeableWrapper';
import assets from '../../assets';

const style = StyleSheet.create({
  boxShadow: {
    borderRadius: 16,
    backgroundColor: '#fefefe',
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 1,
    width: '100%',
    height: 100,
    marginBottom: 10
  }
});


const SwipeableWrapperTest = () => {
  const refs = {
    swipeableRef: useRef(null)
  }
  const deleteAction = () => {
    refs.swipeableRef.current.close();
    alert("delete")
  }
  const pauseAction = () => {
    refs.swipeableRef.current.close();
    alert("Pause")
  }
  const editAction = () => {
    refs.swipeableRef.current.close();
    alert("Edit")
  }
  const mapRightActions = () => {
    const { Check, Delete, LeftArrow } = assets;
    return (
      [
        {
          id: 1,
          icon: Check,
          color: '#00000029',
          x: 192,
          pressHandler: deleteAction
        },
        {
          id: 2,
          icon: Delete,
          color: '#ffab00',
          x: 128,
          pressHandler: pauseAction
        },
        {
          id: 3,
          icon: LeftArrow,
          color: '#dd2c00',
          x: 64,
          pressHandler: editAction
        }
      ]
    )
  }

  const mapLeftActions = () => {
    const { StarFilled } = assets;
    return (
      [
        {
          id: 1,
          icon: StarFilled,
          color: '#00000029',
          x: -100,
          pressHandler: deleteAction
        }
      ]
    );
  }
  return (
    <View>
      <SwipeableWrapper
        rightActions={mapRightActions()}
        leftActions={mapLeftActions()}
        ref={refs.swipeableRef}
      >
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          backgroundColor: '#C8C7CD'
        }}
        >
          <Text>Swipe me</Text>
        </View>
      </SwipeableWrapper>
    </View>
  );
}
export default SwipeableWrapperTest;
