/*
  This is the gamepad controller type component called 'Control'. To simulate the thumb controller like motions and
  gestures, PanResponder along with RN's Animated API was used. To detect the swipe directions some calculations are needed that
  can be found in the detectSwipe file.

  The best way to navigate this code is to look at main circle and its movementControllers. The other parts of this components i.e.
  the indicators are controlled using basic Animated.timing method operations.

  NOTE: To truly understand what's going on, the basice idea of PanResponder has to be clear.
*/

import React, { Component } from 'react';
import {
  View, StyleSheet, Animated, PanResponder, Image
} from 'react-native';
import { string, func, number } from 'prop-types';
import { getSwipeDirection, isTap, swipeDirections } from './detectSwipe';
import { fonts, colors } from '../../../../styles/baseStyle';
import assets from '../../../../assets';
import { TextComponent } from '../../../ui';

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 50,
    maxWidth: 58,
    maxHeight: 58
  },
  arrowContainer: {
    position: 'relative'
  },
  arrow: {
    position: 'absolute'
  },
  arrowIcon: {
    width: 10,
    height: 10
  },
  upArrow: {
    bottom: 8,
    left: 24
  },
  leftArrow: {
    top: 20,
    right: 65,
    flexDirection: 'row'
  },
  rightArrow: {
    top: 20,
    flexDirection: 'row'
  },
  downArrow: {
    left: 24
  },
  verticalLabel: {
    marginLeft: -8,
    paddingVertical: 5,
    alignSelf: 'center'
  },
  horizontalLabel: {
    justifyContent: 'center',
    // paddingHorizontal: 5,
    marginTop: -2,
    marginRight: 5
  }
});

// Values to scale to when expanding
const BUBBLE_SCALE_TO = 1.07;
const INDICATOR_SCALE_TO = 1.2;

class Control extends Component {
  state = {
    bubblePosition: new Animated.ValueXY(), // initializing circle's position value
    bubbleScale: new Animated.Value(1), // circle's initial scale
    upArrowOpacity: new Animated.Value(0), // The following 4 states including this one is to control the indicators' visibility
    downArrowOpacity: new Animated.Value(0),
    leftArrowOpacity: new Animated.Value(0),
    rightArrowOpacity: new Animated.Value(0),
    upArrowPosition: new Animated.Value(0), // The following 4 states including this one is to control the indicators' position
    downArrowPosition: new Animated.Value(0),
    leftArrowPosition: new Animated.Value(0),
    rightArrowPosition: new Animated.Value(0),
    indicatorScale: new Animated.Value(1), // Indicator's intitial scale before expanding
    indicatorScaleToValue: INDICATOR_SCALE_TO, // The value to scale the indicators to
    scaleToValue: BUBBLE_SCALE_TO, // The value to scale the circle to
    firstTap: true
  };

  /**
   * This method is to change the indicator's opacity depending on the swipe direction
   * @param  { string } direction
   * @param  { number } toValue=1
   * @param  { number } duration=150
   */
  setIndicatorVisibility = (direction, toValue = 1, duration = 150) => {
    const {
      SWIPE_LEFT, SWIPE_RIGHT, SWIPE_DOWN, SWIPE_UP
    } = swipeDirections;
    const {
      leftArrowOpacity,
      rightArrowOpacity,
      upArrowOpacity,
      downArrowOpacity
    } = this.state;

    switch (direction) {
      case SWIPE_LEFT:
        this.changeArrowOpacity(leftArrowOpacity, toValue, duration);
        break;

      case SWIPE_RIGHT:
        this.changeArrowOpacity(rightArrowOpacity, toValue, duration);
        break;
      case SWIPE_UP:
        this.changeArrowOpacity(upArrowOpacity, toValue, duration);
        break;
      case SWIPE_DOWN:
        this.changeArrowOpacity(downArrowOpacity, toValue, duration);
        break;

      default:
        break;
    }
  };

