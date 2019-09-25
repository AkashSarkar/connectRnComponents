import React from 'react';
import {View} from 'react-native';
import TextComponent from "../../ui/typography/TextComponent";
import {colors, fonts} from '../../../styles/baseStyle';

const AccountDetails = () => {
  return (
    <View>
      <TextComponent
        size={fonts.fs20}
        color={colors.primary2}
        content="Account details"
        family={fonts.regular}
      />
    </View>
  );
};

export default AccountDetails;
