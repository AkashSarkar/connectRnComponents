import React from 'react';
import {
  View, Image, StyleSheet, TouchableOpacity
} from 'react-native';
// import { TextComponent } from '@appscftl/connect-rn-components';
import { string, number, func } from 'prop-types';
import { TextComponent } from '../../ui';
import { colors, fonts } from '../../../styles/baseStyle';
import assets from '../../../assets';
// import assets from '../../../asset';
// import { fonts, colors } from '../../../style/baseStyle';

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
  }
});

const ProfileCardV2 = ({
  title,
  id,
  icon,
  onPress
}) => (
  <View>
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
    <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
      <TouchableOpacity onPress={onPress}>
        <View style={{ paddingLeft: 10, paddingTop: 13 }}>
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
      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <TouchableOpacity>
          <View style={{ paddingLeft: 35, paddingRight: 10 }}>

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
          <View style={{ paddingRight: 10 }}>

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
  </View>
);

ProfileCardV2.defaultProps = {
  title: 'Incepta Pharmaceutical Ltd',
  id: '1234 1700 20011',
  icon: assets.Store
};

ProfileCardV2.propTypes = {
  title: string,
  id: string,
  icon: number,
  onPress: func
};

export default ProfileCardV2;
