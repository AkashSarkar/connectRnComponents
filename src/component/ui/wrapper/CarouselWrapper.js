import React, { useState } from 'react';
import {
  View, Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { node } from 'prop-types';


const {
  width: viewportWidth,
  height: viewportHeight
} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const slideHeight = viewportHeight * 0.3;
const slideWidth = wp(75);
export const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = (slideWidth + itemHorizontalMargin * 2) / 1.3;


const CarouselWrapper = ({ componentArray }) => {
  const renderItem = ({ item, index }) => (
    <View>
      {item}
    </View>
  );
  return (
    <Carousel
      data={componentArray}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  );
};

CarouselWrapper.propTypes = {
  componentArray: node
};

export default CarouselWrapper;
