import React from 'react';
import { ScrollView, View } from 'react-native';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import { ButtonPrimary, TextComponent } from '../../component/ui';
import { mb10 } from '../../styles/commonStyle';

const InteractiveTest = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={mb10}>
        <TextComponent
          size={fonts.fs30}
          color={colors.black0}
          content="Interactive"
          family={fonts.bold}
        />
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Split Test"
          onPress={() => navigation.navigate('SplitTest')}
        />
      </View>
      <View style={mb10}>
        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Fnf Test"
          onPress={() => navigation.navigate('FnfTest')}
        />
      </View>
    </ScrollView>
  );
};

export default InteractiveTest;
