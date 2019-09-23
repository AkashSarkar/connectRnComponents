import React from 'react';
import { Text } from 'react-native';
import { string, number } from 'prop-types';

const TextComponent = ({
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

TextComponent.propTypes = {
  content: string.isRequired,
  family: string.isRequired,
  size: number.isRequired,
  color: string.isRequired
};

export default TextComponent;
