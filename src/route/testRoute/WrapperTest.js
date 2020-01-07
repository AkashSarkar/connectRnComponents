import React from 'react';
import { View } from 'react-native';
import { colors } from '../../styles/baseStyle';
import FeatureWrapperV2 from '../../component/ui/wrapper/FeatureWrapperV2';
import { InputTabbed } from '../../component/widget';
import assets from '../../assets';


const WrapperTest = () => (
  <FeatureWrapperV2
    title="Person Profile"
    backgroundColor={colors.black9}
    leftIcon={assets.LeftArrow}
    rightIcon={assets.Cross}
  >
    <InputTabbed />
  </FeatureWrapperV2>
);

export default WrapperTest;
