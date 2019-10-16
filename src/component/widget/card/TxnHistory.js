import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { string } from 'prop-types';
import { TextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import assets from '../../../assets';

const styles = StyleSheet.create({
  txnWrapper: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: colors.colorSecondery,
    borderBottomWidth: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    height: 22,
    width: 22,
    marginRight: 10
  },
  headerText: {
    flexDirection: 'column',
    width: '90%',
    marginTop: -5,
    marginBottom: 5
  }
});


const TxnHistory = ({
  icon, title, subtitle, description
}) => (
  <View style={styles.txnWrapper}>
    <View style={styles.header}>
      <Image
        source={icon}
        style={styles.icon}
        resizeMode="contain"
      />
      <View style={styles.headerText}>
        <TextComponent
          size={fonts.fs14}
          family={fonts.bold}
          color={colors.black}
          content={title}
        />
        <TextComponent
          size={fonts.fs10}
          family={fonts.regular}
          color={colors.black}
          content={subtitle}
        />
      </View>
    </View>
    <TextComponent
      size={fonts.fs10}
      family={fonts.regular}
      color={colors.black}
      content={description}
    />
  </View>
);

TxnHistory.defaultProps = {
  icon: assets.Connect
};

TxnHistory.propTypes = {
  icon: Image.propTypes.source,
  title: string,
  subtitle: string,
  description: string
};

export default TxnHistory;
