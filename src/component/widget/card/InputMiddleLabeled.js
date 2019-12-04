import React, { useState } from 'react';
import { View } from 'react-native';
import { bool, func, string, array } from 'prop-types';
import { BoxShadow } from '../../ui';
import CardTitleWidget from '../title/CardTitleWidget';
import { mb10, p10, p15, ph15, ph60, ph20 } from '../../../styles/commonStyle';
import InputField from '../input/InputField';
import assets from '../../../assets';
import ButtonPrimary from '../../ui/button/ButtonPrimary';
import { gradientColors, colors, fonts } from '../../../styles/baseStyle';

const InputMiddleLabeled = (
  {
    isInput, isButton,
    onButtonPress, isIcon,
    placeholder, buttonText,
    title, subtitle,
    onTextChange,
    buttonColor
  }
) => {
  const [accountNumber, setAccountNumber] = useState('');
  return (
    <View style={p10}>
      <BoxShadow>
        <View style={[p15, ph20]}>
          <View style={mb10}>
            <CardTitleWidget
              title={title}
              subtitle={subtitle}
            />
          </View>
          {isInput && (
            <View style={mb10}>
              <InputField
                value={accountNumber}
                placeholder={placeholder || null}
                keyboardType="numeric"
                maxLength={11}
                returnKeyType="next"
                onChangeText={(text) => {
                  setAccountNumber(text);
                  onTextChange(text);
                }}
                setIsValid={(validity) => {
                }}
                validations={[
                  {
                    validationType: 'required',
                    value: true,
                    msg: 'This field is required'
                  },
                  {
                    validationType: 'type',
                    value: 'number',
                    msg: 'This field must be number'
                  }
                ]}
                isIcon={isIcon}
                iconSource={assets.FlagBd}
              />
            </View>
          )}
          {isButton && (
            <View style={mb10}>
              <ButtonPrimary
                content={buttonText}
                buttonColor={buttonColor || gradientColors.gradient5}
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14}
                onPress={() => (onButtonPress ? onButtonPress() : null)}
              />
            </View>
          )}

        </View>
      </BoxShadow>
    </View>
  );
};
InputMiddleLabeled.propTypes = {
  isInput: bool,
  isButton: bool,
  isIcon: bool,
  placeholder: string,
  buttonText: string,
  onButtonPress: func,
  title: string,
  subtitle: string,
  onTextChange: func,
  buttonColor: array
};
export default InputMiddleLabeled;
