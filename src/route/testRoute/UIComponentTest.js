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
  ButtonPrimary,
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

const screenContainer = {
  paddingHorizontal: 10,
  paddingVertical: 10,
  justifyContent: 'space-between'
};

const UIComponentTest = ({ navigation }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');
  return (
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
            {/* end UI/Input */}
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
            {/* ui/Input [Variation] */}
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
            {/* ui/InputLabeled [Variation] */}
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
                <AmountChange title="Adults" value="0" />
              </View>
            </BoxShadow>
            {/* input/AmountChange */}
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
          {/* input/Switch */}
        </View>
      </View>

      <View>
        <View style={[pb10]}>
          <TextComponent
            size={fonts.fs30}
            color={colors.black0}
            content="Button"
            family={fonts.bold}
          />
        </View>
        <SafeAreaView>
          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonDouble"
              family={fonts.bold}
            />
            <ButtonDouble
              content="Button Double"
              contentRight="Type here"
              buttonColor={gradientColors.gradient5}
              textColorLeft={colors.bgPrimary}
              textColorRight={colors.black1}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Button Primary')}
            />
          </View>
          {/* ui/button/ButtonDouble */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonPrimary"
              family={fonts.bold}
            />
            <ButtonPrimary
              content="Button Primary"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Button Primary')}
            />
          </View>
          {/* ui/button/ButtonPrimary */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonGradientPrimary"
              family={fonts.bold}
            />
            <ButtonGradientPrimary
              content="Button Gradient Primary"
              buttonColor={gradientColors.gradient6}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Button Gradient Primary')}
            />
          </View>
          {/* ui/button/ButtonGradientPrimary */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonGrey"
              family={fonts.bold}
            />
            <ButtonGrey
              content="Button Grey"
              buttonColor={gradientColors.gradient3}
              textColor={colors.bgPrimary}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Button Grey')}
            />
          </View>
          {/* ui/button/ButtonGrey */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonConnect"
              family={fonts.bold}
            />
            <ButtonConnect
              logo="LogoConnect"
              buttonColor={gradientColors.gradient6}
              onPress={() => console.warn('Button Brand')}
            />
          </View>
          {/* ui/button/ButtonConnect */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonTag"
              family={fonts.bold}
            />
            <ButtonTag
              contentL="Basic"
              contentR="Account Management"
              buttonColorL={colors.colorSecondery}
              buttonColorR={colors.white1}
              textColor={colors.text2}
              fontSize={fonts.fs10}
              onPress={() => console.warn('Button Desco')}
            />
          </View>
          {/* ui/button/ButtonTag */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonCenter"
              family={fonts.bold}
            />
            <ButtonCenter
              content="Button Center"
              logo="Add"
              buttonColor={colors.white1}
              textColor={colors.text1}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Add New Account')}
            />
          </View>
          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonAdd"
              family={fonts.bold}
            />
            <ButtonAdd
              content="Button Add"
              logoLeft="ConnectSign"
              logoRight="Add"
              buttonColor={gradientColors.gradient4}
              textColor={colors.text1}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Add New Account')}
            />
          </View>
          {/* ui/button/ButtonAdd */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonBrand"
              family={fonts.bold}
            />
            <ButtonBrand
              content="DESCO"
              logo="Check"
              buttonColor="yellow1"
              textColor={colors.text2}
              fontSize={fonts.fs10}
              onPress={() => console.warn('Button Desco')}
            />
          </View>
          {/* ui/button/ButtonBrand */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/MenuItem"
              family={fonts.bold}
            />
            <MenuItem
              content="Cash & Account"
              logo="Check"
              buttonColor="white1"
              textColor={colors.text2}
              fontSize={fonts.fs10}
              onPress={() => console.warn('Button Desco')}
            />
          </View>
          {/* ui/button/MenuItem */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonPrimaryBadge"
              family={fonts.bold}
            />
            <ButtonPrimaryBadge
              content="Button Primary"
              badgeCount="250"
              buttonColor={gradientColors.gradient5}
              textColor={colors.bgPrimary}
              fontSizeText={fonts.fs14}
              fontSizeBadge={fonts.fs12}
              onPress={() => console.warn('Button Primary')}
            />
          </View>
          {/* ui/button/ButtonPrimaryBadge */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonSecondaryBadge"
              family={fonts.bold}
            />
            <ButtonSecondaryBadge
              content="pending"
              buttonColor="#f9f9f9"
              badgeCount="15"
              textColorContent={colors.colorSecondery}
              textColorBadge={colors.white1}
              fontSizeText={fonts.fs12}
              fontSizeBadge={fonts.fs10}
              onPress={() => console.warn('Button Desco')}
            />
          </View>
          {/* ui/button/ButtonSecondaryBadge */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonQuickAmount"
              family={fonts.bold}
            />
            <ButtonQuickAmount
              content="15%"
              buttonColor={colors.white1}
              textColor={colors.text2}
              fontSize={fonts.fs14}
              onPress={() => console.warn('Button Desco')}
            />
          </View>
          {/* ui/button/ButtonQuickAmount */}

          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonCommunication"
              family={fonts.bold}
            />
            <ButtonCommunication
              logo="Check"
              buttonColor={colors.white1}
              textColor={colors.text2}
              fontSize={fonts.fs14}
              onPress={() => console.warn('ButtonCommunication')}
            />
          </View>
          {/* ui/button/ButtonCommunication */}


        </SafeAreaView>
      </View>

      <View>
        <View style={[pb10]}>
          <TextComponent
            size={fonts.fs30}
            color={colors.black0}
            content="Navigation"
            family={fonts.bold}
          />
        </View>
        <TabTest />
        {/* Tab component goes here */}
      </View>

      <View>
        <View style={[pb10]}>
          <TextComponent
            size={fonts.fs30}
            color={colors.black0}
            content="Header"
            family={fonts.bold}
          />
        </View>
        <SafeAreaView>
          <View>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/HeaderPrimary"
              family={fonts.bold}
            />
            <HeaderPrimary
              content="Send And Receive"
            />
          </View>
          {/* ui/HeaderPrimary */}

          <View>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/HeaderTop"
              family={fonts.bold}
            />
            <HeaderTop
              content="Hotel Booking"
            />
          </View>
          {/* ui/HeaderTop */}
        </SafeAreaView>
      </View>

    </ScrollView>
  );
};
export default UIComponentTest;
