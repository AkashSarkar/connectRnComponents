import React, {
  forwardRef, useImperativeHandle, useRef, useState
} from 'react';
import {
  StyleSheet, TextInput, View, Image
} from 'react-native';
import {
  any, bool, func, number, string
} from 'prop-types';
import { colors, fonts } from '../../../styles/baseStyle';
import { mb5, mr5, pv5 } from '../../../styles/commonStyle';

const style = StyleSheet.create({
  input: {
    width: '100%',
    height: 30,
    // backgroundColor: colors.white2,
    fontFamily: fonts.medium,
    fontSize: fonts.fs12,
    color: colors.black,
    letterSpacing: 0.9,
    // ...pl15,
    ...pv5
  },
  wrapperStyle: {
    flexDirection: 'row',
    borderBottomColor: colors.grey3,
    borderBottomWidth: 1
  },
  iconStyle: {
    height: 30,
    width: 30
  },
  onFocus: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1
  },
  onError: {
    borderBottomColor: colors.error,
    borderBottomWidth: 1
  }
});

const Input = forwardRef(
  (
    {
      value,
      placeholder,
      placeholderTextColor,
      autoFocus,
      keyboardType,
      maxLength,
      disable,
      onBlur,
      returnKeyType,
      onChangeText,
      multiline,
      numberOfLines,
      isError,
      iconSource,
      isIcon,
      secureTextEntry
    },
    ref,
  ) => {
    const textInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
      focus() {
        textInputRef.current.focus();
      }
    }));

    const [onInputFocus, setOnInputFocus] = useState(false);

    // const borderStyle = {
    //   borderBottomColor: isError ? colors.error : colors.primary
    //   // borderBottomWidth: isError ? 1 : onInputFocus ? 1 :
    // };

    const borderStyle = () => {
      let color = colors.grey1;

      if (isError) {
        color = colors.red1;
      } else if (onInputFocus) {
        color = colors.primary;
      }

      return {
        borderBottomColor: color
      };
    };

    return (
      <View style={[style.wrapperStyle, borderStyle(), { opacity: disable ? 0.2 : 1.0 }]}>
        {isIcon && (
          <View style={[mr5, mb5]}>
            <Image source={iconSource} style={style.iconStyle} />
          </View>
        )}
        <TextInput
          style={style.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={!disable}
          onBlur={() => {
            onBlur();
            setOnInputFocus(false);
          }}
          onFocus={() => {
            setOnInputFocus(true);
          }}
          returnKeyType={returnKeyType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          selectTextOnFocus={false}
          contextMenuHidden
          ref={textInputRef}
          secureTextEntry={secureTextEntry}
          // blurOnSubmit={false}
        />
      </View>
    );
  },
);

Input.defaultProps = {
  placeholder: 'Type Here',
  multiline: false,
  numberOfLines: 5
};

Input.propTypes = {
  value: any.isRequired,
  placeholder: string,
  placeholderTextColor: string,
  autoFocus: bool,
  keyboardType: string.isRequired,
  maxLength: number,
  disable: bool.isRequired,
  onBlur: func.isRequired,
  returnKeyType: string.isRequired,
  onChangeText: func.isRequired,
  multiline: bool,
  numberOfLines: number,
  isError: bool.isRequired,
  iconSource: number,
  isIcon: bool,
  secureTextEntry: bool
};

export default Input;
