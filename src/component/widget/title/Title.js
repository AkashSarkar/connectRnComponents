import React from 'react';
import {View} from 'react-native';
import TextComponent from "../../ui/typography/TextComponent";
import {colors, fonts, gradientColors} from "../../../styles/baseStyle";

const Title = ({subTitle, title}) => {
  return (
    <View>
      <TextComponent
        size={fonts.fs12}
        color={colors.grey}
        content={subTitle}
        family={fonts.regular}
      />

      <TextComponent
        size={fonts.fs24}
        color={gradientColors.black0}
        content={title}
        family={fonts.regular}
      />
    </View>
  )
};

export default Title;