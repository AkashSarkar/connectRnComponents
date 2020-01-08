import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Animated
} from 'react-native';
import { string, func } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { TextComponent, BoxShadow } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';

const styles = StyleSheet.create({
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
    // position: 'relative'
  },
  title: {
    minWidth: '50%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'red'
  }
});

const TabSliderV2 = ({
  title1, title2, setCurrentTab, tabBackground = 'transparent'
}) => {
  const [active, setActive] = useState(1);

  const onTab1Press = () => {
    setActive(1);
    setCurrentTab(1);
  };

  const onTab2Press = () => {
    setActive(2);
    setCurrentTab(2);
  };

  return (
    <View style={[styles.tabWrapper, { backgroundColor: tabBackground }]}>
      <TouchableOpacity
        style={styles.title}
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
  );
};

TabSliderV2.defaultProps = {
  tabBackground: 'white'
};

TabSliderV2.propTypes = {
  title1: string,
  title2: string,
  tabBackground: string,
  setCurrentTab: func
};

export default TabSliderV2;