  /**
   * This method is to trigger the corresponding event handlers passed by props for all swipe events
   * @param  { string } direction
   */
  handleSwipe = (direction) => {
    const {
      SWIPE_LEFT, SWIPE_RIGHT, SWIPE_DOWN, SWIPE_UP
    } = swipeDirections;

    const {
      onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown
    } = this.props;
    switch (direction) {
      case SWIPE_LEFT:
        onSwipeLeft();
        break;

      case SWIPE_RIGHT:
        onSwipeRight();
        break;
      case SWIPE_UP:
        onSwipeUp();
        break;
      case SWIPE_DOWN:
        onSwipeDown();
        break;

      default:
        break;
    }
  };

  /**
   * This method handles the circle's expanding and contracting events
   */
  scaleBubble = () => {
    const { scaleToValue, bubbleScale, firstTap } = this.state;

    let currentScale = scaleToValue;

    // If it's the first time tapping, expand
    // Else, if currentScale value is in exapnded state, shrink to original value
    // Otherwise, expand
    if (firstTap) {
      currentScale = BUBBLE_SCALE_TO;
    } else if (currentScale > 1) {
      currentScale = 1;
    } else {
      currentScale = BUBBLE_SCALE_TO;
    }

    Animated.timing(bubbleScale, {
      toValue: currentScale,
      friction: 3,
      duration: 150
    }).start();

    // Determine the next scale value
    let nextScaleValue = 1;
    if (firstTap) {
      nextScaleValue = BUBBLE_SCALE_TO;
    }
    if (!firstTap && scaleToValue === 1) {
      nextScaleValue = BUBBLE_SCALE_TO;
    }
    if (!firstTap && scaleToValue === BUBBLE_SCALE_TO) {
      nextScaleValue = 1;
    }
    this.setState({ scaleToValue: nextScaleValue, firstTap: false });
  };

  /**
   * Change the specified arrow's opacity
   * @param  { string } arrowDirection
   * @param  { number } toValue
   * @param  { number } duration
   */
  changeArrowOpacity = (arrowDirection, toValue, duration) => {
    Animated.timing(arrowDirection, {
      duration,
      toValue
    }).start();
  };

  /**
   * This handles the scaling of the indicators
   */
  scaleIndicator = () => {
    const { indicatorScale, indicatorScaleToValue } = this.state;

    Animated.timing(indicatorScale, {
      toValue: indicatorScaleToValue,
      friction: 3,
      duration: 200
    }).start();

    let nextIndicatorScaleValue = 1;
    if (indicatorScaleToValue === 1) {
      nextIndicatorScaleValue = INDICATOR_SCALE_TO;
    }
    this.setState({ indicatorScaleToValue: nextIndicatorScaleValue });
  };

  /**
   * Handle what happens when the user taps the circle instead of swiping
   */
  handleTap = () => {
    const {
      scaleToValue,
      firstTap,
      leftArrowOpacity,
      rightArrowOpacity,
      upArrowOpacity,
      downArrowOpacity
    } = this.state;

    let opacityTo = 1;

    // For the indicators, if in expanded state, toggle to hidden, else make visible
    if (!firstTap && scaleToValue > 1) {
      opacityTo = 0;
    }

    let opacityDuration = 80;

    if (opacityTo === 0) {
      opacityDuration = 150;
    }

    this.changeArrowOpacity(upArrowOpacity, opacityTo, opacityDuration);
    this.changeArrowOpacity(leftArrowOpacity, opacityTo, opacityDuration);
    this.changeArrowOpacity(rightArrowOpacity, opacityTo, opacityDuration);
    this.changeArrowOpacity(downArrowOpacity, opacityTo, opacityDuration);

    // Toggle scale of the indicators and circle
    this.scaleIndicator();
    this.scaleBubble();
  };

