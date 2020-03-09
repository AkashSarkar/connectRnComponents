import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView, View, ToastAndroid
} from 'react-native';
import { colors, fonts, gradientColors } from '../../styles/baseStyle';
import {
  ButtonBorderV2,
  ButtonDoubleV2,
  ButtonPrimaryV2,
  ButtonRectangle,
  FlatButtonV2,
  ButtonSecondary,
  TextComponent,
  ButtonInfo,
  InputFieldSeperator,
  HeaderPrimary
} from '../../component/ui';
import {
  mb10, mb5, p10, pb10
} from '../../styles/commonStyle';
import BoxShadow from '../../component/ui/wrapper/BoxShadow';
import InputField from '../../component/widget/input/InputField';
import assets from '../../assets';
import { InputTabbedV2, KeyboardNumeric, PaymentsCard , ProfileCardV2 } from '../../component/widget';

const screenContainer = {
  paddingHorizontal: 10,
  paddingVertical: 10,
  justifyContent: 'space-between'
};

const styles = {
  inputField: {
    paddingTop: 10,
    paddingBottom: 10
  }
};

const UIComponentV2Test = ({ navigation }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');

  const onPressKeyboard = (data) => {
    console.warn(data);
  };
  const handleAccountSliderItem = () => {
    alert('AccountSliderItem');
  };

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
        <InputFieldSeperator/>
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
        <InputFieldSeperator/>
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
        <InputFieldSeperator/>
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
        <InputFieldSeperator/>
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
        <InputFieldSeperator/>
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
        <InputFieldSeperator/>
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
        <InputFieldSeperator/>
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
        <InputFieldSeperator/>
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
                <View style={{ padding: 10 }}>
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
              onPress={() => ToastAndroid.showWithGravity(
                'All Your Base Are Belong To Us',
                ToastAndroid.LONG,
                ToastAndroid.TOP
              )
              }
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
              contentLeft="Confirm"
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
              content="ui/button/ButtonBorderV2"
              family={fonts.bold}
            />
            <ButtonBorderV2
              contentLeft="Get Paid Now"
              contentMiddle="|"
              contentRight="Get Paid Later"
              buttonColor={colors.red2}
              textColorLeft={colors.white1}
              textColorMiddle={colors.white1}
              textColorRight={colors.white1}
              buttonHeight={80}
              inModal
              fontSize={fonts.fs16}
              onPressLeft={() => console.warn('Left')}
              onPressRight={() => console.warn('Right')}
              disabled
              disabledColor='#FF8AB7'
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

          { /* ends ui/button/ButtonInfo */}

          <View style={{
            marginLeft: 10,
            marginBottom: 10
          }}
          >
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
          {/* ui/button/KeyboardNumeric */}
          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="ui/button/keyboardNumeric"
              family={fonts.bold}
            />
            <KeyboardNumeric
              onPress={onPressKeyboard}
              isPercentageValue
            />
          </View>
          {/* ui/button/KeyboardNumeric */}
          {/* Payments card*/}
          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="widget/card/PaymentsCard"
              family={fonts.bold}
            />
            <PaymentsCard
              upperLeftContent="Salary Account"
              upperRightContent="188,000.00"
              lowerContent1="Remaining balance:"
              lowerContent2="175,500.00"
              upperLeftIcon={assets.Change}
              upperRightIcon={assets.Taka}
              lowerIcon={assets.Taka}
            />
          </View>
          {/* Payments card */}
          {/* ProfileCardV2 card */}
          <View style={p10}>
            <TextComponent
              size={fonts.fs20}
              color={colors.secondary}
              content="widget/card/ProfileCardV2"
              family={fonts.bold}
            />
            <ProfileCardV2
              title="Lazz Pharma Ltd"
              id="1234 1700 20011"
              icon={assets.AppIcon}
            />
          </View>
          {/* ProfileCardV2 card */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UIComponentV2Test;
