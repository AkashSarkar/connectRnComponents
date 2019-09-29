// import React, { useState, useEffect } from 'react';
// import {
//   View, StyleSheet, PanResponder, Animated
// } from 'react-native';
// import { string, func } from 'prop-types';
// import LinearGradient from 'react-native-linear-gradient';
// import { TextComponent, BoxShadow } from '../../../ui';
// import { fonts, gradientColors, colors } from '../../../../styles/baseStyle';

// const styles = StyleSheet.create({
//   rootContainer: {
//     marginBottom: 40
//   },
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     position: 'relative'
//   },
//   overlay: {
//     position: 'absolute',
//     height: '100%',
//     top: 0,
//     left: 0,
//     borderRadius: 16
//   },
//   utilizedLimitWrapper: {
//     minWidth: '50%',
//     paddingVertical: 15,
//     justifyContent: 'center',
//     paddingLeft: 10,
//     alignItems: 'flex-start'
//   },
//   availableLimitWrapper: {
//     minWidth: '50%',
//     paddingVertical: 15,
//     paddingRight: 10,
//     justifyContent: 'center',
//     alignItems: 'flex-end'
//   },
//   gradient: {
//     width: '100%',
//     borderRadius: 16
//   },
//   slider: {
//     position: 'absolute',
//     height: 35,
//     top: '25%',
//     width: 35,
//     backgroundColor: colors.white1,
//     borderRadius: 50,
//     left: 0
//   }
// });

// const Limit = ({
//   title1, title2, utilizedLimit, limit, setUtilizedLimit
// }) => {
//   const [utilizedWidth, setUtilizedWidth] = useState(0);
//   const [limitWidth, setLimitWidth] = useState(new Animated.Value(0));
//   const [translateX, setTranslateX] = useState(new Animated.Value(0));
//   const [totalViewWidth, setTotalViewWidth] = useState(0);

//   const animateWidth = (toWidth) => {
//     Animated.timing(limitWidth, {
//       toValue: toWidth,
//       duration: 200
//     }).start();
//     Animated.timing(translateX, {
//       toValue: toWidth > 15 ? toWidth - 15 : toWidth + 15,
//       duration: 200
//     }).start();
//   };

//   const calculateWidth = (total) => {
//     const utilizedPercent = parseInt((utilizedLimit * 100) / limit, 10);

//     const utilizedWidthValue = parseInt((total * utilizedPercent) / 100, 10);

//     setUtilizedWidth(utilizedWidthValue);
//     return utilizedWidthValue;
//   };

//   const calculateLeftOffset = (xPos) => {
//     const unit = (limit / totalViewWidth);
//     const amountUnit = parseInt((unit * (xPos - utilizedWidth)), 10);
//     if (xPos < (utilizedWidth)) {
//       setUtilizedLimit(utilizedLimit + amountUnit, 10);
//     }
//     if (xPos <= totalViewWidth) {
//       if (xPos > (utilizedWidth + 15)) {
//         setUtilizedLimit(utilizedLimit + (amountUnit));
//       }
//     }
//   };

//   const onMoveSlider = (gestureState) => {
//     calculateLeftOffset(gestureState.moveX);
//   };

//   const panResponder = PanResponder.create({
//     onMoveShouldSetPanResponderCapture: () => true,
//     onPanResponderMove: (_, gestureState) => onMoveSlider(gestureState),
//     onPanResponderRelease: () => {},
//     onPanResponderTerminate: () => {}
//   });

//   useEffect(() => {
//     if (utilizedLimit <= limit) { animateWidth(calculateWidth(totalViewWidth)); }
//   }, [utilizedLimit, totalViewWidth]);


//   return (
//     <View style={styles.rootContainer}>
//       <BoxShadow>
//         <LinearGradient
//           colors={gradientColors.gradientYellow}
//           style={[styles.gradient]}
//         >
//           <View style={styles.container} onLayout={event => setTotalViewWidth(event.nativeEvent.layout.width)}>
//             <Animated.View style={{ ...styles.overlay, width: limitWidth }}>
//               <LinearGradient
//                 style={[styles.overlay, styles.gradient]}
//                 colors={gradientColors.gradientSecondary}
//               />
//             </Animated.View>
//             <Animated.View {...panResponder.panHandlers} style={{ ...styles.slider, transform: [{ translateX }] }}>

//             </Animated.View>

//             <View
//               style={styles.utilizedLimitWrapper}
//             >
//               <TextComponent content={title1} color={colors.white1} size={fonts.fs8} family={fonts.medium} />
//               <TextComponent content={utilizedLimit} color={colors.white1} size={fonts.fs14} family={fonts.medium} />
//             </View>

//             <View
//               style={styles.availableLimitWrapper}
//             >
//               <TextComponent content={title2} color={colors.black1} size={fonts.fs8} family={fonts.medium} />
//               <TextComponent content={`${limit - utilizedLimit}`} color={colors.black1} size={fonts.fs14} family={fonts.medium} />
//             </View>
//           </View>
//         </LinearGradient>
//       </BoxShadow>
//     </View>
//   );
// };

