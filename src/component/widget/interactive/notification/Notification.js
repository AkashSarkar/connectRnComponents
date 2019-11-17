import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { string, func, array } from 'prop-types';
import { BoxShadow, TextComponent, ButtonPrimary } from '../../../ui';
import { gradientColors, fonts, colors } from '../../../../styles/baseStyle';
import { mb10 } from '../../../../styles/commonStyle';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 16,
    width: '100%'
  },
  gradient: {
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  title: {
    alignItems: 'center',
    paddingVertical: 30
  },
  logo: {
    height: 25,
    maxWidth: '60%',
    maxHeight: 25
  },
  content: {
    paddingVertical: 10,
    marginBottom: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40
  },
  footerLine: {
    borderTopColor: colors.black1,
    borderTopWidth: 2,
    width: '30%'
  }
});

const Notification = ({
  logo,
  content,
  footer,
  buttonTitle,
  onButtonPress,
  bgColor,
  contentColor,
  buttonColor
}) => (
  <View style={styles.container}>
    <BoxShadow>
      <LinearGradient style={styles.gradient} colors={bgColor}>
        <View style={styles.title}>
          <Image resizeMode="contain" source={logo} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <TextComponent
            content={content}
            size={fonts.fs14}
            color={contentColor}
            family={fonts.medium}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLine} />
          <TextComponent
            content={footer}
            size={fonts.fs14}
            color={contentColor}
            family={fonts.medium}
          />
        </View>
        <View>
          <ButtonPrimary
            buttonColor={buttonColor}
            content={buttonTitle}
            onPress={onButtonPress}
            textColor={colors.white1}
          />
        </View>
      </LinearGradient>
    </BoxShadow>
  </View>
);

Notification.defaultProps = {
  bgColor: gradientColors.gradientWhite,
  contentColor: colors.black1,
  buttonColor: gradientColors.gradientGrey,
  buttonTitle: 'Read More'
};

Notification.propTypes = {
  content: string.isRequired, // main body of text of the notification
  buttonTitle: string.isRequired, // title of the button at the bottom
  footer: string, // string at the bottom after body
  onButtonPress: func.isRequired, // event handler for the button at the bottom
  logo: Image.propTypes.source.isRequired, // logo at the top
  bgColor: array, // background color
  contentColor: string, // text color
  buttonColor: array // button color
};

export default Notification;
