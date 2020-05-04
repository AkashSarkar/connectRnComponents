import React from 'react';
import NotificationSnacbar from '../../component/widget/interactive/notification/NotificationSnacbar';
import { colors } from '../../styles/baseStyle';
import assets from '../../assets';

const NotificationSnacbarTest = ({ navigation }) => (
  <NotificationSnacbar
    textColor={colors.red}
    backgroundColor={colors.secondary}
    yPosition={-200}
    duration={2000}
    icon={assets.Add}
    message="Hello"
    size={20}
  />
);

export default NotificationSnacbarTest;
