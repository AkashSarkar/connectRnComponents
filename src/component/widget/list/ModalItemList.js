import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  arrayOf, shape, number, string, func
} from 'prop-types';
import TextComponent from '../../ui/typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';

const ModalItemList = (
  {
    item, onSelect
  }
) => (
  <View style={{
    paddingVertical: 10,
    paddingHorizontal: 20
  }}
  >
    <TouchableOpacity onPress={() => onSelect(item)}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextComponent
          content={item.title}
          size={fonts.fs18}
          family={fonts.semiBold}
          color={colors.red2}
        />
        {item.cardInfo && (
          <View style={{ marginHorizontal: 20 }}>
            <TextComponent
              content={item.cardInfo}
              size={fonts.fs14}
              family={fonts.regular}
              color={colors.white1}
            />
          </View>
        )}
      </View>
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
