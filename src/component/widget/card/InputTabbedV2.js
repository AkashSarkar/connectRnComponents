import React, { useState } from 'react';
import { func, string } from 'prop-types';
import TabWrapperV2 from '../tab/TabWrapperV2';

const InputTabbedV2 = ({
  leftInputForm,
  rightInputForm,
  tabTitle1,
  tabTitle2,
  inputFieldBackground,
  tabBackground,
  tabHeader1,
  tabHeader2,
  headerColor,
  activeTabNumber
}) => (
  <TabWrapperV2
    tabTitle1={tabTitle1}
    tabTitle2={tabTitle2}
    inputFieldBackground={inputFieldBackground}
    tabBackground={tabBackground}
    tab1Components={leftInputForm()}
    tab2Components={rightInputForm()}
    tabHeader1={tabHeader1}
    tabHeader2={tabHeader2}
    headerColor={headerColor}
    activeTabNumber={value => activeTabNumber(value)}
  />
);

// input tabbed

InputTabbedV2.propTypes = {
  leftInputForm: func.isRequired,
  rightInputForm: func.isRequired,
  tabTitle1: string.isRequired,
  tabTitle2: string.isRequired,
  inputFieldBackground: string,
  tabBackground: string,
  tabHeader1: string,
  tabHeader2: string,
  headerColor: string,
  activeTabNumber: func
};
export default InputTabbedV2;