  /**
   * This method is triggered when the circle is released
   * @param  { object } e
   * @param  { object } gestureState
   */
  onBubbleRelease = (e, gestureState) => {
    // calculate swipe direction depending on the gestureState and call handler
    const direction = getSwipeDirection(gestureState);
    this.handleSwipe(direction);

    // If the circle was tapped, handle tap event
    // If it was swiped, animate the circle back to its original position
    const { bubblePosition } = this.state;
    if (direction === swipeDirections.TAP) {
      this.handleTap();
    } else {
      Animated.timing(bubblePosition, {
        toValue: 0,
        duration: 150
      }).start();
    }

    // Turn all the offset values back to their initial values
    bubblePosition.flattenOffset();
  };

  // Initialize the movement controller
  movementInit = (e, gestureState) => {
    const { bubblePosition } = this.state;
    // Set the circle's offset values to the initial position
    bubblePosition.setOffset({
      x: bubblePosition.x._value,
      y: bubblePosition.y._value
    });
    bubblePosition.setValue({ x: 0, y: 0 });
  };

  /**
   * Handle the interaction with the circle, animate the circle position according to the gesture
   * @param  { object } e
   * @param  { object } gestureState
   */
  onBubbleMove = (e, gestureState) => {
    // Calculate swipe direction according to gesture
    const { scaleToValue, firstTap } = this.state;
    const direction = getSwipeDirection(gestureState);

    // Set indicator's visibility according to swipe direction
    this.setIndicatorVisibility(direction, 1, 150);
    setTimeout(() => {
      if ((!firstTap && scaleToValue === 1) || firstTap) {
        this.setIndicatorVisibility(direction, 0, 150);
      }
    }, 700);

    /*
      Animate circle's position according to gesture state
      To try to restrict the circle's movement in a straight line, if the gesture's value inclines
      towards the x-axis the circle is moved horizontally, else vertically
    */
    return Animated.event([
      null,
      {
        dx:
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
            ? this.state.bubblePosition.x
            : 0,
        dy:
          Math.abs(gestureState.dy) > Math.abs(gestureState.dx)
            ? this.state.bubblePosition.y
            : 0
      }
    ])(e, gestureState);
  };

  /**
   * If the circle is tapped only, don't initialize PanResponder
   * @param  { object } e
   * @param  { object } gestureState
 */
  handleShouldSetResponder = (e, gestureState) => {
    if (isTap(gestureState)) {
      return false;
    }
    if (e.nativeEvent.touches.length === 1) {
      return false;
    }
    return true;
  };

  // This is where the PanResponder listener is created and all the corresponding methods and handlers are declared
  movementController = PanResponder.create({
    onStartShouldSetPanResponder: this.handleShouldSetResponder,
    onMoveShouldSetPanResponder: this.handleShouldSetResponder,
    onStartShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: this.movementInit,
    onPanResponderMove: (e, gestureState) => this.onBubbleMove(e, gestureState),
    onPanResponderRelease: this.onBubbleRelease
  });

