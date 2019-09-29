import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';

const styles = {
  wrapper: {
    width: 140,
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white1,
    borderRadius: 8,
    elevation: 1,
    shadowColor: colors.black0,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3
  },
  imagestyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 140,
    height: 100
  },
  topWrapper: {
    width: 140,
    height: 100
  },
  bottomWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const TripType = ({
  logo, title, onPress
}) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <View style={styles.topWrapper}>
      <Image
        style={styles.imagestyle}
        source={{ url: logo }}
      />
    </View>
    <View style={styles.bottomWrapper}>
      <TextComponent
        content={title}
        color={colors.primary2}
        family={fonts.semiBold}
        size={fonts.fs14}
      />
    </View>
  </TouchableOpacity>
);

TripType.propTypes = {
  logo: string.isRequired,
  title: string.isRequired,
  onPress: func
};

export default TripType;
