import React from 'react';
import DragInfoTest from './DragInfoTest';
import { FeatureWrapperV2 } from '../../component/ui';
import { colors } from '../../styles/baseStyle';
import assets from '../../assets';

const DragRouteTest = ({ navigation }) => (
  <FeatureWrapperV2
    title=" Test"
    backgroundColor={colors.white1}
    titleTextColor={colors.secondary}
    rightIcon={assets.CrossDark}
    style={{ flex: 1 }}
    rightPressAction={() => navigation.goBack()}
  >
    <DragInfoTest />
  </FeatureWrapperV2>
);

export default DragRouteTest;
