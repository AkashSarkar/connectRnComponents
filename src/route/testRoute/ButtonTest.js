import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { ButtonPrimary, ButtonGradientPrimary, ButtonGrey } from '../../component/ui';
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
                buttonColor={colors.gradient1} 
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Button Primary")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonGradientPrimary 
                content='Button Gradient Primary' 
                buttonColor={colors.gradient2} 
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Button Gradient Primary")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonGrey 
                content='Button Grey' 
                buttonColor={colors.gradient3} 
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Button Grey")}/>
            </View>
        </SafeAreaView>
    </ScrollView>
);

export default ButtonTest;
