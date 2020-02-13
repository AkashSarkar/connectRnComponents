import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  string, number, func, array
} from 'prop-types';
import { fonts, colors } from '../../../styles/baseStyle';
import { TextComponent } from '../../ui';
import assets from '../../../assets';
import { mb10, pl10 } from '../../../styles/commonStyle';

const styles = {
  container: {
    flexDirection: 'row',
    height: 170,
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
    borderBottomLeftRadius: 20,
    backgroundColor: colors.white2
  },
  rightContainer: {
    width: '30%',
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.white3
  },
  leftWrapper: {
    padding: 15
  },
  contentTopWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 46
  },
  contentBottomWrapper: {
    flexDirection: 'row'
  },
  logoWrapper: {
    borderRadius: 50,
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
    logo = assets.Bkash,
    title = 'Bismillah Store',
    merchantID = '1234 1700 2001 1',
    onLeftPress,
    onRightPress,
    leftIcon,
    rightIcon,
    badge = assets.Bronze,
    badgeTitle = 'Bronze'
  }
) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.leftWrapper}>
          <View style={styles.contentTopWrapper}>
            <View style={styles.logoWrapper}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View>
              <TextComponent
                content={title}
                size={fonts.fs20}
                color={colors.black}
                family={fonts.medium}
              />
              <TextComponent
                content="Merchant ID:"
                size={fonts.fs12}
                color={colors.black8}
                family={fonts.light}
              />
              <TextComponent
                content={merchantID}
                size={fonts.fs14}
                color={colors.black8}
                family={fonts.medium}
              />
            </View>
          </View>
          <View style={styles.contentBottomWrapper}>
            <TouchableOpacity>
              <Image
                source={leftIcon}
                style={{
                  height: 24,
                  width: 80
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={pl10}>
                <Image
                  source={rightIcon}
                  style={{
                    height: 24,
                    width: 80
                  }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightContentWrapper}>
          <View style={mb10}>
            <Image
              source={badge}
              style={{ height: 80, width: 68 }}
              resizeMode="contain"
            />
          </View>
          <TextComponent
            content={badgeTitle}
            color={colors.black8}
            size={fonts.fs16}
            family={fonts.light}
          />
        </View>

      </View>
    </View>
  );
};
ProfileCard.propTypes = {
  title: string,
  merchantID: string,
  leftIcon: number,
  rightIcon: number,
  onLeftPress: func,
  onRightPress: func,
  logo: number,
  leftButtonColor: array,
  rightButtonColor: array,
  badge: number,
  badgeTitle: string
};
export default ProfileCard;
