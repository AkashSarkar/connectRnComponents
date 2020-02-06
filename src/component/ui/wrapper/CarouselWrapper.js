import React, { useState, useEffect, useRef } from 'react';
import {
  View, Dimensions, StyleSheet
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  func, node, bool, number
} from 'prop-types';
import { colors } from '../../../styles/baseStyle';


const {
  width: viewportWidth,
  height: viewportHeight
} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const slideHeight = viewportHeight * 0.3;
const slideWidth = wp(70);
export const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth;
export const itemWidth = (slideWidth + itemHorizontalMargin * 2) / 1;

const styles = StyleSheet.create({
  activeDotStyle:
    {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: -5,
      backgroundColor: colors.primary
    },
  inactiveDotStyle: {
    backgroundColor: colors.white1,
    borderColor: colors.primary,
    borderWidth: 1
  }

});


const CarouselWrapper = ({
  componentArray, isPagination, isMaxWidth, activeIndex, onSliderChange, firstItem
}) => {
  const renderItem = ({ item, index }) => (
    <View>
      {item}
    </View>
  );

  const carouselRef = useRef(null);

  return (
    <>
      <Carousel
        firstItem={firstItem}
        ref={carouselRef}
        data={componentArray}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={isMaxWidth ? viewportWidth - 30 : itemWidth}
        onBeforeSnapToItem={(idx) => {
          onSliderChange(idx);
        }}
      />
      {
      isPagination
    }
    </>
  );
};

CarouselWrapper.defaultProps = {
  isPagination: false,
  isMaxWidth: false,
  activeIndex: 0,
  onSliderChange: () => {}
};

CarouselWrapper.propTypes = {
  componentArray: node.isRequired, // array of components that the slider will display
  isPagination: bool, // boolean that specifies whether pagination will be displayed or not
  isMaxWidth: bool, // boolean that specifies whether the slider will take up the whole width of the screen
  activeIndex: number, // initial active index in the component array
  onSliderChange: func // event handler for swiping the slider, index of item is passed
};

export default CarouselWrapper;
