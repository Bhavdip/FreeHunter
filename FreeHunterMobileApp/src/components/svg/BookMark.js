import React from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '../../res/colors';

const IconBookMark = props => (
  <Svg
    width={props.width ? props.width : 30}
    height={props.width ? props.width : 30}
    viewBox={'0 0 24 24'}
    {...props}
  >
    <Path
      fill={props.fill ? props.fill : colors.primaryColorA}
      d="M6.01 2c-1.096 0-2 .903-2 1.998L4 22l8-3 8 3V4c0-1.093-.907-2-2-2H6.01zm0 2H18v15.113l-6-2.25-5.998 2.25L6.01 4z"
      overflow="visible"
    />
  </Svg>
);

export default IconBookMark;
