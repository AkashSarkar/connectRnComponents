import React from 'react';
import { Text } from 'react-native';
import { number, object, string } from 'prop-types';
import { fonts, colors } from '../../../styles/baseStyle';

const TextComponent = ({
  content, family, size, color, extraStyle = {}
}) =>
  // TODO have to make extra style work
  (
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
  family: string,
  size: number.isRequired,
  color: string,
  extraStyle: object
};

TextComponent.defaultProps = {
  family: fonts.light,
  color: colors.text2
};

export default TextComponent;
