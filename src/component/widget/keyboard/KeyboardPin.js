import React from 'react';
import { View } from 'react-native';
import { func } from 'prop-types';
import { ButtonRectangle } from '../../ui';
import { fonts, colors } from '../../../styles/baseStyle';
import images from '../../../assets';

const styles = {
  wrapper: {
    width: '100%',
    backgroundColor: colors.black9
  },
  bottomWrapper: {
    marginTop: 10,
    paddingHorizontal: 10
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  buttonStyle: {
    flex: 1,
    paddingHorizontal: 2
  }
};

const numPad1 = [{
  content: '1',
  value: 1
},
{
  content: '2',
  value: 2
},
{
  content: '3',
  value: 3
}];
const numPad2 = [{
  content: '4',
  value: 4
},
{
  content: '5',
  value: 5
},
{
  content: '6',
  value: 6
}];
const numPad3 = [{
  content: '7',
  value: 7
},
{
  content: '8',
  value: 8
},
{
  content: '9',
  value: 9
}];
const numPad4 = [{
  value: 'dot'
},
{
  content: '0',
  value: 0
},
{
  content: images.DeleteIcon,
  value: 'delete'
}];

const KeyboardPin = ({ onPress }) => (
  <View style={styles.wrapper}>
    <View style={styles.bottomWrapper}>
      <View style={styles.buttonRow}>
        {numPad1.map(items => (
          <View style={styles.buttonStyle}>
            <ButtonRectangle
              content={items.content}
              textColor={colors.white1}
              fontSize={fonts.fs14}
              buttonColor={colors.buttonColor1}
              onPress={() => onPress(items.value)}
            />
          </View>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {numPad2.map(items => (
          <View style={styles.buttonStyle}>
            <ButtonRectangle
              content={items.content}
              textColor={colors.white1}
              fontSize={fonts.fs14}
              buttonColor={colors.buttonColor1}
              onPress={() => onPress(items.value)}
            />
          </View>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {numPad3.map(items => (
          <View style={styles.buttonStyle}>
            <ButtonRectangle
              content={items.content}
              textColor={colors.white1}
              fontSize={fonts.fs14}
              buttonColor={colors.buttonColor1}
              onPress={() => onPress(items.value)}
            />
          </View>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {numPad4.map(items => (
          <View style={styles.buttonStyle}>
            <ButtonRectangle
              content={isNaN(items.value) ? null : items.content}
              image={isNaN(items.value) ? items.content : null}
              imageHeight={items.value === 'dot' ? 5 : null}
              imagewidth={items.value === 'dot' ? 5 : null}
              textColor={colors.white1}
              fontSize={fonts.fs14}
              buttonColor={isNaN(items.value) ? 'transparent' : colors.buttonColor1}
            //   onPress={() => onPress(items.value)}
            />
          </View>
        ))}
      </View>
    </View>
  </View>
);

KeyboardPin.propTypes = {
  onPress: func
};

export default KeyboardPin;
