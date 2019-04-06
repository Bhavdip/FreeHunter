import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LeftArrow = props => (
  <Svg width={18} height={18} viewBox={'0 0 85 142'}  {...props}>
  <Path
    d="M32.612 71l47.763-47.763c5.175-5.175 5.175-13.575 0-18.75-5.175-5.175-13.575-5.175-18.75 0L3.95 62.162c-4.887 4.888-4.887 12.8 0 17.676l57.675 57.675c5.175 5.174 13.575 5.174 18.75 0 5.175-5.176 5.175-13.576 0-18.75L32.612 71z"
    fillRule="evenodd"
    fill={props.fill?props.fill:'#C4CACC'}
  />
</Svg>
);

export default LeftArrow;
