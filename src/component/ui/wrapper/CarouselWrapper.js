import React, { useState, useEffect, useRef } from 'react';
import {
  View, Dimensions, StyleSheet
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { func, node, bool, number, string } from 'prop-types';
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
      marginHorizontal: -10
    },
  inactiveDotStyle: {
    backgroundColor: colors.white1,
    borderWidth: 1
  }

});


const CarouselWrapper = ({
  componentArray, isPagination, isMaxWidth, activeIndex, onSliderChange, dotStyleColor, inactiveDotStyleColor
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderItem = ({ item, index }) => (
    <View>
      {item}
    </View>
  );

  const renderPagination = () => (
    <Pagination
      dotsLength={componentArray.length}
      activeDotIndex={activeTab}
      containerStyle={{ paddingTop: 10 }}
      dotStyle={[styles.activeDotStyle, { backgroundColor: dotStyleColor || colors.primary }]}
      inactiveDotStyle={[styles.inactiveDotStyle, { borderColor: inactiveDotStyleColor || colors.primary }]}
      inactiveDotOpacity={0.9}
      inactiveDotScale={0.7}
    />
  );

  const carouselRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      carouselRef.current.snapToItem(activeIndex);
    }, 500);
  }, []);

  return (
    <>
      <Carousel
        ref={carouselRef}
        data={componentArray}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={isMaxWidth ? viewportWidth - 30 : itemWidth}
        onBeforeSnapToItem={(idx) => {
          setActiveTab(idx);
          onSliderChange(idx);
        }}
      />
      {
        isPagination && renderPagination()
      }
    </>
  );
};

CarouselWrapper.defaultProps = {
  isPagination: false,
  isMaxWidth: false,
  activeIndex: 0,
  onSliderChange: () => { }
};

CarouselWrapper.propTypes = {
  componentArray: node.isRequired, // array of components that the slider will display
  isPagination: bool, // boolean that specifies whether pagination will be displayed or not
  isMaxWidth: bool, // boolean that specifies whether the slider will take up the whole width of the screen
  activeIndex: number, // initial active index in the component array
  onSliderChange: func, // event handler for swiping the slider, index of item is passed
  dotStyleColor: string,
  inactiveDotStyleColor: string
};

export default CarouselWrapper;
