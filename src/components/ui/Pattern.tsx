import React from 'react';
import Svg, { Line } from 'react-native-svg';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const gridSize = 20; // Adjust for the density of the grid lines
const strokeColor = '#e0e0e0'; // Light gray color for the lines

const BackgroundPattern = () => {
  const horizontalLines = Array.from(
    { length: Math.ceil(height / gridSize) + 1 },
    (_, index) => index * gridSize
  );

  const verticalLines = Array.from(
    { length: Math.ceil(width / gridSize) + 1 },
    (_, index) => index * gridSize
  );

  return (
    <Svg style={StyleSheet.absoluteFill}>
      {horizontalLines.map((y, index) => (
        <Line
          key={`hline-${index}`}
          x1="0"
          y1={y}
          x2={width}
          y2={y}
          stroke={strokeColor}
          strokeWidth="1"
        />
      ))}
      {verticalLines.map((x, index) => (
        <Line
          key={`vline-${index}`}
          x1={x} 
          y1="0"
          x2={x}
          y2={height}
          stroke={strokeColor}
          strokeWidth="1"
        />
      ))}
    </Svg>
  );
};

export default BackgroundPattern;