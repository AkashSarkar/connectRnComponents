export const swipeDirections = {
  SWIPE_UP: 'SWIPE_UP',
  SWIPE_DOWN: 'SWIPE_DOWN',
  SWIPE_LEFT: 'SWIPE_LEFT',
  SWIPE_RIGHT: 'SWIPE_RIGHT',
  TAP: 'TAP'
};

const swipeConfig = {
  velocityThreshold: 0.5, // the velocity level at which the detection is triggered.
  directionalOffsetThreshold: 60, // the distance from the original point where the direction is decided
  gestureIsClickThreshold: 5 // displacement limit upto which the gesture is decided to be a tap
};

/**
 * Determines if the gesture is a valid swipe checking against the thresholds
 * @param  { number } velocity // velocity from the gesturestate
 * @param  { number } velocityThreshold // threshold from config
 * @param  { number } directionalOffset // offset from gesturestate
 * @param  { number } directionalOffsetThreshold // offset from config
 */
const isValidSwipe = (
  velocity,
  velocityThreshold,
  directionalOffset,
  directionalOffsetThreshold,
) => Math.abs(velocity) > velocityThreshold
  && Math.abs(directionalOffset) < directionalOffsetThreshold;

/**
 * Determines if the gesture is a tap
 * @param  { object } gestureState
 */
export const isTap = gestureState => Math.abs(gestureState.dx) < swipeConfig.gestureIsClickThreshold
  && Math.abs(gestureState.dy) < swipeConfig.gestureIsClickThreshold;

/**
 * Determines if the gesturestate meets all the parameters in the horizontal direction
 * @param  { object } gestureState
*/
const isValidHorizontalSwipe = (gestureState) => {
  const { vx, dy } = gestureState;
  const { velocityThreshold, directionalOffsetThreshold } = swipeConfig;
  return isValidSwipe(vx, velocityThreshold, dy, directionalOffsetThreshold);
};

/**
 * Determines if the gesturestate meets all the parameters in the vertical direction
 * @param  { object } gestureState
*/
const isValidVerticalSwipe = (gestureState) => {
  const { vy, dx } = gestureState;
  const { velocityThreshold, directionalOffsetThreshold } = swipeConfig;
  return isValidSwipe(vy, velocityThreshold, dx, directionalOffsetThreshold);
};

/**
 * Determine direction of the swipe
 * @param  { object } gestureState
 */
export const getSwipeDirection = (gestureState) => {
  const {
    SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN, TAP
  } = swipeDirections;
  const { dx, dy } = gestureState;
  if (isTap(gestureState)) {
    return TAP;
  }
  if (isValidHorizontalSwipe(gestureState)) {
    return dx > 0 ? SWIPE_RIGHT : SWIPE_LEFT; // If swipe is in positive x axis, return right else left
  }
  if (isValidVerticalSwipe(gestureState)) {
    return dy > 0 ? SWIPE_DOWN : SWIPE_UP; // If swipe is in positive y axis, return up else down
  }
  return null;
};
