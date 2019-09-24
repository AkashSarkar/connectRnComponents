import React from 'react';
import { View } from 'react-native';
import { string, number } from 'prop-types';
import { TextComponent } from '../../ui'
import { fonts, colors} from '../../../styles/baseStyle'
import { pb10, pt10} from '../../../styles/commonStyle'

const styles = {
    wrapper: {
        width: '60%',
        maxWidth: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        ...pt10,
        ...pb10,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
                                                             
    },
    leftWrapper: {

    },
    rightWrapper: {
        alignItems: 'flex-end',
    }
}

const PopUpMessage = ({
  content, family, size, color
}) => (
    <View style={styles.wrapper}>
        <View>
            <TextComponent 
                content="Desh Travels"
                color={colors.black1}
                family={fonts.semiBold}
                size={fonts.fs16}
            />
        </View>
        <View>
            <TextComponent 
                content="Desh Travels"
                color={colors.black1}
                family={fonts.semiBold}
                size={fonts.fs16}
            />
        </View>
    </View>
);

PopUpMessage.propTypes = {
//   content: string.isRequired,
//   family: string.isRequired,
//   size: number.isRequired,
//   color: string.isRequired
};

export default PopUpMessage;
