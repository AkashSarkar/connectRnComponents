import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { array, node } from 'prop-types';
import { colors } from '../../../styles/baseStyle';
import { p15 } from '../../../styles/commonStyle';

const styles = {
  wrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.white1,
    borderRadius: 16,
    ...p15,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  }
};
const LinearGradientWrapper = ({ gradient, children }) => (
  <LinearGradient colors={gradient} style={[styles.wrapper]}>
    {children}
  </LinearGradient>
)
LinearGradientWrapper.propTypes = {
  gradient: array,
  children: node
}
export default LinearGradientWrapper;
