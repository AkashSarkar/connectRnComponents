import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ButtonSecondaryBadge } from '..';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10
  },
  rightViewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const HeaderPrimary = ({
  content
}) => (
  <View style={styles.container}>
    <TextComponent content={content} size={fonts.fs20} color={colors.text1} />
    <View style={styles.rightViewWrapper}>
      <View style={{ marginRight: 15 }}>
        <ButtonSecondaryBadge
          content="Pending"
          buttonColor="#f9f9f9"
          badgeCount="15"
          textColorContent={colors.colorSecondery}
          textColorBadge={colors.white1}
          fontSizeText={fonts.fs12}
          fontSizeBadge={fonts.fs10}
          onPress={() => console.warn('Button Pending')}
        />
      </View>
      <View>
        <ButtonSecondaryBadge
          content="Search"
          buttonColor="#f9f9f9"
          textColorContent={colors.colorSecondery}
          textColorBadge={colors.white1}
          fontSizeText={fonts.fs12}
          fontSizeBadge={fonts.fs10}
          onPress={() => console.warn('Button Search')}
        />
      </View>
    </View>
  </View>
);

export default HeaderPrimary;
