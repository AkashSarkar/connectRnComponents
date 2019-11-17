import React from 'react';
import { StyleSheet, View } from 'react-native';
import {func, number, string} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import {colors, fonts} from '../../../styles/baseStyle';
import {ButtonCommunication} from '../../ui';
import {ml15} from '../../../styles/commonStyle';
import assets from '../../../assets';

const Selection = ({
  handleModalOpen,
  heading,
  subtitle,
  operatorLogo,
  logo,
  logoText
}) => (
    <View>
      <View style={[styles.selectionWrapper]}>
        <ButtonCommunication
          logo={operatorLogo}
          buttonColor={colors.primary}
          buttonWidth={34}
          buttonHeight={34}
          buttonBorderRadius={17}
          iconHeight={20}
          iconWidth={20}
          textColor={colors.text2}
          fontSize={fonts.fs14}
          onPress={() => {
            console.log("'hello");
          }}
        />

        <View style={[styles.contentWrapper, ml15]}>
          <TextComponent
            size={fonts.fs18}
            color={colors.secondary}
            content={heading}
            family={fonts.bold}
          />
          {subtitle && subtitle.length > 0 && (
            <TextComponent
              size={fonts.fs14}
              color={colors.black7}
              content={subtitle}
              family={fonts.regular}
            />
          )}
        </View>
        <View style={styles.rightImageWrapper}>
          <ButtonCommunication
            logo={logo}
            buttonColor={colors.white1}
            textColor={colors.text2}
            fontSize={fonts.fs14}
            buttonWidth={60}
            buttonHeight={60}
            buttonBorderRadius={30}
            iconHeight={30}
            iconWidth={30}
            onPress={handleModalOpen}
          />
          {logoText && logoText.length > 0 && (
            <TextComponent
              size={fonts.fs10}
              color={colors.black}
              content={logoText}
              family={fonts.regular}
            />
          )}
        </View>
      </View>
    </View>
  );

const styles = StyleSheet.create({
  selectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentWrapper: {
    flexGrow: 2
  },
  imageStyle: {
    height: 25,
    width: 25
  },
  rightImageWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

Selection.propTypes = {
  handleModalOpen: func.isRequired,
  heading: string.isRequired,
  logo: number,
  operatorLogo: number,
  subtitle: string,
  logoText: string
};

Selection.defaultProps = {
  logo: assets.Change,
  operatorLogo: assets.Operator
};

export default Selection;
