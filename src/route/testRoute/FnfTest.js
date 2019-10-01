import React from 'react';
import { View } from 'react-native';
import { mb10, mt10, p10 } from '../../styles/commonStyle';
import assets from '../../assets';
import { TextComponent } from '../../component/ui';
import { colors, fonts } from '../../styles/baseStyle';
import FnfMember from '../../component/widget/interactive/fnf/FnfMember';
import FnfList from '../../component/widget/interactive/fnf/FnfList';

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
        isConnect: true,
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
        isConnect: true,
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
  const deleteAction = () => {
    alert('delete');
  }
  const pauseAction = () => {
    alert('Pause');
  }
  const editAction = () => {
    alert('Edit');
  }
  const mapRightActions = () => {
    const { Delete, Pause, Edit } = assets;
    return (
      [
        {
          id: 1,
          icon: Delete,
          color: '#00000029',
          x: 130,
          pressHandler: deleteAction
        },
        {
          id: 2,
          icon: Pause,
          color: '#ffab00',
          x: 80,
          pressHandler: pauseAction
        },
        {
          id: 3,
          icon: Edit,
          color: '#dd2c00',
          x: 50,
          pressHandler: editAction
        }
      ]
    );
  }
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
          rightActions={mapRightActions()}
          leftActions={null}
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
        <FnfList
          items={mapFnfs()}
          rightActions={mapRightActions()}
          leftActions={null}
        />
      </View>
    </View>
  );
}
export default FnfTest;
