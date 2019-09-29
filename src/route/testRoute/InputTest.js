import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InputField from '../../component/widget/input/InputField';
import BoxShadow from '../../component/ui/wrapper/BoxShadow';
import assets from '../../assets';
import { mb10, p10 } from '../../styles/commonStyle';
import { AmountChange } from '../../component/widget';
import { TextComponent } from "../../component/ui";
import { colors, fonts } from "../../styles/baseStyle";
import Switch from "../../component/ui/input/Switch";

const InputTest = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');

  return (
    <ScrollView>
      <View style={p10}>
        <View style={{ marginLeft: 10 }}>
          <View style={mb10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="UI/Input"
              family={fonts.bold}
            />
          </View>
          <BoxShadow>
            <View style={{ padding: 15 }}>
              <InputField
                value={name}
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
          {/*end UI/Input*/}
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={mb10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/Input [Variation]"
              family={fonts.bold}
            />
          </View>
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
                iconSource={assets.FlagBd}
              />
            </View>
          </BoxShadow>
          {/*ui/Input [Variation]*/}
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={mb10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/InputLabeled [Variation]"
              family={fonts.bold}
            />
          </View>
          <BoxShadow>
            <View style={{ padding: 15 }}>
              <InputField
                value={id}
                label="6 Digit PIN Code"
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
          {/*ui/InputLabeled [Variation] */}
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={mb10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="input/AmountChange"
              family={fonts.bold}
            />
          </View>
          <BoxShadow>
            <View style={{ padding: 15 }}>
              <AmountChange title="Adults" value="0"/>
            </View>
          </BoxShadow>
          {/*input/AmountChange*/}
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={mb10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="widget/card/InputSearch"
              family={fonts.bold}
            />
          </View>
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
          {/* widget/card/InputSearch */}
        </View>


        <View style={{ marginLeft: 10 }}>
          <View style={mb10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="input/Switch"
              family={fonts.bold}
            />
          </View>
          <Switch
            value={false}
            onChange={value => console.log(value)}
            thumbColor={colors.secondary}
            trackColor={colors.white1}
          />
        </View>
        {/*input/Switch*/}
      </View>
    </ScrollView>
  );
}

export default InputTest;
