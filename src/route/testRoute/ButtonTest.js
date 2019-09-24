import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { ButtonPrimary, 
    ButtonGradientPrimary, 
    ButtonGrey, 
    ButtonConnect, 
    ButtonCenter, 
    ButtonBrand, 
    MenuItem, 
    ButtonQuickAmount,
    ButtonCommunication,
    ButtonAdd
} from '../../component/ui';
import {colors, fonts, gradientColors} from '../../styles/baseStyle';
import assets from '../../assets';


const styles = StyleSheet.create({
    container: {
      flex: 1,
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
                buttonColor={gradientColors.gradient5}
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Button Primary")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonGradientPrimary 
                content='Button Gradient Primary' 
                buttonColor={gradientColors.gradient6}
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Button Gradient Primary")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonGrey 
                content='Button Grey' 
                buttonColor={gradientColors.gradient3}
                textColor={colors.bgPrimary}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Button Grey")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonConnect 
                buttonLogo={assets.LogoConnect}
                buttonColor={gradientColors.gradient6}
                onPress={()=> console.warn("Button Brand")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonCenter 
                content='Button Center'
                buttonLogo={assets.Check}
                buttonColor={colors.white1} 
                textColor={colors.text1}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Add New Account")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonAdd 
                content='Button Add'
                buttonLogo={assets.Check}
                buttonColor={gradientColors.gradient4}
                textColor={colors.text1}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Add New Account")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonBrand 
                content='DESCO'
                buttonLogo={assets.LogoConnect}
                buttonColor={colors.yellow1} 
                textColor={colors.text2}
                fontSize={fonts.fs10} 
                onPress={()=> console.warn("Button Desco")}/>
            </View>
            <View style={styles.viewWrapper}>
                <MenuItem 
                content='Cash & Account'
                buttonLogo={assets.LogoConnect}
                buttonColor={colors.white1} 
                textColor={colors.text2}
                fontSize={fonts.fs10} 
                onPress={()=> console.warn("Button Desco")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonQuickAmount 
                content='15%'
                buttonColor={colors.white1} 
                textColor={colors.text2}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("Button Desco")}/>
            </View>
            <View style={styles.viewWrapper}>
                <ButtonCommunication 
                buttonLogo={assets.Check}
                buttonColor={colors.white1} 
                textColor={colors.text2}
                fontSize={fonts.fs14} 
                onPress={()=> console.warn("ButtonCommunication")}/>
            </View>
        </SafeAreaView>
    </ScrollView>
);

export default ButtonTest;
