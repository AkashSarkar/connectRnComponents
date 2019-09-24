import React from 'react';
import { Switch } from 'react-native';
import { bool, func } from 'prop-types';
import { colors } from '../../../styles/baseStyle';

const SwitchComponent = ({ isOn, onValueChange }) => (
  <Switch
    value={isOn}
    onValueChange={onValueChange}
    trackColor={{ false: colors.black3, true: colors.brandPrimary }}
    thumbColor={colors.white1}
    ios_backgroundColor={colors.black3}
  />
);

SwitchComponent.propTypes = {
  isOn: bool.isRequired,
  onValueChange: func.isRequired
};

export default SwitchComponent;
