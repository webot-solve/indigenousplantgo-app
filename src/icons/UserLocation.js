import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export function UserLocation(props) {
  return (
    <Svg width="100" height="100" viewBox="0 0 100 100" {...props}>
      <Circle
        style={{ opacity: 0.25 }}
        cx="50"
        cy="50"
        r="49.5"
        fill="#0862F9"
      />
      <Path
        d="M50,1c27,0,49,22,49,49S77,99,50,99S1,77,1,50S23,1,50,1 M50,0.5C22.7,0.5,0.5,22.7,0.5,50S22.7,99.5,50,99.5
        S99.5,77.3,99.5,50S77.3,0.5,50,0.5L50,0.5z"
        fill="#0862F9"
      />
      <Circle
        style={{ opacity: 0.39 }}
        cx="50"
        cy="50.1"
        r="10"
        fill="#0862F9"
      />
      <Circle
        style={{ opacity: 0.39 }}
        cx="50.3"
        cy="49.7"
        r="9.8"
        fill="#ffffff"
      />
      <Path
        d="M58.6,49.7c0,4.6-3.8,8.4-8.4,8.4s-8.4-3.8-8.4-8.4s3.8-8.4,8.4-8.4S58.6,45,58.6,49.7z M50,38.1
        c2.2,0,4.2,0.7,5.8,2l-1.1-1.9L50,30.5l-4.7,7.7l-1.1,1.9C45.8,38.9,47.8,38.1,50,38.1z"
        fill="#0862F9"
      />
    </Svg>
  );
}
