import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Animated
} from 'react-native';
import { string } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { TextComponent, BoxShadow } from '../../../ui';
import { fonts, gradientColors, colors } from '../../../../styles/baseStyle';

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 40
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    borderRadius: 16
  },
  meter: {
    position: 'absolute',
    height: '120%',
    top: 15,
    left: 0,
    borderWidth: 1,
    borderColor: colors.red1
  },
  utilizedLimitWrapper: {
    minWidth: '50%',
    paddingVertical: 15,
    justifyContent: 'center',
    paddingLeft: 10,
    alignItems: 'flex-start'
  },
  availableLimitWrapper: {
    minWidth: '50%',
    paddingVertical: 15,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  gradient: {
    width: '100%',
    borderRadius: 16
  },
  scale: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.colorSecondery,
    position: 'relative'
  },
  scaleMarks: {
    position: 'absolute',
    height: 12,
    top: 0,
    borderLeftWidth: 1,
    borderColor: colors.colorSecondery
  }
});

const Limit = ({
  title1, title2, utilizedLimit, limit
}) => {
  const [utilizedWidth, setUtilizedWidth] = useState(0);
  const [limitWidth, setLimitWidth] = useState(new Animated.Value(0));
  const [translateX, setTranslateX] = useState(new Animated.Value(0));
  const [totalViewWidth, setTotalViewWidth] = useState(0);

  const animateWidth = (toWidth) => {
    Animated.timing(limitWidth, {
      toValue: toWidth,
      duration: 500
    }).start();
    Animated.timing(translateX, {
      toValue: toWidth < totalViewWidth - 10 ? toWidth + 10 : toWidth,
      duration: 500
    }).start();
  };

  const calculateWidth = (total) => {
    const utilizedPercent = parseInt((utilizedLimit * 100) / limit, 10);

    const utilizedWidthValue = parseInt((total * utilizedPercent) / 100, 10);

    setUtilizedWidth(utilizedWidthValue);
    return utilizedWidthValue;
  };

  useEffect(() => {
    if (utilizedLimit <= limit) { animateWidth(calculateWidth(totalViewWidth)); }
  }, [utilizedLimit, totalViewWidth]);

  const generateMarks = () => {
    const marks = [];
    let left = -1;
    const increment = totalViewWidth / 10;
    for (let i = 0; i <= 11; i++) {
      marks.push((
        <View key={i} style={[styles.scaleMarks, { left }]} />
      ));
      left += increment;
    }

    return marks;
  };

  return (
    <View style={styles.rootContainer}>
      <BoxShadow>
        <LinearGradient
          colors={gradientColors.gradientYellow}
          style={[styles.gradient]}
        >
          <View style={styles.container} onLayout={event => setTotalViewWidth(event.nativeEvent.layout.width)}>
            <Animated.View style={{ ...styles.overlay, width: limitWidth }}>
              <LinearGradient
                style={[styles.overlay, styles.gradient]}
                colors={gradientColors.gradientSecondary}
              />
            </Animated.View>
            <Animated.View style={{ ...styles.meter, transform: [{ translateX }] }}>

            </Animated.View>

            <View
              style={styles.utilizedLimitWrapper}
            >
              <TextComponent content={title1} color={colors.white1} size={fonts.fs8} family={fonts.medium} />
              <TextComponent content={utilizedLimit} color={colors.white1} size={fonts.fs14} family={fonts.medium} />
            </View>

            <View
              style={styles.availableLimitWrapper}
            >
              <TextComponent content={title2} color={colors.black1} size={fonts.fs8} family={fonts.medium} />
              <TextComponent content={`${limit - utilizedLimit}`} color={colors.black1} size={fonts.fs14} family={fonts.medium} />
            </View>
          </View>
        </LinearGradient>
      </BoxShadow>
      <View style={styles.scale}>
        {generateMarks()}
      </View>
    </View>
  );
};

Limit.defaultProps = {
  title1: 'Utilized Limit',
  title2: 'Available Limit'
};

Limit.propTypes = {
  title1: string,
  title2: string,
  utilizedLimit: string.isRequired,
  limit: string.isRequired
};

export default Limit;
