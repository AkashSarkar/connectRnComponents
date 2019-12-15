import React from 'react';
import { View, Image } from 'react-native';
import {
  string, number, func, bool, array
} from 'prop-types';
import LinerGradient from 'react-native-linear-gradient';
import { gradientColors, fonts, colors } from '../../../styles/baseStyle';
import { TextComponent, ButtonPrimary } from '../../ui';
import assets from '../../../assets';
import { mr10, mb10 } from '../../../styles/commonStyle';

const styles = {
  container: {
    flexDirection: 'row',
    width: '100%'
  },
  leftContainer: {
    alignItems: 'flex-start',
    width: '70%',
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  rightContainer: {
    width: '30%',
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  leftWrapper: {
    padding: 15
  },
  contentTopWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20
  },
  contentBottomWrapper: {
    flexDirection: 'row'
  },
  logoWrapper: {
    borderRadius: 50,
    // elevation: 1,
    // shadowOffset: {
    //   width: 0,
    //   height: 3
    // }
    marginRight: 5
  },
  logo: {
    height: 60,
    width: 60
  },
  rightContentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
const ProfileCard = (
  {
    leftGradient = gradientColors.gradient4,
    rightGradient = gradientColors.gradient3,
    logo = assets.Bkash,
    title = 'Bismillah Store',
    connectId = '1234 1700 2001 1',
    leftButtonColor = gradientColors.gradient5,
    rightButtonColor = gradientColors.gradient5,
    onLeftPress,
    onRightPress,
    leftButtonText = 'Location',
    rightButtonText = 'QR Code',
    badge = assets.Bronze,
    badgeTitle = 'Bronze'
  }
) => {
  return (
    <View style={styles.container}>
      <LinerGradient colors={leftGradient} style={styles.leftContainer}>
        <View style={styles.leftWrapper}>
          <View style={styles.contentTopWrapper}>
            <View style={styles.logoWrapper}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View>
              <TextComponent
                content={title}
                size={fonts.fs18}
                color={colors.black}
                family={fonts.semiBold}
              />
              <TextComponent
                content="CONNECT ID:"
                size={fonts.fs10}
                color={colors.black8}
                family={fonts.medium}
              />
              <TextComponent
                content={connectId}
                size={fonts.fs12}
                color={colors.black8}
                family={fonts.medium}
              />
            </View>
          </View>
          <View style={styles.contentBottomWrapper}>
            <View style={[mr10, { width: '40%', height: '10%' }]}>
              <ButtonPrimary
                content={leftButtonText}
                buttonColor={leftButtonColor}
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14}
                onPress={onLeftPress}
              />
            </View>
            <View style={{ width: '40%', height: '10%' }}>
              <ButtonPrimary
                content={rightButtonText}
                buttonColor={rightButtonColor}
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14}
                onPress={onRightPress}
              />
            </View>
          </View>
        </View>
      </LinerGradient>
      <LinerGradient colors={rightGradient} style={styles.rightContainer}>
        <View style={styles.rightContentWrapper}>
          <View style={mb10}>
            <Image
              source={badge}
              style={{ height: 70, width: 70 }}
              resizeMode="contain"
            />
          </View>
          <TextComponent
            content={badgeTitle}
            color={colors.black}
            size={fonts.fs16}
            family={fonts.light}
          />
        </View>

      </LinerGradient>
    </View>
  );
};
ProfileCard.propTypes = {
  title: string,
  connectId: string,
  leftButtonText: string,
  rightButtonText: string,
  onLeftPress: func,
  onRightPress: func,
  leftGradient: array,
  rightGradient: array,
  logo: number,
  leftButtonColor: array,
  rightButtonColor: array,
  badge: number,
  badgeTitle: string
};
export default ProfileCard;
