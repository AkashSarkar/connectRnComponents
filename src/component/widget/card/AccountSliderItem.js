import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'

const styles = StyleSheet.create({
  cardBg: {
    display: 'flex',
    backgroundColor: 'rgb(255, 245, 0)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 1,
    paddingTop: 20,
    paddingBottom: 25,
  },
  currencyIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  accountInfo: {
    flex: 3
  },
  informationIcon: {
    width: 20,
    height: 20,
    flexDirection: "column",
    display: "flex",
    marginLeft: 25
  },
  body: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  cardImage: {},
  connectSuffix: {
    fontFamily: "Montserrat",
    fontSize: 12,
    letterSpacing: 0.19,
    color: "#000000"
  },
  connectAmount: {
    fontFamily: "Montserrat",
    fontSize: 52,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 61,
    color: "#000000"
  },
  connectAccNo: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 1.8,
    color: "#000000"
  }
});

const AccountSliderItem = () => {
  return (
    <View style={styles.cardBg}>
      <View style={styles.header}>
        {/*TODO have to change icon   */}
        <Image
          style={styles.informationIcon}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.currencyIcon}>
          {/*TODO have to change icon   */}
          <Image
            style={{width: 35, height: 35}}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
          />
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.connectSuffix}>Connect Suffix 12</Text>
          <Text style={styles.connectAmount}>1,25,897.00</Text>
          <Text style={styles.connectAccNo}>0002-87656 7898 7</Text>
        </View>
      </View>
    </View>
  )
};

export default AccountSliderItem