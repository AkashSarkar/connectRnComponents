import React, { Component } from 'react';
import {
  Animated, StyleSheet, Text, View, Image
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { colors } from '../../styles/baseStyle';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 1
  },
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center'
  },
  actionText: {
    backgroundColor: 'transparent',
    padding: 10
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
export default class SwipeableWrapper extends Component {
  renderLeftActions = (progress) => {
    const { leftActions } = this.props;
    if (leftActions) {
      const trans = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, 0]
      });
      return (
        <View style={{ width: 50, flexDirection: 'row' }}>
          {leftActions.map(action => (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }} key={action.id}>
              <RectButton style={styles.leftAction} onPress={action.pressHandler}>
                  <Image source={action.icon} style={{ height: 40, width: 40 }} />
                </RectButton>
            </Animated.View>
          ))}
        </View>
      );
    }
    return null;
  };

  renderRightAction = (action, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [action.x, 0]
    });
    const onPressHandler = () => {
      action.pressHandler();
    };
    return (
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateX: trans }]
        }}
        key={action.id}
      >
        <RectButton
          style={[styles.rightAction]}
          onPress={onPressHandler}
        >
          <Image source={action.icon} style={{ height: 30, width: 30 }} />
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = (progress) => {
    const { rightActions, rightSwiperWidth } = this.props;
    if (rightActions) {
      return (
        <View style={{
          width: rightSwiperWidth,
          flexDirection: 'row'
        }}
        >
          {rightActions.map(action => this.renderRightAction(action, progress))}
        </View>
      );
    }
    return null;
  }

  updateRef = (ref) => {
    this._swipeableRow = ref;
  };

  close = () => {
    this._swipeableRow.close();
  };

  render() {
    const { children, SwiperBackgroundColor } = this.props;
    return (
      <View style={[styles.wrapper, { backgroundColor: SwiperBackgroundColor }]}>
        <Swipeable
          ref={this.updateRef}
          friction={2}
          leftThreshold={30}
          rightThreshold={40}
          renderLeftActions={this.renderLeftActions}
          renderRightActions={this.renderRightActions}
        >
          {children}
        </Swipeable>
      </View>
    );
  }
}
