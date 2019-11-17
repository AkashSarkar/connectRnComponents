/*
  This is the custom graph component found in the bottom drawer in dashboard section.
  This component is implemented using SVG and D3.
  SVG is used to draw all the paths and the graph
  D3 is used to calculate the curve and positions
*/

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

const height = 100; // Height of the graph view
const width = Dimensions.get('window').width - 30; // Width of the graph view
const verticalPadding = 10; // Vertical padding of the graph view
const cursorRadius = 7; // Size of the cursor
const labelWidth = 145; // Width of the label

// d3 object with d3 shape library
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
    onCursorMove: () => {},
    onCursorStop: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      x: new Animated.Value(0), // x axis value of the cursor
      labelDate: getMonthAndDay(props.data[props.data.length - 1].x), // initial date label as the month and day of the last index of the data array
      labelAmount: props.data[props.data.length - 1].y, // initial amount label as the last index of the data array
      labelX: props.data[props.data.length - 1].x // raw date value in milliseconds of the date
    };
  }

  dates = this.props.data.map(a => a.x); // extract the dates from the data prop and make an array

  amounts = this.props.data.map(a => a.y); // extract the amount from the data prop and make an array

  maxAmount = Math.max(...this.amounts); // maximum amount

  minAmount = Math.min(...this.amounts); // minimum amount

  maxDate = new Date(Math.max.apply(null, this.dates)); // maximum date

  minDate = new Date(Math.min.apply(null, this.dates)); // minimum date

  // scale X axis between max and minimum date
  scaleX = scaleTime()
    .domain([this.minDate, this.maxDate])
    .range([10, width - 5]);

  // scale Y axis between max and minimum amount
  scaleY = scaleLinear()
    .domain([this.minAmount, this.maxAmount])
    .range([height - verticalPadding, verticalPadding]);

  // scale date label between max and minimum date
  scaleDateLabel = scaleQuantile()
    .domain([this.minDate, this.maxDate])
    .range(this.dates);

  // scale amount label between max and minimum amount
  scaleAmountLabel = scaleQuantile()
    .domain([this.minAmount, this.maxAmount])
    .range(this.amounts);

  // calculate line curve shape from amount and date using d3
  line = d3.shape
    .line()
    .x(d => this.scaleX(d.x))
    .y(d => this.scaleY(d.y))
    .curve(d3.shape.curveBasis)(this.props.data);

  properties = path.svgPathProperties(this.line); // get all the properties of the line to calculate cursor position on the line and line length

  lineLength = this.properties.getTotalLength(); // calculate line length

  cursor = React.createRef(); // create a ref for the cursor

  /**
   * Pass calculated date and amount label to change state
   * @param  { string } labelDate
   * @param  { string } labelAmount
   * @param  { string } labelX
   */
  setLabel = (labelDate, labelAmount, labelX) => {
    this.setState({ labelDate, labelAmount, labelX });
  };

  /**
   * create object with x and y axis value
   * @param  { string } x
   * @param  { string } y
   */
  getCurrentData = (x, y) => ({ x, y });

  /**
   * Determine the index of the data array that corresponds to the current cursor position
   * Returns a promise that resolves when the index is found
   */
  getCurrentIndex = () => new Promise((res) => {
    const { labelX: x, labelAmount: y } = this.state;
    const { data } = this.props;
    let idx = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].x.getTime() === x.getTime() && data[i].y === y) {
        idx = i;
        res(idx);
        break;
      }
    }
  });

  /**
   * Handle cursor movement
   * Move the cursor to the specified value on the X axis
   * @param  { number } value // value of the position on x axis
   */
  moveCursor = (value) => {
    const {
      properties,
      lineLength,
      scaleAmountLabel,
      scaleDateLabel,
      scaleX,
      scaleY,
      getCurrentData
    } = this;
    const { onCursorMove, data } = this.props;

    if (data.length < 1) return; // if there is no field in the data array return

    const { x, y } = properties.getPointAtLength(lineLength - value); // get position values on X and Y axis on the line

    // Change the cursor's position according to the line curve
    this.cursor.current.setNativeProps({
      top: y - cursorRadius,
      left: x - cursorRadius
    });

    const labelX = scaleDateLabel(scaleX.invert(x)); // calculate date label
    const dateString = getMonthAndDay(labelX); // determine month and day value from the datestring
    const labelY = scaleAmountLabel(scaleY.invert(y)); // calculate amount label

    this.setLabel(dateString, labelY, labelX);

    onCursorMove(getCurrentData(labelX, labelY)); // call cursor move handler from the props
  };

  componentDidMount() {
    this.state.x.addListener(({ value }) => this.moveCursor(value)); // add listener to the cursor's x value
    this.moveCursor(0);
  }

  render() {
    const { x, labelAmount, labelDate } = this.state;
    const { lineLength, line, getCurrentIndex } = this;
    const { onCursorStop } = this.props;
    const translateX = x.interpolate({
      // restrict label's movement within the graph view
      inputRange: [0, lineLength],
      outputRange: [width - labelWidth, 0],
      extrapolate: 'clamp'
    });

    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.graphContainer}>
          {
            /* Svg is used to draw the whole graph
            LinearGradient is used to generate the shade along the curve
            <Path /> is used to draw the line according to calculated line above
            Cursor view is placed within the graph view */
          }
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
          {
            /*
              Animated.View is used as the label container
              The container's X position is animated according to cursor's position
            */
          }
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
          {
            /*
              Aimated.Scrollview is used to move the cursor along the horizontal axis
            */
          }
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
            onMomentumScrollEnd={() => {
              // TODO FIX: More reliable way to register index
              /*  setTimeout is used because this method is called too early for it to register
               the current index the data point where cursor is stopped corresponds to */
              setTimeout(() => {
                getCurrentIndex().then((idx) => {
                  onCursorStop(idx);
                });
              }, 10);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

AccountGraph.propTypes = {
  data: array.isRequired, // data array of the form : [{x: JavaScript Date Object, y: amount}]
  onCursorMove: func, // event handler called on movement of the cursor
  onCursorStop: func // event handler called when cursor movement is stopped
};

export default AccountGraph;
