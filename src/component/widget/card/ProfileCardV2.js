import React from 'react';
import {
  View, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import { string, number } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import { TextComponent } from '../../ui';
import assets from '../../../assets';


const styles = StyleSheet.create({

  firstWrapper: {
    // marginTop: '2%',
    flexDirection: 'row',
    paddingHorizontal: 20
    // marginBottom: '2%'
  },
  firstRightWrapper: {
    justifyContent: 'center',
    marginRight: '30%',
    paddingLeft: 30
  }

});

const ProfileCardV2 = ({
  title,
  id,
  icon
}) => (
  <View>
    <View style={styles.firstWrapper}>
      <View style={{ borderRadius: 50, borderColor: colors.secondary, borderWidth: 5 }}>
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
        <TextComponent content={title} size={fonts.fs20} color={colors.primary} family={fonts.bold} />
        <View>
          <TextComponent content={id} size={fonts.fs12} color={colors.primary} />
        </View>
      </View>
    </View>
    <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
      <TouchableOpacity>
        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
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
  icon: number
};

export default ProfileCardV2;
