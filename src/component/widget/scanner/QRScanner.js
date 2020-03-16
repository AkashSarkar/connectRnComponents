import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { func } from 'prop-types';
import ButtonPrimary from '../../ui/button/ButtonPrimary';
import { gradientColors, colors } from '../../../styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    borderColor: 'rgba(0.2, 0.2, 0.2, 0.4)',
    borderTopWidth: 130,
    borderBottomWidth: 130,
    borderLeftWidth: 30,
    borderRightWidth: 30
  },
  cancelBtn: {
    position: 'absolute',
    left: '20%',
    bottom: 10,
    width: '60%'
  }
});

const QRScanner = ({ onScan, onCancel }) => {
  const [isBarcodeRead, setIsBarcodeRead] = useState(false);

  const renderCamera = () => (
    <RNCamera
      style={{
        flex: 1
      }}
      captureAudio={false}
      type="back"
      autoFocus="on"
      whiteBalance="auto"
      ratio="16:9"
      barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      onBarCodeRead={({ data }) => {
        if (!isBarcodeRead) {
          setIsBarcodeRead(true);
          onScan(data);
        }
      }}
    >
      <View style={styles.overlayContainer} />
      {/* <View style={styles.cancelBtn}>
        <ButtonPrimary
          buttonColor={gradientColors.gradientPrimary}
          textColor={colors.white1}
          content="Cancel"
          onPress={onCancel}
        />
      </View> */}
    </RNCamera>
  );

  return <View style={styles.container}>{renderCamera()}</View>;
};

QRScanner.propTypes = {
  onScan: func.isRequired,
  onCancel: func.isRequired
};

export default QRScanner;
