import React from 'react';
import { View, ScrollView } from 'react-native';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ButtonPrimary, TextComponent, FeatureWrapperV2 } from '../../component/ui';
import { p10, pb10 } from '../../styles/commonStyle';
import assets from '../../assets';

const WidgetL2Test = ({ navigation }) => (
  <FeatureWrapperV2
    title=" Test"
    backgroundColor={colors.white1}
    titleTextColor={colors.secondary}
    rightIcon={assets.CrossDark}
    style={{ flex: 1 }}
    rightPressAction={() => navigation.goBack()}
  >
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
  </FeatureWrapperV2>
);

export default WidgetL2Test;
