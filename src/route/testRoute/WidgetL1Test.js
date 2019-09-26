import React from 'react';
import {ScrollView} from "react-native";
import {colors, fonts, gradientColors} from "../../styles/baseStyle";
import {ButtonPrimary, TextComponent} from "../../component/ui";
import {mb10} from "../../styles/commonStyle";

const WidgetL1Test = ({navigation}) => {
  return(
    <ScrollView>
      <View style={mb10}>
        <TextComponent
          size={fonts.fs30}
          color={colors.black0}
          content="Card"
          family={fonts.bold}
        />

        <ButtonPrimary
          buttonColor={gradientColors.gradient5}
          textColor={colors.bgPrimary}
          content="Seat List Item"
          onPress={() => navigation.navigate('SwipeableWrapperTest')}
        />
      </View>
    </ScrollView>
  )
};

export default WidgetL1Test