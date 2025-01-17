import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  arrayOf, shape, number, string, func
} from 'prop-types';
import { mh10, mr10, mh5, ml3 } from '../../../styles/commonStyle';
import { colors } from '../../../styles/baseStyle';
import { ButtonBrand } from '../../ui';

const styles = {
  wrapper: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: colors.white1
    // backgroundColor: 'red'
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
        <View key={item.id} style={[index === 0 ? ml3 : mh5]}>
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
      content: string.isRequired,
      buttonColor: string.isRequired,
      textColor: string.isRequired,
      logo: string.isRequired
    })
  ).isRequired,
  onPress: func.isRequired
};

export default BrandStackList;
