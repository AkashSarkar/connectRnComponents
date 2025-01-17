import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Animated
} from 'react-native';
import { string, number } from 'prop-types';
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
  title1, title2, utilizedLimit, totalLimit, budgetLimit
}) => {
  const [utilizedWidth, setUtilizedWidth] = useState(0);
  const [limitWidth, setLimitWidth] = useState(new Animated.Value(0));
  const [translateX, setTranslateX] = useState(new Animated.Value(0));
  const [totalViewWidth, setTotalViewWidth] = useState(0);
  const [firstRender, setFirstRender] = useState(true);

  const animateWidth = (toWidth) => {
    Animated.timing(limitWidth, {
      toValue: toWidth,
      duration: 500
    }).start();
  };

  const animateBudget = (toWidth) => {
    Animated.timing(translateX, {
      toValue: toWidth < totalViewWidth - 10 ? toWidth + 10 : toWidth,
      duration: 500
    }).start(() => {
      setFirstRender(false);
    });
  };

  const calculateWidth = (total, utilized = utilizedLimit) => {
    if (utilized > totalLimit) {
      setUtilizedWidth(total);
      return total;
    }
    const utilizedPercent = parseInt((utilized * 100) / totalLimit, 10);

    const utilizedWidthValue = parseInt((total * utilizedPercent) / 100, 10);

    setUtilizedWidth(utilizedWidthValue);
    return utilizedWidthValue;
  };

  useEffect(() => {
    animateWidth(calculateWidth(totalViewWidth));
    if (firstRender) {
      animateBudget(calculateWidth(totalViewWidth, budgetLimit));
    }
  }, [utilizedLimit, totalViewWidth]);

  useEffect(() => {
    animateBudget(calculateWidth(totalViewWidth, budgetLimit));
  });

  const generateMarks = () => {
    const marks = [];
    let left = -1;
    const increment = totalViewWidth / 10;
    for (let i = 0; i <= 11; i++) {
      marks.push(<View key={i} style={[styles.scaleMarks, { left }]} />);
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
          <View
            style={styles.container}
            onLayout={event => setTotalViewWidth(event.nativeEvent.layout.width)
            }
          >
            <Animated.View style={{ ...styles.overlay, width: limitWidth }}>
              <LinearGradient
                style={[styles.overlay, styles.gradient]}
                colors={gradientColors.gradientSecondary}
              />
            </Animated.View>
            <Animated.View
              style={{
                ...styles.meter,
                transform: [{ translateX }]
              }}
            >
            </Animated.View>

            <View style={styles.utilizedLimitWrapper}>
              <TextComponent
                content={title1}
                color={colors.white1}
                size={fonts.fs8}
                family={fonts.medium}
              />
              <TextComponent
                content={utilizedLimit}
                color={colors.white1}
                size={fonts.fs14}
                family={fonts.medium}
              />
            </View>

            <View style={styles.availableLimitWrapper}>
              <TextComponent
                content={title2}
                color={colors.black1}
                size={fonts.fs8}
                family={fonts.medium}
              />
              <TextComponent
                content={`${totalLimit - utilizedLimit}`}
                color={colors.black1}
                size={fonts.fs14}
                family={fonts.medium}
              />
            </View>
          </View>
        </LinearGradient>
      </BoxShadow>
      <View style={styles.scale}>{generateMarks()}</View>
    </View>
  );
};

Limit.defaultProps = {
  title1: 'Utilized Limit',
  title2: 'Available Limit'
};

Limit.propTypes = {
  title1: string, // label on the left side
  title2: string, // label on the right side
  utilizedLimit: number.isRequired, // initial limit out of the total that is used
  totalLimit: number.isRequired, // total available limit
  budgetLimit: number.isRequired // budget restriction out of the total limit, where the scale will be fixed
};

export default Limit;
