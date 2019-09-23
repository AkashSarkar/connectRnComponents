import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { ButtonPrimary } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      marginTop: 10
    },
    viewWrapper: {
      marginBottom: 10
    }
  });

  
const ButtonTest = ({
    params,
}) => (
    <ScrollView >
        <SafeAreaView style={styles.container}>
            <View style={styles.viewWrapper}>
                <ButtonPrimary 
                content='Button Primary' 
                buttonColor={colors.buttonPrimary} 
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Button Primary")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonPrimary 
                content='Button Primary' 
                buttonColor={colors.buttonPrimary} 
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Button Primary")}/>
            </View>
        </SafeAreaView>
    </ScrollView>
);

export default ButtonTest;
