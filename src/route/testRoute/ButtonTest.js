import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { ButtonPrimary } from '../../component/ui';
import { brandPrimary } from '../../styles/baseStyle';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      marginTop: 20,
      marginLeft: 10
    }
  });

  
const ButtonTest = ({
    params,
}) => (
    <SafeAreaView >
        <View style={styles.container}>
            <ButtonPrimary />
        </View>
    </SafeAreaView>
);

export default ButtonTest;
