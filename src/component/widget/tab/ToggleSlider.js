import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Animated
} from 'react-native';
import { string, func } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';

const styles = StyleSheet.create({
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 25,
    borderWidth: 1
  },
  overlay: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    top: -1,
    left: -1,
    paddingVertical: 21,
    borderRadius: 25
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

const ToggleSlider = (
  {
    title1, title2, setCurrentTab, tabColor, borderColor, textColor, initialActiveIndex,
    activeColor, family
  }
) => {
  const [active, setActive] = useState(1);
  const [tab1XPosition, setTab1XPosition] = useState(0);
  const [tab2XPosition, setTab2XPosition] = useState(0);
  const [initialRender, setInitialRender] = useState(true);
  const [translateX, setTranslateX] = useState(new Animated.Value(0));

  const slideTab = (tabPosition, tabNo) => {
    Animated.timing(translateX, {
      toValue: tabPosition,
      duration: 250
    })
      .start();
  };

  useEffect(() => {
    if (tab1XPosition === 0 || tab2XPosition === 0 || !initialRender) return;
    let pos = tab1XPosition;
    if (initialActiveIndex === 2) pos = tab2XPosition;
    slideTab(pos, initialActiveIndex);
    setInitialRender(false);
  }, [tab1XPosition, tab2XPosition]);

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
    <View>
      <View style={[styles.tabWrapper, { borderColor }]}>
        <Animated.View style={{
          ...styles.overlay,
          transform: [{ translateX }]
        }}>
          <View
            style={[styles.overlay, styles.gradient, { backgroundColor: tabColor }]}
          />
        </Animated.View>

        <TouchableOpacity
          style={styles.title}
          onLayout={event => setTab1XPosition(event.nativeEvent.layout.x)}
          onPress={onTab1Press}
          activeOpacity={0.9}
        >
          <TextComponent
            content={title1}
            size={fonts.fs14}
            color={active === 1 ? activeColor : textColor}
            family={family || fonts.medium}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.title}
          onLayout={event => setTab2XPosition(event.nativeEvent.layout.x)}
          onPress={onTab2Press}
          activeOpacity={0.9}
        >
          <TextComponent
            content={title2}
            size={fonts.fs14}
            color={active === 2 ? activeColor : textColor}
            family={family || fonts.medium}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

ToggleSlider.defaultProps = {
  textColor: colors.white1
};

ToggleSlider.propTypes = {
  title1: string,
  title2: string,
  setCurrentTab: func,
  textColor: string
};

export default ToggleSlider;
