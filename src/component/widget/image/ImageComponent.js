import React, { useState, useRef } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { func } from 'prop-types';
import { ButtonCapture, ButtonDouble } from '../../ui';
import { colors, fonts, gradientColors } from '../../../styles/baseStyle';
import ModalComponent from '../modal/ModalComponent';

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
    borderTopWidth: 130,
    borderBottomWidth: 130,
    borderLeftWidth: 30,
    borderRightWidth: 30
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
  }
});

const ImageComponent = ({ onImageCapture }) => {
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
            content="Capture"
            contentRight="Confirm"
            buttonColor={gradientColors.gradient5}
            textColorLeft={colors.bgPrimary}
            textColorRight={colors.black1}
            fontSize={fonts.fs14}
            onPressLeft={reCapture}
            onPressRight={confirmPicture}
          />
          {/* <CTADouble
            contentLeft="Capture"
            contentRight="Confirm"
            onPressLeft={reCapture}
            onPressRight={confirmPicture}
          /> */}
        </View>
      </ModalComponent>

      <View style={styles.placeholderView}>
        {!isPreview && (
          <RNCamera
            ref={(ref) => {
              camera = ref;
            }}
            style={styles.cameraView}
            type="back"
            autoFocus="on"
            whiteBalance="auto"
            ratio="16:9"
            captureAudio={false}
          >
            <View style={styles.overlayContainer} />
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
  onImageCapture: func.isRequired
};

export default ImageComponent;
