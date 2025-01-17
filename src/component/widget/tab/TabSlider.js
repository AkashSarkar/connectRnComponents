import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Animated
} from 'react-native';
import { string, func } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { TextComponent, BoxShadow } from '../../ui';
import { fonts, colors, gradientColors } from '../../../styles/baseStyle';

const styles = StyleSheet.create({
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    top: 0,
    left: 0,
    paddingVertical: 20,
    borderRadius: 20
  },
  title: {
    minWidth: '50%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradient: {
    width: '100%'
  }
});

const Tab = ({ title1, title2, setCurrentTab }) => {
  const [active, setActive] = useState(1);
  const [tab1XPosition, setTab1XPosition] = useState(0);
  const [tab2XPosition, setTab2XPosition] = useState(0);
  const [translateX, setTranslateX] = useState(new Animated.Value(0));

  const slideTab = (tabPosition, tabNo) => {
    Animated.timing(translateX, {
      toValue: tabPosition,
      duration: 250
    }).start();
  };

  const onTab1Press = () => {
    setActive(1);
    setCurrentTab(1);
    slideTab(tab1XPosition, 1);
  };

  const onTab2Press = () => {
    setActive(2);
    setCurrentTab(2);
    slideTab(tab2XPosition, 2);
  };

  return (
    <BoxShadow borderRadius={20}>
      <View style={styles.tabWrapper}>
        <Animated.View style={{ ...styles.overlay, transform: [{ translateX }] }}>
          <LinearGradient
            style={[styles.overlay, styles.gradient]}
            colors={gradientColors.gradientPrimary}
          />
        </Animated.View>

        <TouchableOpacity
          style={styles.title}
          onLayout={event => setTab1XPosition(event.nativeEvent.layout.x)}
          onPress={onTab1Press}
        >
          <TextComponent
            content={title1}
            family={fonts.medium}
            size={fonts.fs14}
            color={active === 1 ? colors.white1 : colors.grey1}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.title}
          onLayout={event => setTab2XPosition(event.nativeEvent.layout.x)}
          onPress={onTab2Press}
        >
          <TextComponent
            content={title2}
            family={fonts.medium}
            size={fonts.fs14}
            color={active === 2 ? colors.white1 : colors.grey1}
          />
        </TouchableOpacity>
      </View>
    </BoxShadow>
  );
};

Tab.propTypes = {
  title1: string,
  title2: string,
  setCurrentTab: func
};

export default Tab;
