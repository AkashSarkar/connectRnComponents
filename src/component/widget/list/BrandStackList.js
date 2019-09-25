import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  arrayOf, shape, number, string, func
} from 'prop-types';
import { mr10 } from '../../../styles/commonStyle';
import { colors } from '../../../styles/baseStyle';
import { ButtonBrand } from '../../ui';

const styles = {
  wrapper: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: colors.white1
  }
};

const BrandStackList = ({
  items, onPress
}) => (
  <ScrollView
    style={styles.wrapper}
    horizontal
    showsHorizontalScrollIndicator={false}
  >
    {
      items.map((item, index) => (
        <View key={item.id} style={mr10}>
          <ButtonBrand
            content={item.content}
            logo={item.logo}
            buttonColor={item.buttonColor}
            textColor={item.textColor}
            onPress={() => onPress(index)}
          />
        </View>
      ))
    }
  </ScrollView>
);

BrandStackList.propTypes = {
  items: arrayOf(
    shape({
      id: number.isRequired,
      content: string.isRequired
    })
  ).isRequired,
  onPress: func.isRequired
};

export default BrandStackList;
