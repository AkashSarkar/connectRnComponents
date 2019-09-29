import React from 'react';
import { View, ScrollView } from 'react-native';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ButtonPrimary, TextComponent } from '../../component/ui';
import { mb10, p10, pb10 } from '../../styles/commonStyle';

const WidgetL2Test = ({ navigation }) => (
  <ScrollView>
    <View style={[p10]}>
      <View style={[pb10]}>
        <TextComponent
          size={fonts.fs30}
          color={colors.black0}
          content="Modal"
          family={fonts.bold}
        />
      </View>
      <ButtonPrimary
        buttonColor={gradientColors.gradient5}
        textColor={colors.bgPrimary}
        content="Modal Test"
        onPress={() => navigation.navigate('ModalTest')}
      />
    </View>
  </ScrollView>
);

export default WidgetL2Test;
