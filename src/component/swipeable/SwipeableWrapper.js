import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default class SwipeableWrapper extends Component {
  renderLeftActions = progress => {
    const { leftActions } = this.props
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 0]
    });
    return (
      <View style={{ width: 50, flexDirection: 'row' }}>
        {leftActions.map((action) => {
            return (
              <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }} key={action.id}>
                <RectButton style={styles.leftAction} onPress={action.pressHandler}>
                  <Image source={action.icon} style={{ height: 40, width: 40 }}/>
                </RectButton>
              </Animated.View>
            )
          }
        )}
      </View>
    );
  };
  renderRightAction = (action, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [action.x, 0],
    });
    const onPressHandler = () => {
      // this.close();
      action.pressHandler();
    };
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }} key={action.id}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: action.color }]}
          onPress={onPressHandler}
        >
          {/*<Text style={styles.actionText}>{text}</Text>*/}
          <Image source={action.icon} style={{ height: 40, width: 40 }}/>
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = progress => {
    const { rightActions } = this.props;
    return (
      <View style={{ width: 192, flexDirection: 'row' }}>
        {rightActions.map((action) => {
          return this.renderRightAction(action, progress)
        })}
      </View>
    );
  }

  updateRef = (ref) => {
    this._swipeableRow = ref;
  };

  close = () => {
    this._swipeableRow.close();
  };

  render() {
    const { children } = this.props;
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
