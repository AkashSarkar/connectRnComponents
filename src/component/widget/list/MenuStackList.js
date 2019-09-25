import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  arrayOf, shape, number, string, func
} from 'prop-types';
import { mr10 } from '../../../styles/commonStyle';
import { fonts, colors } from '../../../styles/baseStyle';
import { MenuItem } from '../../ui';
import image from '../../../assets';

const styles = {
  wrapper: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: colors.white1
  }
};

const MenuStackList = ({
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
          <MenuItem
            content="Cash & Account"
            buttonLogo={image.LogoConnect}
            buttonColor={colors.white1}
            textColor={colors.text2}
            fontSize={fonts.fs10}
            onPress={() => console.warn('Button Desco')}
          />
        </View>
      ))
    }
  </ScrollView>
);

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
