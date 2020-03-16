import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  arrayOf, shape, number, string, func, bool
} from 'prop-types';
import { mr10 } from '../../../styles/commonStyle';
import { colors } from '../../../styles/baseStyle';
import Avatar from '../card/Avatar';

const styles = {
  wrapper: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: colors.white1
  }
};

const AvatarList = ({
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
          <Avatar
            logo={{ uri: item.logo }}
            onPress={() => onPress(index)}
            status={item.status}
            disabled={item.disabled}
          />
        </View>
      ))
    }
  </ScrollView>
);

AvatarList.propTypes = {
  items: arrayOf(
    shape({
      id: number.isRequired,
      logo: number.isRequired,
      status: string,
      disabled: bool
    })
  ).isRequired,
  onPress: func
};

export default AvatarList;
