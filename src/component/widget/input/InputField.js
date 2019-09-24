import React, {
  useState, useImperativeHandle, forwardRef, useRef
} from 'react';
import { View, StyleSheet } from 'react-native';
import {
  string, bool, func, number, array, any
} from 'prop-types';

import { Input, TextComponent, AnimatedTextComponent } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';

import { mb10, mb5 } from '../../../styles/commonStyle';
import { validate } from '../../../utils/validation';

const styles = StyleSheet.create({
  labelWrapper: {
    ...mb5
  }
});

const InputField = forwardRef(
  (
    {
      value,
      label,
      autoFocus,
      placeholder,
      keyboardType,
      maxLength,
      disable,
      returnKeyType,
      onChangeText,
      setIsValid,
      validations,
      iconSource,
      isIcon
    },
    ref,
  ) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [isError, setIsError] = useState(false);

    const inputRef = useRef(null);
    const inputFocus = () => {
      inputRef.current.focus();
    };

    const onValidate = () => new Promise((resolve, reject) => {
      try {
        if (validations.length < 0) return reject(false);
        let isInputValid = false;

        for (let i = 0; i < validations.length; i++) {
          const validation = validations[i];
          isInputValid = validate(validation, value);
          if (isInputValid === false) {
            setErrorMsg(validation.msg);
            setIsValid(false);
            setIsError(true);
            resolve(false);
            break;
          }
          if (i === validations.length - 1) {
            setErrorMsg('');
            setIsError(false);
            setIsValid(true);
            resolve(true);
          }
        }
      } catch (e) {
        console.log(e);
      }
    });

    useImperativeHandle(ref, () => ({
      onValidate() {
        return new Promise((resolve, reject) => {
          onValidate().then((res) => {
            resolve(res);
          });
        });
      }
      // focus() {
      //   inputFocus();
      // }
    }));

    return (
      <View style={{ padding: label.length > 0 ? 10 : 0 }}>
        {label.length > 0 && (
          <View style={styles.labelWrapper}>
            <TextComponent
              color={colors.primary}
              content={label}
              family={fonts.medium}
              size={fonts.fs14}
            />
          </View>
        )}
        <View style={mb5}>
          <Input
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            placeholder={placeholder}
            maxLength={maxLength}
            disable={disable}
            onBlur={() => !disable && onValidate()}
            returnKeyType={returnKeyType}
            onChangeText={onChangeText}
            value={value}
            ref={inputRef}
            isError={isError}
            iconSource={iconSource}
            isIcon={isIcon}
          />
        </View>
        {errorMsg.length > 0 ? (
          <View style={mb5}>
            <AnimatedTextComponent
              color={colors.red}
              content={errorMsg}
              family={fonts.regular}
              size={fonts.fs12}
            />
          </View>
        ) : null}
      </View>
    );
  },
);

InputField.defaultProps = {
  label: '',
  disable: false
};

InputField.propTypes = {
  value: any.isRequired,
  label: string,
  placeholder: string,
  autoFocus: bool,
  keyboardType: string.isRequired,
  maxLength: number,
  disable: bool,
  returnKeyType: string.isRequired,
  onChangeText: func.isRequired,
  validations: array.isRequired,
  setIsValid: func.isRequired,
  iconSource: string,
  isIcon: bool
};

export default InputField;
