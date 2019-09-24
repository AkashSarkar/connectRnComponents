import React from 'react';
import { View, Image } from 'react-native';
import { string, number } from 'prop-types';
import { TextComponent } from '../../ui'
import { fonts, colors} from '../../../styles/baseStyle'
import { p15, mb10} from '../../../styles/commonStyle'

const styles = {
    wrapper: {
        width: '100%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey2,
        borderRadius: 10,
        ...p15,
        elevation: 1,
        shadowColor: colors.black6,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
                                                             
    }
}

const Amount = ({
  content, family, size, color
}) => (
    <View style={styles.wrapper}>
        <View style={mb10}>
            <TextComponent 
                content="Due Amount"
                color={colors.black1}
                family={fonts.regular}
                size={fonts.fs10}
            />
        </View>
        <View>
            <TextComponent 
                content="Tk. 3,600.00"
                color={colors.black1}
                family={fonts.semiBold}
                size={fonts.fs16}
            />
        </View>
    </View>
);

Amount.propTypes = {
//   content: string.isRequired,
//   family: string.isRequired,
//   size: number.isRequired,
//   color: string.isRequired
};

export default Amount;
