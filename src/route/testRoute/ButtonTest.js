import React from 'react';
import {
  Text, View, SafeAreaView, StyleSheet, ScrollView
} from 'react-native';
import {
  ButtonPrimary,
  ButtonGradientPrimary,
  ButtonPrimaryBadge,
  ButtonGrey,
  ButtonConnect,
  ButtonCenter,
  ButtonBrand,
  MenuItem,
  ButtonQuickAmount,
  ButtonCommunication,
  ButtonAdd,
  ButtonTag,
  ButtonSecondaryBadge,
  ButtonDouble, TextComponent
} from '../../component/ui';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import assets from '../../assets';
import {p10} from "../../styles/commonStyle";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: 'space-around',
    marginTop: 10
  },
  viewWrapper: {
    marginBottom: 10
  }
});


const ButtonTest = ({
  params
}) => (
  <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonDouble"
          family={fonts.bold}
        />
        <ButtonDouble
          content="Button Double"
          contentRight="Type here"
          buttonColor={gradientColors.gradient5}
          textColorLeft={colors.bgPrimary}
          textColorRight={colors.black1}
          fontSize={fonts.fs14}
          onPress={() => console.warn('Button Primary')}
        />
      </View>
      {/*ui/button/ButtonDouble*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonPrimary"
          family={fonts.bold}
        />
        <ButtonPrimary
          content="Button Primary"
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          fontSize={fonts.fs14}
          onPress={() => console.warn('Button Primary')}
        />
      </View>
      {/*ui/button/ButtonPrimary*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonGradientPrimary"
          family={fonts.bold}
        />
        <ButtonGradientPrimary
          content="Button Gradient Primary"
          buttonColor={gradientColors.gradient6}
          textColor={colors.bgPrimary}
          fontSize={fonts.fs14}
          onPress={() => console.warn('Button Gradient Primary')}
        />
      </View>
      {/*ui/button/ButtonGradientPrimary*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonGrey"
          family={fonts.bold}
        />
        <ButtonGrey
          content="Button Grey"
          buttonColor={gradientColors.gradient3}
          textColor={colors.bgPrimary}
          fontSize={fonts.fs14}
          onPress={() => console.warn('Button Grey')}
        />
      </View>
      {/*ui/button/ButtonGrey*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonConnect"
          family={fonts.bold}
        />
        <ButtonConnect
          buttonLogo={assets.LogoConnect}
          buttonColor={gradientColors.gradient6}
          onPress={() => console.warn('Button Brand')}
        />
      </View>
      {/*ui/button/ButtonConnect*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonTag"
          family={fonts.bold}
        />
        <ButtonTag
          content="Button Tag"
          buttonColor={colors.white1}
          textColor={colors.text2}
          fontSize={fonts.fs10}
          onPress={() => console.warn('Button Desco')}
        />
      </View>
      {/*ui/button/ButtonTag*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonCenter"
          family={fonts.bold}
        />
        <ButtonCenter
          content="Button Center"
          buttonLogo={assets.Check}
          buttonColor={colors.white1}
          textColor={colors.text1}
          fontSize={fonts.fs14}
          onPress={() => console.warn('Add New Account')}
        />
      </View>
      {/*ui/button/ButtonCenter*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonBrand"
          family={fonts.bold}
        />
        <ButtonBrand
          content="DESCO"
          logo="Check"
          buttonColor="yellow1"
          textColor={colors.text2}
          fontSize={fonts.fs10}
          onPress={() => console.warn('Button Desco')}
        />
      </View>
      {/*ui/button/ButtonBrand*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/MenuItem"
          family={fonts.bold}
        />
        <MenuItem
          content="Cash & Account"
          logo="Check"
          buttonColor="white1"
          textColor={colors.text2}
          fontSize={fonts.fs10}
          onPress={() => console.warn('Button Desco')}
        />
      </View>
      {/*ui/button/MenuItem*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonPrimaryBadge"
          family={fonts.bold}
        />
        <ButtonPrimaryBadge
          content="Button Primary"
          badgeCount="250"
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          fontSizeText={fonts.fs14}
          fontSizeBadge={fonts.fs12}
          onPress={() => console.warn('Button Primary')}
        />
      </View>
      {/*ui/button/ButtonPrimaryBadge*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonSecondaryBadge"
          family={fonts.bold}
        />
        <ButtonSecondaryBadge
          content="pending"
          buttonColor="#f9f9f9"
          badgeCount="15"
          textColorContent={colors.colorSecondery}
          textColorBadge={colors.white1}
          fontSizeText={fonts.fs12}
          fontSizeBadge={fonts.fs10}
          onPress={() => console.warn('Button Desco')}
        />
      </View>
      {/*ui/button/ButtonSecondaryBadge*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonQuickAmount"
          family={fonts.bold}
        />
        <ButtonQuickAmount
          content="15%"
          buttonColor={colors.white1}
          textColor={colors.text2}
          fontSize={fonts.fs14}
          onPress={() => console.warn('Button Desco')}
        />
      </View>
      {/*ui/button/ButtonQuickAmount*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonCommunication"
          family={fonts.bold}
        />
        <ButtonCommunication
          buttonLogo={assets.Check}
          buttonColor={colors.white1}
          textColor={colors.text2}
          fontSize={fonts.fs14}
          onPress={() => console.warn('ButtonCommunication')}
        />
      </View>
      {/*ui/button/ButtonCommunication*/}

      <View style={p10}>
        <TextComponent
          size={fonts.fs20}
          color={colors.secondary}
          content="ui/button/ButtonAdd"
          family={fonts.bold}
        />
        <ButtonAdd
          content="Button Add"
          buttonLogoLeft={assets.Check}
          buttonLogoRight={assets.Check}
          buttonColor={gradientColors.gradient4}
          textColor={colors.text1}
          fontSize={fonts.fs14}
          onPress={() => console.warn('Add New Account')}
        />
      </View>
      {/*ui/button/ButtonAdd*/}

    </SafeAreaView>
  </ScrollView>
);

export default ButtonTest;
