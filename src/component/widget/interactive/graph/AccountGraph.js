import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Animated
} from 'react-native';

import Svg, {
  Path, Defs, LinearGradient, Stop
} from 'react-native-svg';

import * as shape from 'd3-shape';
import * as path from 'svg-path-properties';

import { array, func } from 'prop-types';

import { scaleTime, scaleLinear, scaleQuantile } from 'd3-scale';
import { colors, fonts } from '../../../../styles/baseStyle';
import { BoxShadow, TextComponent } from '../../../ui';
import { getMonthAndDay } from '../../../../utils/function';

const height = 100;
const width = Dimensions.get('window').width - 30;
const verticalPadding = 10;
const cursorRadius = 7;
const labelWidth = 145;

const d3 = {
  shape
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 30
  },
  graphContainer: {
    height,
    width
  },
  cursor: {
    width: cursorRadius * 2,
    height: cursorRadius * 2,
    borderRadius: cursorRadius,
    borderColor: colors.colorSecondery,
    borderWidth: 2,
    backgroundColor: colors.white1
  },
  label: {
    position: 'absolute',
    top: -30,
    left: 0,
    width: labelWidth
  },
  labelWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5
  },
  divider: {
    width: 1,
    borderLeftColor: colors.black1,
    borderLeftWidth: 1
  }
});

export class AccountGraph extends Component {
  static defaultProps = {
    onCursorMove: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      x: new Animated.Value(0),
      labelDate: getMonthAndDay(props.data[props.data.length - 1].x),
      labelAmount: props.data[props.data.length - 1].y
    };
  }

  data = this.props.data;

  dates = this.data.map(a => a.x);

  amounts = this.data.map(a => a.y);

  maxAmount = Math.max(...this.amounts);

  minAmount = Math.min(...this.amounts);

  maxDate = new Date(Math.max.apply(null, this.dates));

  minDate = new Date(Math.min.apply(null, this.dates));

  scaleX = scaleTime()
    .domain([this.minDate, this.maxDate])
    .range([10, width - 5]);

  scaleY = scaleLinear()
    .domain([this.minAmount, this.maxAmount])
    .range([height - verticalPadding, verticalPadding]);

  scaleDateLabel = scaleQuantile()
    .domain([this.minDate, this.maxDate])
    .range(this.dates);

  scaleAmountLabel = scaleQuantile()
    .domain([this.minAmount, this.maxAmount])
    .range(this.amounts);

  line = d3.shape
    .line()
    .x(d => this.scaleX(d.x))
    .y(d => this.scaleY(d.y))
    .curve(d3.shape.curveBasis)(this.data);

  properties = path.svgPathProperties(this.line);

  lineLength = this.properties.getTotalLength();

  cursor = React.createRef();

  setLabel = (labelDate, labelAmount) => {
    this.setState({ labelDate, labelAmount });
  };

  getCurrentData = (x, y) => ({ x, y })

  moveCursor = (value) => {
    const {
      data,
      properties,
      lineLength,
      scaleAmountLabel,
      scaleDateLabel,
      scaleX,
      scaleY,
      getCurrentData
    } = this;
    const { onCursorMove } = this.props;
    if (data.length > 1) {
      const { x, y } = properties.getPointAtLength(lineLength - value);
      this.cursor.current.setNativeProps({
        top: y - cursorRadius,
        left: x - cursorRadius
      });
      const labelX = scaleDateLabel(scaleX.invert(x));
      const dateString = getMonthAndDay(labelX);
      const labelY = scaleAmountLabel(scaleY.invert(y));

      this.setLabel(dateString, labelY);

      onCursorMove(getCurrentData(labelX, labelY));
    }
  };

  componentDidMount() {
    this.state.x.addListener(({ value }) => this.moveCursor(value));
    this.moveCursor(0);
  }

  render() {
    const { x, labelAmount, labelDate } = this.state;
    const { lineLength, line } = this;
    const translateX = x.interpolate({
      inputRange: [0, lineLength],
      outputRange: [width - labelWidth, 0],
      extrapolate: 'clamp'
    });

    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.graphContainer}>
          <Svg {...{ width, height }}>
            <Defs>
              <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
                <Stop stopColor="#6cf8ff" offset="0%" />
                <Stop stopColor="#b5fbff" offset="20%" />
                <Stop stopColor="#FEFFFF" offset="100%" />
              </LinearGradient>
            </Defs>
            <Path
              d={line}
              fill="transparent"
              stroke={colors.colorSecondery}
              strokeWidth={5}
            />
            <Path
              d={`${line} L ${width - 5} ${height} L 0 ${height}`}
              fill="url(#gradient)"
            />
            <View ref={this.cursor} style={styles.cursor} />
          </Svg>
          <Animated.View style={[styles.label, { transform: [{ translateX }] }]}>
            <BoxShadow borderRadius={4}>
              <View style={styles.labelWrapper}>
                <TextComponent
                  content={labelDate}
                  size={fonts.fs12}
                  family={fonts.medium}
                  color={colors.grey1}
                />
                <View style={styles.divider} />
                <TextComponent
                  content={labelAmount}
                  size={fonts.fs12}
                  family={fonts.medium}
                  color={colors.black1}
                />
              </View>
            </BoxShadow>
          </Animated.View>
          <Animated.ScrollView
            style={StyleSheet.absoluteFill}
            contentContainerStyle={{ width: lineLength * 2 }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            bounces={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x }
                  }
                }
              ],
              { useNativeDriver: true },
            )}
            horizontal
          />
        </View>
      </SafeAreaView>
    );
  }
}

AccountGraph.propTypes = {
  data: array.isRequired,
  onCursorMove: func
};

export default AccountGraph;
