import React from 'react';
import { View, ScrollView } from 'react-native';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ButtonPrimary, TextComponent } from '../../component/ui';
import { mb10 } from '../../styles/commonStyle';

const WidgetL2Test = ({ navigation }) => (
  <ScrollView>
    <View style={mb10}>
      <TextComponent
        size={fonts.fs30}
        color={colors.black0}
        content="Modal"
        family={fonts.bold}
      />

      <ButtonPrimary
        buttonColor={gradientColors.gradient5}
        textColor={colors.bgPrimary}
        content="Modal Familty List"
        onPress={() => navigation.navigate('SwipeableWrapperTest')}
      />
    </View>
  </ScrollView>
);

export default WidgetL2Test;
