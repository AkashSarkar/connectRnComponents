import React from 'react';
import { View, StyleSheet } from 'react-native';
import FabButton from '../../component/ui/button/FabButton';
import assets from '../../assets';

const FabTest = () => {
  const search = () => {
    console.warn('search');
  };
  const scan = () => {
    console.warn('Scan');
  };
  const nfc = () => {
    console.warn('Nfc');
  };
  const rightActions = [
    {
      func: scan,
      translate: 100,
      icon: assets.HandQRCode
    },
    {
      func: nfc,
      translate: 170,
      icon: assets.Nfc
    }
  ];
  const leftActions = [
    {
      func: search,
      translate: 100,
      icon: assets.Search
    }
  ];
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: 10
    }}
    >
      <FabButton
        childrenButtons={leftActions}
      />
      <FabButton
        childrenButtons={rightActions}
      />
    </View>

  );
};

export default FabTest;
