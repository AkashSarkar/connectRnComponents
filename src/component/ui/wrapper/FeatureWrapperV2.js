import React from 'react';
import {
  SafeAreaView, View, Image
} from 'react-native';
import { node, string, number } from 'prop-types';
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
    width: 15,
    height: 25,
    borderStyle: 'solid',
    borderWidth: 3.1
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
    rightIcon
  }
) => (
  <SafeAreaView style={{ backgroundColor: backgroundColor || colors.black9 }}>
    <View style={styles.wrapperStyle}>
      {title && title.length > 0 && (
        <View style={[styles.titleStyle, p15]}>
          <Image
            source={leftIcon}
            style={styles.leftImageStyle}
          />

          <TextComponent
            content={title}
            size={fonts.fs20}
            color={colors.red2}
            family={fonts.regular}
          />

          <Image
            source={rightIcon}
            style={styles.crossImageStyle}
          />

        </View>
      )}
      {children}
    </View>
  </SafeAreaView>
);
FeatureWrapperV2.defaultProps = {
  leftIcon: assets.LeftArrow,
  rightIcon: assets.Cross
};
FeatureWrapperV2.propTypes = {
  title: string,
  backgroundColor: string,
  children: node,
  leftIcon: number,
  rightIcon: number
};
export default FeatureWrapperV2;
