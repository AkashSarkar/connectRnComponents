import React from 'react';
import { Text } from 'react-native';
import { string, number } from 'prop-types';
import {fonts} from '../../../styles/baseStyle';

const TextComponent = ({
  content, family, size, color
}) => (
  <Text
    style={{
      fontFamily: family || fonts.regular,
      fontSize: size,
      color
    }}
  >
    {content}
  </Text>
);

TextComponent.propTypes = {
  content: string.isRequired,
  family: string,
  size: number.isRequired,
  color: string.isRequired
};

export default TextComponent;
