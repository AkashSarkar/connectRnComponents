import React from 'react';
import { StyleSheet, View } from 'react-native';
import { func } from 'prop-types';
import Title from '../title/Title';
import { ph20, pv10 } from '../../../styles/commonStyle';
import BoxShadow from '../../ui/wrapper/BoxShadow';
import { colors, fonts } from '../../../styles/baseStyle';
import { ButtonCommunication } from '../../ui';
import assets from '../../../assets';

const styles = StyleSheet.create({
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...ph20,
    ...pv10
  }
});

const AccountDetails = ({ handleShareButton, shareIcon }) => (
  <BoxShadow>
    <View style={styles.contentWrapper}>
      <Title subTitle="Account Name" title="Anisur Rahman" />
      <ButtonCommunication
        logo={shareIcon}
        buttonColor={colors.white1}
        iconHeight={35}
        iconWidth={35}
        textColor={colors.text2}
        fontSize={fonts.fs14}
        onPress={handleShareButton}
      />
    </View>
    <View style={styles.contentWrapper}>
      <Title subTitle="Account No" title="0000 1234 5678 9" />
    </View>
    <View style={styles.contentWrapper}>
      <Title subTitle="Routing No" title="123456789" />
      <Title subTitle="CONNECT Suffix" title="12" />
    </View>
  </BoxShadow>
);

AccountDetails.propTypes = {
  handleShareButton: func.isRequired
};

AccountDetails.defaultProps = {
  shareIcon: assets.Share
};

export default AccountDetails;
