import React from 'react';
import { View, Image } from 'react-native';
import { fonts, colors } from '../../../styles/baseStyle';
import { TextComponent } from '../../ui';
import assets from '../../../assets';
import { ph5 } from '../../../styles/commonStyle';
import { string, number } from 'prop-types';

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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  leftUpperView: {
    width: '50%',
    flexDirection: 'row',
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
  upperLeftIcon,
  upperRightIcon,
  lowerIcon
}) => (
  <View style={styles.container}>
    <View style={styles.upperView}>
      <View style={styles.leftUpperView}>
        <View style={styles.leftUpper}>
          <View style={{ paddingRight: 20 }}>
            <TextComponent
              color={colors.black8}
              content={upperLeftContent}
              size={fonts.fs14}
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
      </View>
      <View style={styles.rightUpper}>
        <View style={{ paddingRight: 5 }}>
          <Image
            source={upperRightIcon}
            style={{
              height: 14,
              width: 14
            }}
            resizeMode="contain"
          />
        </View>
        <TextComponent
          color={colors.black8}
          content={upperRightContent}
          size={fonts.fs14}
        />
      </View>
    </View>
    <View style={styles.lowerView}>
      <TextComponent
        content={lowerContent1}
        size={fonts.fs14}
        color={colors.red2}
      />
      <View style={ph5}>
        <Image
          source={lowerIcon}
          style={{
            height: 14,
            width: 14
          }}
          resizeMode="contain"
        />
      </View>
      <TextComponent
        color={colors.red2}
        content={lowerContent2}
        size={fonts.fs14}
      />
    </View>
  </View>
);
PaymentsCard.defaultProps = {
  upperLeftContent: 'Salary Account',
  upperRightContent: '0',
  upperLeftIcon: assets.Add,
  upperRightIcon: assets.Add,
  lowerContent1: 'Remaining balance:',
  lowerContent2: '0',
  lowerIcon: assets.Add
};

PaymentsCard.propTypes = {
  upperLeftContent: string,
  upperRightContent: string,
  upperLeftIcon: number,
  upperRightIcon: number,
  lowerContent1: string,
  lowerContent2: string,
  lowerIcon: number
};

export default PaymentsCard;
