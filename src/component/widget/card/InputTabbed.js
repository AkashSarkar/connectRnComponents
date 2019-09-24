import React, { useState, useEffect } from 'react';
import {
  View, UIManager, LayoutAnimation, Platform, StyleSheet
} from 'react-native';
import { string, node } from 'prop-types';
import { BoxShadow } from '../../ui';
import TabSlider from './TabSlider';

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
  }
});

const InputTabbed = ({
  tab1Components, tab2Components, tabTitle1, tabTitle2
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [shouldTab1Render, setShouldTab1Render] = useState(true);
  const [shouldTab2Render, setShouldTab2Render] = useState(false);

  useEffect(() => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        100, 'easeInEaseOut', 'opacity'
      )
    );
    if (activeTab === 1) {
      setShouldTab1Render(true);
      setShouldTab2Render(false);
    } else {
      setShouldTab2Render(true);
      setShouldTab1Render(false);
    }
  }, [activeTab]);

  return (
    <View style={styles.container}>
      <BoxShadow>
        <View style={{ padding: 10 }}>
          <TabSlider title1={tabTitle1} title2={tabTitle2} setCurrentTab={setActiveTab} />
          {shouldTab1Render
            && (
            <View>
              { tab1Components }
            </View>
            )
          }
          {shouldTab2Render
            && (
            <View>{ tab2Components }</View>
            )
          }
        </View>
      </BoxShadow>
    </View>
  );
};

InputTabbed.propTypes = {
  tab1Components: node.isRequired,
  tab2Components: node.isRequired,
  tabTitle1: string.isRequired,
  tabTitle2: string.isRequired
};

export default InputTabbed;
