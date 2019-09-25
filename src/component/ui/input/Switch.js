import React from 'react';
import { Animated, View } from 'react-native';
import TextComponent from '../typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';

const style = {
  wrapperStyle: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '15%',
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
    borderRadius: 50,
    backgroundColor: 'rgba( 0 209 218)'
  }
}
const Switch = () => {
  return (
    <View style={style.wrapperStyle}>
      <Animated.View style={style.overlay}>
        <TextComponent size={fonts.fs10} color={colors.brandPrimary} content="a" family={fonts.regular}/>
      </Animated.View>
      <TextComponent
        size={fonts.fs14}
        color={colors.brandPrimary}
        content="off"
        family={fonts.regular}
      />
      <TextComponent
        size={fonts.fs14}
        color={colors.brandPrimary}
        content="on"
        family={fonts.regular}
      />
    </View>
  );
}
export default Switch;
