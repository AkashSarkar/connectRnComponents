import React, { Component } from 'react';
import {
  View, Text, Platform, TouchableOpacity, Image
} from 'react-native';
import NfcManager, { Ndef } from 'react-native-nfc-manager';
import { func } from 'prop-types';
import assets from '../../../assets';

const styles = {
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10
  },

  bodyWrapper: {
    marginLeft: '10%',
    marginRight: '10%'
  },

  contentWrapper: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 25,
    paddingTop: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  scanWrapper: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 170,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  settingWrapper: {
    flexDirection: 'column',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textWrapper: {
    color: 'rgb(169, 169, 169)',
    fontSize: 30
  },

  txtSettingWrapper: {
    color: 'rgb(169, 169, 169)',
    fontSize: 16
  },

  buttonWrapper: {
    backgroundColor: 'rgb(211, 211, 211)',
    height: 40,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  button: {
    marginTop: 20
  },
  text: {
    color: 'blue'
  }
};

class NFC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supported: true,
      enabled: false,
      parsedText: '',
      tag: {},
      androidScanning: false,
      modalVisible: false
    };
  }

  componentDidMount() {
    NfcManager.isSupported().then((supported) => {
      this.setState({ supported });
      if (supported) {
        this.startNfc();
      }
    });
  }

  startNfc() {
    NfcManager.start({
      onSessionClosedIOS: () => {
        console.log('ios session closed');
      }
    })
      .then((result) => {
        console.log('start OK', result);
        this.startDetection();
      })
      .catch((error) => {
        this.setState({ supported: false });
      });

    if (Platform.OS === 'android') {
      NfcManager.getLaunchTagEvent()
        .then((tag) => {
          if (tag) {
            this.setState({ tag });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      NfcManager.isEnabled()
        .then((enabled) => {
          this.setState({ enabled });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  onTagDiscovered = (tag) => {
    this.setState({ tag, androidScanning: false });
    // let url = this.parseUri(tag);
    // if (url) {
    //     Linking.openURL(url)
    //         .catch(err => {
    //             console.warn(err);
    //         })
    // }
    const text = this.parseText(tag);
    this.props.onScan(text);
    console.log(text);
    setTimeout(() => {
      this.setState({ parsedText: text, modalVisible: false }, () => {
        this.stopDetection();
      });
    }, 1000);
  };

  startDetection = () => {
    const { supported, enabled } = this.state;
    if (Platform.OS === 'android') {
      this.setState({ androidScanning: true, modalVisible: true });
    }
    if (supported && enabled) {
      NfcManager.registerTagEvent(this.onTagDiscovered)
        .then((result) => {
          console.log('registerTagEvent OK', result);
        })
        .catch((error) => {
          console.warn('registerTagEvent fail', error);
        });
    }
  };

  stopDetection = () => {
    NfcManager.unregisterTagEvent()
      .then((result) => {
        console.log('unregisterTagEvent OK', result);
      })
      .catch((error) => {
        console.warn('unregisterTagEvent fail', error);
      });
  };

  clearMessages = () => {
    this.setState({ tag: '', parsedText: '' });
    this.props.onClear();
  };

  goToNfcSetting = () => {
    if (Platform.OS === 'android') {
      this.setState({ androidScanning: false, modalVisible: false });
      NfcManager.goToNfcSetting()
        .then((result) => {
          console.log('goToNfcSetting OK', result);
        })
        .catch((error) => {
          console.warn('goToNfcSetting fail', error);
        });
    }
  };

  parseUri = (tag) => {
    try {
      if (Ndef.isType(tag.ndefMessage[0], Ndef.TNF_WELL_KNOWN, Ndef.RTD_URI)) {
        return Ndef.uri.decodePayload(tag.ndefMessage[0].payload);
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  parseText = (tag) => {
    try {
      if (Ndef.isType(tag.ndefMessage[0], Ndef.TNF_WELL_KNOWN, Ndef.RTD_TEXT)) {
        return Ndef.text.decodePayload(tag.ndefMessage[0].payload);
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  setModalVisible = (bool) => {
    this.setState({
      modalVisible: bool
    });
  };

  render() {
    const {
      supported, enabled, parsedText, androidScanning
    } = this.state;
    const { onCancel } = this.props;
    return (
      <View style={{ alignItems: 'center' }}>
        <View>
          <View style={styles.wrapper}>
            <View style={styles.bodyWrapper}>
              <View style={styles.contentWrapper}>
                {!supported && (
                  <View style={styles.settingWrapper}>
                    <Text style={styles.TextSettingWrapper}>
                      NFC is not supported in your phone
                    </Text>
                  </View>
                )}
                {Platform.OS === 'android' && !enabled && supported && (
                  <View style={styles.settingWrapper}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={this.goToNfcSetting}
                    >
                      <Text style={styles.TextSettingWrapper}>
                        Go to NFC setting
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}

                {Platform.OS === 'android' && enabled && supported && (
                  <View style={styles.scanWrapper}>
                    <Text style={styles.textWrapper}>Ready to Scan</Text>
                    {androidScanning ? (
                      <Image
                        source={assets.Nfc}
                        style={{ width: 100, height: 100 }}
                      />
                    ) : (
                      <Image
                        source={assets.Check}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                  </View>
                )}

                <TouchableOpacity
                  style={styles.buttonWrapper}
                  onPress={onCancel}
                >
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

NFC.propTypes = {
  onScan: func.isRequired,
  onCancel: func.isRequired
};

export default NFC;
