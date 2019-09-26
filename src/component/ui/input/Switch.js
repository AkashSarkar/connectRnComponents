import React, { useState, useEffect } from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';
import { string, func, bool } from 'prop-types';
import TextComponent from '../typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import { p5 } from '../../../styles/commonStyle';

const Switch = (
  {
    value,
    onChange,
    thumbColor,
    trackColor
  }
) => {
  const styles = {
    wrapperStyle: {
      flexDirection: 'row',
      position: 'relative',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: trackColor || colors.white,
      width: '18%',
      borderRadius: 16,
      shadowColor: 'rgba(0, 0, 0, 0.08)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1,
      elevation: 1
    },
    overlay: {
      position: 'absolute',
      left: 0,
      borderRadius: 50,
      backgroundColor: thumbColor || colors.red1,
      height: '120%',
      width: '50%'
    }
  }
  const [active, setActive] = useState(value || false);
  const [initialPosition, setInitialPosition] = useState(0)
  const [translateX] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: active ? initialPosition + 36 : initialPosition,
      duration: 250
    }).start();
  });

  const pressToggle = () => {
    setActive(!active);
    onChange(!active);
  }
  return (
    <TouchableOpacity
      style={styles.wrapperStyle}
      onLayout={(event) => {
        // setSwitchWidth(event.nativeEvent.layout.width);
        setInitialPosition(event.nativeEvent.layout.x);
      }}
      onPress={() => pressToggle()}
    >
      <Animated.View style={{ ...styles.overlay, transform: [{ translateX }] }}/>
      <View style={p5}>
        <TextComponent
          size={fonts.fs14}
          color={!active ? colors.white1 : colors.primary2}
          content="off"
          family={fonts.medium}
        />
      </View>
      <View style={p5}>
        <TextComponent
          size={fonts.fs14}
          color={active ? colors.white1 : colors.primary2}
          content="on"
          family={fonts.medium}
        />
      </View>
    </TouchableOpacity>
  );
}
Switch.propTypes = {
  onChange: func,
  value: bool,
  thumbColor: string,
  trackColor: string
}
export default Switch;
