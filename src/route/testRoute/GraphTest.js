import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AccountGraph, BottomDrawer } from '../../component/widget';
import { colors } from '../../styles/baseStyle';
import assets from '../../assets';
import { FeatureWrapperV2 } from '../../component/ui';

const GraphTest = ({ navigation }) => {
  const [data, setDate] = useState([
    { x: new Date(2018, 9, 1), y: 800 },
    { x: new Date(2018, 9, 16), y: 1000 },
    { x: new Date(2018, 9, 17), y: 20000 },
    { x: new Date(2018, 10, 1), y: 200 },
    { x: new Date(2018, 10, 2), y: 300 },
    { x: new Date(2018, 10, 5), y: 450 },
    { x: new Date(2018, 10, 6), y: 5000 }
  ]);

  return (
    <FeatureWrapperV2
      title=" Test"
      backgroundColor={colors.white1}
      titleTextColor={colors.secondary}
      rightIcon={assets.CrossDark}
      style={{ flex: 1 }}
      rightPressAction={() => navigation.goBack()}
    >
      <View
        style={{
          paddingTop: 50,
          flex: 1
        }}
      >
        <BottomDrawer>
          <AccountGraph
            data={data}
            onCursorStop={idx => console.log('index', idx)}
          />
        </BottomDrawer>
      </View>
    </FeatureWrapperV2>
  );
};

export default GraphTest;
