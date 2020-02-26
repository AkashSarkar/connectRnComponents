import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { string, number, func } from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import { TextComponent } from '../../ui';
import assets from '../../../assets';

const styles = {
  container: {
    marginHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: colors.grey2,
    borderRadius: 16
  },
  upperView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.white1
  },
  leftUpper: {
    flexDirection: 'row'
  },
  leftUpperView: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.white1,
    paddingVertical: 12
  },

  rightUpper: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '50%',
    paddingVertical: 12
  },
  lowerView: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 12
  }
};

const PaymentsCard = ({
  upperLeftContent,
  upperRightContent,
  lowerContent1,
  lowerContent2,
  onPress,
  upperLeftIcon
}) => (
  <View style={styles.container}>
    <View style={styles.upperView}>
      <View style={styles.leftUpperView}>

        <TouchableOpacity onPress={onPress}>
          <View style={styles.leftUpper}>
            <View style={{ paddingRight: 20 }}>
              <TextComponent
                color={colors.black0}
                content={upperLeftContent}
                size={fonts.fs14}
                family={fonts.medium}
              />
            </View>
            <Image
              source={upperLeftIcon}
              style={{
                height: 14,
                width: 14
              }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rightUpper}>

        <TextComponent
          color={colors.black8}
          content={upperRightContent}
          size={fonts.fs14}
          family={fonts.medium}
        />
      </View>
    </View>
    <View style={styles.lowerView}>
      <TextComponent
        content={lowerContent1}
        size={fonts.fs14}
        color={colors.red2}
        family={fonts.medium}
      />
      <TextComponent
        color={colors.red2}
        content={lowerContent2}
        size={fonts.fs14}
        family={fonts.medium}
      />
    </View>
  </View>
);
PaymentsCard.defaultProps = {
  upperLeftContent: 'Primary Account',
  upperRightContent: '0',
  upperLeftIcon: assets.Change,
  lowerContent1: 'Remaining balance:',
  lowerContent2: '0'
};

PaymentsCard.propTypes = {
  upperLeftContent: string,
  upperRightContent: string,
  upperLeftIcon: number,
  lowerContent1: string,
  lowerContent2: string,
  onPress: func
};

export default PaymentsCard;
