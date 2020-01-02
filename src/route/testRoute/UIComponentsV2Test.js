
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
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
  TextComponent,
  ButtonDoubleV2,
  FlatButtonV2
} from '../../component/ui';
import { mb10, p10, pb10, mb5 } from '../../styles/commonStyle';
import BoxShadow from '../../component/ui/wrapper/BoxShadow';
import InputField from '../../component/widget/input/InputField';
import assets from '../../assets';
import { AmountChange } from '../../component/widget';
import Switch from '../../component/ui/input/Switch';
import TabTest from './TabTest';
import ButtonRectangle from '../../component/ui/button/ButtonRectangle';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
                }}
                />
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
              // disabled
            />
          </View>

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonDoubleV2"
              family={fonts.bold}
            />
            <ButtonDoubleV2
              content="Confirm"
              contentRight="Re-Capture"
              buttonColor={colors.primary}
              textColorLeft={colors.white1}
              textColorRight={colors.grey1}
              buttonHeight={80}
              fontSize={fonts.fs16}
              onPressLeft={() => console.warn('Left')}
              onPressRight={() => console.warn('Right')}
            />
          </View>
          {/* ends ui/button/ButtonPrimaryV2 */}
          
          <View style={{ marginLeft: 10 }}>
            <View style={mb10}>
              <TextComponent
                size={fonts.fs20}
                color={colors.secondary}
                content="UI/Scan-NID"
                family={fonts.bold}
              />
            </View>
            
            <BoxShadow background= {colors.black}>
              
              <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <FlatButtonV2 
                  content="Scan NID Front"
                  marginBottom={mb5}
                  textColor={colors.red2}
                  fontSize={fonts.fs16}
                  onPress={() => console.warn('Flat Button')}
                />
                <Image source={assets.TickIcon} style={{height: 20, width: 20}}/>
              </View>

              <View style={{width: '100%', height: '1%', marginBottom: 2, backgroundColor: colors.black9}}></View>
              
              <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between',  }}>
                <FlatButtonV2 
                  content="Scan NID Back"
                  buttonHeight={30}
                  textColor={colors.red2}
                  fontSize={fonts.fs16}
                  onPress={() => console.warn('Flat Button')}
                />
                <Image source={assets.TickIcon} style={{height: 20, width: 20}}/>
              </View>
              
            </BoxShadow>
            
          </View>

          {/* end UI/ScanNID */}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UIComponentV2Test;
