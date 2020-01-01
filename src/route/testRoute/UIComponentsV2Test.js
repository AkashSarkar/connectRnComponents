
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import {
  ButtonAdd,
  ButtonBrand,
  ButtonCenter,
  ButtonCommunication,
  ButtonConnect,
  ButtonDouble,
  ButtonGradientPrimary,
  ButtonGrey,
  ButtonPrimaryV2,
  ButtonPrimaryBadge,
  ButtonQuickAmount,
  ButtonSecondaryBadge,
  ButtonTag,
  HeaderPrimary,
  HeaderTop,
  MenuItem,
  TextComponent
} from '../../component/ui';
import { mb10, p10, pb10 } from '../../styles/commonStyle';
import BoxShadow from '../../component/ui/wrapper/BoxShadow';
import InputField from '../../component/widget/input/InputField';
import assets from '../../assets';
import { AmountChange } from '../../component/widget';
import Switch from '../../component/ui/input/Switch';
import TabTest from './TabTest';
import ButtonRectangle from '../../component/ui/button/ButtonRectangle';

const screenContainer = {
  paddingHorizontal: 10,
  paddingVertical: 10,
  justifyContent: 'space-between'
};

const UIComponentV2Test = ({ navigation }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');


  const headerButtonsInformation = [
    {
      content: 'Pending',
      badgeCount: 15,
      onButtonClick: () => {
        console.warn('Pending from 1');
      }
    },
    {
      content: 'Search',
      onButtonClick: () => {
        console.warn('search from 1');
      }
    }
  ];


  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={screenContainer}>
        <View>
          <View style={[pb10]}>
            <TextComponent
              size={fonts.fs30}
              color={colors.black0}
              content="Input"
              family={fonts.bold}
            />
          </View>
          <View style={p10}>

            <View style={{ marginLeft: 10 }}>
              <View style={mb10}>
                <TextComponent
                  size={fonts.fs20}
                  color={colors.secondary}
                  content="UI/InputV2"
                  family={fonts.bold}
                />
              </View>
              <BoxShadow>
                <View style={{ padding: 15 }}>
                  <InputField
                    value={name}
                    placeholder="Temporary Connect ID"
                    placeholderTextColor="#ff3d82"
                    v2
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
              {/* end UI/Input */}
            </View>
            <View style={{ marginLeft: 10 }}>
              <View style={mb10}>
                <TextComponent
                  size={fonts.fs20}
                  color={colors.secondary}
                  content="UI/InputWidgetV2"
                  family={fonts.bold}
                />
              </View>
              <BoxShadow background="black">
                <View style={{ padding: 15 }}>
                  <InputField
                    value={name}
                    placeholder="Temporary Connect ID"
                    placeholderTextColor="#ff3d82"
                    v2
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
                <View style={{
                  borderColor: '#1a1a1a',
                  borderWidth: 1
                }} />
                <View style={{ padding: 15 }}>
                  <InputField
                    value={name}
                    placeholder="Access Token"
                    placeholderTextColor="#ff3d82"
                    v2
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
              {/* end UI/Input */}
            </View>
          </View>

          <View style={p10}>
            <View style={[pb10]}>
              <TextComponent
                size={fonts.fs30}
                color={colors.black0}
                content="Buttons"
                family={fonts.bold}
              />
            </View>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonPrimaryV2"
              family={fonts.bold}
            />
            <ButtonPrimaryV2
              content="Button Primary V2"
              buttonColor={colors.primary}
              buttonHeight={80}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Button Primary')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UIComponentV2Test;
