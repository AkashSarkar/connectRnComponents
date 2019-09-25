import React from 'react';
import {View} from 'react-native';
import AccountListItem from "./AccountListItem";
import {func, object} from 'prop-types';

const AccountList = ({onSwitchChange, accounts}) => {
  let renderInformation = accounts.map((account, index) => {
    return <View key={index}>
      <AccountListItem
        onSwitchChange={onSwitchChange}
        accountInformation={account}/>
    </View>
  });

  return (
    {renderInformation}
  )
};

AccountList.propTypes = {
  accounts: object.isRequired,
  onSwitchChange: func.isRequired,
};

export default AccountList;