import React, { useRef } from 'react';
import {
  View, Text, Image, Animated, StyleSheet
} from 'react-native';
import { string, number } from 'prop-types';
import { colors } from '../../../../styles/baseStyle';
import assets from '../../../../assets';
import { mr15 } from '../../../../styles/commonStyle';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    marginHorizontal: 15,
    borderRadius: 8
  },
  contentWrapper: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 25

  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '90%'
  }
});

const NotificationSnacbar = ({
  textColor,
  backgroundColor,
  yPosition,
  duration,
  icon,
  message,
  size
}) => {
  const positionY = useRef(new Animated.Value(yPosition)).current;

  Animated.timing(
    positionY, {
      toValue: 50,
      duration: 1500
    }
  ).start(() => {
    Animated.timing(
      positionY, {
        toValue: 50,
        duration
      }
    ).start(() => {
      Animated.timing(
        positionY, {
          toValue: yPosition,
          duration: 1500
        }
      ).start();
    });
  });

  return (
    <Animated.View style={[styles.container, {
      backgroundColor,
      top: positionY
    }]}
    >
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <View style={mr15}>
            <Image
              source={icon}
              style={{
                height: 22,
                width: 22
              }}
              resizeMode="contain"
            />
          </View>
          <Text style={{
            color: textColor,
            fontSize: size
          }}
          >
            {message}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

NotificationSnacbar.defaultProps = {
  textColor: colors.white1,
  backgroundColor: colors.black10,
  yPosition: -250,
  duration: 2000,
  icon: assets.TickIcon,
  message: 'Payment Successful!',
  size: 16
};

NotificationSnacbar.propTypes = {
  textColor: string,
  backgroundColor: string,
  yPosition: number,
  duration: number,
  icon: number,
  message: string,
  size: number
};

export default NotificationSnacbar;
