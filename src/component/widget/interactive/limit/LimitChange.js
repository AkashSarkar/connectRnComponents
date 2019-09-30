import React, { Component, useEffect } from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';
import { string, func } from 'prop-types';
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
  utilizedLimitWrapper: {
    position: 'absolute',
    left: '10%',
    minWidth: '50%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1
  },
  availableLimitWrapper: {
    minWidth: '50%',
    paddingVertical: 15,
    paddingRight: 10,
    marginLeft: '45%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  gradient: {
    width: '100%',
    borderRadius: 16
  },
  slider: {
    position: 'absolute',
    height: 40,
    top: 10,
    width: 40,
    backgroundColor: colors.white1,
    borderRadius: 50,
    zIndex: 999
  }
});

class LimitChange extends Component {
  constructor(props) {
    super(props);

    const { initialUtilized, limit } = props;
    const utilizedPercent = parseInt((initialUtilized * 100) / limit, 10);

    const viewWidth = Dimensions.get('window').width - 20;

    const utilizedWidthValue = parseInt(
      (viewWidth * utilizedPercent) / 100,
      10,
    );

    this.state = {
      limitWidth: new Animated.Value(0),
      translateX: new Animated.Value(0),
      sliderPosition: new Animated.ValueXY(),
      totalViewWidth: viewWidth,
      firstRender: true,
      sliderLeftOffset: utilizedWidthValue,
      utilizedLimit: initialUtilized
    };
    this.animateWidth(utilizedWidthValue, 150, true);
  }

  animateWidth = (toWidth, duration = 10, translatePos = false) => {
    const { limitWidth, translateX } = this.state;
    Animated.timing(limitWidth, {
      toValue: toWidth - 20,
      duration
    }).start();
    if (translatePos) {
      Animated.timing(translateX, {
        toValue: toWidth,
        duration: 10
      }).start();
    }
  };

  calculateWidth = (utilizedLimit) => {
    const { limit } = this.props;
    const utilizedPercent = parseInt((utilizedLimit * 100) / limit, 10);

    const { totalViewWidth } = this.state;

    const utilizedWidthValue = parseInt(
      (totalViewWidth * utilizedPercent) / 100,
      10,
    );
    this.animateWidth(utilizedWidthValue, 1);
  };

  setUtilizedLimit = (amount) => {
    this.setState({ utilizedLimit: amount });
  }

  calculateLimit = (e) => {
    let newLimit = 0;
    const { limit } = this.props;
    const { pageX } = e.nativeEvent;
    // console.log(e.nativeEvent);
    if (pageX > 30) {
      const { totalViewWidth } = this.state;
      const unit = parseInt(limit / totalViewWidth, 10);
      const amountUnit = parseInt(Math.abs(pageX), 10);
      newLimit = amountUnit * unit;
      if (pageX < 5 || newLimit <= 0) {
        newLimit = 0;
      } else if (newLimit >= limit) {
        newLimit = limit;
      }
    }
    this.calculateWidth(newLimit);
    this.setUtilizedLimit(newLimit);
  };

onMoveSlider = (e, gestureState) => {
  this.calculateLimit(e, gestureState);
  return (Animated.event([
    null,
    {
      dx: this.state.sliderPosition.x
    }
  ])(e, gestureState));
}

  movementInit = () => {
    // console.log('init', gestureState);
    const { sliderPosition } = this.state;
    sliderPosition.setOffset({
      x: sliderPosition.x._value
    });
    sliderPosition.setValue({ x: 0, y: 0 });
    // this.setState({ firstRender: false });
  };

  onSliderRelease = () => {
    const { sliderPosition } = this.state;
    sliderPosition.flattenOffset();
  };

  handleShouldSetResponder = () => true;

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: this.handleShouldSetResponder,
    onMoveShouldSetPanResponder: this.handleShouldSetResponder,
    onPanResponderGrant: this.movementInit,
    onPanResponderMove: (e, gestureState) => this.onMoveSlider(e, gestureState),
    onPanResponderRelease: this.onSliderRelease,
    onPanResponderTerminate: () => {}
  });

  setTotalViewWidth = (width) => {
    this.setState({
      totalViewWidth: width
    });
  };

  render() {
    const {
      title1, title2, limit
    } = this.props;
    const {
      limitWidth,
      sliderPosition,
      totalViewWidth,
      utilizedLimit,
      sliderLeftOffset,
      firstRender
    } = this.state;

    // const { width } = Dimensions.get('window');

    const translateX = sliderPosition.x.interpolate({
      inputRange: [1, totalViewWidth - 30],
      outputRange: [1, totalViewWidth - 30],
      extrapolate: 'clamp'
    });

    const left = 0;

    // if (firstRender) {
    //   left = sliderLeftOffset - 35;
    //   console.log('left');
    // }

    return (
      <View style={styles.rootContainer}>
        <BoxShadow>
          <LinearGradient
            colors={gradientColors.gradientYellow}
            style={[styles.gradient]}
          >
            <View
              style={styles.container}
              onLayout={event => this.setTotalViewWidth(event.nativeEvent.layout.width)
              }
            >
              <Animated.View style={{ ...styles.overlay, width: limitWidth }}>
                <LinearGradient
                  style={[styles.overlay, styles.gradient]}
                  colors={gradientColors.gradientSecondary}
                />
              </Animated.View>
              <Animated.View
                {...this.panResponder.panHandlers}
                style={{ ...styles.slider, left, transform: [{ translateX }] }}
              >
                <View pointerEvents="none" />
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
                  content={`${limit - utilizedLimit}`}
                  color={colors.black1}
                  size={fonts.fs14}
                  family={fonts.medium}
                />
              </View>
            </View>
          </LinearGradient>
        </BoxShadow>
      </View>
    );
  }
}

LimitChange.defaultProps = {
  title1: 'Budget Amount',
  title2: 'Budget left'
};

LimitChange.propTypes = {
  title1: string,
  title2: string,
  initialUtilized: string.isRequired,
  limit: string.isRequired,
  setUtilizedLimit: func.isRequired
};

export default LimitChange;
