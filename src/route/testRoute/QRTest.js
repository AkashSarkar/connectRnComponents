import React from 'react';
import { View, Text } from 'react-native';
import QRScanner from '../../component/widget/scanner/QRScanner';
import NFC from '../../component/widget/scanner/NFC';

const QRTest = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    {/* <QRScanner
      onCancel={() => navigation.goBack()}
      onScan={text => console.warn(text)}
    /> */}
    <NFC onScan={text => console.warn(text)} />
  </View>
);

export default QRTest;
