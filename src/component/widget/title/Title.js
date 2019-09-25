import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextComponent from "../../ui/typography/TextComponent";
import {colors, fonts} from "../../../styles/baseStyle";

const styles = StyleSheet.create({
  textInformationAlign: {
    alignItems: 'flex-end'
  }
});

const Title = ({subTitle, title}) => {
  return (
    <View>
      <TextComponent
        size={fonts.fs12}
        color={colors.grey1}
        content={subTitle}
        family={fonts.regular}
      />
      <View style={styles.textInformationAlign}>
        <TextComponent
          size={fonts.fs24}
          color={colors.black0}
          content={title}
          family={fonts.regular}
        />
      </View>
    </View>
  )
};

export default Title;