// Limit.defaultProps = {
//   title1: 'Budget Amount',
//   title2: 'Total Amount'
// };

// Limit.propTypes = {
//   title1: string,
//   title2: string,
//   utilizedLimit: string.isRequired,
//   limit: string.isRequired,
//   setUtilizedLimit: func.isRequired
// };

// export default Limit;

import React, { Component } from 'react';
import {
  View, StyleSheet, PanResponder, Animated, Dimensions
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
    minWidth: '35%',
    paddingVertical: 15,
    justifyContent: 'center',
    // paddingLeft: 10,
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
  slider: {
    // position: 'absolute',
    height: 40,
    top: 10,
    width: 40,
    left: 5,
    backgroundColor: colors.white1,
    borderRadius: 50
  }
});

class LimitChange extends Component {
  state = {
    utilizedWidth: 0,
    limitWidth: new Animated.Value(0),
    translateX: new Animated.Value(0),
    sliderPosition: new Animated.ValueXY(),
    totalViewWidth: 180
  }
  // const [utilizedWidth, setUtilizedWidth] = useState(0);
  // const [limitWidth, setLimitWidth] = useState(new Animated.Value(0));
  // const [translateX, setTranslateX] = useState(new Animated.Value(0));
  // const [totalViewWidth, setTotalViewWidth] = useState(0);

  animateWidth = (toWidth) => {
    const { limitWidth, translateX } = this.state;
    Animated.timing(limitWidth, {
      toValue: toWidth,
      duration: 200
    }).start();
    Animated.timing(translateX, {
      toValue: toWidth > 15 ? toWidth - 15 : toWidth + 15,
      duration: 200
    }).start();
  };

  // calculateWidth = (total) => {
  //   const utilizedPercent = parseInt((utilizedLimit * 100) / limit, 10);

  //   const utilizedWidthValue = parseInt((total * utilizedPercent) / 100, 10);

  //   setUtilizedWidth(utilizedWidthValue);
  //   return utilizedWidthValue;
  // };

  // calculateLeftOffset = (xPos) => {
  //   const unit = (limit / totalViewWidth);
  //   const amountUnit = parseInt((unit * (xPos - utilizedWidth)), 10);
  //   if (xPos < (utilizedWidth)) {
  //     setUtilizedLimit(utilizedLimit + amountUnit, 10);
  //   }
  //   if (xPos <= totalViewWidth) {
  //     if (xPos > (utilizedWidth + 15)) {
  //       setUtilizedLimit(utilizedLimit + (amountUnit));
  //     }
  //   }
  // };

  // onMoveSlider = (gestureState) => {
  //   calculateLeftOffset(gestureState.moveX);
  // };

  onMoveSlider = () => Animated.event([
    null,
    {
      dx: this.state.sliderPosition.x
    }
  ]);

  movementInit = (e, gestureState) => {
    console.log('init', gestureState);
    const { sliderPosition } = this.state;
    sliderPosition.setOffset({
      x: sliderPosition.x._value
    });
    sliderPosition.setValue({ x: 0, y: 0 });
  };

  onSliderRelease = (e, gestureState) => {
    const { sliderPosition } = this.state;
    sliderPosition.flattenOffset();
  }

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: this.movementInit,
    onPanResponderMove: this.onMoveSlider(),
    onPanResponderRelease: this.onSliderRelease,
    onPanResponderTerminate: () => {}
  });

  setTotalViewWidth = (width) => {
    this.setState({
      totalViewWidth: width
    });
  }

  // useEffect(() => {
  //   if (utilizedLimit <= limit) { animateWidth(calculateWidth(totalViewWidth)); }
  // }, [utilizedLimit, totalViewWidth]);


  render() {
    const {
      title1, title2, utilizedLimit, limit, setUtilizedLimit
    } = this.props;
    const {
      limitWidth,
      sliderPosition,
      totalViewWidth
    } = this.state;

    const { width } = Dimensions.get('window');

    const translateX = sliderPosition.x.interpolate({
      inputRange: [-10, width - 80],
      outputRange: [-10, width - 80],
      extrapolate: 'clamp'
    });

    return (
      <View style={styles.rootContainer}>
        <BoxShadow>
          <LinearGradient
            colors={gradientColors.gradientYellow}
            style={[styles.gradient]}
          >
            <View style={styles.container} onLayout={event => this.setTotalViewWidth(event.nativeEvent.layout.width)}>
              <Animated.View style={{ ...styles.overlay, width: limitWidth }}>
                <LinearGradient
                  style={[styles.overlay, styles.gradient]}
                  colors={gradientColors.gradientSecondary}
                />
              </Animated.View>
              <Animated.View {...this.panResponder.panHandlers} style={{ ...styles.slider, transform: [{ translateX }] }}>

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
      </View>
    );
  }
}

LimitChange.defaultProps = {
  title1: 'Budget Amount',
  title2: 'Total Amount'
};

LimitChange.propTypes = {
  title1: string,
  title2: string,
  utilizedLimit: string.isRequired,
  limit: string.isRequired,
  setUtilizedLimit: func.isRequired
};

export default LimitChange;
