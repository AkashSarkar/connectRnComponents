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

const dimension = 60;
const styles = {
  container: {
    position: 'relative',
    zIndex: 9999
  },
  buttonChild: {
    height: dimension,
    width: dimension,
    borderRadius: dimension / 2,
    position: 'absolute',
    // bottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: dimension,
    width: dimension,
    borderRadius: dimension / 2,
    // position: 'absolute',
    // bottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconStyle: {
    height: dimension / 3,
    width: dimension / 3
  }
};
const FabButton = ({ background, parentIcon, childrenButtons }) => {
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
            <Image
              source={item.icon}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    })
  );

  return (
    <View style={styles.container}>
      {renderChildren()}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: background }
        ]}
        onPress={() => toggleAnimation()}
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
  childrenButtons: array
};
export default FabButton;
