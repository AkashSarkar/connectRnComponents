import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { number, any, node } from 'prop-types';

const AnimateOpacity = ({ animateOnState, duration, children }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      duration,
      toValue: 1
    }).start();
  }, [animateOnState]);

  return (
    <Animated.View
      style={{
        opacity: opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp'
        })
      }}
    >
      {children}
    </Animated.View>
  );
};

AnimateOpacity.defaultProps = {
  duration: 350
};

AnimateOpacity.propTypes = {
  animateOnState: any.isRequired,
  children: node.isRequired,
  duration: number
};

export default AnimateOpacity;
