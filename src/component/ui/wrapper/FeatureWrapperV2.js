import React from 'react';
import {
  SafeAreaView, View, Image, TouchableOpacity
} from 'react-native';
import {
  node, string, number, func
} from 'prop-types';
import TextComponent from '../typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';
import { p15 } from '../../../styles/commonStyle';
import assets from '../../../assets';

const styles = {
  wrapperStyle: {
    height: '100%'
  },
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftImageStyle: {
    width: 25,
    height: 25
  },
  crossImageStyle: {
    width: 25,
    height: 25
  }
};
const FeatureWrapperV2 = (
  {
    children,
    title,
    backgroundColor,
    leftIcon,
    rightIcon,
    titleTextColor,
    leftPressAction,
    rightPressAction
  }
) => (

  <SafeAreaView style={{ backgroundColor: backgroundColor || colors.black9 }}>
    <View style={styles.wrapperStyle}>
      <View style={[styles.titleStyle, p15]}>

        <TouchableOpacity
          onPress={leftPressAction}
          disabled={!leftIcon}
        >
          {leftIcon && (
            <Image
              source={leftIcon}
              style={styles.leftImageStyle}
              resizeMode="stretch"
            />
          )}
        </TouchableOpacity>

        {title && title.length > 0 && (
          <TextComponent
            content={title}
            size={fonts.fs20}
            color={titleTextColor}
            family={fonts.regular}
          />
        )}
        <TouchableOpacity
          onPress={rightPressAction}
        >
          <Image
            source={rightIcon}
            style={styles.crossImageStyle}
            resizeMode="stretch"
          />
        </TouchableOpacity>

      </View>

      {children}
    </View>
  </SafeAreaView>
);
FeatureWrapperV2.defaultProps = {
  leftIcon: assets.Back,
  rightIcon: assets.Cross,
  titleTextColor: colors.red
};
FeatureWrapperV2.propTypes = {
  title: string,
  titleTextColor: string,
  backgroundColor: string,
  children: node,
  leftIcon: number,
  rightIcon: number,
  leftPressAction: func,
  rightPressAction: func
};
export default FeatureWrapperV2;
