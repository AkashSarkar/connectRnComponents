import React, { useEffect, useState } from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
  View
} from 'react-native';
import { node, string, bool } from 'prop-types';
import { BoxShadow, TextComponent } from '../../ui';
import TabSliderV2 from './TabSliderV2';
import { colors, fonts } from '../../../styles/baseStyle';
import { p15 } from '../../../styles/commonStyle';

if (
  Platform.OS === 'android'
  && UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  tabWrapper: {
    padding: 10
  },
  tabComponentWrapper: {}
});

const TabWrapperV2 = ({
  tab1Components,
  tab2Components,
  tabTitle1,
  tabTitle2,
  tabSubtitle1,
  tabSubtitle2,
  shadowContainer,
  inputFieldBackground,
  tabBackground
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [shouldTab1Render, setShouldTab1Render] = useState(true);
  const [shouldTab2Render, setShouldTab2Render] = useState(false);

  useEffect(() => {
    if (activeTab === 1) {
      setShouldTab1Render(true);
      setShouldTab2Render(false);
    } else {
      setShouldTab2Render(true);
      setShouldTab1Render(false);
    }
  }, [activeTab]);

  const innerContents = () => (
    <View>
      {shouldTab1Render && (
        <View>
          {tab1Components}
        </View>
      )}
      {shouldTab2Render && (
        <View>
          {tab2Components}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {shadowContainer ? (
        <View>
          <TabSliderV2
            title1={tabTitle1}
            title2={tabTitle2}
            setCurrentTab={setActiveTab}
            tabBackground={tabBackground}
          />
          <BoxShadow background={inputFieldBackground}>{innerContents()}</BoxShadow>
        </View>

      ) : (
        <>{innerContents()}</>
      )}
    </View>
  );
};

TabWrapperV2.defaultProps = {
  shadowContainer: true,
  inputFieldBackground: 'white',
  tabBackground: 'white'
};

TabWrapperV2.propTypes = {
  tab1Components: node.isRequired,
  tab2Components: node.isRequired,
  tabTitle1: string.isRequired,
  tabTitle2: string.isRequired,
  tabSubtitle1: string,
  tabSubtitle2: string,
  shadowContainer: bool,
  inputFieldBackground: string,
  tabBackground: string
};

export default TabWrapperV2;
