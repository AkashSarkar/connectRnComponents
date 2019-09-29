import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { string, func } from 'prop-types';
import {
  BoxShadow, TextComponent, ButtonPrimary
} from '../../../ui';
import { gradientColors, fonts, colors } from '../../../../styles/baseStyle';
import { mb10 } from '../../../../styles/commonStyle';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 16
  },
  title: {
    alignItems: 'center',
    paddingVertical: 10
  },
  logo: {
    height: 25,
    maxWidth: '60%',
    maxHeight: 25
  },
  content: {
    paddingVertical: 5
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  footerLine: {
    borderTopColor: colors.black1,
    borderTopWidth: 2,
    width: '30%'
  }
});

const Notification = ({
  logo, content, footer, buttonTitle, onButtonPress
}) => (
  <View style={mb10}>
    <BoxShadow>
      <LinearGradient style={styles.container} colors={gradientColors.gradientWhite}>
        <View style={styles.title}>
          <Image resizeMode="contain" source={logo} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <TextComponent content={content} size={fonts.fs14} color={colors.black1} family={fonts.medium} />
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLine} />
          <TextComponent content={footer} size={fonts.fs14} color={colors.black1} family={fonts.medium} />
        </View>
        <View>
          <ButtonPrimary buttonColor={gradientColors.gradientGrey} content={buttonTitle} onPress={onButtonPress} textColor={colors.white1} />
        </View>
      </LinearGradient>
    </BoxShadow>
  </View>
);

Notification.propTypes = {
  content: string.isRequired,
  buttonTitle: string.isRequired,
  footer: string,
  onButtonPress: func.isRequired,
  logo: Image.propTypes.source.isRequired
};

export default Notification;
