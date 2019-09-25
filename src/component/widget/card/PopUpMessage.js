import React from 'react';
import { View, Image } from 'react-native';
import { string, number } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import { p15, mr10 } from '../../../styles/commonStyle';
import image from '../../../assets';

const styles = {
  wrapper: {
    maxWidth: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white1,
    borderRadius: 8,
    ...p15,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3
  },
  leftWrapper: {
    alignSelf: 'flex-start',
    ...mr10
  },
  imagestyle: {
    width: 30,
    height: 30
  },
  rightWrapper: {
    
  }
};

const PopUpMessage = ({
  content, icon
}) => (
  <View style={styles.wrapper}>
    <View style={styles.leftWrapper}>
      <Image
        style={styles.imagestyle}
        source={image[icon]}
      />
    </View>
    <View>
      <TextComponent
        content={content}
        color={colors.black1}
        family={fonts.semiBold}
        size={fonts.fs16}
      />
    </View>
  </View>
);

PopUpMessage.propTypes = {
  content: string.isRequired,
  icon: string.isRequired
};

export default PopUpMessage;
