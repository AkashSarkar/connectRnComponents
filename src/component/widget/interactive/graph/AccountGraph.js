import React, { Component } from 'react';
import {
  Text, View, StyleSheet, SafeAreaView, Dimensions
} from 'react-native';
import Svg, {
  Path, Defs, LinearGradient, Stop
} from 'react-native-svg';

import * as shape from 'd3-shape';

import {
  scaleTime,
  scaleLinear,
  scaleQuantile
} from 'd3-scale';
import { colors } from '../../../../styles/baseStyle';

const height = 200;
const width = Dimensions.get('window').width - 10;
const verticalPadding = 5;
const cursorRadius = 10;
const labelWidth = 100;

const d3 = {
  shape
};

const data = [
  { x: new Date(2018, 9, 1), y: 0 },
  { x: new Date(2018, 9, 16), y: 0 },
  { x: new Date(2018, 9, 17), y: 200 },
  { x: new Date(2018, 10, 1), y: 200 },
  { x: new Date(2018, 10, 2), y: 300 },
  { x: new Date(2018, 10, 5), y: 300 }
];

const scaleX = scaleTime().domain([new Date(2018, 9, 1), new Date(2018, 10, 5)]).range([0, width]);

const scaleY = scaleLinear().domain([0, 300]).range([height - verticalPadding, verticalPadding]);

const scaleLabel = scaleQuantile().domain([0, 300]).range([0, 200, 300]);

const line = d3.shape.line()
  .x(d => scaleX(d.x))
  .y(d => scaleY(d.y))
  .curve(d3.shape.curveBasis)(data);

// const properties =
// const lineLength = properties.getTotalLength();

export class AccountGraph extends Component {
  render() {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.graphContainer}>
          <Svg {...{ width, height }}>
            <Defs>
              <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
                <Stop stopColor="#001da" offset="0%" />
                <Stop stopColor="#14438F" offset="80%" />
                <Stop stopColor="#FEFFFF" offset="100%" />
              </LinearGradient>
            </Defs>
            <Path d={line} fill="transparent" stroke={colors.colorSecondery} strokeWidth={2} />
            <Path d={`${line} L ${width} ${height} L 0 ${height}`} fill="url(#gradient)" />
          </Svg>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  graphContainer: {
    height,
    width
  }
});

export default AccountGraph;
