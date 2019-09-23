import React from 'react';
import { Text } from 'react-native';
import { string, number } from 'prop-types';

const SeatListItem = ({
  content, family, size, color
}) => (
  <Text
    style={{
      fontFamily: family,
      fontSize: size,
      color
    }}
  >
    {content}
  </Text>
);

SeatListItem.propTypes = {
  content: string.isRequired,
  family: string.isRequired,
  size: number.isRequired,
  color: string.isRequired
};

export default SeatListItem;
