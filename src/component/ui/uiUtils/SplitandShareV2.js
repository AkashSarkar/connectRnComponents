import React from 'react';
import {
  View, TouchableOpacity, Image
} from 'react-native';
import assets from '../../../assets';
import TextComponent from '../typography/TextComponent';
import { colors, fonts } from '../../../styles/baseStyle';


const SplitandShareV2 = () => (
  <View style={[{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }]}>
    <View>
      <TouchableOpacity>
        <Image
          source={assets.Split}
          style={{
            height: 46,
            width: 46
          }}
          resizeMode="contain"
        />
        <View style={{ paddingLeft: 10 }}>
          <TextComponent
            content="Split"
            size={fonts.fs12}
            color={colors.black}
          />
        </View>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Image
          source={assets.Share}
          style={{
            height: 46,
            width: 46
          }}
          resizeMode="contain"
        />
        <View style={{ paddingLeft: 6 }}>
          <TextComponent
            content="Share"
            size={fonts.fs12}
            color={colors.black}
          />
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default SplitandShareV2;
