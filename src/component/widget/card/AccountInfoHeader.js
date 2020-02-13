import React from 'react';
import {
  View, StyleSheet, Image, TouchableOpacity, Dimensions
} from 'react-native';
import {
  string, func, bool, number, array
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import { TextComponent, ButtonPrimary } from '../../ui';

const screenWidth = Math.round(Dimensions.get('window').width);
const logoDimension = 50;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  logo: {
    height: logoDimension,
    width: logoDimension
  },
  logoWrapper: {
    borderRadius: 50,
    elevation: 1
  },
  titleContainer: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  leftContainer: {
    flexDirection: 'row'
  },
  rightContainer: {
    maxHeight: 20
  }
});

const AccountInfoHeader = (
  {
    title, id, logo, buttonColor = [colors.primary, colors.primary],
    noTitle, onPress, navigation
  }
) => (
  <View style={styles.container}>
    {
      noTitle
        ? (
          <View style={styles.leftContainer}>
            <Image
              source={logo}
              resizeMode="contain"
              style={{
                width: 120
              }}
            />
          </View>
        )
        : (
          <TouchableOpacity
            style={styles.leftContainer}
            onPress={onPress}
            activeOpacity={0.4}
          >
            <View style={styles.logoWrapper}>
              <Image source={logo} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.titleContainer}>
              <TextComponent
                color={colors.black}
                content={title}
                family={fonts.aBold}
                size={fonts.fs20}
              />
              <TextComponent
                color={colors.black}
                content={`Merchant ID: ${id}`}
                family={fonts.regular}
                size={screenWidth <= 350 ? fonts.fs10 : fonts.fs14}
              />
            </View>
          </TouchableOpacity>
        )
    }

    <View style={styles.rightContainer}>
      <ButtonPrimary
        buttonColor={buttonColor}
        content="Calculator"
        fontSize={fonts.fs12}
        textColor={colors.white}
        onPress={() => navigation.navigate('Calculator')}
      />
    </View>
  </View>
);
AccountInfoHeader.propTypes = {
  title: string,
  id: string,
  logo: number,
  buttonColor: array,
  noTitle: bool,
  onPress: func
};
export default AccountInfoHeader;
