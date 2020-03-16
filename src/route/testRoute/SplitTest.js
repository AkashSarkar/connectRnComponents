import React from 'react';
import { View } from 'react-native';
import { SplitItem, SplitList } from '../../component/widget';
import { mb10, mt10, p10 } from '../../styles/commonStyle';
import assets from '../../assets';
import { TextComponent, FeatureWrapperV2 } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';

const SplitTest = ({ navigation }) => {
  const mapSplitItems = () => (
    [
      {
        id: 1,
        avatar: assets.Monu,
        name: 'Monu',
        amount: '3,600.00'
      },
      {
        id: 2,
        avatar: assets.Monu,
        name: 'Montu',
        amount: '4,800.00'
      },
      {
        id: 3,
        avatar: assets.Moni,
        name: 'Moni',
        amount: '3,800.00'
      }
    ]
  );
  const deleteAction = () => {
    alert('Split delete test');
  };
  const mapRightActions = () => {
    const { Delete } = assets;
    return (
      [
        {
          id: 1,
          icon: Delete,
          color: '#00000029',
          x: 50,
          pressHandler: deleteAction
        }
      ]
    );
  };
  return (
    <FeatureWrapperV2
      title="TestRoute"
      backgroundColor={colors.white1}
      titleTextColor={colors.secondary}
      rightIcon={assets.CrossDark}
      style={{ flex: 1 }}
      rightPressAction={() => navigation.goBack()}
    >
      <View style={[p10, mt10]}>
        <View style={mb10}>
          <TextComponent
            size={fonts.fs18}
            color={colors.secondary}
            content="interactive/SplitItem"
            family={fonts.medium}
          />
        </View>
        <SplitItem
          name="Monu"
          avatar={assets.Monu}
          amount="3,600.00"
          rightActions={mapRightActions()}
          leftActions={null}
        />
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
        <SplitList
          items={mapSplitItems()}
          rightActions={mapRightActions()}
          leftActions={null}
        />
      </View>
    </FeatureWrapperV2>
  );
};
export default SplitTest;
