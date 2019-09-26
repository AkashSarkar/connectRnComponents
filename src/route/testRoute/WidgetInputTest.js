import React from 'react';
import { ScrollView, View } from 'react-native';
import { mb20, mt10, p10 } from '../../styles/commonStyle';
import {
  InputLabeled, InputLogin, InputMiddleLabeled, InputTabbed
} from '../../component/widget';
import { colors, fonts } from "../../styles/baseStyle";
import { TextComponent } from "../../component/ui";


const WidgetInputTest = () => (
  <ScrollView>
    <View style={[mb20, p10, mt10]}>
      <TextComponent
        size={fonts.fs20}
        color={colors.secondary}
        content="widget/card/InputLogin"
        family={fonts.bold}
      />
      <InputLogin/>
    </View>
    <View style={[mb20, p10, mt10]}>
      <TextComponent
        size={fonts.fs20}
        color={colors.secondary}
        content="widget/card/InputLabeled"
        family={fonts.bold}
      />
      <InputLabeled/>
    </View>
    <View style={mb20}>
      <TextComponent
        size={fonts.fs20}
        color={colors.secondary}
        content="widget/card/InputTabbed"
        family={fonts.bold}
      />
      <InputTabbed/>
    </View>
    <View style={mb20}>
      <TextComponent
        size={fonts.fs20}
        color={colors.secondary}
        content="widget/card/InputMiddleLabeled"
        family={fonts.bold}
      />
      <InputMiddleLabeled/>
    </View>
  </ScrollView>
);
export default WidgetInputTest;
