import React from 'react';
import { View } from 'react-native';
import { SplitItem, SplitList } from '../../component/widget';
import { mb10, mt10, p10 } from '../../styles/commonStyle';
import assets from '../../assets';
import { TextComponent } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';

const SplitTest = () => {
  const mapSplitItems = () => (
    [
      {
        id: 1,
        avatar: assets.Check,
        name: 'Monu',
        amount: '3,600.00'
      },
      {
        id: 2,
        avatar: assets.Check,
        name: 'Montu',
        amount: '4,800.00'
      },
      {
        id: 3,
        avatar: assets.Check,
        name: 'Moni',
        amount: '3,800.00'
      }
    ]
  )
  return (
    <View>
      <View style={[p10, mt10]}>
        <View style={mb10}>
          <TextComponent
            size={fonts.fs18}
            color={colors.secondary}
            content="interactive/SplitItem"
            family={fonts.medium}
          />
        </View>
        <SplitItem name="Monu" avatar={assets.Check} amount="3,600.00"/>
      </View>
      <View style={[p10, mt10]}>
        <View style={mb10}>
          <TextComponent
            size={fonts.fs18}
            color={colors.secondary}
            content="interactive/SplitList"
            family={fonts.medium}
          />
        </View>
        <SplitList items={mapSplitItems()}/>
      </View>
    </View>
  );
}
export default SplitTest;
