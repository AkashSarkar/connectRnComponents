import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { ButtonPrimary, ButtonGradientPrimary, ButtonGrey, ButtonBrand } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';
import assets from '../../assets';


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
            <View style={styles.viewWrapper}>
                <ButtonBrand 
                buttonLogo={assets.LogoConnect}
                buttonColor={colors.gradient2}
                onPress={()=> console.warn("Button Brand")}/>
            </View>
        </SafeAreaView>
    </ScrollView>
);

export default ButtonTest;