  render() {
    const {
      bubblePosition,
      bubbleScale,
      scaleToValue,
      indicatorScale,
      upArrowOpacity,
      downArrowOpacity,
      leftArrowOpacity,
      rightArrowOpacity,
      firstTap
    } = this.state;
    const {
      topLabel,
      bottomLabel,
      leftLabel,
      rightLabel,
      movementRadius
    } = this.props;

    // Interpolate the movement in X and Y axis to restrict the movement radius to the 'movementRadius' value
    const translateX = bubblePosition.x.interpolate({
      inputRange: [movementRadius * -1, movementRadius],
      outputRange: [movementRadius * -1, movementRadius],
      extrapolate: 'clamp'
    });
    const translateY = bubblePosition.y.interpolate({
      inputRange: [movementRadius * -1, movementRadius],
      outputRange: [movementRadius * -1, movementRadius],
      extrapolate: 'clamp'
    });

    // Define the opacity range for the indicators
    const upOpacity = upArrowOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const downOpacity = downArrowOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const leftOpacity = leftArrowOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const rightOpacity = rightArrowOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    // Circle animation values to assin to style atrribute
    const transformStyle = {
      transform: [{ translateX }, { translateY }, { scale: bubbleScale }]
    };

    // Indicator animation values to assin to style atrribute
    const indicatorTransformStyle = {
      transform: [{ scale: indicatorScale }]
    };


    /*
      The arrowContainer contains the indicators
      The Animated.Image component is the circle
    */
    return (
      <View style={styles.arrowContainer}>
        <Animated.View style={[{ opacity: upOpacity }, indicatorTransformStyle]}>
          <View style={[styles.arrow, styles.upArrow]}>
            <TextComponent
              extraStyle={styles.verticalLabel}
              content={topLabel}
              size={fonts.fs10}
              color={colors.primary}
              family={fonts.medium}
            />
            <Image style={styles.arrowIcon} source={assets.UpIndicator} />
          </View>
        </Animated.View>
        <Animated.View
          style={[{ opacity: leftOpacity }, indicatorTransformStyle]}
        >
          <View
            style={[
              styles.arrow,
              styles.leftArrow,
              (!firstTap && scaleToValue === 1) || firstTap
                ? { right: 64, top: 23 }
                : { right: 61, top: 19 }
            ]}
          >
            <TextComponent
              extraStyle={styles.horizontalLabel}
              content={leftLabel}
              size={fonts.fs10}
              color={colors.primary}
              family={fonts.medium}
            />
            <Image style={styles.arrowIcon} source={assets.LeftIndicator} />
          </View>
        </Animated.View>
        <Animated.View
          style={[{ opacity: rightOpacity }, indicatorTransformStyle]}
        >
          <View
            style={[
              styles.arrow,
              styles.rightArrow,
              (!firstTap && scaleToValue === 1) || firstTap
                ? { left: 59, top: 23 }
                : { left: 56, top: 19 },
              { left: (!firstTap && scaleToValue === 1) || firstTap ? 59 : 56 }
            ]}
          >
            <TextComponent
              extraStyle={styles.horizontalLabel}
              content={rightLabel}
              size={fonts.fs10}
              color={colors.primary}
              family={fonts.medium}
            />
            <Image style={styles.arrowIcon} source={assets.RightIndicator} />
          </View>
        </Animated.View>
        <Animated.View
          style={[{ opacity: downOpacity }, indicatorTransformStyle]}
        >
          <View
            style={[
              styles.arrow,
              styles.downArrow,
              { top: (!firstTap && scaleToValue === 1) || firstTap ? 67 : 57 }
            ]}
          >
            <Image style={styles.arrowIcon} source={assets.DownIndicator} />
            <TextComponent
              extraStyle={styles.verticalLabel}
              content={bottomLabel}
              size={fonts.fs10}
              color={colors.primary}
              family={fonts.medium}
            />
          </View>
        </Animated.View>
        <Animated.Image
          source={assets.ControlButton}
          {...this.movementController.panHandlers}
          style={[styles.bubble, transformStyle]}
        >
        </Animated.Image>
      </View>
    );
  }
}

Control.defaultProps = {
  topLabel: 'Scan',
  bottomLabel: 'Back',
  leftLabel: 'Menu',
  rightLabel: '',
  onSwipeDown: () => {},
  onSwipeUp: () => {},
  onSwipeLeft: () => {},
  onSwipeRight: () => {},
  movementRadius: 8
};

Control.propTypes = {
  topLabel: string, // Top indicator label
  bottomLabel: string, // bottom indicator label
  leftLabel: string, // left indicator label
  rightLabel: string, // right indicator label
  onSwipeDown: func.isRequired, // event handler for swiping downwards
  onSwipeUp: func.isRequired, // event handler for swiping upwards
  onSwipeLeft: func.isRequired, // event handler for swiping left
  onSwipeRight: func.isRequired, // event handler for swiping right
  movementRadius: number // the radius of the area the circle can move
};

export default Control;
