import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { node, string } from 'prop-types';
import { TextComponent } from '../../../..';
import { colors, fonts } from '../../../styles/baseStyle';
import { mt20 } from '../../../styles/commonStyle';

const styles = {
  wrapperStyle: {
    flex: 1,
    top: '5%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.5,
    elevation: 1
  },
  titleStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};
const FeatureWrapper = ({ children, title }) => (
  <SafeAreaView style={styles.wrapperStyle}>
    <View style={mt20}>
      {title && title.length > 0 && (
        <View style={styles.titleStyle}>
          <TextComponent
            content={title}
            size={fonts.fs16}
            color={colors.primary2}
            family={fonts.semiBold}
          />
        </View>
      )}
      {children}
    </View>
  </SafeAreaView>
);
FeatureWrapper.propTypes = {
  children: node,
  title: string
};
export default FeatureWrapper;
