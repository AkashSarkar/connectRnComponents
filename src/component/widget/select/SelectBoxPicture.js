import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import { string, func } from 'prop-types';

import { fonts, colors, gradientColors } from '../../../styles/baseStyle';
import { TextComponent, BoxShadow, ButtonPrimary } from '../../ui';
import ModalComponent from '../modal/ModalComponent';
import ImageComponent from '../image/ImageComponent';
import { p10 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...p10
  },
  selectBtn: {
    width: '25%'
  },
  selectedImage: {
    width: 50,
    height: 40,
    borderRadius: 5
  }
});

const SelectBoxPicture = ({ onPictureSelect, label }) => {
  const [pictureSelecting, setPictureSelecting] = useState(false);
  const [pictureSelected, setPictureSelected] = useState(null);

  useEffect(() => {
    if (pictureSelected !== null) {
      setTimeout(() => {
        onPictureSelect(pictureSelected);
      }, 400);
    }
  }, [pictureSelecting]);

  return (
    <BoxShadow>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => (pictureSelected ? null : setPictureSelecting(!pictureSelecting))
        }
      >
        <View style={styles.container}>
          <TextComponent
            color={colors.primary2}
            content={label}
            family={fonts.medium}
            size={fonts.fs14}
          />
          {pictureSelected ? (
            <Image source={pictureSelected} style={styles.selectedImage} />
          ) : (
            <View style={styles.selectBtn}>
              <ButtonPrimary
                content="Capture"
                buttonColor={gradientColors.gradient5}
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14}
                onPress={() => setPictureSelecting(!pictureSelecting)}
              />
              {/* <ButtonSecondary
                content="Capture"
                onPress={() => setPictureSelecting(!pictureSelecting)}
              /> */}
            </View>
          )}
          <ModalComponent
            isVisible={pictureSelecting}
            setVisible={setPictureSelecting}
          >
            <ImageComponent
              onImageCapture={(imageObj) => {
                setPictureSelected(imageObj);
                setPictureSelecting(false);
              }}
              onRequestClose={() => setPictureSelecting(false)}
            />
          </ModalComponent>
        </View>
      </TouchableOpacity>
    </BoxShadow>
  );
};

SelectBoxPicture.propTypes = {
  label: string.isRequired,
  onPictureSelect: func.isRequired
};

export default SelectBoxPicture;
