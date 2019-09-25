import React from 'react';
import { string, number } from 'prop-types';
import AnimateOpacity from '../wrapper/animation/AnimateOpacity';
import TextComponent from './TextComponent';

const AnimatedTextComponent = (
  {
    content, family, size, color
  }
) => (
  <AnimateOpacity animateOnState={content} duration={350}>
    <TextComponent family={family} size={size} color={color} content={content} />
  </AnimateOpacity>
);

AnimatedTextComponent.propTypes = {
  content: string,
  family: string,
  size: number,
  color: string
};

export default AnimatedTextComponent;
