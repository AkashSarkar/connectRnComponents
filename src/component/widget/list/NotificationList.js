/* Generates array of notification based on the data object */
import React from 'react';
import { Image } from 'react-native';
import {
  arrayOf, shape, string, func
} from 'prop-types';
import { Notification } from '..';
import { CarouselWrapper } from '../../ui';
import { colors, gradientColors } from '../../../styles/baseStyle';

/* this function determines the color of the current slide based on its index in every three item interval, 
  grey, black, white if it's in first index, blue(primary) if second, yellow if thrid
*/
const generateColor = idx => ({
  bgColor:
    idx % 2 === 0
      ? gradientColors.gradientPrimary
      : idx % 3 === 0
        ? gradientColors.gradientWhite
        : gradientColors.gradientYellow,
  buttonColor:
    idx % 2 === 0
      ? gradientColors.gradientPrimary
      : idx % 3 === 0
        ? gradientColors.gradientGrey
        : gradientColors.gradientYellow,
  contentColor: idx % 2 === 0 ? colors.white1 : colors.black
});

const generateNotifications = notificationsArray => notificationsArray.map((item, idx) => {
  const componentColors = generateColor(idx + 1);

  return (
    <Notification
      logo={item.logo}
      content={item.content}
      buttonTitle={item.buttonTitle}
      footer={item.footer}
      onButtonPress={item.buttonOnPress}
      key={idx}
      bgColor={componentColors.bgColor}
      buttonColor={componentColors.buttonColor}
      contentColor={componentColors.contentColor}
    />
  );
});

const NotificationList = ({ notificationsArray }) => (
  <>
    <CarouselWrapper
      componentArray={generateNotifications(notificationsArray)}
      activeIndex={0}
    />
  </>
);

NotificationList.propTypes = {
  notificationsArray: arrayOf(
    shape({
      logo: Image.propTypes.source.isRequired,
      content: string.isRequired,
      buttonTitle: string.isRequired,
      footer: string.isRequired,
      buttonOnPress: func.isRequired
    }),
  ) // array of objects with specified shape
};

export default NotificationList;
