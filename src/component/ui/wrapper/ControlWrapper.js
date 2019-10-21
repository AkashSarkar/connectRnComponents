import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { func, object } from 'prop-types';
import { Control } from '../../widget';

const styles = StyleSheet.create({
  controlContainer: {
    width: '100%',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: '15%',
    right: '5%'
  }
});

const ControlWrapper = ({
  navigation,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight
}) => {
  const onSwipeUpHandle = () => {
    if (onSwipeUp) onSwipeUp();
    else navigation.navigate('Scan');
  };
  const onSwipeDownHandle = () => {
    if (onSwipeDown) onSwipeDown();
    else navigation.goBack();
  };
  const onSwipeLeftHandle = () => {
    if (onSwipeLeft) onSwipeLeft();
    else navigation.navigate('Menu');
  };
  const onSwipeRightHandle = () => {
    if (onSwipeRight) onSwipeRight();
    else {
      // TODO
    }
  };

  return (
    <View style={styles.controlContainer}>
      <Control
        onSwipeUp={onSwipeUpHandle}
        onSwipeDown={onSwipeDownHandle}
        onSwipeLeft={onSwipeLeftHandle}
        onSwipeRight={onSwipeRightHandle}
      />
    </View>
  );
};

ControlWrapper.propTypes = {
  onSwipeDown: func,
  onSwipeUp: func,
  onSwipeLeft: func,
  onSwipeRight: func,
  navigation: object
};

export default withNavigation(ControlWrapper);
