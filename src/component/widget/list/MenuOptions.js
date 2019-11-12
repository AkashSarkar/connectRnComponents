import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import {
  arrayOf, shape, string, func
} from 'prop-types';
import { BoxShadow, TextComponent } from '../../ui';
import { fonts } from '../../../styles/baseStyle';
import { mb15, mr10 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({
  firstRow: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    minWidth: 150,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  secondRow: { paddingVertical: 15, paddingHorizontal: 10 },
  icon: { height: 25, width: 25, marginRight: 10 },
  scrollContainer: { flex: 1 }
});

const option = (onPress, icon, title) => (
  <View style={mb15}>
    <BoxShadow borderRadius={8}>
      <TouchableOpacity style={styles.firstRow} onPress={onPress}>
        <Image source={icon} resizeMode="contain" style={styles.icon} />
        <TextComponent
          content={title}
          size={fonts.fs10}
          family={fonts.regular}
        />
      </TouchableOpacity>
    </BoxShadow>
  </View>
);

const generateOptions = (optionsArray) => {
  const options = [];

  for (let i = 0; i < optionsArray.length; i += 2) {
    options.push(
      <View style={mr10} key={i}>
        {option(
          optionsArray[i].onPress,
          optionsArray[i].icon,
          optionsArray[i].title,
        )}
        {optionsArray[i + 1]
          && option(
            optionsArray[i + 1].onPress,
            optionsArray[i + 1].icon,
            optionsArray[i + 1].title,
          )}
      </View>,
    );
  }

  return options;
};

const MenuOptions = ({ optionsArray }) => (
  <ScrollView horizontal style={styles.scrollContainer}>
    {generateOptions(optionsArray)}
  </ScrollView>
);

MenuOptions.propTypes = {
  optionsArray: arrayOf(
    shape({
      icon: Image.propTypes.source.isRequired,
      title: string.isRequired,
      onPress: func.isRequired
    }),
  )
};

export default MenuOptions;
