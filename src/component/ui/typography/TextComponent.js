import React from 'react';
import {Text} from 'react-native';
import {number, object, string} from 'prop-types';

const TextComponent = ({content, family, size, color, extraStyle = {}}) => {
  // TODO have to make extra style work
  return (
    <Text
      style={{
        fontFamily: family,
        fontSize: size,
        color,
      }}
    >
      {content}
    </Text>
  )
};

TextComponent.propTypes = {
  content: string.isRequired,
  family: string.isRequired,
  size: number.isRequired,
  color: string.isRequired,
  extraStyle: object
};

export default TextComponent;
