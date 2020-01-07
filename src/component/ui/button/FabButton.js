import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { string, number } from 'prop-types';
import assets from '../../../assets';
import { colors } from '../../../styles/baseStyle';

const dimension = 60;
const styles = {
  button: {
    height: dimension,
    width: dimension,
    borderRadius: dimension / 2,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconStyle: {
    height: dimension / 3,
    width: dimension / 3
  }
};
const FabButton = ({ background }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [isActive, setIsActive] = useState(false);
  const toggleAnimation = () => {
    Animated.timing(animation, {
      toValue: isActive ? 0 : 1,
      duration: 200
    })
      .start();
    setIsActive(!isActive);
  };
  const firstButtonStyle = {
    transform: [{
      scale: animation
    }, {
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -100],
        extrapolate: 'clamp'
      })
    }]
  };
  const secondButtonStyle = {
    transform: [{
      scale: animation
    }, {
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -170],
        extrapolate: 'clamp'
      })
    }]
  };
  return (
    <View style={{
      flex: 1
    }}
    >
      <TouchableWithoutFeedback
        onPress={() => console.warn('Search')}
      >
        <Animated.View style={[
          styles.button,
          { backgroundColor: background },
          secondButtonStyle
        ]}
        >
          <Image
            source={assets.HandQRCode}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => console.warn('Search')}
      >
        <Animated.View style={[
          styles.button,
          { backgroundColor: background },
          firstButtonStyle
        ]}
        >
          <Image
            source={assets.Search}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: background }]}
        onPress={() => toggleAnimation()}
      >
        <Image
          source={assets.Connect}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
);
};

FabButton.defaultProps = {
  background: colors.red1
};
FabButton.propTypes = {
  background: string
};
export default FabButton;
