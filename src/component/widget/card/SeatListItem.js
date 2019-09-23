import React from 'react';
import { View } from 'react-native';
import { string, number } from 'prop-types';
import { TextComponent } from '../../ui'
import { fonts, colors} from '../../../styles/baseStyle'

const SeatListItem = ({
  content, family, size, color
}) => (
  <View>
      <TextComponent 
        content="hello"
        color={colors.brandPrimary}
        family={fonts.light}
        fontSize={fonts.fs10}
      />
  </View>
);

SeatListItem.propTypes = {
  content: string.isRequired,
  family: string.isRequired,
  size: number.isRequired,
  color: string.isRequired
};

export default SeatListItem;
