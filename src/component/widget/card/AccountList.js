import React from 'react';
import { View } from 'react-native';
import AccountListItem from './AccountListItem';
import { object } from 'prop-types';

const AccountList = ({ accounts }) => {
  const renderInformation = accounts.map((account, index) => {
    return (
      <View key={index}>
        <AccountListItem accountInformation={account} />
      </View>
    );
  });

  return (
    <View>
      {renderInformation}
    </View>
  );
};

AccountList.propTypes = {
  accounts: object.isRequired
};

export default AccountList;