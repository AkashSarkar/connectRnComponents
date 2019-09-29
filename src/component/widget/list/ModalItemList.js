import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  arrayOf, shape, number, string, func
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';

const ModalItemList = ({
  item, onSelect
}) => (
  <View style={{
    paddingVertical: 10,
    paddingHorizontal: 30
  }}
  >
    <TouchableOpacity onPress={() => onSelect(item.id)}>
      <TextComponent
        content={item.title}
        size={fonts.fs16}
        family={fonts.semiBold}
        color={colors.colorSecondery}
      />
    </TouchableOpacity>
  </View>
);

ModalItemList.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  item: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired
    })
  ).isRequired,
  onSelect: func
};

export default ModalItemList;
