import React from 'react';
import {ScrollView, View} from "react-native";
import {colors, fonts, gradientColors} from "../../styles/baseStyle";
import {ButtonPrimary, TextComponent} from "../../component/ui";
import {p10, pb10} from "../../styles/commonStyle";

const screenContainer = {
  paddingHorizontal: 10,
  paddingVertical: 10,
  justifyContent: 'space-between'
};

const UIComponentTest = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={screenContainer}>
      <View style={[p10]}>
        <View style={[pb10]}>
          <TextComponent
            size={fonts.fs30}
            color={colors.black0}
            content="Input"
            family={fonts.bold}
          />
        </View>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Input Test"
          onPress={() => navigation.navigate('InputTest')}
        />
      </View>

      <View style={[p10]}>
        <View style={[pb10]}>
          <TextComponent
            size={fonts.fs30}
            color={colors.black0}
            content="Button"
            family={fonts.bold}
          />
        </View>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Button Test"
          onPress={() => navigation.navigate('ButtonTest')}
        />
      </View>

      <View style={[p10]}>
        <View style={[pb10]}>
          <TextComponent
            size={fonts.fs30}
            color={colors.black0}
            content="Header"
            family={fonts.bold}
          />
        </View>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Button Test"
          onPress={() => navigation.navigate('HeaderTest')}
        />
      </View>

    </ScrollView>
  )
};

export default UIComponentTest