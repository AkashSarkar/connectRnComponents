import React from 'react';
import {
  View, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import {
  string, number, func, bool
} from 'prop-types';
import {
  TextComponent,
  ButtonSecondary
} from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';
import assets from '../../../assets';
import { pr10, pt15, pl10 } from '../../../styles/commonStyle';

const styles = StyleSheet.create({

  firstWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  firstRightWrapper: {
    justifyContent: 'center',
    marginRight: '30%',
    paddingLeft: 30
  },
  imageWrapper: {
    borderRadius: 50,
    borderColor: colors.secondary,
    borderWidth: 5
  },
  ChangeImageWrapper: {
    position: 'absolute',
    width: 66,
    height: 24,
    bottom: -10,
    left: 13
  },
  contentProfile: {
    paddingHorizontal: 40,
    paddingTop: 20
  },
  assetsWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  connectAssets: {
    flexDirection: 'row',
    paddingTop: 10
  },
  k1: {
    paddingLeft: 35,
    paddingRight: 10
  }
});

const ProfileCardV2 = ({
  title,
  id,
  icon,
  onPress,
  isBusinessProfile,
  isEmptyStoreName,
  profileContent,
  isChangeImage,
  storeButton
}) => (
  <>
    <View style={styles.firstWrapper}>
      <View style={styles.imageWrapper}>
        <Image
          source={icon}
          style={{
            height: 90,
            width: 90
          }}
          resizeMode="contain"
        />
        {
            isChangeImage && (
              <TouchableOpacity
                hitSlop={{
                  top: 20, bottom: 20, left: 20, right: 20
                }}
                onPress={() => console.log('Change')}
              >
                <Image
                  source={assets.RemoveBTN}
                  style={styles.ChangeImageWrapper}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )
          }
      </View>
      <View style={styles.firstRightWrapper}>
        <TextComponent
          content={title}
          size={fonts.fs20}
          color={colors.primary}
          family={fonts.medium}
        />
        <View>
          <TextComponent
            content={id}
            size={fonts.fs12}
            color={colors.primary}
            family={fonts.light}
          />
        </View>
      </View>
    </View>
    {
        isBusinessProfile && (
          <View style={styles.contentProfile}>
            {
              isEmptyStoreName && (
                <ButtonSecondary
                  isLeftIcon
                  leftIcon={assets.Add2}
                  content={storeButton}
                  family={fonts.bold}
                  buttonColor={colors.white1}
                  buttonHeight={50}
                  textColor={colors.secondary}
                  fontSize={fonts.fs12}
                  onPress={() => ''}
                />
              )
            }
            {
              !isEmptyStoreName && (
                <TextComponent
                  content={profileContent}
                  size={fonts.fs12}
                  color={colors.secondary}
                  family={fonts.bold}
                />
              )
            }

          </View>
        )
      }
    {
        !isBusinessProfile && (
          <View style={styles.assetsWrapper}>
            <TouchableOpacity onPress={onPress}>
              <View style={[pl10, pt15]}>
                <View>
                  <Image
                    source={assets.Location}
                    style={{
                      height: 24,
                      width: 80
                    }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.connectAssets}>
              <TouchableOpacity>

                <View style={styles.k1}>
                  <Image
                    source={assets.K1}
                    style={{
                      height: 30,
                      width: 30
                    }}
                    resizeMode="contain"
                  />

                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={pr10}>

                  <Image
                    source={assets.ConnectCode}
                    style={{
                      height: 30,
                      width: 30
                    }}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View>
                  <Image
                    source={assets.ConnectCredit}
                    style={{
                      height: 30,
                      width: 30
                    }}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
  </>
);

ProfileCardV2.defaultProps = {
  title: 'Incepta Pharmaceutical Ltd',
  id: '1234 1700 20011',
  icon: assets.Store,
  profileContent: 'Lazz Pharma'
};

ProfileCardV2.propTypes = {
  title: string,
  id: string,
  icon: number,
  onPress: func,
  isBusinessProfile: bool,
  isEmptyStoreName: bool,
  profileContent: string,
  isChangeImage: bool,
  storeButton: string
};

export default ProfileCardV2;
