import React, {
  useState, useImperativeHandle, forwardRef, useRef, useEffect
} from 'react';
import { View, StyleSheet } from 'react-native';
import {
  string, bool, func, number, array, any
} from 'prop-types';

import {
  Input, InputV2, TextComponent, AnimatedTextComponent
} from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';

import {
  mb10, mb5, ml15, ml5, mt5
} from '../../../styles/commonStyle';
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
      labelColor,
      autoFocus,
      placeholder,
      placeholderTextColor,
      keyboardType,
      maxLength,
      disable,
      returnKeyType,
      onChangeText,
      setIsValid,
      validations,
      iconSource,
      isIcon,
      secureTextEntry,
      v2,
      color
    },
    ref
  ) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [isError, setIsError] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState(false);

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
          onValidate()
            .then((res) => {
              resolve(res);
            });
        });
      }
      // focus() {
      //   inputFocus();
      // }
    }));
    useEffect(() => {
      if (errorMsg.length > 0) {
        setShowErrorMsg(true);
      } else {
        setShowErrorMsg(false);
      }
    }, [errorMsg]);

    return (
      <View style={{ padding: label.length > 0 ? 10 : 0 }}>
        {label.length > 0 && (
          <View style={styles.labelWrapper}>
            <TextComponent
              color={labelColor || colors.primary}
              content={label}
              family={fonts.medium}
              size={fonts.fs14}
            />
          </View>
        )}
        <View>
          {v2 ? (
            <InputV2
              autoFocus={autoFocus}
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
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
              secureTextEntry={secureTextEntry}
              color={color || null}
            />
          ) : (
            <Input
              autoFocus={autoFocus}
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
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
              secureTextEntry={secureTextEntry}
            />
          )}
        </View>
        {showErrorMsg ? (
          <View style={[mb5, mt5]}>
            <AnimatedTextComponent
              color={colors.white1}
              content={errorMsg}
              family={fonts.medium}
              size={fonts.fs12}
            />
          </View>
        ) : null}
      </View>
    );
  }
);

InputField.defaultProps = {
  label: '',
  disable: false
};

InputField.propTypes = {
  value: any.isRequired,
  label: string,
  placeholder: string,
  labelColor: string,
  placeholderTextColor: string,
  autoFocus: bool,
  keyboardType: string.isRequired,
  maxLength: number,
  disable: bool,
  returnKeyType: string.isRequired,
  onChangeText: func.isRequired,
  validations: array.isRequired,
  setIsValid: func.isRequired,
  iconSource: number,
  isIcon: bool,
  secureTextEntry: bool,
  v2: bool
};

export default InputField;
