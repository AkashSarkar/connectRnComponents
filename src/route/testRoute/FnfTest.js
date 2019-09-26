import React from 'react';
import { View } from 'react-native';
import { mb10, mt10, p10 } from '../../styles/commonStyle';
import assets from '../../assets';
import { TextComponent } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';
import FnfMember from '../../component/widget/interactive/FnfMember';
import FnfList from '../../component/widget/interactive/FnfList';

const FnfTest = () => {
  const mapFnfs = () => (
    [
      {
        id: 1,
        name: 'Anisur Rahman',
        number: '0173654885',
        channels: [
          {
            id: 1,
            name: 'Connect',
            icon: assets.Connect
          },
          {
            id: 2,
            name: 'Jamuna',
            icon: assets.Jamuna
          },
          {
            id: 3,
            name: 'Beftn',
            icon: assets.Beftn
          },
          {
            id: 4,
            name: 'Bkash',
            icon: assets.Beftn
          }
        ]
      },
      {
        id: 2,
        name: 'Anisur Rahman',
        number: '0173654885',
        channels: [
          {
            id: 1,
            name: 'Connect',
            icon: assets.Connect
          },
          {
            id: 2,
            name: 'Jamuna',
            icon: assets.Jamuna
          },
          {
            id: 3,
            name: 'Beftn',
            icon: assets.Beftn
          },
          {
            id: 4,
            name: 'Bkash',
            icon: assets.Beftn
          }
        ]
      },
      {
        id: 3,
        name: 'Anisur Rahman',
        number: '0173654885',
        channels: [
          {
            id: 1,
            name: 'Connect',
            icon: assets.Connect
          },
          {
            id: 2,
            name: 'Jamuna',
            icon: assets.Jamuna
          },
          {
            id: 3,
            name: 'Beftn',
            icon: assets.Beftn
          },
          {
            id: 4,
            name: 'Bkash',
            icon: assets.Beftn
          }
        ]
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
            content="interactive/FnfMember"
            family={fonts.medium}
          />
        </View>
        <FnfMember
          name="Anisur Rahman"
          number="+8801670803717"
          isConnect
          channels={[
            {
              id: 1,
              name: 'Connect',
              icon: assets.Connect
            },
            {
              id: 2,
              name: 'Jamuna',
              icon: assets.Jamuna
            },
            {
              id: 3,
              name: 'Beftn',
              icon: assets.Beftn
            },
            {
              id: 4,
              name: 'Bkash',
              icon: assets.Bkash
            }
          ]}
        />
      </View>
      <View style={[p10, mt10]}>
        <View style={mb10}>
          <TextComponent
            size={fonts.fs18}
            color={colors.secondary}
            content="interactive/FnfList"
            family={fonts.medium}
          />
        </View>
        <FnfList items={mapFnfs()}/>
      </View>
    </View>
  );
}
export default FnfTest;
