import React, { useState } from 'react';
import { View } from 'react-native';
import InputField from '../../component/widget/input/InputField';
import BoxShadow from '../../component/ui/wrapper/BoxShadow';
import assets from '../../assets';
import { p10 } from '../../styles/commonStyle';

const InputTest = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');

  return (
    <View style={p10}>
      <BoxShadow>
        <View style={{ padding: 15 }}>
          <InputField
            value={name}
            autoFocus
            keyboardType="numeric"
            maxLength={11}
            returnKeyType="next"
            onChangeText={(text) => {
              setName(text);
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
          />
        </View>
      </BoxShadow>
      <BoxShadow>
        <View style={{ padding: 15 }}>
          <InputField
            value={id}
            label="Sender's Name"
            keyboardType="numeric"
            maxLength={11}
            returnKeyType="next"
            onChangeText={(text) => {
              setId(text);
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
          />
        </View>
      </BoxShadow>
      <BoxShadow>
        <View style={{ padding: 15 }}>
          <InputField
            value={number}
            placeholder="+880"
            keyboardType="numeric"
            maxLength={11}
            returnKeyType="next"
            onChangeText={(text) => {
              setNumber(text);
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
            isIcon
            iconSource={assets.Check}
          />
        </View>
      </BoxShadow>

      <BoxShadow>
        <View style={{ padding: 15 }}>
          <InputField
            value={search}
            placeholder="Type here"
            keyboardType="default"
            maxLength={11}
            returnKeyType="next"
            onChangeText={(text) => {
              setSearch(text);
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
            isIcon
            iconSource={assets.Search}
          />
        </View>
      </BoxShadow>
    </View>
  );
}

export default InputTest;
