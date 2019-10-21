import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonSecondaryBadge from '../button/ButtonSecondaryBadge';
import { colors, fonts } from '../../../styles/baseStyle';
import TextComponent from '../typography/TextComponent';
import { string, array } from 'prop-types';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  rightViewWrapper: {
    flexDirection: 'row'
  }
});

const HeaderPrimary = ({content, buttonItems}) => {
  let _badgeButtons = buttonItems.map((item, index) => {
    return(
      <View key={index} style={styles.rightViewWrapper}>
        <ButtonSecondaryBadge
          content={item.content}
          buttonColor={item.buttonColor}
          badgeCount={item.badgeCount}
          textColorContent={item.textColorContent}
          textColorBadge={item.textColorBadge}
          fontSizeText={item.fontSizeText}
          fontSizeBadge={item.fontSizeBadge}
          onPress={item.onButtonClick}
      />
      </View>
    );
  });

  return(
    <View style={styles.container}>
      <TextComponent content={content} size={fonts.fs20} color={colors.text1} />
      {_badgeButtons}
    </View>
  )
};

HeaderPrimary.propTypes = {
  content: string.isRequired,
  buttonItems: array.isRequired
}

export default HeaderPrimary;
