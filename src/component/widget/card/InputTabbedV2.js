import React, { useState } from 'react';
import { func, string } from 'prop-types';
import TabWrapperV2 from '../tab/TabWrapperV2';

const InputTabbedV2 = ({
  leftInputForm,
  rightInputForm,
  tabTitle1,
  tabTitle2,
  inputFieldBackground,
  tabBackground
}) => (
  <TabWrapperV2
    tabTitle1={tabTitle1}
    tabTitle2={tabTitle2}
    inputFieldBackground={inputFieldBackground}
    tabBackground={tabBackground}
    tab1Components={leftInputForm()}
    tab2Components={rightInputForm()}
  />
);

InputTabbedV2.propTypes = {
  leftInputForm: func.isRequired,
  rightInputForm: func.isRequired,
  tabTitle1: string.isRequired,
  tabTitle2: string.isRequired,
  inputFieldBackground: string,
  tabBackground: string
};
export default InputTabbedV2;
