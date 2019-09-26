import React from 'react';
import { Text } from 'react-native';
import { number, object, string } from 'prop-types';
import { fonts } from '../../../styles/baseStyle';

const TextComponent = ({
  content, family, size, color, extraStyle = {}
}) =>
  // TODO have to make extra style work
  (
    <Text
      style={{
        fontFamily: family || fonts.light,
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
  color: string.isRequired,
  textDecorationLine: string,
  extraStyle: object
};

export default TextComponent;
