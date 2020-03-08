import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import {
  string, number, bool, array
} from 'prop-types';
import assets from '../../../assets';
import { colors } from '../../../styles/baseStyle';

const dimension = 50;
const styles = {
  container: {
    position: 'relative'
    // zIndex: 1
  },
  buttonChild: {
    height: dimension,
    width: dimension,
    borderRadius: dimension / 2,
    position: 'absolute',
    // bottom: 20,
    // zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    height: dimension,
    width: dimension,
    borderRadius: dimension / 2,
    position: 'absolute',
    // bottom: 20,
    // zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  label: {
    // flex: 1,
    color: colors.white1,
    position: 'absolute',
    // fontSize: 14,
    backgroundColor: 'transparent',
    width: 100
  },
  button: {
    height: dimension,
    width: dimension,
    borderRadius: dimension / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconStyle: {
    height: dimension,
    width: dimension
  },
  childrenIconStyle: {
    height: dimension / 3,
    width: dimension / 3
  }
};
const FabButton = (
  {
    background, parentIcon, childrenButtons,
    onParentPress, right
  }
) => {
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

  const bgStyle = {
    transform: [{
      scale: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 300]
      })
    }]
  };
  const rightPosition = [-10, -90];
  const leftPosition = [10, 90];
  const labelPosition = animation.interpolate({
      inputRange: [0, 1],
      outputRange: right ? rightPosition : leftPosition
    })
  ;
  const labelOpacity = animation.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 0, 1]
  });
  const labelStyle = {
    opacity: labelOpacity,
    transform: [{
      translateX: labelPosition
    }]
  };
  const renderChildren = () => (
    childrenButtons.map((item, idx) => {
      return (
        <TouchableWithoutFeedback
          onPress={() => item.func()}
          key={idx}
        >
          <Animated.View style={[
            styles.buttonChild,
            { backgroundColor: background },
            {
              transform: [{
                scale: animation
              }, {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -item.translate],
                  extrapolate: 'clamp'
                })
              }]
            }
          ]}
          >
            {
              isActive && (
                <Animated.Text
                  style={[styles.label, labelStyle, { textAlign: right ? 'right' : 'left' }]}
                >
                  {item.text}
                </Animated.Text>
              )
            }

            <Image
              source={item.icon}
              style={styles.childrenIconStyle}
              resizeMode="contain"
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    })
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, bgStyle]} />
      {renderChildren()}
      <TouchableOpacity
        style={[
          styles.button
          // { backgroundColor: background }
        ]}
        onPress={() => {
          toggleAnimation();
          // onParentPress();
        }}
      >
        <Image
          source={parentIcon}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>

    </View>
  );
};

FabButton.defaultProps = {
  background: colors.red1,
  parentIcon: assets.Connect

};
FabButton.propTypes = {
  background: string,
  parentIcon: number,
  childrenButtons: array,
  right: bool
};
export default FabButton;
