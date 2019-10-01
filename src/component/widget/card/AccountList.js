import React from 'react';
import { View } from 'react-native';
import { object } from 'prop-types';
import AccountListItem from './AccountListItem';

const AccountList = ({ accounts }) => {
  const renderInformation = accounts.map((account, index) => {
    return (
      <View key={index}>
        <AccountListItem accountInformation={account}/>
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
