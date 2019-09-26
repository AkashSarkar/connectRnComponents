import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {HeaderPrimary, HeaderTop, TextComponent} from '../../component/ui';
import {colors, fonts} from '../../styles/baseStyle';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  viewWrapper: {
    marginBottom: 20
  }
});


const HeaderTest = ({params}) => (
  <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.viewWrapper}>
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
      {/*ui/HeaderPrimary*/}

      <View style={styles.viewWrapper}>
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
      {/*ui/HeaderTop*/}
    </SafeAreaView>
  </ScrollView>
);

export default HeaderTest;
