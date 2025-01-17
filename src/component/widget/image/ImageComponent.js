import React, { useState, useRef } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { RNCamera } from 'react-native-camera';
import {
  func, string, bool, array
} from 'prop-types';
import { ButtonDouble, TextComponent } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';
import ModalComponent from '../modal/ModalComponent';
import ButtonCapture from '../../ui/button/ButtonCapture';

const styles = StyleSheet.create({
  container: {
    flex: 1
    // height: 300,
    // marginTop: 100
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
    // height: 600,
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

const ImageComponent = (
  {
    onImageCapture, isOverlay, cameraType, buttonColor, backgroundTopColor, titleBarColor, title
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
          <ButtonDouble
            content="Confirm"
            contentRight="Re/Capture"
            buttonColor={buttonColor || ['#14438f', '#000632']}
            textColorLeft={colors.bgPrimary}
            textColorRight={colors.black1}
            fontSize={fonts.fs14}
            onPressLeft={confirmPicture}
            onPressRight={reCapture}
          />
          {/* <CTADouble
            contentLeft="Capture"
            contentRight="Confirm"
            onPressLeft={reCapture}
            onPressRight={confirmPicture}
          /> */}
        </View>
      </ModalComponent>
      <View style={{ height: 60, backgroundColor: backgroundTopColor }} />
      <View style={[styles.titleBar, { backgroundColor: titleBarColor || 'white' }]}>
        <TextComponent content={title} size={fonts.fs16} />
      </View>
      <View style={styles.placeholderView}>
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
      </View>

    </View>
  );
};

ImageComponent.propTypes = {
  onImageCapture: func.isRequired,
  cameraType: string,
  isOverlay: bool,
  buttonColor: array.isRequired,
  backgroundTopColor: string.isRequired,
  titleBarColor: string.isRequired,
  title: string
};

export default ImageComponent;
