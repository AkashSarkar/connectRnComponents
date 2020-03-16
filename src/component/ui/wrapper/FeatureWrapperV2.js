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

const FeatureWrapperV2 = (
  {
    children,
    title,
    backgroundColor,
    leftIcon,
    rightIcon,
    titleTextColor,
    leftPressAction,
    rightPressAction,
    titleTextfamily
  }
) => {
  const styles = {
    wrapperStyle: {
      height: '100%',
      backgroundColor: backgroundColor || colors.black9
    },
    titleStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    leftImageStyle: {
      width: 40,
      height: 40
    },
    crossImageStyle: {
      width: 40,
      height: 40
    }
  };
  return (
    // <View style={{ backgroundColor: backgroundColor || colors.black9 }}>
    <View style={styles.wrapperStyle}>
      <SafeAreaView />
      <View style={[styles.titleStyle, p15]}>

        <TouchableOpacity
          onPress={leftPressAction}
          disabled={!leftIcon}
        >
          {leftIcon && (
            <Image
              source={leftIcon}
              style={styles.leftImageStyle}
            />
          )}
        </TouchableOpacity>

        {title && title.length > 0 && (
          <TextComponent
            content={title}
            size={fonts.fs20}
            color={titleTextColor}
            family={titleTextfamily || fonts.light}
          />
        )}
        <TouchableOpacity
          onPress={rightPressAction}
        >
          <Image
            source={rightIcon}
            style={styles.crossImageStyle}
          />
        </TouchableOpacity>

      </View>

      {children}
    </View>
    // </View>
  );
};
FeatureWrapperV2.defaultProps = {
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
