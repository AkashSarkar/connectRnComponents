import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
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
  InputFieldSeperator,
  ButtonRectangle
} from '../../component/ui';
import { mb10, p10, pb10 } from '../../styles/commonStyle';
import BoxShadow from '../../component/ui/wrapper/BoxShadow';
import InputField from '../../component/widget/input/InputField';
import assets from '../../assets';
import { AmountChange, InputTabbedV2, KeyboardNumeric } from '../../component/widget';
import Switch from '../../component/ui/input/Switch';
import TabTest from './TabTest';

const screenContainer = {
  paddingHorizontal: 10,
  paddingVertical: 10,
  justifyContent: 'space-between'
};

const styles = StyleSheet.create({
  inputField: {
    paddingTop: 10,
    paddingBottom: 10
  }
});

const UIComponentV2Test = ({ navigation }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');

  const BankAccountComponent = () => {
    const [accountHolderName, setAccountHolderName] = useState('');
    const [bankName, setBankName] = useState('');
    const [branchName, setBranchName] = useState('');
    return (
      <View style={[{ paddingHorizontal: 10 }]}>
        <View style={styles.inputField}>
          <InputField
            value={accountHolderName}
            placeholder="Account Holder Name"
            keyboardType="default"
            v2
            maxLength={20}
            placeholderTextColor="#ff3d82"
            returnKeyType="next"
            onChangeText={(text) => {
              setAccountHolderName(text);
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
        <InputFieldSeperator />
        <View style={styles.inputField}>
          <InputField
            value={bankName}
            placeholder="Bank Name"
            keyboardType="default"
            v2
            maxLength={14}
            placeholderTextColor="#ff3d82"
            returnKeyType="next"
            onChangeText={(text) => {
              setBankName(text);
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
        <InputFieldSeperator />
        <View style={styles.inputField}>
          <InputField
            value={branchName}
            placeholder="Branch Name"
            keyboardType="default"
            v2
            maxLength={14}
            placeholderTextColor="#ff3d82"
            returnKeyType="next"
            onChangeText={(text) => {
              setBranchName(text);
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
        <InputFieldSeperator />
        <View style={styles.inputField}>
          <InputField
            value={bankName}
            placeholder="Account Number"
            keyboardType="numeric"
            v2
            maxLength={14}
            placeholderTextColor="#ff3d82"
            returnKeyType="next"
            onChangeText={(text) => {
              setBankName(text);
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
        <InputFieldSeperator />
        <View style={styles.inputField}>
          <InputField
            value={bankName}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            v2
            maxLength={14}
            placeholderTextColor="#ff3d82"
            returnKeyType="next"
            onChangeText={(text) => {
              setBankName(text);
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
      </View>
    );
  };

  const WalletIDComponent = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [validity, setValidity] = useState('');
    const [cvc, setCvc] = useState('');
    return (
      <View style={[{ paddingHorizontal: 10 }]}>
        <View style={styles.inputField}>
          <InputField
            value={cardNumber}
            placeholder="Account Holder Name"
            keyboardType="default"
            maxLength={20}
            placeholderTextColor="#ff3d82"
            v2
            returnKeyType="next"
            onChangeText={(text) => {
              setCardNumber(text);
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
        <InputFieldSeperator />
        <View style={styles.inputField}>
          <InputField
            value={cardholderName}
            placeholder="Provider Name"
            keyboardType="default"
            placeholderTextColor="#ff3d82"
            v2
            returnKeyType="next"
            onChangeText={(text) => {
              setCardholderName(text);
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
        <InputFieldSeperator />
        <View style={styles.inputField}>
          <InputField
            value={validity}
            placeholder="Wallet Type"
            keyboardType="default"
            maxLength={5}
            v2
            placeholderTextColor="#ff3d82"
            returnKeyType="next"
            onChangeText={(text) => {
              setValidity(text);
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
        <InputFieldSeperator />
        <View style={styles.inputField}>
          <InputField
            value={cvc}
            placeholder="Account Number"
            keyboardType="numeric"
            maxLength={18}
            v2
            placeholderTextColor="#ff3d82"
            returnKeyType="next"
            onChangeText={(text) => {
              setCvc(text);
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
        <InputFieldSeperator />
        <View style={styles.inputField}>
          <InputField
            value={cvc}
            placeholder="Mobile Number"
            keyboardType="number-pad"
            maxLength={18}
            v2
            placeholderTextColor="#ff3d82"
            returnKeyType="next"
            onChangeText={(text) => {
              setCvc(text);
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
      </View>
    );
  };


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
            />
          </View>

          <View style={[p10, { backgroundColor: '#1a1a1a' }]}>
            <View style={[pb10]}>
              <TextComponent
                size={fonts.fs30}
                color={colors.white1}
                content="Tab Sliders Widget"
                family={fonts.bold}
              />
            </View>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="widget/card/InputTabbedV2"
              family={fonts.bold}
            />
            <InputTabbedV2
              leftInputForm={BankAccountComponent}
              rightInputForm={WalletIDComponent}
              tabTitle1="Bank Account"
              tabTitle2="Wallet ID"
              inputFieldBackground="#000000"
              tabBackground="transparent"
            />
          </View>
          {/* ui/button/ButtonRectangle */}
          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonRectangle"
              family={fonts.bold}
            />
            <ButtonRectangle
              content="Get Payment"
              textColor={colors.white1}
              fontSize={fonts.fs14}
              buttonColor={colors.colorSecondery}
              onPress={() => console.warn('ButtonRectangle')}
            />
          </View>
          {/* ui/button/ButtonRectangle */}
          {/* ui/button/ButtonRectangle */}
          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/ButtonRectangle"
              family={fonts.bold}
            />
            <KeyboardNumeric
              content="Get Payment"
              textColor={colors.primary}
              fontSize={fonts.fs14}
              buttonColor={colors.colorSecondery}
              onPress={() => console.warn('ButtonRectangle')}
            />
          </View>
          {/* ui/button/ButtonRectangle */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UIComponentV2Test;
