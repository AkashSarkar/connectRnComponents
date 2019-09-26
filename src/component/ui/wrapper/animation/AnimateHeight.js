import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import {
  number, any, node, bool
} from 'prop-types';

const AnimateHeight = ({
  animateOnState,
  duration,
  children,
  fromHeight,
  toHeight,
  translateY
}) => {
  const height = new Animated.Value(fromHeight);
  const translateHeight = {
    transform: [{ translateY: height }]
  };

  useEffect(() => {
    Animated.timing(height, {
      duration,
      toValue: toHeight
    }).start();
  }, [animateOnState]);

  return (
    <Animated.View style={translateY ? translateHeight : { height }}>
      {children}
    </Animated.View>
  );
};

AnimateHeight.defaultProps = {
  duration: 350,
  translateY: false
};

AnimateHeight.propTypes = {
  animateOnState: any.isRequired,
  children: node.isRequired,
  duration: number,
  toHeight: number.isRequired,
  fromHeight: number.isRequired,
  translateY: bool
};

export default AnimateHeight;
