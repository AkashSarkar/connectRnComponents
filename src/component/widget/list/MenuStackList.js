import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  arrayOf, shape, number, string, func
} from 'prop-types';
import { mr10, mb10 } from '../../../styles/commonStyle';
import { fonts, colors } from '../../../styles/baseStyle';
import { MenuItem } from '../../ui';
import image from '../../../assets';

const styles = {
  wrapper: {
    width: '100%',
    height: 105,
    backgroundColor: colors.white1
  },
  itemListStyle: {
    flexDirection: 'row'
  }
};

const MenuStackList = ({
  items, onPress
}) => {
  const { length } = items;
  let top = [];
  let bottom = [];
  if (length % 2 === 0) {
    top = items.slice(0, length / 2);
    bottom = items.slice(length / 2, length);
  } else {
    top = items.slice(0, (length / 2) + 1);
    bottom = items.slice((length / 2) + 1, length);
  }
  return (
    <ScrollView
      style={styles.wrapper}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View>
        <View style={[styles.itemListStyle, mb10]}>
          {top.map((item, index) => (
            <View key={item.id} style={mr10}>
              <MenuItem
                content={item.content}
                logo={item.logo}
                buttonColor={item.buttonColor}
                textColor={item.textColor}
                onPress={() => onPress(index)}
              />
            </View>
          ))}
        </View>
        <View style={styles.itemListStyle}>
          {bottom.map((item, index) => (
            <View key={item.id} style={mr10}>
              <MenuItem
                content={`${item.content}dsdksjd`}
                logo={item.logo}
                buttonColor={item.buttonColor}
                textColor={item.textColor}
                onPress={() => onPress(index)}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

MenuStackList.propTypes = {
  items: arrayOf(
    shape({
      id: number.isRequired,
      content: string.isRequired,
      buttonColor: string.isRequired,
      textColor: string.isRequired,
      logo: string.isRequired
    })
  ).isRequired,
  onPress: func.isRequired
};

export default MenuStackList;
