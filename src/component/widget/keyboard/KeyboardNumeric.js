import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextComponent, ButtonRectangle } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import images from '../../../assets';

const styles = {
  wrapper: {
    // width: '100%',
    flex: 1,
    // height: '50%',
    backgroundColor: '#1a1a1a'
  },
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#303030',
    paddingVertical: 15
  },
  bottomWrapper: {
    marginVertical: 10,
    paddingHorizontal: 10
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5
    // backgroundColor: 'red'
  },
  buttonStyle: {
    flex: 1,
    paddingHorizontal: 2
  }
};

const KeyboardNumeric = ({}) => (
  <View style={styles.wrapper}>
    <View style={styles.topWrapper}>
      <TouchableOpacity>
        <TextComponent content="10%" color="white" size={fonts.fs18} />
      </TouchableOpacity>
      <TouchableOpacity>
        <TextComponent content="20%" color="white" size={fonts.fs18} />
      </TouchableOpacity>
      <TouchableOpacity>
        <TextComponent content="30%" color="white" size={fonts.fs18} />
      </TouchableOpacity>
      <TouchableOpacity>
        <TextComponent content="40%" color="white" size={fonts.fs18} />
      </TouchableOpacity>
      <TouchableOpacity>
        <TextComponent content="50%" color="white" size={fonts.fs18} />
      </TouchableOpacity>
    </View>
    <View style={styles.bottomWrapper}>
      <View style={styles.buttonRow}>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="1"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('1')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="2"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('2')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="3"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('3')}
          />
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="4"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('4')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="5"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('5')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="6"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('6')}
          />
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="7"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('7')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="8"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('8')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="9"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('9')}
          />
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            image={images.Dot}
            imageHeight={8}
            imagewidth={8}
            textColor={colors.primary}
            buttonColor="transperant"
            onPress={() => console.warn('dot')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            content="0"
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor={colors.buttonColor1}
            onPress={() => console.warn('0')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <ButtonRectangle
            image={images.DeleteIcon}
            textColor={colors.white1}
            fontSize={fonts.fs14}
            buttonColor="transperant"
            onPress={() => console.warn('cross')}
          />
        </View>
      </View>
    </View>
  </View>
);

export default KeyboardNumeric;
