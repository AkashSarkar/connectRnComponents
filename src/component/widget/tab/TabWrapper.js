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
import TabSlider from './TabSlider';
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

const TabWrapper = ({
  tab1Components,
  tab2Components,
  tabTitle1,
  tabTitle2,
  tabSubtitle1,
  tabSubtitle2,
  shadowContainer
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [shouldTab1Render, setShouldTab1Render] = useState(true);
  const [shouldTab2Render, setShouldTab2Render] = useState(false);

  useEffect(() => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(100, 'easeInEaseOut', 'opacity'),
    );
    if (activeTab === 1) {
      setShouldTab1Render(true);
      setShouldTab2Render(false);
    } else {
      setShouldTab2Render(true);
      setShouldTab1Render(false);
    }
  }, [activeTab]);

  const innerContents = () => (
    <View style={{ padding: 10 }}>
      <TabSlider
        title1={tabTitle1}
        title2={tabTitle2}
        subtitle1={tabSubtitle1}
        subtitle2={tabSubtitle2}
        setCurrentTab={setActiveTab}
      />
      {shouldTab1Render && (
        <View>
          {tabSubtitle1 && tabSubtitle1.length > 0 && (
            <View style={p15}>
              <TextComponent
                size={fonts.fs10}
                color={colors.primary2}
                content={tabSubtitle1}
                family={fonts.regular}
              />
            </View>
          )}
          {tab1Components}
        </View>
      )}
      {shouldTab2Render && (
        <View>
          {tabSubtitle2 && tabSubtitle2.length > 0 && (
            <View style={p15}>
              <TextComponent
                size={fonts.fs10}
                color={colors.primary2}
                content={tabSubtitle2}
                family={fonts.regular}
              />
            </View>
          )}
          {tab2Components}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {shadowContainer ? (
        <BoxShadow>{innerContents()}</BoxShadow>
      ) : (
        <>{innerContents()}</>
      )}
    </View>
  );
};

TabWrapper.defaultProps = {
  shadowContainer: true
};

TabWrapper.propTypes = {
  tab1Components: node.isRequired,
  tab2Components: node.isRequired,
  tabTitle1: string.isRequired,
  tabTitle2: string.isRequired,
  tabSubtitle1: string,
  tabSubtitle2: string,
  shadowContainer: bool
};

export default TabWrapper;
