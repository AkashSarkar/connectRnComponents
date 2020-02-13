import React, { useState, useRef } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { RNCamera } from 'react-native-camera';
import {
  func, string, bool, array, number
} from 'prop-types';
import {
  FeatureWrapperV2,
  ButtonBorderV2
} from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';
import ModalComponent from '../modal/ModalComponent';
import ButtonCapture from '../../ui/button/ButtonCapture';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  captureBtnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    height: 85,
    width: '100%',
    backgroundColor: colors.black4
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    borderColor: 'rgba(0.2, 0.2, 0.2, 0.4)',
    borderTopWidth: 100,
    borderBottomWidth: 180,
    borderLeftWidth: 20,
    borderRightWidth: 20
  },
  imagePreview: {
    flex: 1
  },
  cameraView: {
    flex: 1
  },
  placeholderView: {
    flex: 1,
    backgroundColor: colors.white1
  },
  titleBar: {
    height: 64,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const ImageComponentV2 = (
  {
    onImageCapture, isOverlay, cameraType, buttonColor,
    title, leftIcon, rightIcon, leftPressAction, rightPressAction
  }
) => {
  const [imageUri, setImageUri] = useState(null);
  const [isPreview, setIsPreview] = useState(false);

  const reCapture = () => {
    setImageUri(null);
    setIsPreview(false);
  };

  const confirmPicture = () => {
    onImageCapture(imageUri);
  };

  let camera = useRef(null);

  const takePicture = async () => {
    const options = {
      quality: 0.5, // image quality
      base64: true, // base64 format enabled
      pauseAfterCapture: true, // pausing camera after capturing
      fixOrientation: true // sticking picture in portrait mode
    };

    try {
      const data = await camera.takePictureAsync(options);
      setImageUri(data);
      setIsPreview(true);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <ModalComponent isVisible={isPreview} setVisible={setIsPreview}>
        <View style={styles.container}>
          <ImageBackground source={imageUri} style={styles.imagePreview} />
          <ButtonBorderV2
            contentLeft="Confirm"
            contentRight="Re/Capture"
            buttonColor={buttonColor || colors.black10}
            textColorLeft={colors.white1}
            textColorRight={colors.white1}
            fontSize={fonts.fs18}
            onPressLeft={confirmPicture}
            onPressRight={reCapture}
          />
        </View>
      </ModalComponent>
      <FeatureWrapperV2
        title={title}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftPressAction={leftPressAction}
        rightPressAction={rightPressAction}
      >
        {!isPreview && (
          <RNCamera
            ref={(ref) => {
              camera = ref;
            }}
            style={styles.cameraView}
            type={cameraType}
            autoFocus="on"
            whiteBalance="auto"
            ratio="4:3"
            captureAudio={false}
          >
            {isOverlay && (
              <View style={styles.overlayContainer} />
            )}
            <View style={styles.captureBtnWrapper}>
              <ButtonCapture onPress={takePicture} />
            </View>
          </RNCamera>
        )}
      </FeatureWrapperV2>
    </View>
  );
};

ImageComponentV2.propTypes = {
  onImageCapture: func.isRequired,
  cameraType: string,
  isOverlay: bool,
  buttonColor: string.isRequired,
  title: string,
  leftIcon: number,
  rightIcon: number,
  rightPressAction: func,
  leftPressAction: func

};

export default ImageComponentV2;
