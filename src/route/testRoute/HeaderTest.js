import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { ButtonPrimary, 
    HeaderPrimary,
    HeaderTop
} from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';
import assets from '../../assets';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10
    },
    viewWrapper: {
      marginBottom: 20
    }
  });

  
const HeaderTest = ({
    params,
}) => (
    <ScrollView >
        <SafeAreaView style={styles.container}>
            <View style={styles.viewWrapper}>
                <HeaderPrimary 
                    content='Send And Receive'
                />
            </View>
            <View style={styles.viewWrapper}>
                <HeaderTop 
                    content='Hotel Booking'
                />
            </View>
        </SafeAreaView>
    </ScrollView>
);

export default HeaderTest;
