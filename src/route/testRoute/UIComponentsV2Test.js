import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { colors, fonts } from '../../styles/baseStyle';
import {
  ButtonDoubleV2,
  ButtonBorderV2,
  ButtonPrimaryV2,
  FlatButtonV2,
  ButtonSecondary,
  TextComponent,
  ButtonInfo
} from '../../component/ui';
import {
  mb10, mb5, p10, pb10
} from '../../styles/commonStyle';
import BoxShadow from '../../component/ui/wrapper/BoxShadow';
import InputField from '../../component/widget/input/InputField';
import assets from '../../assets';


const screenContainer = {
  paddingHorizontal: 10,
  paddingVertical: 10,
  justifyContent: 'space-between'
};

const UIComponentV2Test = () => {
  const [name, setName] = useState('');

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
                    setIsValid={() => {
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
                    setIsValid={() => {
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
                    setIsValid={() => {
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

          {/* ends ui/button/ButtonPrimaryV2 */}

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
              content="ui/button/ButtonSecondary"
              family={fonts.bold}
            />
            <ButtonSecondary
              isLeftIcon
              isRightIcon
              leftIcon={assets.Add}
              rightIcon={assets.TickIcon}
              content="Single Button With Icon"
              buttonColor={colors.white1}
              buttonHeight={40}
              textColor={colors.red2}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Single Button With Icon')}
              // disabled
            />
          </View>

          {/* ends ui/button/SingleButtonWithIcon */}
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

          {/* ends ui/button/ButtonDoubleV2 */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonDoubleV3"
              family={fonts.bold}
            />
            <ButtonBorderV2
              content="Get Paid Now"
              contentMiddle="|"
              contentRight="Get Paid Later"
              buttonColor={colors.red2}
              textColorLeft={colors.white1}
              textColorMiddle={colors.white1}
              textColorRight={colors.white1}
              buttonHeight={80}
              fontSize={fonts.fs16}
              onPressLeft={() => console.warn('Left')}
              onPressRight={() => console.warn('Right')}
            />
          </View>

          {/* ends ui/button/ButtonBorderV2 */}
          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonInfo"
              family={fonts.bold}
            />
            <ButtonInfo
              content="Button Info"
              buttonHeight={50}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Info')}
            />
          </View>

          { /* ends ui/button/ButtonInfo */ }

          <View style={{ marginLeft: 10 }}>
            <View style={mb10}>
              <TextComponent
                size={fonts.fs20}
                color={colors.secondary}
                content="UI/Scan-NID"
                family={fonts.bold}
              />
            </View>
            <View style={{ backgroundColor: colors.black }}>
              <FlatButtonV2
                content="Scan NID Front"
                marginBottom={mb5}
                textColor={colors.red2}
                fontSize={fonts.fs16}
                buttonColor={colors.primary}
                tickImage={assets.TickIcon}
                onPress={() => console.warn('Flat Button')}
              />
            </View>
          </View>

          {/* end UI/ScanNID */}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UIComponentV2Test;
