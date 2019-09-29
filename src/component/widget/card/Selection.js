import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TextComponent from "../../ui/typography/TextComponent";
import {colors, fonts} from "../../../styles/baseStyle";
import {BoxShadow, ButtonCommunication} from "../../ui";
import {ml15, ph10, pv25} from "../../../styles/commonStyle";
import {func, string} from 'prop-types';
import assets from "../../../assets";

const Selection = ({handleModalOpen, heading, operatorLogo, logo}) => {
  return (
    <BoxShadow>
      <View style={[styles.selectionWrapper, pv25, ph10]}>
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
            console.log("'hello")
          }}/>

        <View style={[styles.contentWrapper, ml15]}>
          <TextComponent
            size={fonts.fs18}
            color={colors.black0}
            content={heading}
            family={fonts.bold}
          />
        </View>
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
          onPress={handleModalOpen}/>
      </View>
    </BoxShadow>
  )
};

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
  }
});

Selection.propTypes = {
  handleModalOpen: func.isRequired,
  heading: string.isRequired
};

Selection.defaultProps = {
  logo: assets.Change,
  operatorLogo: assets.Operator
};

export default Selection;